const toggleButton1 = document.getElementById("toggle-cart");
const mySection1 = document.getElementById("cart");

// Add a click event listener to the button
toggleButton1.addEventListener("click", function () {
    // Toggle the display property of the section
    if (mySection1.style.display === "none" || mySection.style.display === "") {
        mySection1.style.display = "flex"; // Show the section
        mySection1.style.alignItems = "center";
    } else {
        mySection1.style.display = "none"; // Hide the section
    }
});