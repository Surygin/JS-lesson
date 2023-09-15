'use strickt';

/*
 Дополнить объект методом для получения имени:
  - компании
  - сео
  - сотрудника
 */

const company = {
    name: 'ООО Агро',
    employees: [
        {
            name: 'Света',
        },
        {
            name: 'Дима',
        },
    ],
    ceo: {
        name: 'Вася'
    },

    getVseAndSrazu: function (){
        console.log('Название компании:');
        console.log(this.name);
        console.log('Имя CEO компании:');
        this.ceo.name ? console.log(this.ceo.name) : console.log('Нет такого параметра');
        console.log('Имена сотрудников:');
        this.employees.map(el => console.log(el.name));

    },

    getCompanyName: function(){
        console.log(this.name);
    },

    getCeoName: function(){
        this.ceo.name ? console.log(this.ceo.name) : console.log('Нет такого параметра');
    },

    getEmployeesName: function (){
        this.employees.map(el => console.log(el.name));
    }
};

// company.getCompanyName();
// company.getCeoName();
// company.getEmployeesName();

company.getVseAndSrazu();