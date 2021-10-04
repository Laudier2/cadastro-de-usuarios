import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const camposIniciasDeValores = {
  name: '',
  price: '',
  image1: '',
  peso: '',
  quantity: '',
};

export default function FormularioCadastro(props) {
  const [values, setValues] = useState(camposIniciasDeValores);
  const history = useHistory();

  /**
   * Aqui estamo utilizando o onChange para verifica tudo que esta sendo digitado
   * nos input via name, e passando todo esses valores para avariavel do nosso useState
   * o values e assim podemos criar o na nossa base de dados via axios como vamos ver abaixo.
   */
  const onChange = (ev) => {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  };
<<<<<<< HEAD:src/components/formulario/FormularioCadastro.jsx
  /**
   * Aqui estamos fazendo uma espesse de filtragem do produto via id via props,
   * lembra da variavel que eviamos para ca via props a idAtual, entao é ela que
   * estamos usando, porque ela traz o id de um produto
   */
=======
  
  usarffect (() => {
     function Res(){
        const res = (props.idAtual == '' ? '' : window.scrollTo(0, 0))
        return res;
     }
     Res()
  }, []

>>>>>>> ddb35c716aa8c566b358b3d62621d57dcc168198:src/componentes/formulario/FormularioCadastro.jsx
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
   * E aqui que fazemos a criação e e edidação do produto
   */
  function onSubmit(ev) {
    /**
     * Esse ev.preventDefault() é para evitar que o botão fassa a
     * ação natural dele que é da um refresh, e ai podemos determina para
     * onde a pagina seje redirecionada com o useHistory do react-router-dom
     */
    ev.preventDefault();

    /**
     * Agora estamos criando uma variavel method com uma condição
     * se a requisição for put, vai ser execultada put, se não ezecute post
     */
    const method = props.idAtual ? 'put' : 'post';
    const url = props.idAtual
      ? `${process.env.REACT_APP_API_URL}${props.idAtual}`
      : `${process.env.REACT_APP_API_URL}`;

    /**
     * E o que for resolvido na condição de cima vai ser execultado aqui
     * seja para criar um produto ou para atualizar
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
          'Houve um erro ao tenta apaga esse produto, erro relacionado a ' +
            erro
        );

        history.push('/', window.location.reload());
        //window.location.reload()
      });
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group input-group">
        <div className="input-grou-prepend align-self-center">
          <div className="input-group-text">
            <i className="fas fa-file-signature p-1 mt-2 text-info" />
          </div>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Nome do produto"
          name="name"
          value={values.name}
          onChange={onChange}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-grou-prepend align-self-center">
          <div className="input-group-text">
            <i className="fas fa-file-invoice-dollar p-2 text-info" />
          </div>
        </div>
        <input
          type="number"
          className="form-control"
          placeholder="Preco ex: 1,00"
          pattern="[0-9]+([,\.][0-9]+)?"
          min="0"
          step="any"
          name="price"
          value={values.price}
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
          placeholder="Quantas ex: 1"
          pattern="[0-9]+([,\.][0-9]+)?"
          min="0"
          name="quantity"
          value={values.quantity}
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
          placeholder="Quantos Quilos ex: 1 kg"
          min="0"
          name="peso"
          value={values.peso}
          onChange={onChange}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-grou-prepend align-self-center">
          <div className="input-group-text">
            <i className="fas fa-file-image p-2 text-info" />
          </div>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Url de uma Imagem"
          name="image1"
          value={values.image1}
          onChange={onChange}
        />
      </div>
      <input
        type="submit"
        value={props.idAtual === '' ? 'Salvar' : 'Atualizar'}
        className="btn btn-primary btn-block"
      />
    </form>
  );
}
