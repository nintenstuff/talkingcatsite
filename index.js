const catstyle = document.getElementById("kitty");

function meow() {
    catstyle.style.width = "25%";

    let x = Math.floor(Math.random() * 100);
    console.log(x);

    if (x == 0) {
        document.getElementById("notacat").play();
        catstyle.src = "img/mischevous-smile.png"
    } else if (x > 0 && x < 51) {
        document.getElementById("cat").play();
        catstyle.src = "img/LOGOend.png";
    } else if (x > 50 && x < 100) {
        document.getElementById("cat2").play();
        catstyle.src = "img/LOGOend.png";
    }

    setTimeout(reset, 500);
}

function reset() {
    catstyle.style.width = "";
}