const el1and2 = document.querySelectorAll('.one');

el1and2.forEach(el => console.log(el.querySelector('span').innerText));

const el3 = document.querySelector('#two').innerHTML;
console.log(el3);
const el4 = document.querySelectorAll('span');
// el4.forEach(el => console.log(el.getAttribute('user-id')));
el4.forEach(el => {
    el.getAttribute('user-id') === '4' ? console.log(el.innerText) : false;
    // if (el.getAttribute('user-id') === '4'){
    //     console.log(el.innerText);
    // }
})
// console.log(el4);