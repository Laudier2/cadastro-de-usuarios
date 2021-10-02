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

  const onChange = (ev) => {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  };

  useEffect(() => {
    if (props.idAtual) {
      axios
        .get(`${process.env.REACT_APP_API_URL}admin/${props.idAtual}`)
        .then((res) => {
          setValues(res.data);
        });
    }
  }, [props.idAtual]);

  function onSubmit(ev) {
    ev.preventDefault();

    const method = props.idAtual ? 'put' : 'post';
    const url = props.idAtual
      ? `${process.env.REACT_APP_API_URL}${props.idAtual}`
      : `${process.env.REACT_APP_API_URL}`;

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
