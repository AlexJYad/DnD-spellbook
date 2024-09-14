import React, { useEffect, useRef } from "react";

import verbal from "../img/bookmark/mouth.png";
import somatic from "../img/bookmark/hand.png";
import material from "../img/bookmark/cristal.png";

export default function Spell({ props }) {
   const titleRef = useRef(null);

   useEffect(() => {
      const element = titleRef.current;
      const parent = element.parentElement;
      const parentWidth = parent.offsetWidth - 10;
      const parentHeight = parent.offsetHeight - 13;

      while (
         (element.scrollWidth > parentWidth ||
            element.scrollHeight > parentHeight) &&
         parseFloat(window.getComputedStyle(element).fontSize) > 10
      ) {
         const currentFontSize = parseFloat(
            window.getComputedStyle(element).fontSize
         );
         element.style.fontSize = `${currentFontSize - 1}px`;
      }
   }, [props.title]);

   return (
      <div className="spell">
         {props.verbal && (
            <img src={verbal} alt="" className="verbal bookmark" />
         )}
         {props.somatic && (
            <img src={somatic} alt="" className="somatic bookmark" />
         )}
         {props.material && (
            <img src={material} alt="" className="material bookmark" />
         )}
         <div className="headerh2">
            <h2 className="namespell" ref={titleRef}>
               {props.title}
            </h2>
         </div>
         <p
            className="description"
            dangerouslySetInnerHTML={{ __html: props.description }}
         ></p>
         <div className="how"></div>
         <div className="blockremark">
            <div className="remark">
               <h3>Level</h3>
               <p className="">{props.level}</p>
            </div>
            <div className="remark">
               <h3>Time</h3>
               <p className="">{props.time}</p>
            </div>
            <div className="remark">
               <h3>Duration</h3>
               <p className="">{props.length}</p>
            </div>
            <div className="remark">
               <h3>Range</h3>
               <p className="">{props.rang}</p>
            </div>
         </div>
      </div>
   );
}
