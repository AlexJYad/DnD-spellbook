import React, { useEffect, useRef, useCallback } from "react";
import verbal from "../img/bookmark/mouth.png";
import somatic from "../img/bookmark/hand.png";
import material from "../img/bookmark/cristal.png";
import "../CSS/ToggleSpell.css"; // Подключите ваш CSS файл

export default function ToggleSpell({ props }) {
   const titleRef = useRef(null);
   const descriptionRef = useRef(null);
   const randomTextRefs = useRef([]);
   const randomTextBackRefs = useRef([]);
   const toggleImageRefs = useRef([]);

   const getRandomCharacter = useCallback(() => {
      const characters =
         "qwertyuiopasdfghjklzxcvbnm Q W E R T Y U I O P A S D F G H J K L Z X C V B N M Ä Ã È Ë Î Ï Ö Ù Ü Ý ä ã è ë î ï ö ù ü ý";
      return characters.charAt(Math.floor(Math.random() * characters.length));
   }, []);

   const applyRandomEffect = useCallback(
      (element) => {
         if (!element) return;

         function randomize() {
            const newText = Array.from(element.textContent || "")
               .map(() => getRandomCharacter())
               .join("");
            element.textContent = newText;
            setTimeout(randomize, 200);
         }
         randomize();
      },
      [getRandomCharacter]
   );

   const applyRandomEffectBack = useCallback(
      (element) => {
         if (!element) return;
         const originalText = element.textContent || "";
         let currentIndex = 0;

         function randomize() {
            if (currentIndex >= originalText.length) {
               currentIndex = 0;
            }

            const newText = originalText
               .split("")
               .map((char, index) =>
                  index < currentIndex ? char : getRandomCharacter()
               )
               .join("");

            element.textContent = newText;
            currentIndex++;

            setTimeout(randomize, 500);
         }

         randomize();
      },
      [getRandomCharacter]
   );

   const applyRandomEffectImg = useCallback((element) => {
      function toggleImageVisibility() {
         if (!element) return;
         element.style.opacity = Math.random() < 0.5 ? "1" : "0";
         setTimeout(toggleImageVisibility, 500);
      }
      toggleImageVisibility();
   }, []);

   useEffect(() => {
      if (titleRef.current) {
         applyRandomEffect(titleRef.current);
      }
      randomTextRefs.current.forEach(applyRandomEffect);
      randomTextBackRefs.current.forEach(applyRandomEffectBack);
      toggleImageRefs.current.forEach(applyRandomEffectImg);

      const element = titleRef.current;
      if (element) {
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
      }

      // Apply random effect to description
      if (descriptionRef.current) {
         applyRandomEffect(descriptionRef.current);
      }
   }, [
      props.title,
      props.description,
      applyRandomEffect,
      applyRandomEffectBack,
      applyRandomEffectImg,
   ]);

   return (
      <div className="spell">
         {props.verbal && (
            <img
               src={verbal}
               alt=""
               className="verbal bookmark toggle-image"
               ref={(el) => el && toggleImageRefs.current.push(el)}
            />
         )}
         {props.somatic && (
            <img
               src={somatic}
               alt=""
               className="somatic bookmark toggle-image"
               ref={(el) => el && toggleImageRefs.current.push(el)}
            />
         )}
         {props.material && (
            <img
               src={material}
               alt=""
               className="material bookmark toggle-image"
               ref={(el) => el && toggleImageRefs.current.push(el)}
            />
         )}
         <div className="headerh2">
            <h2 className="namespell random-text" ref={titleRef}>
               {props.title}
            </h2>
         </div>
         <p
            className="description random-text"
            ref={descriptionRef}
            dangerouslySetInnerHTML={{ __html: props.description }}
         ></p>
         <div className="how"></div>
         <div className="blockremark">
            <div className="remark">
               <h3>Type</h3>
               <p
                  className="random-text"
                  ref={(el) => el && randomTextRefs.current.push(el)}
               >
                  {props.type}
               </p>
            </div>
            <div className="remark">
               <h3>Time</h3>
               <p
                  className="random-text"
                  ref={(el) => el && randomTextRefs.current.push(el)}
               >
                  {props.time}
               </p>
            </div>
            <div className="remark">
               <h3>Duration</h3>
               <p
                  className="random-text"
                  ref={(el) => el && randomTextRefs.current.push(el)}
               >
                  {props.lenght}
               </p>
            </div>
            <div className="remark">
               <h3>Range</h3>
               <p
                  className="random-text"
                  ref={(el) => el && randomTextRefs.current.push(el)}
               >
                  {props.rang}
               </p>
            </div>
         </div>
      </div>
   );
}
