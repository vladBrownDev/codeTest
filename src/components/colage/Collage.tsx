import React from 'react';
import './colage.scss';
import collage2 from "../../media/collage2.jpg"
import collage3 from "../../media/collage3.jpg"
import collage4 from "../../media/collage4.jpg"
import collage5 from "../../media/collage5.jpg"

function Collage() {
  return (
    <section id="collageSection">
      <div id="collageSection__left">
        <h3>Editor's pick</h3>
        <p>Our picks, just for you nam an vidisse admodum omittantur, nihil corrumpit</p>
      </div>
      <div id="collageSection__collage">
        <div>
          <div id="collageSection__mainPhoto">
            <div id="collageSection__mainPhotoText">
              <h3>Flatiron</h3>
              <h4>USA</h4>
              <p>Ad lorem aliquid laoreet pri, possim irsque ad vim. Te graecis maiuisset eum. Sit no platonem consetetur mediocritatem, in alienum</p>
            </div>
          </div>
          <img className="collageSection__smallPic" src={collage2} alt="Collage"/>
          <img className="collageSection__smallPic" src={collage3} alt="Collage"/>
        </div>
        <div>
          <img className="collageSection__smallPic" src={collage4} alt="Collage"/>
          <img className="collageSection__smallPic" style={{width:"600px"}} src={collage5} alt="Collage"/>
        </div>
      </div>
    </section>
  );
}

export default Collage;