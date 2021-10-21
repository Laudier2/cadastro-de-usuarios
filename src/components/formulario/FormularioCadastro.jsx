import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

/**
 * Essa variável é quem determina os valores iniciais dos input citado no values do useState
 */
const camposIniciasDeValores = {
  name: '',
  sobrenome: '',
  email: '',
  password: '',
  phone: '',
  cep: '',
  endereco1: '',
  endereco2: '',
  nacimento: '',
  cpf: '',
  rendMensal: '',
};

export default function FormularioCadastro(props) {
  const [values, setValues] = useState(camposIniciasDeValores);
  const history = useHistory();

  /**
   * Aqui estamos utilizando o onChange para verifica tudo que esta sendo digitado
   * nos inputes via name, e passando todo esses valores para a variável do nosso useState
   * O values e assim podemos criar na nossa base de dados via axios como vamos ver abaixo.
   */
  const onChange = (ev) => {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  };
  /**
   * Aqui estamos fazendo uma espesse de filtragem do produto via id via props,
   * lembra da variável que eivamos para o formulário via props a idAtual, então é ela que
   * estamos usando, porque ela traz o id de um produto
   */
  useEffect(() => {
    if (props.idAtual) {
      axios
        .get(`${process.env.REACT_APP_API_URL}admin/${props.idAtual}`)
        .then((res) => {
          setValues(res.data);
        });
    }
  }, [props.idAtual]);
  /**
   * E aqui que fazemos a criação e editação do produto o onSubmit.
   */
  function onSubmit(ev) {
    /**
     * Esse ev.preventDefault() é para evitar que o botão faça a,
     * ação natural dele que é da refresh, e ai podemos determinar para
     * onde a pagina seja redirecionada com o useHistory do react-router-dom
     */
    ev.preventDefault();

    /**
     * Agora estamos criando uma variável method com uma condição.
     * Se a requisição for put, vai ser executada put, se não execute post
     */
    const method = props.idAtual ? 'put' : 'post';
    const url = props.idAtual
      ? `${process.env.REACT_APP_API_URL}${props.idAtual}`
      : `${process.env.REACT_APP_API_URL}`;

    /**
     * E o que for resolvido na condição de cima vai ser executado aqui.
     * Seja para criar um produto ou para atualizar
     */
    axios[method](url, values)
      .then((res) => {
        if (props.idAtual === '') {
          alert('O produto foi Criado com sucesso');
        } else {
          alert('O produto foi Atualizado com sucesso');
        }
        history.push('/', window.location.reload());
      })
      .catch((erro) => {
        alert(
          'Houve um erro ao tenta criar esse usuario, erro relacionado a ' +
            erro
        );

        history.push('/', window.location.reload());
      });
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group input-group">
        <div className="input-grou-prepend align-self-center">
          <div className="input-group-text">
            <i className="fas fa-id-badge p-1 mt-2 text-info" />
          </div>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Seu Nome"
          name="name"
          value={values.name}
          onChange={onChange}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-grou-prepend align-self-center">
          <div className="input-group-text">
            <i className="fas fa-id-badge p-1 mt-2 text-info" />
          </div>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Sobrenome"
          name="sobrenome"
          value={values.sobrenome}
          onChange={onChange}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-grou-prepend align-self-center">
          <div className="input-group-text">
            <i className="fas fa-envelope  p-1 mt-2 text-info" />
          </div>
        </div>
        <input
          type="email"
          className="form-control"
          placeholder="E-mail"
          name="email"
          value={values.email}
          onChange={onChange}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-grou-prepend align-self-center">
          <div className="input-group-text">
            <i className="fas fa-envelope  p-1 mt-2 text-info" />
          </div>
        </div>
        <input
          type="password"
          className="form-control"
          placeholder="Senha"
          name="password"
          value={values.password}
          onChange={onChange}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-grou-prepend align-self-center">
          <div className="input-group-text">
            <i className="fas fa-phone-alt  p-1 mt-2 text-info" />
          </div>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Telefone"
          min="0"
          name="phone"
          value={values.phone}
          onChange={onChange}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-grou-prepend align-self-center">
          <div className="input-group-text">
            <i className="fas fa-shipping-fast p-1 mt-2 text-info" />
          </div>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="CEP"
          name="cep"
          value={values.cep}
          onChange={onChange}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-grou-prepend align-self-center">
          <div className="input-group-text">
            <i className="fas fa-shipping-fast p-1 mt-2 text-info" />
          </div>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Endereco1"
          name="endereco1"
          value={values.endereco1}
          onChange={onChange}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-grou-prepend align-self-center">
          <div className="input-group-text">
            <i className="fas fa-shipping-fast p-1 mt-2 text-info" />
          </div>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Endereco2"
          name="endereco2"
          value={values.endereco2}
          onChange={onChange}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-grou-prepend align-self-center">
          <div className="input-group-text">
            <i className="fas fa-calendar p-2 text-info" />
          </div>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Idade ex: 01/01/2000"
          name="nacimento"
          value={values.nacimento}
          onChange={onChange}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-grou-prepend align-self-center">
          <div className="input-group-text">
            <i className="fas fa-file-signature  p-1 mt-2 text-info" />
          </div>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="CPF"
          name="cpf"
          value={values.cpf}
          onChange={onChange}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-grou-prepend align-self-center">
          <div className="input-group-text">
            <i className="fas fas fa-wallet p-2 text-info" />
          </div>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Renda mensal"
          name="rendaMes"
          value={values.rendaMes}
          onChange={onChange}
        />
      </div>
      <input
        type="submit"
        value={props.idAtual === '' ? 'Salvar' : 'Atualizar'}
        className="btn btn-primary btn-block mb-5"
      />
    </form>
  );
}
