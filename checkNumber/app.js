/* верные */
const num1 = '89103235356';
const num2 = '+79103235356';
const num3 = '+7(910)3235356';
const num4 = '+7(910) 323-53-56';
const num5 = ' +7(910) 323-53-56 ';
/* не верные */
const num1Error = '89103235';
const num2Error = '+7d910d323-53-56';
const num3Error = '9+7103235356';
const num4Error = '89103g35356';

function clearSpace(phoneNumber){
    return  phoneNumber.replaceAll(' ', '');
}

function checkNumber(phoneNumber){
    const forCheckNumber = [];
    for (i = 0; i<phoneNumber.length; i++){
        if (!isNaN(phoneNumber[i])){
            forCheckNumber.push(phoneNumber[i]);
        }
    }

    const trueNumber = forCheckNumber.join('');

    if (trueNumber[0] === '7' || trueNumber[0] === '8'){
        console.log(trueNumber.length === 11 ? trueNumber : 'не правильный номер');
    }
    else {
        console.log('не правильный номер');
    }

}

checkNumber(clearSpace(num4Error));