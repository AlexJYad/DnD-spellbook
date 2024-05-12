function secondFunction() {
    var containers = document.querySelectorAll('.headerh2');
      
      containers.forEach(function(container) {
        var text = container.querySelector('.namespell');
        var fontSize = 23; // начальный размер шрифта
        var step = 1; // шаг изменения размера шрифта
        
        while ((text.scrollHeight + 16) > container.offsetHeight || text.scrollWidth > (container.offsetWidth)) {
          fontSize -= step;
          text.style.fontSize = fontSize + 'px';
        }
    });
  };

function database(){

}

function cards(callback){

    fetch('../bd/cards.json')
    .then(response => response.json())
    .then(data => {
        
        
        // Получаем контейнер для карточек
        const container = document.getElementById('main');
        // Очищаем содержимое элемента
        container.innerHTML = '';

        const filterSelect = document.getElementById('filterSelect');
        const filterValue = filterSelect.value;

        const filterPlayers = document.getElementById('filterPlayers');
        const filterPlayer = filterPlayers.value;

        const filterSchooles = document.getElementById('filterSchooles');
        const filterSchool = filterSchooles.value;
        
        const filterTypes = document.getElementById('filterTypes');
        const filterType = filterTypes.value;

    if (filterValue != 'all') {
        data = (data.filter(item => item.typeno == filterValue));
    }

    if (filterPlayer != 'all') {
        data = data.filter(item => {
            return item.player.includes(Number(filterPlayer));
            }
        );
    }

    if (filterSchool != 'all') {
        data = data.filter(item => item.school == filterSchool);
    }

    if (filterType != 'all') {
        data = data.filter(item => item.aType == filterType);
    }

    data.forEach(cardData => {

        const card = document.createElement('div');
        card.classList.add('spell');

        if (cardData.say) {
            const say = document.createElement('img');
            say.src = '../img/bookmark/mouth.png';
            say.classList.add('mouth', 'bookmark');
            card.appendChild(say);
        }

        if (cardData.touch) {
            const touch = document.createElement('img');
            touch.src = '../img/bookmark/hand.png';
            touch.classList.add('hand', 'bookmark');
            card.appendChild(touch);
        }

        if (cardData.do) {
            const doIt = document.createElement('img');
            doIt.src = '../img/bookmark/cristal.png';
            doIt.classList.add('cristal', 'bookmark');
            card.appendChild(doIt);
        }

  
  
        const cardTitle = document.createElement('div');
        cardTitle.classList.add('headerh2')
        const title = document.createElement('h2');
        title.classList.add('namespell');
        if (cardData.school == 'nature') {
            title.classList.add('nature');
        }
        if (cardData.school == 'black') {
            title.classList.add('black');
        }
        if (cardData.school == 'goddess') {
            title.classList.add('goddess');
        }
        title.textContent = cardData.title;
        const description = document.createElement('p');
        description.classList.add('description')
        description.innerHTML = cardData.description;
        
        const bookmarks = document.createElement('div');
        bookmarks.classList.add('blockremark');
        
        const markType = document.createElement('div');
        markType.classList.add('remark');
        
        const titleType = document.createElement('h3');
        titleType.textContent = 'Type';
        const type = document.createElement('p');
        type.textContent = cardData.type;
        
        const markTime = document.createElement('div');
        markTime.classList.add('remark');
        
        const titleTime = document.createElement('h3');
        titleTime.textContent = 'Time';
        const time = document.createElement('p');
        time.textContent = cardData.time;
        
        const markLenght = document.createElement('div');
        markLenght.classList.add('remark');
        
        const titleLenght = document.createElement('h3');
        titleLenght.textContent = 'Duration';
        const lenght = document.createElement('p');
        lenght.textContent = cardData.lenght;
        
        const markRang = document.createElement('div');
        markRang.classList.add('remark');
        
        const titleRang = document.createElement('h3');
        titleRang.textContent = 'Range';
        const rang = document.createElement('p');
        rang.textContent = cardData.rang;
        
        
        // Добавляем элементы в карточку
        cardTitle.appendChild(title);
        card.appendChild(cardTitle); 
        card.appendChild(description);
        markType.appendChild(titleType);
        markType.appendChild(type);
        markTime.appendChild(titleTime);
        markTime.appendChild(time);
        markLenght.appendChild(titleLenght);
        markLenght.appendChild(lenght);
        markRang.appendChild(titleRang);
        markRang.appendChild(rang);
        
        bookmarks.appendChild(markType);
        bookmarks.appendChild(markTime);
        bookmarks.appendChild(markLenght);
        bookmarks.appendChild(markRang);
        
        card.appendChild(bookmarks);
        
        
        
        // Добавляем карточку в контейнер
        container.appendChild(card);
        callback(); //надо потом придумать как всё таки вызывать её 1 раз
    });
    })
    .catch(error => console.error('Ошибка загрузки файла JSON:', error)); 
};

window.onload = cards(secondFunction);


const selectElement = document.getElementById('filterSelect');
selectElement.addEventListener('change',  function() {
    cards(secondFunction)
});

const selectPlayer = document.getElementById('filterPlayers');
selectPlayer.addEventListener('change',  function() {
    cards(secondFunction)
});

const selectTyeps = document.getElementById('filterTypes');
selectTyeps.addEventListener('change',  function() {
    cards(secondFunction)
});

const selectSchooles = document.getElementById('filterSchooles');
selectSchooles.addEventListener('change',  function() {
    cards(secondFunction)
});