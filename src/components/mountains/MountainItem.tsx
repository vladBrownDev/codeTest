import React from "react";
import "./mountains.scss"
import ReadMoreBtn from "../common/ReadMoreBtn";
import mountain from "../../media/mount1.jpg"

export default function MountainItem() {
  return(
    <div className="mountainItem">
      <div>
        <h3>Southern Mountain</h3>
        <h4>South Country</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolores doloribus dolorum ipsum quos, reprehenderit sequi sit unde voluptatibus! A corporis cupiditate esse explicabo molestiae omnis quaerat rem sint vel. omnis quaerat rem sint vel omnis quaerat rem sint vel</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolores doloribus dolorum ipsum quos, reprehenderit sequi sit unde voluptatibus!</p>
        <ReadMoreBtn />
      </div>
      <img src={mountain} alt="Mountain"/>
    </div>
  )
}