import './header.css';
import { Link } from 'react-router-dom';

function Header() {
 return (
   <header>
        <div className='logo'>logo</div>

        <div className='menu'>
            <ul>
                <li><Link>Sobre</Link></li>
                <li><Link>Habilidades</Link></li>
                <li><Link>Projetos</Link></li>
                <li><Link>Contato</Link></li>
            </ul>
        </div>
   </header>
 );
}

export default Header;