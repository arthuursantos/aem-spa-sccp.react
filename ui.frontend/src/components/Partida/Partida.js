import React, {Component} from 'react';
import { X } from 'lucide-react';
import "./Partida.css"

class Partida extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center">
                <div className="transform w-75 mb-3 d-flex flex-column flex-md-row justify-content-center fs-6 gap-4 text-center">
                    <div className="text-md-end">
                        <p className="m-0 fw-bold lh-1">PRÓXIMA PARTIDA</p>
                        <p>Campeonato Brasileiro 2025</p>
                    </div>
                    <div>
                        <a className="d-flex align-items-center gap-1 text-decoration-none text-dark justify-content-center" href="">
                            <span>COR</span>
                            <img height="40px" src="https://tse4.mm.bing.net/th/id/OIP.aeuixy_DWoJ0T52hbGbzrgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt=""/>
                            <X />
                            <img height="40px" src="https://tse2.mm.bing.net/th/id/OIP.7vkpYaS2-Vr_O1dIqGkveQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt=""/>
                            <span>RBB</span>
                        </a>
                    </div>
                    <div className="text-md-start">
                        <p className="m-0 lh-1">13/07/2025 19:00</p>
                        <p>Sâo Paulo - Neo Química Arena</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Partida;