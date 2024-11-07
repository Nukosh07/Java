let number = prompt("1ден і ке дейн сан танда")
var isCorrect = true;


switch (number) {
    case '1':
        alert("1 танданыз");
        break;
    case '2':
        alert("2 танданыз");
        break;
    case '3':
        alert("3 танданыз");
        break;
    default:
        alert("Qate variant");
        isCorrect = false;
}

if (isCorrect == false) {
    number = prompt('1ден 3ке дейын сан танда');

    switch (number) {
        case '1':
            alert('1 tandaniz');
            break;
        case '2':
            alert ('2 tandaniz');
            break;
        case '2':
            alert('3 tandaniz');
            break;
        default:
            alert("Qate variant");
            isCorrect = false;
    }
}