import React from 'react';
import "./header.scss"
import ReadMoreBtn from "../common/ReadMoreBtn"

function Header() {
  return (
    <header>
      <div id="header__top">
        <div id="header__logo">
          trppd_
        </div>
        <div id="header__userInfo">
          <a href={"/"}>My Collection</a> |
          <a href={"/"}>Gallih Gambudi</a>
          <span id="header__avatar"></span>
        </div>
      </div>
      <div id="header__main">
        <div id="header__navigation">
          <nav>
            <a className="header__activeLink" href="/">Home</a>
            <a href="/">Recommendation</a>
            <a href="/">Explore</a>
            <a href="/">Help</a>
            <a href="/">About Us</a>
          </nav>
        </div>
        <div id="header__mainText">
          <h1>The Walchen Lake</h1>
          <p>One of the deepest and largest alpine lakes in Germany</p>
          <p>and one the the best outdoors place </p>
          <p>that you never imagine before</p>
          <ReadMoreBtn />
          <div id="header__sliderNav">
            <span>
              <button></button>
              <button></button>
            </span>
            <span className="header__downText">Outdoors Edition</span>
            <span className="header__line"></span>
            <span className="header__downText">2 / 8</span>
            <span className="header__line secondLine"></span>
          </div>
        </div>
      </div>

    </header>
  );
}

export default Header;