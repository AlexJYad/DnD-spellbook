import React, { useState } from "react";
import ReactMarquee from "react-fast-marquee";
import "./Marquee.css";

const Marquee = React.memo(({ text }) => {
   const [isPlaying, setIsPlaying] = useState(true);
   const toggleMarquee = () => {
      setIsPlaying((prevState) => !prevState);
   };

   return (
      <div
         onClick={toggleMarquee}
         style={{ cursor: "pointer", width: "100vw" }}
      >
         <ReactMarquee
            className="marquee"
            autoFill="true"
            speed="65"
            pauseOnHover="true"
            play={isPlaying}
         >
            <div className="marquee__container">
               <div className="marquee__text">{text}</div>
            </div>
         </ReactMarquee>
      </div>
   );
});

export default Marquee;
