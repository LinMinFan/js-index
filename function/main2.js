let resultp = document.getElementById('result');

resultp.innerText = '計算結果';
console.log(resultp);

let myform = document.getElementById('myform');
console.log(myform);

let num1input = document.getElementById('num1');
console.log(num1input);

let num2input = document.getElementById('num2');
console.log(num2input);

let mathtinput = document.getElementById('math');
console.log(mathtinput);


//myform.addEventListener('smathtbmit',function(e){
//    e.preventDefault();
//    console.log(num1input.value);
//    console.log(num2input.value);
//    let num1 = parseInt(num1input.value);
//    let num2 = parseInt(num2input.value);
//    sum = num1 + num2;
//    console.log(num1 + '+' + num2 + '=' + sum);
//    resultp.innerText = '88';
//    mystring1 = "${num1} + ${num2} = ${sum}";
//    console.log(mystring1);
//})

myform.addEventListener('submit',function(e){
    e.preventDefault();
    console.log(num1input.value);
    console.log(num2input.value);
    console.log(mathtinput.value);
    let num1 = parseInt(num1input.value);
    let num2 = parseInt(num2input.value);
    let math = mathtinput.value;

    let sum ="";
    switch (math) {
        case "+":
            sum = num1 + num2;
            console.log(sum);
            console.log(`${num1} + ${num2} = ${sum}`);
            resultp.innerText = (`${num1} + ${num2} = ${sum}`);
            break;
        case "-":
            sum = num1 - num2;
            console.log(sum);
            console.log(`${num1} - ${num2} = ${sum}`);
            resultp.innerText = (`${num1} - ${num2} = ${sum}`);
            break;
        case "*":
            sum = num1 * num2;
            console.log(sum);
            console.log(`${num1} * ${num2} = ${sum}`);
            resultp.innerText = (`${num1} * ${num2} = ${sum}`);
            break;
        case "/":
            sum = num1 / num2;
            console.log(sum);
            console.log(`${num1} / ${num2} = ${sum}`);
            resultp.innerText = (`${num1} / ${num2} = ${sum}`);
            break;
    
        default:
            break;
    }


})

