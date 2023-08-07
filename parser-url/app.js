const url = 'http://stepik.org/course/63054/promo';

const splitUrl = url.split('/');

const [protocolType] = splitUrl[0].split(':');

const [protocol, _, domen, ...otherData] = url.split('/');

console.log(`Протокол: ${[protocolType] == 'http' ? 'http - не безопасное подключение' : 'https' },
Доменное имя: ${[domen]},
Путь внутри сайта: ${[otherData.join('/')]}.
`);