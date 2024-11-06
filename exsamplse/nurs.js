var isRain = prompt("Идёт ли дождь?");

if (isRain == "да") {
    alert("Иди с помощи автобуса");
} else {
    var isMorning = prompt("Сейчас рассвет ли?")

    if(isMorning == "да") {
        alert("Иди с помощи велосипеда");
    } else {
        alert("Иди с помощи машины")
    }
}

alert("Код закончился");
