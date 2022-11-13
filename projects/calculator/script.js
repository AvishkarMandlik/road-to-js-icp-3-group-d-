let numOfButtons = document.querySelectorAll(".cal-btn").length;
let string = "";
var switchOn;
let a = 1;


document.querySelector(".on").addEventListener("click", function () {

    if (this.innerHTML == "ON") {
        switchOn = true;

    }

    if (a == 1) {
        calOn();
        a++;
    }
})

document.querySelector(".off").addEventListener("click", function () {
    calOff();
})


function calOn() {

    if (switchOn == true) {

        for (let i = 0; i < numOfButtons; i++) {
            document.querySelectorAll(".cal-btn")[i].addEventListener("click", buttonClick);

        }

        function buttonClick(e) {
            if (e.target.innerHTML == "=") {
                string = eval(string);
                document.querySelector(".input-screen").value = string;
            }
            else {
                string = string + e.target.innerHTML;
                document.querySelector(".input-screen").value = string;
            }

        }

        document.querySelector(".clear").addEventListener("click", function () {
            string = "";
            document.querySelector(".input-screen").value = string;
        })

        document.querySelector(".delete").addEventListener("click", function () {
            string = string.slice(0, -1);
            document.querySelector(".input-screen").value = string;
        })

    }
}



function calOff() {

    for (let i = 0; i < numOfButtons; i++) {
        document.querySelectorAll(".cal-btn")[i].addEventListener("click", buttonClick);

    }
    document.querySelector(".input-screen").value = "";
    function buttonClick(e) {
        if (e.target.innerHTML == "=") {
            document.querySelector(".input-screen").value = "";
        }
        else {
            document.querySelector(".input-screen").value = "";
        }
    }

    document.querySelector(".clear").addEventListener("click", function () {
        string = "";
        document.querySelector(".input-screen").value = string;
    })

}






