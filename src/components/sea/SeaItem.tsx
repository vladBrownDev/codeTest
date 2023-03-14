
import ReadMoreBtn from "../common/ReadMoreBtn";
import React from "react";

interface Props {
  photo: string,
  head: string
}

export default function SeaItem(props: Props) {
  return (
    <>
      <img id="seaSection__image" src={props.photo} alt="Sea image"/>
      <div id="seaSection__text">
        <h1>{props.head}</h1>
        <q> Eros reque munere ut quo commodo ullamcorper ad eam.  His aeterno scriptorem ei. sea ut epicuti tinecidunt </q>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias aliquam aperiam blanditiis dignissimos doloribus eos expedita itaque laboriosam magnam nobis, nostrum nulla pariatur placeat quibusdam quis vel vero voluptatibus.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias aliquam aperiam blanditiis dignissimos doloribus eos expedita itaque laboriosam magnam nobis, nostrum nulla pariatur placeat quibusdam quis vel vero voluptatibus.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias aliquam aperiam blanditiis dignissimos doloribus eos expedita itaque laboriosam magnam nobis, nostrum nulla pariatur placeat quibusdam quis vel vero voluptatibus.
        </p>
        <ReadMoreBtn />
      </div>
    </>
  )
}