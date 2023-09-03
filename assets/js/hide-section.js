const toggleButton = document.getElementById("toggle-button");
const mySection = document.getElementById("table-data");

// Add a click event listener to the button
toggleButton.addEventListener("click", function () {
    let initialButtonText = "Show Messages";
        // Alternate button text
    let alternateButtonText = "Hide Messages";
    // Check the current button text
    if (toggleButton.textContent === initialButtonText) {
        // Change the button text to the alternate text
        toggleButton.textContent = alternateButtonText;
    } else {
        // Change the button text back to the initial text
        toggleButton.textContent = initialButtonText;
    }
    // Toggle the display property of the section
    if (mySection.style.display === "none" || mySection.style.display === "") {
        mySection.style.display = "flex"; // Show the section
    } else {
        mySection.style.display = "none"; // Hide the section
    }
});