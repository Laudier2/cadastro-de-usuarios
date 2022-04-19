import React, { useEffect, useState } from 'react'
import Cadastro from './components/Cadastro/Cadastro'
import api from './api/api';
import { Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'
import './style.css'
//import AdminRouter from './Routes/routes';
//import { AppContext } from './Context/SatateDate';

function App() {

  /**
   * Aqui estou usando o useState para guarda o estado, ou melhor dizendo os valores.
   * Que iremos receber da requisição via axios, para que assim eu possa usar aqui ou em outro componente via props 
   */
  const [users, setUsers] = useState([])

  /**
   * Aqui abaixo esto usando um hook do react que o useEffect para uma função asincrona
   * e dentro desta função estou utilizando o axios para fazer uma requisição get,
   * e assim listarmos os produtos na tela.
   */
  useEffect(() => {
    api.get("/").then(({ data }) => {
      setUsers(data)
    })
  }, [])

  console.log('Ola Mundo veja essa api', users)

  /**
   * E enfim o return para retorna os valores ou nesse caso um componente que esta! 
   * Recebendo essa propriedade do useState que esta logo acima.
   */


  return (
    <>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <Route exact path="/" component={() => <Cadastro users={users} />} />
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
