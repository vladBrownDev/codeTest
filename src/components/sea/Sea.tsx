import "./sea.scss"
import {Swiper, SwiperSlide} from "swiper/react";
import PageButtons from "../common/PageButtons";
import React, {useState} from "react";
import SeaItem from "./SeaItem";
import CurrentSlide from "../common/CurrentSlide";
import sea from "../../media/sea.jpg";
import mountain from "../../media/collage1.jpg"

function Sea () {
  const [activePage, setActivePage] = useState(1)
  return (
    <>
      <section id="seaSection">
        <Swiper
          className={"seaSwiper"}
          onSlideChange={(swiper) => {
            if(swiper.activeIndex < swiper.previousIndex) setActivePage(activePage - 1)
            else setActivePage(activePage + 1)
          }}
        >
          <SwiperSlide>
            <SeaItem photo={sea} head={"Above The Sea"} />
          </SwiperSlide>
          <SwiperSlide>
            <SeaItem photo={mountain} head={"Above The Sun"} />
          </SwiperSlide>
          <SwiperSlide>
            <SeaItem photo={sea} head={"Above The Sea"} />
          </SwiperSlide>
          <div id="seaSection__pagination">
            <PageButtons/>
            <span className="seaSection__underline"></span>
            <CurrentSlide pages={"3"} currentPage={activePage} />
            <span className="seaSection__underline" style={{width:"20px"}}> </span>
            <span>Sort by ▼</span>
            <span className="seaSection__underline" style={{width:"20px"}}> </span>
          </div>
        </Swiper>

      </section>
    </>

  )
}
export default Sea