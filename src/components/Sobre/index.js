import './sobre.css';

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
                <li>React</li>
                <li>JS</li>
                <li>HTML</li>
                <li>CSS</li>
            </ul>
        </section>
    </article>
   </div>
 );
}

export default Sobre;