import React from "react";

import Okilerium from "../../img/maps/Okilerium.png";

const MapsTownesPage = () => {
   return (
      <div className="container maps-page">
         <details className="maps">
            <summary className="maps">
               <span className="bold white text-outline">Айкератум</span> —
               столица.
            </summary>
            <div className="maps">
               <img src="" className="maps" alt="Айкератум" />
            </div>
         </details>
         <details>
            <summary>
               <span className="bold white text-outline">Окильериум</span> —
               южная столица.
            </summary>
            <div className="maps">
               <img
                  src={Okilerium}
                  className="maps"
                  alt="Альтер — творец жизни."
               />
            </div>
         </details>
      </div>
   );
};

export default MapsTownesPage;
