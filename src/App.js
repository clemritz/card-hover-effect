import React from 'react';
import './App.css';

import rafaLogo from './rafaLogo.png';
import aoPicture from './ao.jpeg';
import rgPicture from './rg.jpeg';
import wimbledonPicture from './wimbledon.jpeg';
import usPicture from './us.webp';

function Rafa() {
  return (
    <div className="container">
      <div className="nav-item">
        <img src={rafaLogo} id="logo-rafa" alt="Rafa Logo" />
      </div>
      <div className="items">
        <div className="item">
          <div className="item-wrapper">
            <img src={aoPicture} alt="Rafa at Australian Open" />
            <div className="img-overlay"></div>
            <div className="item-copy">
              <div className="item-name">
                Australian Open <span> 2009 <br /> 2022 </span>
              </div>
              <div className="id">2</div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item-wrapper">
            <img src={rgPicture} alt="Rafa at Roland Garros" />
            <div className="img-overlay"></div>
            <div className="item-copy">
              <div className="item-name">
                Roland Garros <span> 2005 - 2008 <br /> 2010 - 2014 <br /> 2017 - 2020 <br /> 2022 </span>
              </div>
              <div className="id">14</div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item-wrapper">
            <img src={wimbledonPicture} alt="Rafa at Wimbledon" />
            <div className="img-overlay"></div>
            <div className="item-copy">
              <div className="item-name">
                Wimbledon<span> 2008 <br /> 2010 </span>
              </div>
              <div className="id">2</div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item-wrapper">
            <img src={usPicture} alt="Rafa at US Open" />
            <div className="img-overlay"></div>
            <div className="item-copy">
              <div className="item-name">
                US Open <span> 2010 <br /> 2013 <br /> 2017 <br /> 2019 </span>
              </div>
              <div className="id">4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rafa;
