import { getNum } from "../utils/getNum";

export default function Ability({
   id,
   name,
   level,
   safebox,
   skills,
   proficiencyname,
}) {
   return (
      <div id={id} className="ability">
         <div className="flag">
            <div className="num">
               {safebox ? proficiencyname + getNum(level) : getNum(level)}
            </div>
         </div>
         <div className="level">
            <p>{level}</p>
         </div>
         <div className="name">
            <p>
               {name}{" "}
               {safebox ? <span className="green big">&#x2618;</span> : ""}
            </p>
         </div>
         <div className="skills">
            <ul className="spell-inner-list">
               {skills.map((skill, index) => (
                  <li
                     key={index}
                     className={skill.isSafebox ? "isSafebox" : ""}
                  >
                     <span className="bold pr">
                        {skill.isSafebox
                           ? proficiencyname + getNum(level)
                           : getNum(level)}
                     </span>
                     {skill.name}
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
}
