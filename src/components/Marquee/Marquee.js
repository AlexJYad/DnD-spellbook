import React, { useEffect, useRef, useState } from "react";
import ReactMarquee from "react-fast-marquee";
import "./Marquee.css";

const Marquee = React.memo(({ text }) => {
   // const marqueeRef = useRef(null);
   // const [repeatedText, setRepeatedText] = useState(text);

   // useEffect(() => {
   // const marquee = marqueeRef.current;
   // const marqueeContent = marquee.querySelector(".marquee__text");
   // const marqueeContainer = marquee.querySelector(".marquee__container");
   // const contentWidth = marqueeContent.scrollWidth;
   // const containerWidth = marqueeContainer.offsetWidth;

   // if (contentWidth < containerWidth) {
   //    const amountContent = Math.round(containerWidth / contentWidth);
   //    const evenContentWidth = containerWidth / amountContent;
   //    marqueeContent.style.width = `${evenContentWidth}px`;

   //    for (let i = 0; i < amountContent * 2; i++) {
   //       const cloneContent = marqueeContent.cloneNode(true);
   //       marqueeContainer.appendChild(cloneContent);
   //    }
   // } else {
   //    const cloneContent = marqueeContent.cloneNode(true);
   //    marqueeContainer.appendChild(cloneContent);
   // }

   // let startPosition = 0;
   // let requestID;

   // const update = () => {
   //    marqueeContainer.style.transform = `translateX(0px)`;

   //    marqueeContainer.appendChild(marqueeContainer.firstChild);
   //    console.log(marqueeContent);
   //    setTimeout(() => {
   //       marqueeContainer.style.transform = `translateX(-${contentWidth}px)`;
   //    }, 0);

   //    requestID = setTimeout(update, 2000);
   // };

   // requestID = setTimeout(update, 2000);

   //    return;
   // }, []);

   return (
      <ReactMarquee
         className="marquee"
         autoFill="true"
         speed="65"
         pauseOnHover="true"
      >
         <div className="marquee__container">
            <div className="marquee__text">{text}</div>
         </div>
      </ReactMarquee>
   );
});

export default Marquee;
