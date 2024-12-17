function goDark() {
    document.body.className = ' dark '
}

function typeandscream() {
    var personName = document.getElementById("name").value;

    alert("I told you not to click " + personName);

    document.getElementById("audio").play();

}

function Finishstory() {
    document.getElementById("story").innerHTML = 'So I carefully searched the damp dungeon and there you are !';

}

function findclue() {
    document.getElementById("clue").classList.remove("hidden");

}