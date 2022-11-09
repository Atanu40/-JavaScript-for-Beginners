//--------------------- Normal Function() -------------------------//

function display() {

}

// another approach //

const display1 = function () {
    return "I AM A STUDENT"
}

console.log(display1());

// -------------------- Arrow Function --------------------------//

const display2 = () => {
    return "MY NAME IS ATANU";
}
console.log(display2());

//------------------------ THIS KEYWORD --------------------------//


// Regular Function:
const hello = function () {
    document.getElementById("demo").innerHTML += this;
}

// The window object calls the function:
window.addEventListener("load", hello);

// A button object calls the function:
document.getElementById("btn").addEventListener("click", hello);
// Arrow Function:
const hello1 = () => {
    document.getElementById("demo").innerHTML += this;
}

// The window object calls the function:
window.addEventListener("load", hello1);

// A button object calls the function:
document.getElementById("btn").addEventListener("click", hello);

