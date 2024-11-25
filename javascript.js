// 1 tapsirma

/*
while (true) {
    let num1 = +prompt("Бірінші рет санды енгізініз")
    let num2 = +prompt("Екінші рет санды енгізініз")
    let tanba = prompt("Танба енгізініз")

    if (tanba == "+") {
        alert("Сандардың қосындысы = " + (num1 + num2));
        break;
    } else if (tanba == "-") {
        alert("Сандардың айырмасы = " + num1 - num2);
        break;
    } else if (tanba == "*") {
        alert("Сандардың көбейтісі = " + num1 * num2);
        break;
    } else if (tanba == "/") {
        alert("Сандардың бөліндісі = " + num1 / num2);
        break;
    } else {
        alert("Қате енгізу!")
    }
}
*/

//tapsirma 2

/*
while (true) {
    let price = +prompt("Заттың бағасын жазыныз")
    let many = +prompt("Заттың құны")

    if (price * many <= 4999) {
        alert("Жалпы құны = " + price * many)
    } else if (price * many >= 5000) {
        alert("Жалпы құны = " + (price * many) - (price * many * 0.1))
        break;
    } else if (price * many >= 10000) {
        alert("Жалпы құны = " + (price * many) - (price * many * 0.2))
        break;
    } else if (price * many >= 20000) {
        alert("Жалпы құны = " + (price * many) - (price * many * 0.3))
        break;
    } else {
        alert("Қате енгізу!")
    }
}
*/

//tapsirma 3

function calculator() {
    let result = 0
    result += 1
}

while (true) {
    let num = prompt("1-ден 100-ге дейін ішінде сан жасырылған, енді оны табып көр")
    
    if (num == "5") {
       alert("Құттықтаймыз, сіз жасырылған санды таптыныз!")
       break;
    } else if (num >= "10" && num >= "6") {
        alert("Сәл төмен")
    } else if (num <= "3" && num <= "4") {
        alert("Сәл жоғары") 
    } else if (num >= "100" && num >= "11") {
        alert("Жай төмен")
    } else if (num <= "1" && num <= "2") {
        alert("Жай жоғары") 
    } else {
        alert("Қате енгізу!")
    }
}

alert("Мынаңша попытка санды табуға кетті " + calculator())