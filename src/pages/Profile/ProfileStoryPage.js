import React, { useEffect } from "react";

export default function ProfileStoryPage(props) {
   const story = props[0];

   useEffect(() => {
      document.title = "story";
   }, []);

   return (
      <div className="container">
         <h1>{story.title}</h1>
         <blockquote>
            <p>{story.quote.text}</p>
            <footer>— {story.quote.author}</footer>
         </blockquote>
         {story.story.map((paragraph, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
         ))}
      </div>
   );
}
