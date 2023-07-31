const app = document.getElementById('app');
const userLang = navigator.language || navigator.userLanguage; 

const msgRu = `Привет разработчик!`;
const msgEn = `Hello developer!`;
const msgDe = `Gutten tag developer!`;

switch(true){
    case userLang === 'ru-RU':
        app.innerHTML = msgRu;
        console.log(msgRu);
        break;
    case userLang === 'en-En':
        app.innerHTML = msgEn;
        console.log(msgEn);
        break;
    case userLang === 'de-DE':
        app.innerHTML = msgDe;
        console.log(msgDe);
        break;
    default:
        app.innerHTML = msgEn;
        console.log(msgEn);
}

console.log(userLang);