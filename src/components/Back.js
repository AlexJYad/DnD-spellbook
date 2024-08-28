import { useNavigate, useLocation } from "react-router-dom";

export default function Back({ className }) {
   const navigate = useNavigate();
   const location = useLocation();

   const handleBack = () => {
      // Если текущий путь - корневой путь, не переходим назад
      if (location.pathname === "/") {
         return;
      }
      navigate(-1); // Переход на предыдущую страницу
   };

   return (
      <button onClick={handleBack} className={`${className}`}>
         <h2>Back</h2>
      </button>
   );
}
