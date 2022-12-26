const x = document.querySelector(".anchor");
console.log(x);


//-------------------------- DOM FROM -------------------------------//

function validateForm() {
    let x = document.forms['myForm'];

    let k = x['fname'].value
    if (k === '') {
        alert("Name must be filled out");
        return false;
    }
}

//----------------------------- DOM CSS ---------------------------------//
setTimeout(function () {
    document.getElementById("demo").style.color = "red";
}, 2000)

//------------------------------ DOM ANIMATION ---------------------------//

function myMove() {
    const element = document.getElementById("animate");
    let pos = 0;

    let id = setInterval(run, 5);

    function run() {
        if (pos < 350) {
            pos++;
            element.style.top = pos + 'px';
            element.style.left = pos + 'px';
        }
        else if (pos === 350) {
            setInterval(run1, 5);

        }
        else {
            clearInterval(id);
        }
    }

    function run1() {
        if (pos != 0) {
            pos--;
            element.style.bottom = pos + 'px';
            element.style.right = pos + 'px';
        } else {
            clearInterval(id);
        }

    }
}

//myMove();

//----------------------------- DOM EVENTS ---------------------------------//
function upperCase(){
    let x = document.getElementById("name");
    x.value = x.value.toUpperCase();

  
   
}