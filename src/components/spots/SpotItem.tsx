import React from 'react';
import './spotItem.scss';
import carousel1 from "../../media/carousel1.jpg"

interface Props {
  photo: string,
  head: string
}

function SpotItem(props:Props) {
  return (
    <div className="spots__spotItem">
      <img src={props.photo} alt="Image of spot"/>
      <h3>{props.head}</h3>
      <h4>Peru</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque error esse nemo veritatis voluptate.</p>
      <a href="/">read more</a>
    </div>
  );
}

export default SpotItem;