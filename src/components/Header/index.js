import './header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const mobileWidth = 1000;

function Header() {
  const [menu, setMenu] = useState(true);

  function openMenu(){
    setMenu(false);
  }

  function closeMenu(){
    setMenu(true);
  }

 return (
   <header>
        <div className='logo'>logo</div>

        <div className='menu'>

          {window.innerWidth <= mobileWidth && menu &&
            <button id='burguer' onClick={openMenu}>
              <FontAwesomeIcon icon={faBars}/>
            </button> 
          }

          {window.innerWidth <= mobileWidth && menu == false && 
            <button id='burguer' onClick={closeMenu}>
              <FontAwesomeIcon icon={faX}/>
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