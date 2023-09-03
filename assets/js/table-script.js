document.addEventListener("DOMContentLoaded", function () {
    const contactTable = document.getElementById("contact-table").getElementsByTagName('tbody')[0];

    // Function to load and display contacts
    function loadContacts() {
        let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

        contactTable.innerHTML = "";

        contacts.forEach(function (contact, index) {
            const row = contactTable.insertRow();

            const nameCell = row.insertCell(0);
            const emailCell = row.insertCell(1);
            const messageCell = row.insertCell(2);
            const actionCell = row.insertCell(3);

            nameCell.innerHTML = contact.name;
            emailCell.innerHTML = contact.email;
            messageCell.innerHTML = contact.message;

            // Create a "Delete" button for each contact
            const deleteButton = document.createElement("button");
            deleteButton.innerText = "Delete";
            deleteButton.addEventListener("click", function () {
                deleteContact(index); // Pass the correct index
            });

            actionCell.appendChild(deleteButton);
        });
    }

    // Initial loading of contacts
    loadContacts();

    // Function to delete a contact from local storage
    function deleteContact(index) {
        let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

        // Remove the contact at the specified index
        console.log(contacts.splice(index, 1));
        console.log(contacts);
        localStorage.clear();
        let x = [];
        x = contacts;
        console.log(x);

        // Store the updated array back in local storage
        localStorage.setItem("contacts", JSON.stringify(x));
        console.log(JSON.parse(localStorage.getItem("contacts")) );

        // Refresh the contact table with the latest data
        loadContacts();
        window.location.reload();
    }
});
