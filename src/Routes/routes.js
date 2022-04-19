import { BrowserRouter, Route } from 'react-router-dom'
import { useContext } from 'react/cjs/react.production.min';
import Cadastro from '../components/Cadastro/Cadastro';
import { AppContext } from '../Context/SatateDate'

const AdminRouter = () => {

    const { users } = useContext(AppContext)

    console.log(users)

    return (
        <BrowserRouter>
            <Route exact path="/" component={Cadastro} />
        </BrowserRouter>
    );
}

export default AdminRouter;