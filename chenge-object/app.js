const users = [
    {
        name: 'Вася',
        surname: 'Пупкин',
        age: 30,
        skills: ['Разработка', 'Dev0ps']
    },
    {
        name: 'Катя',
        surname: 'Белова',
        age: 18,
        skills: ['Дизайн'] },
];

const changeObj = users.map(user => {
    return {
        fullName: user.name + ' ' + user.surname,
        skillNum: user.skills.length,
    }
});

console.log(changeObj);

// const user = {
//     name: 'Jon',
//     surname: 'Dou',
//     getFullName: function (){
//         return this.name + ' ' + this.surname;
//     }
// }
//
// console.log(user.getFullName())