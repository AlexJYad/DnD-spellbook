import React from "react";
import "../CSS/Marquee.css"; // Импортируем CSS-файл со стилями

const Marquee = ({ text }) => {
   return (
      <div className="marquee">
         <div className="marquee-content">
            <div className="marquee-text">{text}</div>
            <div className="marquee-text">{text}</div>
            <div className="marquee-text">{text}</div>
            <div className="marquee-text">{text}</div>
            <div className="marquee-text">{text}</div>
            <div className="marquee-text">{text}</div>
         </div>
      </div>
   );
};

export default Marquee;
