const zero = {
   text: ["Данные отсуствуют!"],
};

export default function Info({ props = zero }) {
   const texts = props.text;

   return (
      <div id="main" className="container">
         <div className="info">
            {texts.map((text, index) => (
               <p key={index} level={index + 1}>
                  {text}
               </p>
            ))}
         </div>
      </div>
   );
}
