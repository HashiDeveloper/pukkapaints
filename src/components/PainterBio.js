import React from 'react';

import call from './call.png';
import people from './people.png';
import money from './money.png';
import man from './man.png';

function PainterBio() {
  return ( 
    <section id="painterSection">
      <div className="painterContainer" style={{marginTop: 0}} >
      <div className="painterInner">
      <img src={man} className="manImg" alt="Menu"/>
      </div>
      <div className="painterInner">
      <p>
          We are a team of professional painters who have
          been providing top quality painting services around
          GTA in the past 5 years. Our goal has always been and
          will be to finish the job on time, work in professional
          and efficient manner , to provide top quality service with 
          affordable prices and last but not least to ensure client
          satisfaction. We take pride in our job and we’re looking 
          forward to connecting with you</p>
      </div>
      <div className="painterInner">
      <img src={call} className="painterImg" alt="Menu"/>
      <p className="paintertitle">CALL ANYTIME FOR QUOTATION</p>
      <img src={money} className="painterImg" alt="Menu"/>
      <p className="paintertitle">AFFORDABLE PRICES</p>
      <img src={people} className="painterImg" alt="Menu"/>
      <p className="paintertitle">CUSTOMERS ARE THE CORE OF OUR MISSION</p>
      </div>
      </div>
  </section>
  );
}
 
export default PainterBio;