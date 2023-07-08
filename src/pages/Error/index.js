import { Link } from 'react-router-dom';
import './error.css';

function Error(){
    return(
        <div>
            <h1>Error page</h1>

            <Link to='/' >Voltar</Link>
        </div>
    );
}

export default Error;