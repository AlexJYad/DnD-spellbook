export default function Ability({
   id,
   name,
   level,
   safebox,
   skills,
   proficiencyname,
}) {
   console.log(proficiencyname);
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
            <ul>
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

function getNum(level) {
   switch (level) {
      case 1:
         return -5;
      case 2:
      case 3:
         return -4;
      case 4:
      case 5:
         return -3;
      case 6:
      case 7:
         return -2;
      case 8:
      case 9:
         return -1;
      case 10:
      case 11:
         return 0;
      case 12:
      case 13:
         return 1;
      case 14:
      case 15:
         return 2;
      case 16:
      case 17:
         return 3;
      case 18:
      case 19:
         return 4;
      case 20:
      case 21:
         return 5;
      case 22:
      case 23:
         return 6;
      case 24:
      case 25:
         return 7;
      case 26:
      case 27:
         return 8;
      case 28:
      case 29:
         return 9;
      case 30:
         return 10;
      default:
         return null; // Возвращаем null или другое значение по умолчанию для некорректного level
   }
}
