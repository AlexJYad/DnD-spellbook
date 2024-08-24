export default function Ability({ id, name, num, level, safebox, skills }) {
   return (
      <div id={id} className="ability">
         <div className="flag">
            <div className="num">{num}</div>
         </div>
         <div className="level">
            <p>{level}</p>
         </div>
         <div className="name">{name}</div>
         <div className="safe">
            <p>Спасбросок</p>
            <div className="safebox">{safebox ? "\u2713" : "_"}</div>
         </div>
         <div className="skills">
            <ul>
               {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
               ))}
            </ul>
         </div>
      </div>
   );
}
