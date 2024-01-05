resizeCircle()
window.addEventListener('resize', resizeCircle);

function resizeCircle() {
    let circle = document.querySelector('.circle');
    let windowWidth = window.innerWidth;
    if (windowWidth < 700) {
        circle.style.width = (windowWidth + 100) + 'px';
        circle.style.height = (windowWidth + 100) + 'px';
    } else {
        circle.style.width = 340 + 'px';
        circle.style.height = 340 + 'px';
    }
}



//CARROUSEL
let arrowLeft = document.getElementById("arrowLeft")
let arrowRight = document.getElementById("arrowRight")
let counter = 1;
let number1 = document.getElementById("number1")
let number2 = document.getElementById("number2")
let number3 = document.getElementById("number3")
let circle = document.querySelector('.circle');
let option1 = document.getElementById("option1")
let option2 = document.getElementById("option2")
let option3 = document.getElementById("option3")
let summer = document.querySelector(".summer");
let btnBuy = document.querySelector(".btnBuy")
let circleBlur = document.querySelector(".circle-blur")
let logo = document.querySelector(".logo svg path");
let jordanRed = document.getElementById("jordanRed")
let jordanBlue = document.getElementById("jordanBlue")
let jordanOrange = document.getElementById("jordanOrange")
change()

arrowLeft.addEventListener("click", () => {
    if (counter != 1) {
        counter--;
        change()
    }
})

arrowRight.addEventListener("click", () => {
    if (counter != 3) {
        counter++;
        change()
    }
})

number1.addEventListener("click", () => {
    if (counter != 1) {
        counter = 1
        change()
    }
})

number2.addEventListener("click", () => {
    if (counter != 2) {
        counter = 2
        change()
    }
})

number3.addEventListener("click", () => {
    if (counter != 3) {
        counter = 3
        change()
    }
})


function change() {
    number1.classList.add('transitionBackground');
    number2.classList.add('transitionBackground');
    number3.classList.add('transitionBackground');
    circle.classList.add('transitionBackground');
    circleBlur.classList.add('transitionBackground');
    logo.classList.add('transition-fill');
    summer.classList.add('transition-color');
    btnBuy.classList.add('transition-background-shadow');


    let elements = [jordanRed, jordanBlue, jordanOrange];
    elements.forEach(element => element.classList.add('fade'));

    if (counter == 1) {
        number1.style.background = "#E90125";
        number2.style.background = "";
        number3.style.background = "";
        circle.style.background = "linear-gradient(180deg, rgba(233, 1, 37, 0.75) 0%, rgba(244, 99, 121, 0.00) 56.77%)";
        option1.style.border = "solid 3px #FDC1CA";
        option2.style.border = "";
        option3.style.border = "";
        summer.style.color = "#E90125";
        btnBuy.style.background = "linear-gradient(267deg, #F46379 0%, #E90125 100%)";
        btnBuy.style.boxShadow = "0px 4px 40px 0px rgba(53, 130, 245, 0.24)";
        circleBlur.style.background = "radial-gradient(45.48% 50% at 50% 50%, rgba(233, 1, 37, 0.50) 0%, rgba(217, 217, 217, 0.00) 100%)"
        logo.style.fill = "#E90125";
        jordanRed.style.opacity = "1";
        jordanBlue.style.opacity = "0";
        jordanOrange.style.opacity = "0";
    }
    if (counter == 2) {
        number2.style.background = "#0779FE";
        number1.style.background = "";
        number3.style.background = "";
        circle.style.background = "linear-gradient(180deg, rgba(7, 121, 254, 0.75) 0%, rgba(99, 192, 244, 0.00) 77.08%)";
        option1.style.border = "";
        option2.style.border = "solid 3px #AAD1FF";
        option3.style.border = "";
        summer.style.color = "#0779FE";
        btnBuy.style.background = "linear-gradient(267deg, #5F90CB 0%, #0779FE 100%)";
        btnBuy.style.boxShadow = "0px 4px 40px 0px rgba(53, 130, 245, 0.24)";
        circleBlur.style.background = "radial-gradient(45.48% 50% at 50% 50%, rgba(7, 121, 254, 0.50) 0%, rgba(217, 217, 217, 0.00) 100%)"
        logo.style.fill = "#0779FE";
        // jordanRed.style.display = "none";
        // jordanBlue.style.display = "block";
        // jordanOrange.style.display = "none";
        jordanRed.style.opacity = "0";
        jordanBlue.style.opacity = "1";
        jordanOrange.style.opacity = "0";
    }
    if (counter == 3) {
        number3.style.background = "#F09E3E";
        number2.style.background = "";
        number1.style.background = "";
        circle.style.background = "linear-gradient(180deg, rgba(254, 141, 7, 0.75) 0%, rgba(254, 141, 7, 0.00) 68.75%)";
        option1.style.border = "";
        option2.style.border = "";
        option3.style.border = "solid 3px #FFE4C5";
        summer.style.color = "#FE8D07";
        btnBuy.style.background = "linear-gradient(267deg, #EFA043 0%, #FE8D07 100%)";
        btnBuy.style.boxShadow = "0px 4px 40px 0px rgba(53, 130, 245, 0.24)";
        circleBlur.style.background = "radial-gradient(45.48% 50% at 50% 50%, rgba(254, 141, 7, 0.50) 0%, rgba(217, 217, 217, 0.00) 100%)"
        logo.style.fill = "#FE8D07";
        // jordanRed.style.display = "none";
        // jordanBlue.style.display = "none";
        // jordanOrange.style.display = "block";
        jordanRed.style.opacity = "0";
        jordanBlue.style.opacity = "0";
        jordanOrange.style.opacity = "1";
    }
}


//LOADING

let loading = document.querySelector(".loading");
let container = document.querySelector(".container");
let leg = document.querySelector(".leg")
let collections = document.querySelector(".collections")

setTimeout(function () {
    loading.style.display = "none";
    container.style.display = "block";
    jordanRed.style.animation = "moveDown 1.5s linear";
    leg.style.animation = "moveLeft 1.5s linear";
    summer.style.animation = "moveUp 1.5s linear";
    collections.style.animation = "moveUp 1.5s linear";
    if (window.innerWidth > 700) {
        option1.style.animation = "moveRight 1.5s linear";
        option2.style.animation = "moveRight 1.5s linear";
        option3.style.animation = "moveRight 1.5s linear";
    }
}, 5000);



let startTouchPositionX;
let endTouchPositionX;

// Agrega el evento touchstart al círculo
circle.addEventListener('touchstart', function (event) {
    // Almacena la posición X del toque inicial
    startTouchPositionX = event.touches[0].clientX;
}, false);

// Agrega el evento touchmove al círculo
circle.addEventListener('touchmove', function (event) {
    // Almacena la posición X del toque final
    endTouchPositionX = event.touches[0].clientX;
    console.log("hola")
}, false);

// Agrega el evento touchend al círculo
circle.addEventListener('touchend', function (event) {
    // Calcula la diferencia entre el toque inicial y final
    let difference = startTouchPositionX - endTouchPositionX;

    console.log(difference)
    // Si la diferencia es negativa, el usuario deslizó hacia la izquierda
    if (difference < 0) {
        if (counter > 1) {
            counter--
            change()
        }
    }
    // Si la diferencia es positiva, el usuario deslizó hacia la derecha
    else if (difference > 0) {
        console.log("derecha")
        if (counter < 3) {
            counter++
            change()
        }
    }
}, false);
