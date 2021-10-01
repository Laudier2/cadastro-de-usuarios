import React, { useEffect, useState } from 'react'
import Cadastro from './components/Cadastro/Cadastro'
import Axios from 'axios'
import { Route } from "react-router-dom";

function App() {

  const [ product, setProduct ] = useState([])

  useEffect(() => {
    const GetReq = async () => {
      
      const req = await Axios.get('https://listadeprodutos.herokuapp.com/')
      const res = await req.data;

      console.clear()
    
      setProduct(res)
    }

    GetReq()
  }, [])

  useEffect(() => {
    console.log(process.env.REACT_APP_API_URL);
  }, []);

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
