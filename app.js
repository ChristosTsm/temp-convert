const _cel = document.querySelector('#celcius > input');
const _far = document.querySelector('#fahrenheit > input');
const _kel = document.querySelector('#kelvin > input');

function roundNum(num){
    return Math.round(num*100)/100;
}

function celToFNK(){
    const _celTemp = parseFloat(_cel.value);
    const _farTemp = (_celTemp*(9/5)) + 32;
    const _kelTemp = _celTemp+273.15;
    _far.value = roundNum(_farTemp);
    _kel.value = roundNum(_kelTemp);
}

function fharToCNK(){
    const _farTemp = parseFloat(_far.value);
    const _celTemp = (_farTemp - 32) * (5/9);
    const _kelTemp = (_farTemp + 459.67) * 5/9;
    _cel.value = roundNum(_celTemp);
    _kel.value = roundNum(_kelTemp);
}

function kelToFNC(){
    const kTemp = parseFloat(_kel.value);
    const _celTemp = kTemp -273.15;
    const _farTemp = 9/5 * (kTemp - 273) + 32;
    _cel.value = roundNum(_celTemp);
    _far.value = roundNum(_farTemp);
}

function main() {
    _cel.addEventListener('input', celToFNK);
    _far.addEventListener('input', fharToCNK);
    _kel.addEventListener('input', kelToFNC);
}

main();