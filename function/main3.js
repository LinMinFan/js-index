document.addEventListener("load",current_time());

function current_time() {
    NowDate = new Date();
    h = NowDate.getHours();
    m = NowDate.getMinutes();
    s = NowDate.getSeconds();
    document.getElementById('current').innerHTML = '現在時間:' + h + '時' + m + '分' + s + '秒';
    setTimeout('current_time()', 1000);
}

document.getElementById("item1").addEventListener("load",itemfun1());

function itemfun1() {
    let result1 = (parseInt(document.getElementById("item1").value)) * (parseInt(document.getElementById("count1").value));
    document.getElementById("total1").innerHTML = result1;
    setTimeout('itemfun1()', 500);

}
document.getElementById("item2").addEventListener("load",itemfun2());

function itemfun2() {
    let result2 = (parseInt(document.getElementById("item2").value)) * (parseInt(document.getElementById("count2").value));
    document.getElementById("total2").innerHTML = result2;
    setTimeout('itemfun2()', 500);

}
document.getElementById("item3").addEventListener("load",itemfun3());

function itemfun3() {
    let result3 = (parseInt(document.getElementById("item3").value)) * (parseInt(document.getElementById("count3").value));
    document.getElementById("total3").innerHTML = result3;
    setTimeout('itemfun3()', 500);

}

document.getElementById("sum").addEventListener("load",sunfun());

function sunfun() {
    let sun1 = (parseInt(document.getElementById("item1").value)) * (parseInt(document.getElementById("count1").value));
    let sun2 = (parseInt(document.getElementById("item2").value)) * (parseInt(document.getElementById("count2").value));
    let sun3 = (parseInt(document.getElementById("item3").value)) * (parseInt(document.getElementById("count3").value));
    let sun = sun1 + sun2 +sun3;
    document.getElementById("sum").innerHTML =`總價:${sun}元`;
    setTimeout('sunfun()', 500);

}


//let myform = document.getElementById("myform") //呼叫myform表單
//myform.addEventListener("submit", function (e) {  //處理提交動作
//    e.preventDefault();
//    let item1 = parseInt(document.getElementById("item1").value);
//    console.log(item1);   //呼叫item1值
//    let count1 = parseInt(document.getElementById("count1").value);
//    console.log(count1);  //呼叫count1值
//    let result1 = item1 * count1;
//    console.log(result1); //計算總和
//    document.getElementById("total1").innerHTML = result1;
//
//    document.getElementById("sum").innerText = `總價: ${result1} 元`; //回復結果
//
//})
document.addEventListener("mousemove", function (e) {
        document.getElementById("cat").innerHTML = "<i class='fa-solid fa-cat'></i>";
        let cat = document.getElementById("cat");
        let x = e.pageX;
        let y = e.pageY;
        cat.style.left = x + "px";
        cat.style.top = y + "px";
    });