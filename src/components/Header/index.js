import './header.css';
import { Link } from 'react-router-dom';

function Header() {

  const mobileWidth = 800;
  
  let burg = document.getElementById('burguer')
  let nav = document.getElementById('nav')

  function openMenu(){

    if (window.innerWidth <= mobileWidth) {
      
    } else {

    }
  }

 return (
   <header>
        <div className='logo'>logo</div>

        <div className='menu'>
            
            <button id='burguer' style={{display: 'none'}} onClick={openMenu}>Menu</button>

            <nav id='nav' style={{display: 'flex'}} onClick={openMenu}>
              <ul>
                  <li><Link>Sobre</Link></li>
                  <li><Link>Habilidades</Link></li>
                  <li><Link>Projetos</Link></li>
                  <li><Link>Contato</Link></li>
              </ul>
            </nav>
        </div>
   </header>
 );
}

export default Header;