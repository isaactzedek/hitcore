import React from 'react';
function Navbar()
{
    return(
        <React.Fragment>
            <nav className="navbar navbar-expand-sm bg-light">
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" href="https://www.army.gov.au/our-people">Our peole</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="https://www.army.gov.au/our-work">Our work</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="https://www.army.gov.au/our-life">Our Life</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="https://www.army.gov.au/our-heritage">Our Heritage</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="https://www.army.gov.au/our-news">Our News</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="https://www.army.gov.au/contact-us">Contact us</a>
    </li>
  </ul>
</nav>
        </React.Fragment>
    )
}

export default Navbar;