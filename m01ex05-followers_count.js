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
        alert("Your instagram post have 10 followers! Congratulations");
    } else if (count === 20) {
        alert("Your instagram post have 20 followers! Congratulations");
    } else if (count > 100) {
        alert("Your instagram post have 100+ followers! Congratulations");
    }
}