document.addEventListener('DOMContentLoaded', () => {
    const characters = 'qwertyuiopasdfghjklzxcvbnm Q W E R T Y U I O P A S D F G H J K L Z X C V B N M Ä Ã È Ë Î Ï Ö Ù Ü Ý ä ã è ë î ï ö ù ü ý'
    const characters2 = '☣ ! § ‽ @ £ $ % ^ & * ( ) _ + | " : { } < > ? ¡ € # ¢ ∞ § ¶ • ª º – ≠ ` ~ - = § [ ] ; \' / . , " : ☣ ! § ‽ @ £ $ % ^ & * ( ) _ + | " : { } < > ? ¡ € # ¢ ∞ § ¶ • ª º – ≠ ` ~ - = § [ ] ; \' / . , " : A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z 0 1 2 3 4 5 6 7 8 9 й ц  у к е н г ш щ з х ъ ф ы в а п р о л д ж э ё я ч с м и т ь б ю Й Ц У К Е Н Г Ш Щ З Х Ъ Ф Ы В А П Р О Л Д Ж Э Ё Я Ч С М И Т Ь Б Ю';
    // const randomTextElement = document.querySelector('.random-text');
    const randomTextElements = document.querySelectorAll('.random-text');
    const randomTextBacks = document.querySelectorAll('.random-text-back');
    const toggleImageElements = document.querySelectorAll('.toggle-image');


    function getRandomCharacter() {
        return characters.charAt(Math.floor(Math.random() * characters.length));
    }

    function applyRandomEffect(element) {
        function randomize() {
            const newText = Array.from(element.textContent).map(() => getRandomCharacter()).join('');
            element.textContent = newText;
            setTimeout(randomize, 200);
        }
        randomize();
    }
    function applyRandomEffectImg(element) {
        function toggleImageVisibility() {
            element.style.opacity = (Math.random() < 0.5) ? '1' : '0';
            setTimeout(toggleImageVisibility, 500);
        }

        toggleImageVisibility();
    }
    
    function applyRandomEffectBack(element) {
        const originalText = element.textContent;
        let currentIndex = 0;

        function randomize() {
            if (currentIndex >= originalText.length) {
                currentIndex = 0;
            }

            const newText = originalText.split('').map((char, index) => {
                if (index < currentIndex) {
                    return char;
                } else {
                    return getRandomCharacter();
                }
            }).join('');

            element.textContent = newText;
            currentIndex++;

            setTimeout(randomize, 500);
        }

        randomize();
    }

    for (let randomTextElement of randomTextElements) {
        applyRandomEffect(randomTextElement);
    }

    for (let randomTextBack of randomTextBacks) {
        applyRandomEffectBack(randomTextBack);
    }

    for (let toggleImageElement of toggleImageElements) {
        applyRandomEffectImg(toggleImageElement);
    }
});
