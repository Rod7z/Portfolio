import './header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX, faAddressCard, faCode, faFolderOpen, faSquarePhone } from '@fortawesome/free-solid-svg-icons';
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

          {window.innerWidth <= mobileWidth && menu && (
            <FontAwesomeIcon icon={faBars} onClick={openMenu}/>
          )}

          {window.innerWidth <= mobileWidth && menu === false && (
            <nav className='blur'>
              <div className='dropdown'>
                <FontAwesomeIcon className='faX' icon={faX} onClick={closeMenu}/>
                <ul className='dropmenu'>
                  <li><Link onClick={closeMenu}><FontAwesomeIcon icon={faAddressCard}/>Sobre</Link></li>
                  <li><Link onClick={closeMenu}><FontAwesomeIcon icon={faCode} />Habilidades</Link></li>
                  <li><Link onClick={closeMenu}><FontAwesomeIcon icon={faFolderOpen} />Projetos</Link></li>
                  <li><Link onClick={closeMenu}><FontAwesomeIcon icon={faSquarePhone} />Contato</Link></li>
                </ul>
              </div>
            </nav>
          )}

          {window.innerWidth > mobileWidth && (
            <nav id='nav'>
              <ul>
                <li><Link>Sobre</Link></li>
                <li><Link>Habilidades</Link></li>
                <li><Link>Projetos</Link></li>
                <li><Link>Contato</Link></li>
              </ul>
            </nav>
          )}   
            
        </div>
   </header>
 );
}

export default Header;