import React from "react";
import {useSwiper} from "swiper/react";

export default function CurrentSlide (props:{pages: string, currentPage?: number}) {
  const swiper = useSwiper()
  return (
    <span className="currentSlide">
      {props.currentPage ? props.currentPage : swiper.activeIndex + 1} / {props.pages}
    </span>
  )
}