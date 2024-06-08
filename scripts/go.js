document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Предотвращает стандартное поведение отправки формы
  
    const form = event.target;  // Получаем саму форму
    const formData = new FormData(form);  // Создаем объект FormData из формы
  
    // Конвертируем FormData в JSON-объект
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
  
    // Определяем URL для перенаправления на основе данных формы
    console.log(data);
    if (data.login === 'admin') {
        window.location.href = 'HTML/cards/cardsDM.html';
    } else if (data.login === 'Talico') {
        window.location.href = './HTML/cards/cardsTaliko.html';
    } else if (data.login === 'Olay') {
        window.location.href = './HTML/cards/cardsOlay.html';
    } else if (data.login === 'Eugen') {
        window.location.href = './HTML/cards/cardsEugen.html';
    } else {
        alert('Wrond log/pass')
    }
  });
  
  