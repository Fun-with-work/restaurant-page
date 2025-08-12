export function renderContact() {
    const contactContainer = document.createElement("div");
    contactContainer.id = "contact-container";

    const contactInfo = document.createElement("div");
    contactInfo.id = "contact-info";
    contactContainer.appendChild(contactInfo);

    const contactTitle = document.createElement("h1");
    contactTitle.id = "contact-title";
    contactTitle.textContent = "Contact Us";
    contactInfo.appendChild(contactTitle);

    const contactDetails = document.createElement("p");
    contactDetails.id = "contact-details";
    contactDetails.innerHTML = `
        <strong>Phone:</strong> (123) 456-7890<br>
        <strong>Email:</strong> info@marbletable.com<br>
        <strong>Address:</strong> 123 Marble St, Foodie City, FC 12345
    `;
    contactInfo.appendChild(contactDetails);

    return contactContainer;
};
