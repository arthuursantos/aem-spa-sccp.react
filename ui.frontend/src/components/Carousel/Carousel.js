import React, {Component} from 'react';
import "./Carousel.css"
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react'

class Carousel extends Component {
    render() {

        const contentType = this.props.contentType;
        let assets = [];
        let players = [];

        const sliceArray = (arr, size) => {
            const result = []
            for (let i = 0; i < arr.length; i += size) {
                result.push(arr.slice(i, i+size))
            }
            return result;
        }

        if (contentType === "player") {
            assets = this.props.playerAssets || [];
            players = sliceArray(assets, 3)
        } else if (contentType === "news") {
            assets = this.props.newsAssets || [];
        }

        if (assets.length === 0) {
            return <p>O carrossel não possui nenhum item.</p>;
        }

        return (
            <div>
                {contentType === "news" && (
                    <div id="newsCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {assets.map((asset, index) => (
                                <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                    <img
                                        src={asset.fileReference}
                                        className="d-block w-100 h-1"
                                        alt={asset.title}
                                    />
                                    <div className="carousel-caption d-none d-md-block position-static bg-black text-start start-0 w-100">
                                        <h5 className="text-white text-start ps-4">{asset.title}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target={`#newsCarousel`}
                                data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target={`#newsCarousel`}
                                data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                )}
                {contentType === "player" && (
                    <div id="playerCarousel" className="carousel slide bg-black p-5 d-flex flex-column align-items-center">
                        <div className="d-flex gap-4 align-items-center justify-content-center pb-4">
                            <h2 className="text-white d-flex gap-2 align-items-center lh-1 fw-bolder">
                                <Plus />
                                ELENCO
                            </h2>
                            <div className="d-flex gap-1 align-items-center">
                                <button className="border-0 bg-black text-white fw-bolder" type="button" data-bs-target="#playerCarousel" data-bs-slide="prev">
                                    <ChevronLeft strokeWidth={3} />
                                </button>
                                <span className="fs-5">|</span>
                                <button className="border-0 bg-black text-white fw-bolder" type="button" data-bs-target="#playerCarousel" data-bs-slide="next">
                                    <ChevronRight strokeWidth={3} />
                                </button>
                            </div>
                        </div>
                        <div className="carousel-inner w-75">
                            {players.map((slide, slideIndex) => (
                                <div key={slideIndex} className={`carousel-item ${slideIndex === 0 ? 'active' : ''}`}>
                                    <div className="row justify-content-center g-3">
                                        {slide.map((player, playerIndex) => (
                                            <div key={playerIndex} className="col-12 col-md-6 col-lg-4">
                                                <div className="bg-gradient d-flex flex-row align-items-center gap-3 p-3">
                                                    <img
                                                        src={player.imageReference}
                                                        className="w-50"
                                                        alt={player.name} />
                                                    <div className="d-flex flex-column gap-2 text-white">
                                                        <div>
                                                            <h4 className="lh-1 p-0 m-0 text-white">{player.name}</h4>
                                                            <span className="playerPosition text-uppercase text-white-50">{player.position}</span>
                                                        </div>
                                                        <div className="d-flex gap-4 text-center">
                                                            <div>
                                                                <span className="text-white-50">ALTURA</span>
                                                                <h4 className="lh-1 p-0 m-0 text-white">{player.height}</h4>
                                                            </div>
                                                            <div>
                                                                <span className="text-white-50">IDADE</span>
                                                                <h4 className="lh-1 p-0 m-0 text-white">{player.age}</h4>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <span className="text-white-50">CIDADE NATAL</span>
                                                            <h6 className="lh-1 p-0 m-0 text-white text-uppercase">{player.placeOfBirth}</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    )
                }
            </div>
        );
    }
}

export default Carousel;