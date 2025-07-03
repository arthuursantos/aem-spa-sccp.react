import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Page, withModel } from '@adobe/aem-react-editable-components';
import React from 'react';
import Partida from "./components/Partida/Partida";
import Carousel from "./components/Carousel/Carousel";
import Header from "./components/Header/Header";

// This component is the application entry point
class App extends Page {
  render() {
    return (
      <div>
        {this.childComponents}
        {this.childPages}
      </div>
    );
  }
}

export default withModel(App);
