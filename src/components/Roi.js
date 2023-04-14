import close_button from '../assets/close_button.png'
import cake_small from '../assets/cake_small.png'
import arrow_down from '../assets/arrow-down.png'
import React, { useState } from "react";



const Roi = () => {
    const [showInfo, setShowInfo] = useState(false);

    const toggleDetails = () => {
        if (showInfo){
            setShowInfo(false)
        }else {
            setShowInfo(true)
        }

    }
  return (
    <main className="roi-main">
      <div className="main">
        <header className="calc-header">
          <h1>ROI Calculator</h1>
          <div className="calc-close-btn">
            <img src={close_button} alt="close button" />
          </div>
        </header>
        <div className="second-section">
          <div className="cake">
            <div>
              <img src={cake_small} alt="small cake" />
            </div>
            <p>Cake</p>
          </div>
          <div className="currency">
            <div className="currency-switch">
              <input type="checkbox" id="currency-switch" className='currency-input' />
              <label for="currency-switch" className='currency-label'></label>
            </div>
            <p>USD</p>
          </div>
        </div>

        {/* input price section */}
        <input className="price-input" type="text" value="2.10000 CAKE" />

        {/* price buttons */}

        <div className="price-button-section section">
          <div className="price-button">
            <div className="balance-buttons">
              <button className="btn price-btn-active">USE BALANCE</button>
              <button className="btn">$1000</button>
              <button className="btn">$100</button>
            </div>
            <p className="price-section__price">~$20.82</p>
          </div>
        </div>

        {/* timeframe */}
        <div className="section-timeframe section">
          <h2>Timeframe</h2>
          <div className="timeframe-buttons">
            <button className="btn timeframe-btn timeframe-btn-active">
              1 Day
            </button>
            <button className="btn timeframe-btn">7 Days</button>
            <button className="btn timeframe-btn">30 Days</button>
            <button className="btn timeframe-btn">1 Year</button>
            <button className="btn timeframe-btn">5 Years</button>
          </div>
        </div>

        {/* accelerate section */}
        <div className="section section-accelerate">
          <h3>Enable Accelerated APY</h3>
          <div className="accelerate-switch">
            <input type="checkbox" id="switch" />
            <label for="switch"></label>
          </div>
        </div>

        {/* tier section */}
        <div className="section section-tier">
          <h2>Select Tier</h2>
          <div className="tier-buttons">
            <button className="btn timeframe-btn">Tier 1</button>
            <button className="btn timeframe-btn">Tier 2</button>
            <button className="btn timeframe-btn">Tier 3</button>
            <button className="btn timeframe-btn timeframe-btn-active">
              Tier 4
            </button>
            <button className="btn timeframe-btn">Tier 5</button>
          </div>
        </div>

        {/* rates section */}
        <div className="section section-rates">
          <h2>ROI at Current Rates</h2>
          <input className="rates-input" type="text" value="100.0 USD" />
          <p className="rates-para">~ 3CAKE + 10 DON</p>
        </div>

        <div className="section">
          <div className="decision-buttons">
            <button className="decision-btn accpet-btn">Accept</button>
            <button className="decision-btn cancel-btn">Cancel</button>
          </div>
        </div>

        <div className="section section-details">
          <div className="detail-header" onClick={toggleDetails}>
            <p>{!showInfo ? "Show details" : "Hide details"}</p>
            <img src={arrow_down} alt="arrow down" />
          </div>

          {showInfo && (
            <div className="section details-description">
              <div className="basic-details">
                <p className="basic-detail-text">APY</p>
                <p className="basic-detail-number">63.34%</p>
              </div>
              <ul className="basic-detail-list">
                <li className="list-item">Calculated based on current rates</li>
                <li className="list-item">
                  All fugures are estimates provided for your convenience only,
                  and by no means represent guaranted returns.
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Roi