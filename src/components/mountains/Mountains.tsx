import React from "react";
import "./mountains.scss"
import MountainItem from "./MountainItem";

export default function Mountains() {
  return(
    <section id="mountainsSection">
      <div id={"mountainsSection__wrapper"}>
        <h1>Mountain Collections</h1>
        <p>See our best mountain collections, explore and Lorem ipsum dolor sit amet,te eam oratio impertitet, nam an vidisse  admodum omittantur, nihil corrumpit an cum</p>
        <div id="mountainsSection__itemWrapper">
          <MountainItem />
          <div className="mountainsSection__line"></div>
          <MountainItem />
          <div className="mountainsSection__line"></div>
          <MountainItem />
          <div className="mountainsSection__line"></div>
        </div>
      </div>

    </section>
  )
}