import {Link} from 'react-router-dom'

function Header (){
    return(
        <header>
        <h1>SOBRE MIM</h1>
        <nav>
            <ul>
                <li><Link to='/' href="#">Home</Link></li>
                <li><Link to='/Sobre' href="#">Sobre</Link></li>
                <li><Link to='/Servicos' href="#">Serviços</Link></li>
                <li><Link to='/Contato' href="#">Contato</Link></li>
            </ul>
        </nav>
    </header>
    
    )
}

export default Header 