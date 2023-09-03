document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    

    // Load existing contacts from local storage
    let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    console.log(contacts);

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get the form input values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Create a contact object
        const contact = {
            name,
            email,
            message,
        };

        console.log(contact);

        // Add the new contact to the list
        contacts.push(contact);
        console.log(typeof contacts)

        // Save the updated contacts list to local storage
        localStorage.setItem("contacts", JSON.stringify(contacts));

        // Clear the form inputs
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";

        alert("Thank you for your message! We will get back to you soon.");
        window.location.reload();
    });
});
