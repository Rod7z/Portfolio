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
                <li>G<FontAwesomeIcon icon={faGithub} /></li>
                <li>L<FontAwesomeIcon icon={faLinkedin} /></li>
                <li>C<FontAwesomeIcon icon={faFilePdf} /></li>
            </ul>
        </div>
        
        <div className='foto'>
            <img/>
        </div>
    </main>
   </div>
 );
}

export default Main;