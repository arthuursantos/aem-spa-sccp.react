import React, {Component} from 'react';
import './Header.css'
import { Search, Menu } from 'lucide-react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false
        };
    }

    toggleMenu = () => {
        this.setState(prevState => ({
            isMenuOpen: !prevState.isMenuOpen
        }));
    }

    render() {
        return (
            <header className="fixed-top">

                <div className="navbar navbar-expand-md top-bar">
                    <div className="container-fluid w-100 d-flex">
                        <a className="m-2 d-flex flex-column nav-link" href="#">
                            <i className="mx-2"><Search/></i> BUSCAR
                        </a>
                    </div>
                </div>

                <nav className="navbar navbar-expand-lg main-navbar">
                    <div className="container-fluid">

                        <a className="navbar-brand" href="#">
                            <img src="/content/dam/aem-spa-sccp/assets/img/sccp-escudo.png" alt="VAI CORINTHIANS"/>
                        </a>

                        <button
                            className="navbar-toggler"
                            type="button"
                            onClick={this.toggleMenu}
                            aria-controls="navbarNav"
                            aria-expanded={this.state.isMenuOpen}
                            aria-label="Toggle navigation"
                        >
                            <Menu size={24} color="#000" />
                        </button>

                        <div className={`collapse navbar-collapse ${this.state.isMenuOpen ? 'show' : ''}`} id="navbarNav">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="https://www.corinthians.com.br/clube/historia">CLUBE</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.corinthians.com.br/futebol/profissional/elenco">FUTEBOL</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.corinthians.com.br/clube/modalidades/competitivas/asa-delta">MODALIDADES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.corinthians.com.br/noticias">NOTÍCIAS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://agencia.corinthians.com.br/">IMPRENSA</a>
                                </li>
                            </ul>

                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.corinthians.com.br/clube/transparencia/assembleias">TRANSPARÊNCIA</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.corinthians.com.br/timaoagora">TIMÃO AGORA!</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.corinthians.com.br/licenciamento">NEGÓCIOS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.fieltorcedor.com.br/">INGRESSOS/PLANOS</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;