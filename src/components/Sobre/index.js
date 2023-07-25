import './sobre.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faSquareJs, faHtml5, faCss3Alt, faGitAlt } from '@fortawesome/free-brands-svg-icons'

function Sobre() {
 return (
   <div className='article'>
    <article>
        <section className='sobre'>
            <h2>Sobre</h2>
            <p>
                Texto contando um pouco sobre mim.Texto contando um pouco sobre mim.Texto contando um pouco sobre mim.Texto contando um pouco sobre mim.Texto contando um pouco sobre mim.Texto contando um pouco sobre mim.
            </p>
        </section>

        <section className='skills'>
            <h2>Habilidades</h2>
            <ul>
                <li>React<FontAwesomeIcon icon={faReact} /></li>
                <li>JS<FontAwesomeIcon icon={faSquareJs} /></li>
                <li>HTML<FontAwesomeIcon icon={faHtml5} /></li>
                <li>CSS<FontAwesomeIcon icon={faCss3Alt} /></li>
                <li>Git<FontAwesomeIcon icon={faGitAlt} /></li>
            </ul>
        </section>
    </article>
   </div>
 );
}

export default Sobre;