const data = ['10-02-2022','07-09-1991', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];

const urls = [];
const sortArr = data.filter(el => el.length === 10);
const date1 = sortArr.filter(el => el.split('').find(el => el === '-'));
const date2 = sortArr.filter(el => el.split('').find(el => el === '/'));
const date3 = date2.map(el => el.split('/'));
console.log(date3);
// console.log(date1, date2);

// date1.map(el => urls.push(el));
// console.log(urls)