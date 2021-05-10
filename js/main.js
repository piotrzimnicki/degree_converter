let convertFrom = document.getElementById('convertFrom');
let convertTo = document.getElementById('convertTo');
let input = document.getElementById('converter');
let result = document.querySelector('.result');
let buttons = document.querySelectorAll('.buttons button');
let btnsArr = Array.from(buttons);

function swap() {
    if (convertFrom.innerText == '°C') {
        convertFrom.innerText = '°F';
        convertTo.innerText = '°C';
        result.innerText = '';
    }else {
        convertFrom.innerText = '°C';
        convertTo.innerText = '°F';
        result.innerText = '';
    }
};
function convert () {
    if (convertFrom.innerText == '°C' && input.value != '' ){
        let x = input.value;
        let y = Math.floor((input.value * 1.8 + 32 )*10)/10;
        input.value = y;
        result.innerText = `${x}°C is equal to ${y}°F`;
        input.value = '';
    }else if (convertFrom.innerText == '°F' && input.value != '') {
        let x = input.value;
        let y = Math.floor((input.value - 32)*0.5556 * 10)/10;
        input.value = y;
        result.innerText = `${x}°F is equal to ${y}°C`;
        input.value = '';
    }
};
function reset() {
    input.value = '';
    convertFrom.innerText = '°C';
    convertTo.innerText = '°F';
    result.innerText = '';
};
input.addEventListener('keyup', function(event){
    if (event.key === 'Enter') {
        convert();
    }
});