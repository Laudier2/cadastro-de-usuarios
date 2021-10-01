import React, { useState } from 'react';
import FormularioCadastro from '../formulario/FormularioCadastro';
import './cadastro.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Cadastro({ products }) {
  const [idAtual, setIdAtual] = useState('');
  //const [dell, setDell] = useState('')

  const ApagaProduto = (id) => {
    axios
      .delete(process.env.REACT_APP_API_URL + id)
      .then((res) => {
        alert('O produto foi deletado com sucesso');
        window.location.reload();
      })
      .catch((erro) => {
        alert(
          'Houve um erro ao tenta apaga esse produto, erro relacionado a ' +
            erro
        );
        window.location.reload();
      });
  };

  return (
    <div>
      <div className="jumbotron jumbotron-fuid">
        <conatiner>
          <h1 className="h1">Cadastro e gerenciamento de produtos</h1>
        </conatiner>
      </div>

      <div className="row">
        <div className="col-md-5">
          <FormularioCadastro {...{ idAtual, products }} />
        </div>
        <div className="col-md-7">
          <h2>Lista de Clientes</h2>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">
                  <i className="fab fa-shopify" />
                </th>
                <th scope="col">Nome</th>
                <th scope="col">Price</th>
                <th scope="col">Peso kilos</th>
                <th scope="col">Qtn</th>
                <th scope="col">Image</th>
              </tr>
            </thead>

            {products.map((r) => (
              <tbody key={r.id}>
                <tr>
                  <th scope="row">
                    <i className="fas fa-eye" />
                  </th>

                  <td>{r.name}</td>
                  <td>R$ {r.price},00</td>
                  <td>{r.peso}</td>
                  <td>{r.quantity}</td>
                  <td>
                    <img src={r.image1} alt="Erro na img" className="col-5" />
                    <Link
                      to="/"
                      onClick={() => {
                        setIdAtual(r._id);
                      }}
                      className="mr-2"
                    >
                      <i className="fas fa-edit mt-2 p-2 text-info btn btn-light card" />
                    </Link>
                    <Link to="/" onClick={() => ApagaProduto(r._id)}>
                      <i className="fas fa-trash-alt mt-2 p-2 text-danger btn btn-light card" />
                    </Link>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
