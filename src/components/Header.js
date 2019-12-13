import React from 'react';




function Header() {
  return ( 
    <header>
    <div id="branding">
            <h1>PUKKA PAINTS</h1>
        </div>
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="#">WHAT WE DO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">ABOUT US</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">HANDY MAN</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">TESTIMONIALS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">CONTACT US</a>
        </li>
      </ul>
</header>
  );
}
 
export default Header;