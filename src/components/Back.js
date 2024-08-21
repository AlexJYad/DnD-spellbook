import { useNavigate } from "react-router-dom";

export default function Back() {
   const navigate = useNavigate();

   const handleBack = () => {
      navigate(-1); // Переход на предыдущую страницу
   };

   return <a onClick={handleBack}>Back</a>;
}
