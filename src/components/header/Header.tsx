import React, {SetStateAction, useState} from 'react';
import "./header.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import PageButtons from "../common/PageButtons";
import HeaderSlide from "./HeaderSlide";
import CurrentSlide from "../common/CurrentSlide";
import 'swiper/css';
import slide1 from "../../media/walchen.jpg";
import slide2 from "../../media/carousel1.jpg";
import slide3 from "../../media/collage1.jpg";
import slide4 from "../../media/collage2.jpg";

function Header() {
  let backgroundArr = [slide1, slide2, slide3, slide4,slide1, slide2, slide3, slide4]
  const [backgroundNum, setBackgroundNum] = useState(0)
  return (
    <header style={{backgroundImage: `url(${backgroundArr[backgroundNum]})`}}>
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
        <Swiper
          className="header__swiper"
          onSlideChange={(swiper) => setBackgroundNum(swiper.activeIndex)}
        >
          <SwiperSlide>
            <HeaderSlide head={"The Walchen Lake"} />
          </SwiperSlide>
          <SwiperSlide>
            <HeaderSlide head={"Alpines Mountains"} />
          </SwiperSlide>
          <SwiperSlide>
            <HeaderSlide head={"Greek Mountains"} />
          </SwiperSlide>
          <SwiperSlide>
            <HeaderSlide head={"Ukrainian Mountains"} />
          </SwiperSlide>
          <SwiperSlide>
            <HeaderSlide head={"The Walchen Lake"} />
          </SwiperSlide>
          <SwiperSlide>
            <HeaderSlide head={"Alpines Mountains"} />
          </SwiperSlide>
          <SwiperSlide>
            <HeaderSlide head={"Greek Mountains"} />
          </SwiperSlide>
          <SwiperSlide>
            <HeaderSlide head={"Ukrainian Mountains"} />
          </SwiperSlide>
          <div id="header__sliderNav">
            <span>
              <PageButtons backgroundNum={backgroundNum} setBackgroundNum={(num: SetStateAction<number>) => setBackgroundNum(num)}/>
            </span>
            <span className="header__downText">Outdoors Edition</span>
            <span className="header__line"></span>
            <CurrentSlide pages={"8"} />
            <span className="header__line secondLine"></span>
          </div>
        </Swiper>

      </div>
    </header>
  );
}

export default Header;