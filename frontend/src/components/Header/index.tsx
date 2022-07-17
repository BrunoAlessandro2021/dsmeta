import logo from '../../assets/img/logo.svg'

import './styles.css'

function Header () {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta"/>
                    <h1>DSMeta</h1>
                    <p>
                        Desnvolvido por
                        <a href="https://www.instagram.com/devsuperior.ig">Desenvolvido por @devsuperior.ig</a>
                    </p>
            </div>
        </header>
    )
}

export default Header
