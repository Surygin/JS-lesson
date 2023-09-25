const result = document.getElementById('result');
const input = document.getElementById('input');
const btn = document.getElementById('btn');

const obj = {
    result: input
};

addEventListener('load', ()=> {
   if (input.value.length < 1){
       btn.setAttribute('disabled', 'true');
   }
});

function sendMsg(){
    result.innerText = input.value;
    obj.result = input.value;
    localStorage.setItem('result', JSON.stringify(obj));
    console.log(JSON.parse(localStorage.getItem('result')));
}

addEventListener('keydown', event=> {
    if (event.code === 'Enter' && input.value.length >= 1){
        sendMsg();
    }
    if (event.code === 'Escape' && input.value.length > 0){
        localStorage.clear();
    }
});
input.addEventListener('input', ()=> {
    btn.disabled = input.value.length < 1;
});

btn.addEventListener('click', ()=> {
    sendMsg();
});