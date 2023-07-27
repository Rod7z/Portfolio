import './home.css';

import Main from '../../components/Main';
import Sobre from '../../components/Sobre';
import Projetos from '../../components/Projetos';
import Footer from '../../components/Footer';

function Home(){
    return(
        <div className='app'>
            <Main></Main>
            <Sobre></Sobre>
            <Projetos></Projetos>
            <Footer></Footer>
        </div>
    );
}

export default Home;