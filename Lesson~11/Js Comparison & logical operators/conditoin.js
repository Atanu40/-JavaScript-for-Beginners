let value, voteable;

function age_calculation() {
    value = document.getElementById("age").value;
    if (isNaN(value)) {
        voteable = "Input is not a number";
    }
    else {
        voteable = (value < 18) ? "Too young" : "Old enough";//Conditional (Ternary) Operator
    }
    document.getElementById("demo").innerHTML = voteable + " to vote";
}

let greeting, time = 3.00;

if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

document.getElementById("demo1").innerHTML = greeting;

let day;

switch (new Date().getDay()) {

    case 0:
        console.log("Sunday");
        break;

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");

    default:
        text = "Looking forward to the Weekend";
}
