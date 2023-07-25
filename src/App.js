import React from 'react';
import './App.css';

function Rafa() {
  return (
    <div className="container">
      <div className="nav">
        <div className="nav-item">
          <img src="logo.svg" id="logo-rafa" alt="Rafa Logo" />
        </div>
      </div>
      <div className="items">
        <div className="item">
          <div className="item-wrapper">
            <img src="ao.jpeg" alt="Rafa at Australian Open" />
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
            <img src="rg.jpeg" alt="Rafa at Roland Garros" />
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
            <img src="wimbledon.jpeg" alt="Rafa at Wimbledon" />
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
            <img src="us.webp" alt="Rafa at US Open" />
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
