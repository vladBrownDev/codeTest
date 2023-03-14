import React from "react";
import "./header.scss"
import ReadMoreBtn from "../common/ReadMoreBtn";

export default function HeaderSlide (props: {head: string}) {
  return (
    <div id="header__mainText">
      <h1>{props.head}</h1>
      <p>One of the deepest and largest alpine lakes in Germany</p>
      <p>and one the the best outdoors place </p>
      <p>that you never imagine before</p>
      <ReadMoreBtn />
    </div>
  )
}