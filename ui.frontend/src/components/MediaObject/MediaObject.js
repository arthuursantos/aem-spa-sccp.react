import React, {Component} from 'react';

class MediaObject extends Component {
    render() {
        return (
            <div className={`row m-0 ${this.props.imageAlignment}`}>
                <div className="col-md-7 p-4">
                    <h2>{this.props.title} <span className="text-muted">{this.props.subtitle}</span>
                    </h2>
                    <p>{this.props.description}</p>
                </div>
                <div className="col-md-5 p-0">
                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                         src={this.props.imageReference} alt={this.props.title} width="100%"
                         height="100%"/>
                </div>
            </div>
        )
    }
}

export default MediaObject;