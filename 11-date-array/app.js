const data = ['10-02-2022','07-09-1991', 'тест', 'kjh-d-sf-g', '11/12/2023', '00/13/2022', '41/12/2023'];

function getDate(urls){
    const sortArr = data.filter(el => el.length === 10);
    const dmY = sortArr.filter(el => el.split('').find(el => el === '-'));
    const mdY = sortArr.filter(el => el.split('').find(el => el === '/'));
    function mdyToDmy(arr){
        arr.map(el => el.split('/')).map(el => {
            [m, d, Y] = el;
            dmY.push([d, m, Y].join('-'));
        });
    }

    mdyToDmy(mdY);

    console.log(dmY);
}

getDate(data);

// const convertDate = mdY.map(el => el.split('/')).map(el => {
//     [m, d, Y] = el;
//     return [d, m, Y].join('-');
// });

// const forCheckDate = date1.map(el => el.split('-'));
// date1.map(el => console.log(typeof(el.split('-'))));
// date1.map(el => urls.push(el));
// console.log(urls)

// const numbers = [1, 40, -5, 10, 0];

// function sortArray(arr){
//     for(let el in arr){
//         for (let item in arr){
//             [arr[item], arr[el]] = [arr[el], arr[item]]
//         }
//     }
//     console.log(arr);
// }

// const sortARR = date3.map(el => sortArray(el));

// sortArray(date3);

// console.log(date1.map(el => el.split('')));