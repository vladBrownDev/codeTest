import React from "react";
import "./footer.scss"
import fb from "../../media/fb.png"
import inst from "../../media/inst.png"
import twitter from "../../media/twitter.png"

export default function Footer() {
  return(
    <footer>
      <h2>trppd_</h2>
      <div>© 2017-2018</div>
      <div id="footer__socialWrapper">
        <a href="/">
          <img className="footer__socialImg" src={inst} alt="Social media"/>
        </a>
        <a href="/">
          <img className="footer__socialImg" src={fb} alt="Social media"/>
        </a>
        <a href="/">
          <img className="footer__socialImg" src={twitter} alt="Social media"/>
        </a>
      </div>
    </footer>
  )
}