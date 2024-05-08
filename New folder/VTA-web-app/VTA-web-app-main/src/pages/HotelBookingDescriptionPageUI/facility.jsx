import React from 'react';
import './HotelDescription.css'; // Import CSS file for styling
import V2 from "../../assets/images/img_image50.png";
import V3 from "../../assets/images/img_image51.png";
import V4 from "../../assets/images/img_image52.png";
import V5 from "../../assets/images/img_image55.png";



const facility = () => {
  return (
    <div className="centered-container">
      <section className="about section">
        <div className='secContainer'>
          <div className="mainContent container grid">
            <div className="singleItem">
              <div className="content">
                <img src={V2} alt="image name"/>
                <h3>Free Wi-Fi</h3>
              </div>
            </div>
          </div>

          <div className="mainContent container grid">
            <div className="singleItem">
              <div className="content">
                <img src={V3} alt="image name"/>
                <h3>Food</h3>
              </div>
            </div>
          </div>
          <div className="mainContent container grid">
            <div className="singleItem">
              <div className="content">
                <img src={V4} alt="image name"/>
                <h3>A/C non A/C</h3>
              </div>
            </div>
          </div>
          <div className="mainContent container grid">
            <div className="singleItem">
              <div className="content">
                <img src={V5} alt="image name"/>
                <h3>Refreshments</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default facility;
