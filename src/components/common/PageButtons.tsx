import React, {SetStateAction} from "react";
import {useSwiper} from "swiper/react";

type Props = {
  backgroundNum?: number
  setBackgroundNum?: (num: SetStateAction<number>) => void
}
export default function PageButtons (props:Props) {
  const swiper = useSwiper()
  return (
    <div className="pageButtonsWrapper">
      <button
        className="pageButtons"
        onClick={() => {
          if(props.setBackgroundNum) {props.setBackgroundNum(swiper.activeIndex)}
          swiper.slidePrev()
        }}
      ></button>
      <button
        className="pageButtons"
        onClick={() => {
          if(props.setBackgroundNum) props.setBackgroundNum(swiper.activeIndex)
          swiper.slideNext()
        }}
      ></button>
    </div>

  )
}