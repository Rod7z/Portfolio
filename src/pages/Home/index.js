import { Link } from 'react-router-dom';
import './home.css';

import Main from '../../components/Main';
import Sobre from '../../components/Sobre';

function Home(){
    return(
        <div className='app'>
            <Main></Main>
            <Sobre></Sobre>
        </div>
    );
}

export default Home;