import './header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

const mobileWidth = 1000;

let displayX = 'none';
let displayBar = 'flex';

function Header() {

  function openMenu(){
    
  }

 return (
   <header>
        <div className='logo'>logo</div>

        <div className='menu'>

          {window.innerWidth <= mobileWidth && 
            <button id='burguer' onChange={openMenu}>
              <FontAwesomeIcon style={{display: displayBar}} icon={faBars} />
              <FontAwesomeIcon style={{display: displayX}} icon={faX} />
            </button>
          } 

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