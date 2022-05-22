let mystring = "";
function getmoneyfun(){
    console.log('提款中');
    let getmoney = Number(prompt('提款金額', 0));
    console.log('提款金額:' + getmoney);
    if (save >= getmoney) {
        save = save - getmoney;
    } else {
        save = save;
        console.log('餘額不足');
    }
    console.log('餘額', save);
    mystring = '提款金額' + getmoney + '\n';
}
function transformoneyfun(){
    console.log('轉帳中');
    let account = Number(prompt('轉帳帳號', 0));
    console.log('帳號:' + account);
    let transformoney = Number(prompt('轉帳金額', 0));
    console.log('轉帳金額:' + transformoney);
    if (save >= transformoney) {
        save = save - transformoney;
    } else {
        save = save;
        console.log('餘額不足');
    }
    console.log('餘額', save);
    mystring = '轉帳帳號' + account + '\n' + '轉帳金額' + transformoney + '\n';
}
function savemoneyfun(){
    console.log('存款中');
    let savemoney = Number(prompt('存款金額', 0));
    console.log('存款金額' + savemoney);
    save = save + savemoney;
    console.log('餘額', save);
    mystring = '存款金額' + savemoney + '\n';
}
