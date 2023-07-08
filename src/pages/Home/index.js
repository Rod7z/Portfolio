import { Link } from 'react-router-dom';
import './home.css';

import Main from '../../components/Main';
import Sobre from '../../components/Sobre';
import Projetos from '../../components/Projetos';

function Home(){
    return(
        <div className='app'>
            <Main></Main>
            <Sobre></Sobre>
            <Projetos></Projetos>
        </div>
    );
}

export default Home;