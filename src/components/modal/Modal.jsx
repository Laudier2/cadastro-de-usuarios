import React from 'react';
import './modal.css';

const Modal = ({ dados }) => {

  console.log(dados);

  return (
    <>
      <div className="container col-sm-8 bg-img1">
        <ul>
          <li>
            <img src={dados.imagem} alt="img" className="col-md-12" />
          </li>
          <li>
            {' '}
            <strong className="text-primary">ID:</strong> {dados._id}
          </li>
          <li>
            <strong className="text-primary">Nome:</strong> {dados.name}
          </li>
          <li>
            <strong className="text-primary">E-mail</strong> {dados.email}
          </li>
          <li>
            {' '}
            <strong className="text-primary">Phone:</strong> {dados.phone}
          </li>
          <li>
            {' '}
            <strong className="text-primary">Password:</strong> {dados.password}
          </li>

        </ul>
      </div>
    </>
  );
};

export default Modal;
