// Your code goes here

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("text").textContent = "This is really cool!"
    console.log("The DOM has loaded");
});

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);

function lab() {
    document.getElementById("text").textContent = "This is really cool!"
}


//   paragraph element with id="text" and replace the text with "This is really cool!"

// doc = document.createElement("p")
// doc.textContent = "This is Really cool!"