import React, {useState} from 'react';
import './spots.scss';
import SpotItem from "./SpotItem";
import { Swiper, SwiperSlide } from 'swiper/react';
import useWindowSize from "../../hooks/useWindowSize";
import CurrentSlide from "../common/CurrentSlide";
import photo1 from "../../media/collage2.jpg"
import photo2 from "../../media/collage3.jpg"
import photo3 from "../../media/walchen.jpg"

const Spots = () => {
  const screenWidth = useWindowSize().width
  const [activePage, setActivePage] = useState(1)
  return (
    <section id="spots">
      <div id="spots__left">
        <div>
          <h3>Featured Spots</h3>
          <p>Some of featured spot </p>
          <p>that you might want</p>
          <p>visit before you die</p>
        </div>
        <span>View all</span>
      </div>
      <div id="spots__main">
        <div id="spots__carouselWrapper">
          <Swiper
            slidesPerView={screenWidth < 1600 ? 3 : 4}
            spaceBetween={40}
            slidesPerGroup={screenWidth < 1600 ? 3 : 4}
            onSlideChange={(swiper) => {
              if(swiper.activeIndex < swiper.previousIndex) setActivePage(activePage - 1)
              else setActivePage(activePage + 1)
            }}
          >
            <SwiperSlide>
              <SpotItem photo={photo1} head={"Cleveland Mountain"}/>
            </SwiperSlide>
            <SwiperSlide>
              <SpotItem photo={photo2} head={"Green Mountain"}/>
            </SwiperSlide>
            <SwiperSlide>
              <SpotItem photo={photo3} head={"Sunny Mountain"}/>
            </SwiperSlide>
            <SwiperSlide>
              <SpotItem photo={photo1} head={"Cleveland Mountain"}/>
            </SwiperSlide>
            <SwiperSlide>
              <SpotItem photo={photo2} head={"Green Mountain"}/>
            </SwiperSlide>
            <SwiperSlide>
              <SpotItem photo={photo3} head={"Sunny Mountain"}/>
            </SwiperSlide>
            <SwiperSlide>
              <SpotItem photo={photo1} head={"Cleveland Mountain"}/>
            </SwiperSlide>
            <SwiperSlide>
              <SpotItem photo={photo2} head={"Green Mountain"}/>
            </SwiperSlide>
            <SwiperSlide>
              <SpotItem photo={photo3} head={"Sunny Mountain"}/>
            </SwiperSlide>
            <SwiperSlide>
              <SpotItem photo={photo2} head={"Green Mountain"}/>
            </SwiperSlide>
            <div id="spots__footer">
              <span>Outdoors Edition</span>
              <span className="spots__underline"></span>
              <CurrentSlide pages={screenWidth < 1600 ? "4" : "3"} currentPage={activePage}/>
              <span className="spots__underline" style={{width: "20px"}}></span>
            </div>
          </Swiper>
        </div>
        <div id="spots__mobileItems">
          <SpotItem photo={photo2} head={"Green Mountain"}/>
          <SpotItem photo={photo1} head={"Sunny Mountain"}/>
          <SpotItem photo={photo3} head={"Cleveland Mountain"}/>
        </div>
      </div>
    </section>
  );
}

export default Spots;