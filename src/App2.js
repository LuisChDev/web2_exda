import React from 'react';
import menuIcon from './assets/menuIcon.png';
import imgPlaceholder from './assets/img_placeholder.png';
import plusIcon from './assets/plusIcon.png';
import magnifyingGlassIcon from './assets/magnifyingGlassIcon.png';
import enterIcon from './assets/enterIcon.png';
import place_small from './assets/place_small.png';
import './style2.css';

export default function App() {
    const placeholder = "imagen provisional";
    return (
        <div id="mainDiv">
          <ul className="navbar">
            <img className="icon" alt="icono menú" src={menuIcon}/>
            <h3>Fotos y multimedia</h3>
          </ul>

          <div id="container">

            <div className="table-row">
              <img className="placeholder" alt={placeholder} src={imgPlaceholder}/>
              <img className="placeholder" alt={placeholder} src={imgPlaceholder}/>
            </div>
            <div className="table-row">
              <img className="placeholder" alt={placeholder} src={imgPlaceholder}/>
              <img className="placeholder" alt={placeholder} src={imgPlaceholder}/>
            </div>

            <div className="table-row">
              <img className="placeholder_small" alt={placeholder} src={place_small}/>
              <img className="placeholder_small" alt={placeholder} src={place_small}/>
              <img className="placeholder_small" alt={placeholder} src={place_small}/>
              <img className="placeholder_small" alt={placeholder} src={place_small}/>
              <img className="placeholder_small" alt={placeholder} src={place_small}/>
            </div>
            <div className="table-row">
              <img className="placeholder_small" alt={placeholder} src={place_small}/>
              <img className="placeholder_small" alt={placeholder} src={place_small}/>
              <img className="placeholder_small" alt={placeholder} src={place_small}/>
              <img className="placeholder_small" alt={placeholder} src={place_small}/>
              <img className="placeholder_small" alt={placeholder} src={place_small}/>
            </div>

          </div>

          <ul className="footer">
            <img className="icon" alt="ícono más" src={plusIcon}/>
            <img className="icon" alt="ícono búsqueda" src={magnifyingGlassIcon}/>
            <img className="icon" alt="ícono siguiente" src={enterIcon}/>
          </ul>

        </div>
    );
}
