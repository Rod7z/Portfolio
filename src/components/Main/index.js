import './main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, } from '@fortawesome/free-brands-svg-icons'


function Main() {
 return (
   <div>
    <main>
        <div className='info'>
            <h1>Rodrigo</h1>
            <ul>
                <li><FontAwesomeIcon icon={faGithub} /></li>
                <li><FontAwesomeIcon icon={faLinkedin} /></li>
                <li><FontAwesomeIcon icon={faFilePdf} /></li>
            </ul>
        </div>
        
        <div className='foto'>
            <img src='./img/perfil.jpg' alt='foto' />
        </div>

        
        <div className='sobre'>
            <h2>Sobre</h2>
            <p>
                Texto contando um pouco sobre mim.Texto contando um pouco sobre mim.Texto contando um pouco sobre mim.Texto contando um pouco sobre mim.Texto contando um pouco sobre mim.Texto contando um pouco sobre mim.
            </p>
        </div>
    </main>
   </div>
 );
}

export default Main;