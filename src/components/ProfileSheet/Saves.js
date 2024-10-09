export default function Saves() {
   return (
      <div className="saves">
         <div className="saves_name">Спасброски</div>
         <div className="death">
            <div className="label">
               <label>
                  <input type="checkbox" />
                  <span></span>
               </label>
               <label>
                  <input type="checkbox" />
                  <span></span>
               </label>
               <label>
                  <input type="checkbox" />
                  <span></span>
               </label>
            </div>
         </div>
         <div className="life">
            <div className="label">
               <label>
                  <input type="checkbox" />
                  <span></span>
               </label>
               <label>
                  <input type="checkbox" />
                  <span></span>
               </label>
               <label>
                  <input type="checkbox" />
                  <span></span>
               </label>
            </div>
         </div>
      </div>
   );
}
