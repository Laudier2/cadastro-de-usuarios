import React, { useEffect, useState } from 'react'
import Cadastro from './components/Cadastro/Cadastro'
import Axios from 'axios'
import { Route } from "react-router-dom";

function App() {

  /**
   * Aqui estou usando o useState para guarda o estado ou melhor dizendo os valores
   * da requizição via axios, para que assim eu possa usar aqui ou em outro componente via props
   */
  const [ product, setProduct ] = useState([])

  /**
   * Aqui abaixo esto usando um hook do react que o useEffect para uma função acincrona
   * e detro desta função estou utilizando o axios para fazer uma requisição get
   * para lista os produtos na tela.
   */
  useEffect(() => {
    const GetReq = async () => {
      
      const req = await Axios.get(process.env.REACT_APP_API_URL)
      const res = await req.data;

      console.clear()
    
      setProduct(res)
    }

    GetReq()
  }, [])

  /**
   * E enfim o return para retorna os valores ou nesse caso um componente que esta 
   * recebendo essa propriedade do useState cidada logo acima
   */


  return (
    <>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <Route exact path="/" component={() => <Cadastro products={product}/>} />
        </div>
      </div>
    </>
  );
}

export default App;
