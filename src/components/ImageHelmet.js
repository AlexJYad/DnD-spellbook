import React from "react";
import { Helmet } from "react-helmet";

const ImageHelmet = () => {
   return (
      <Helmet>
         <link
            rel="preload"
            as="image"
            href="../../img/bookmarks/cristal.webp"
         />
         <link rel="preload" as="image" href="../../img/bookmarks/hand.webp" />
         <link rel="preload" as="image" href="../../img/bookmarks/mouth.webp" />

         <link
            rel="preload"
            as="image"
            href="../../img/background/name-frame.webp"
         />
         <link
            rel="preload"
            as="image"
            href="../../img/background/flag--S.webp"
         />
         <link
            rel="preload"
            as="image"
            href="../../img/background/flag--XS.webp"
         />
         <link
            rel="preload"
            as="image"
            href="../../img/background/flag--M.webp"
         />
         <link
            rel="preload"
            as="image"
            href="../../img/background/flag--M__2.webp"
         />
         <link
            rel="preload"
            as="image"
            href="../../img/background/crown.webp"
         />
         <link
            rel="preload"
            as="image"
            href="../../img/background/crystal-ball.webp"
         />
         <link rel="preload" as="image" href="../../img/background/dice.webp" />
         <link rel="preload" as="image" href="../../img/background/eye.webp" />
         <link
            rel="preload"
            as="image"
            href="../../img/background/hits-temporary.webp"
         />
         <link
            rel="preload"
            as="image"
            href="../../img/background/hits-d.webp"
         />
         <link rel="preload" as="image" href="../../img/background/slot.webp" />
         <link rel="preload" as="image" href="../../img/background/HP.webp" />
         <link
            rel="preload"
            as="image"
            href="../../img/background/sabaton.webp"
         />
         <link
            rel="preload"
            as="image"
            href="../../img/background/flag--L.png"
         />
         <link
            rel="preload"
            as="image"
            href="../../img/background/scull.webp"
         />
         <link
            rel="preload"
            as="image"
            href="../../img/background/heart.webp"
         />
         <link
            rel="preload"
            as="image"
            href="../../img/background/scroll.webp"
         />
      </Helmet>
   );
};

export default ImageHelmet;