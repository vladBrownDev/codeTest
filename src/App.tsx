import React from 'react';
import './global.scss';
import Header from "./components/header/Header";
import Spots from  "./components/spots/Spots"
import Sea from "./components/sea/Sea"
import Collage from "./components/colage/Collage";
import Mountains from "./components/mountains/Mountains";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Spots />
        <Sea />
        <Collage />
        <Mountains />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
