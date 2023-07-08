import './header.css';
import { Link } from 'react-router-dom';

const mobileWidth = 800;

function Header() {

 return (
   <header>
        <div className='logo'>logo</div>

        <div className='menu'>

          {window.innerWidth <= mobileWidth && <button id='burguer'>Menu</button>} 

          {window.innerWidth > mobileWidth && 
            <nav id='nav'>
              <ul>
                  <li><Link>Sobre</Link></li>
                  <li><Link>Habilidades</Link></li>
                  <li><Link>Projetos</Link></li>
                  <li><Link>Contato</Link></li>
              </ul>
            </nav>
          }         
            
        </div>
   </header>
 );
}

export default Header;