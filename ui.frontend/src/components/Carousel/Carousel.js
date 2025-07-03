import React, {Component} from 'react';
import "./Carousel.css"

class Carousel extends Component {
    render() {
        const contentType = this.props.contentType;
        let assets = [];

        if (contentType === "player") {
            assets = this.props.playerAssets || [];
        } else if (contentType === "news") {
            assets = this.props.newsAssets || [];
        }

        if (assets.length === 0) {
            return <p>O carrossel não possui nenhum item.</p>;
        }

        return (
            <div>
                {contentType === "news" && (
                    <div id="newsCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {assets.map((asset, index) => (
                                <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                    <img
                                        src={asset.fileReference}
                                        className="d-block w-100 h-1"
                                        alt={asset.title}
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>{asset.title}</h5>
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
            </div>
        );
    }
}

export default Carousel;