const data = ['10-02-2022','07-09-1991', 'тест', 'kjh-d-sf-g', '11/12/2023', '00/13/2022', '41/12/2023'];

function getDate(urls){
    const dateArr = [];
    const dmY = data.map(el => el.split('-'))
        .filter(el => el.length === 3);
    const mdY = data.map(el => el.split('/'))
        .filter(el => el.length === 3);

    function normalizeDMY(arr){
        arr.map(el => dateArr.push(el.join('-')));
    }
    function mdyToDmy(arr){
        arr.map(el => {
            [m, d, Y] = el;
            dateArr.push([d, m, Y].join('-'));
        });
    }
    normalizeDMY(dmY);
    mdyToDmy(mdY);

    const sortDate = dateArr.map(el => el.split('-')).map(el => {
        [d, m, Y] = el;
        if (d > 0 && d < 32){
            if (m > 0 && m < 13){
                return [d, m, Y];
            }
        }
    });
    return sortDate.filter(el => el != undefined).map(el => el.join('-'));
}

console.log(getDate(data));