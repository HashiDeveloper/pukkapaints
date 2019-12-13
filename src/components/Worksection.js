import React from 'react';

import interior from './interior.png';
import commercial from './commercial.png';

function Worksection() {
  return ( 
    <section id="productSection">
      <h2 style={{marginTop: 0}}>GREAT QUALITY WORK</h2>
      <p>we offer following services and many more...</p>
      <div className="productContainer">
      <div className="productInner">
      <img src={interior} className="img" alt="Menu"/>
      <p>INTERIOR PAINTING</p>
      </div>
      <div className="productInner">
      <img src={commercial} className="img" alt="Menu" />
      <p>EXTERIOR PAINTING</p>
      </div>
      <div className="productInner">
      <img src={commercial} className="img" alt="Menu" />
      <p>COMMERCIAL PAINTING</p>
      </div>
      </div>
  </section>
  );
}
 
export default Worksection;