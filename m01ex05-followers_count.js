let count = 0;

function increaseCount() {
    count++;
    displayCount();
    checkCountValue();
}

function displayCount() {
    document.getElementById("countDisplay").innerHTML = count;
}

function checkCountValue() {
    if (count === 10) {
        alert("Your instagram post have 10 followers! Congratulations!");
    } else if (count === 20) {
        alert("Your instagram post have 20 followers! Good job!");
    } else if (count === 100) {
        alert("Wow, your instagram post reached 100 followers! Keep it up");
    }
}

function resetCount() {
    count = 0;
    displayCount();
    alert("This post makes you lose all your followers... but you don't need it");
}