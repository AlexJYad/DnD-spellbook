import { useNavigate } from "react-router-dom";

export default function LogOff({ className }) {
   const navigate = useNavigate();
   const handleOut = () => {
      localStorage.removeItem("token");
      navigate("/LogIn");
   };

   return (
      <button onClick={handleOut} className={`${className}`}>
         <h2>LogOff</h2>
      </button>
   );
}
