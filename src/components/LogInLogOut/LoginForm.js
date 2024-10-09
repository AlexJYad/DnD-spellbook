import React, { useState } from "react";

export default function LoginForm() {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");

   const handleSubmit = (event) => {
      event.preventDefault();

      if (username === "" || password === "") {
         setError("Оба поля должны быть заполнены");
         return;
      }

      // Отправка данных на сервер или проверка логина (этот код просто для примера)
      if (username === "admin" && password === "admin") {
         localStorage.setItem("token", "all");
         window.location.reload();
      } else if (username === "admin" && password === "admin") {
         localStorage.setItem("token", "all");
         window.location.reload();
      } else if (username === "Talico" && password === "C2aGY") {
         localStorage.setItem("token", "Талико");
         window.location.reload();
      } else if (username === "Olay" && password === "Dy0tN") {
         localStorage.setItem("token", "Олёй");
         window.location.reload();
      } else if (username === "Eugen" && password === "HC5sp") {
         localStorage.setItem("token", "Юджин");
         window.location.reload();
      } else if (username === "Eulebia" && password === "non0D") {
         localStorage.setItem("token", "Евлебия");
         window.location.reload();
      } else {
         setError("Invalid username or password.");
      }
   };

   const handleReset = () => {
      setUsername(""); // Сброс значения поля логина
      setPassword(""); // Сброс значения поля пароля
      setError(""); // Очистка сообщения об ошибке
   };

   return (
      <div>
         <form onSubmit={handleSubmit} id="loginForm">
            <div class="remark">
               <div className="mb-3">
                  <label for="login">Username:</label>
                  <input
                     type="text"
                     id="login"
                     name="login"
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                  />
               </div>
               <div>
                  <label for="pwd">Password:</label>
                  <input
                     type="password"
                     id="pwd"
                     name="pwd"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                  />
               </div>
            </div>
            {error && (
               <div class="remark">
                  <p style={{ color: "red" }}>{error}</p>
               </div>
            )}
            <div className="login-buttons">
               <button className="btn btn--sharp" type="submit" value="Login">
                  Login
               </button>
               <button
                  className="btn btn--sharp"
                  type="reset"
                  value="Reset"
                  onClick={handleReset}
               >
                  Reset
               </button>
            </div>
         </form>
      </div>
   );
}
