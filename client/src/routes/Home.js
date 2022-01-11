import React, { useState, useEffect, useRef } from "react";
import Nav from "../components/Navigation";
import "./HomeCSS.css";
import Section1 from "../components/HomeSection/Section1";
import Section2 from "../components/HomeSection/Section2";
import Section3 from "../components/HomeSection/Section3";
import Section4 from "../components/HomeSection/Section4";
import Section7 from "../components/HomeSection/Section7";
import Dots from "./Dots";
import topArrow from "../assets/up-arrow-fill.svg";
function Home() {
  const outerRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);
  let toTop = function () {
    document
      .getElementById("sec1")
      .scrollIntoView({ behavior: "smooth", block: "end" });
  };
  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerRef.current;
      const pageHeight = window.innerHeight;
      if (deltaY > 0) {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          outerRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          outerRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          outerRef.current.scrollTo({
            top: pageHeight * 3,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(4);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 4) {
          outerRef.current.scrollTo({
            top: pageHeight * 4,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(5);
        } else {
          outerRef.current.scrollTo({
            top: pageHeight * 4,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(5);
        }
      } else {
        if (scrollTop > pageHeight * 3 && scrollTop < pageHeight * 5) {
          outerRef.current.scrollTo({
            top: pageHeight * 3,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(4);
        } else if (scrollTop > pageHeight * 2 && scrollTop < pageHeight * 4) {
          outerRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        } else if (scrollTop > pageHeight && scrollTop < pageHeight * 3) {
          outerRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else {
          outerRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        }
      }
    };
    const outerRefCurrent = outerRef.current;
    outerRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);
  return (
    <div ref={outerRef} className="outer">
      <Nav />
      <Dots scrollIndex={scrollIndex} />
      <button
        style={{
          backgroundColor: "white",
          borderRadius: 10,
          border: "none",
          position: "absolute",
          zIndex: 209,
          bottom: 50,
          right: 40,
        }}
        onClick={() => toTop()}
      >
        <img src={topArrow} />
      </button>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section7 />
    </div>
  );
}

export default Home;
