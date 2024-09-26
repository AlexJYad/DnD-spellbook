import React from "react";

const ScrollToTop = () => {
   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth", // Плавная прокрутка
      });
   };

   return (
      <button onClick={scrollToTop} className="scroll-to-top">
         Наверх
      </button>
   );
};

export default ScrollToTop;
