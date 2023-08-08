const url = 'https://stepik.org/course/63054/promo';

console.log('Исходный URL - ', url);

const splitUrl = url.split('/');

const [protocolType] = splitUrl[0].split(':');

const [protocol, _, domen, ...otherData] = url.split('/');

console.log(`Протокол: ${[protocolType] != 'https' ? [protocolType] != 'http' ? 'не коректный URL' : 'http - не безопасное подключение' : 'https' },
Доменное имя: ${[domen]},
Путь внутри сайта: ${[otherData.join('/')]}.
`);