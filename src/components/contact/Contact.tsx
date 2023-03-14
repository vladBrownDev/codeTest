import React from "react";
import "./contact.scss"

export default function Contact() {
  return(
    <section id="contactSection">
      <p>Subscribe to our news letter</p>
      <form id="contactSection__form" action="">
        <input placeholder="Your Email" type="text"/>
        <button>Subscribe</button>
      </form>
    </section>
  )
}