export function renderAbout() {
    const aboutContainer = document.createElement("div");
    aboutContainer.id = "about-container";

    const aboutInfo = document.createElement("div");
    aboutInfo.id = "about-info";
    aboutContainer.appendChild(aboutInfo);

    const aboutTitle = document.createElement("h1");
    aboutTitle.id = "about-title";
    aboutTitle.textContent = "About Us";
    aboutInfo.appendChild(aboutTitle);

    const aboutDetails = document.createElement("p");
    aboutDetails.id = "about-details";
    aboutDetails.innerHTML = `
       <strong>Our Story:</strong> At The Marble Table, we believe in the power of food to bring people together. Founded on the timeless principles of hospitality and authentic cooking, The Marble Table Eatery stands as a testament to our family’s heritage. The original recipes, passed down through generations, are the heart and soul of our kitchen. We honor our past by sourcing the freshest ingredients and preparing each dish with the same unwavering attention to detail as our founders once did. Our warm, inviting atmosphere is designed to feel like an extension of our own home, offering a sanctuary from the bustle of the world outside. Here, tradition isn't just a word—it's the flavor on your fork. 

       <br><br>
       <strong>Our Mission:</strong> To provide an unforgettable dining experience through exceptional service, a welcoming atmosphere, and a menu that celebrates the best of local and seasonal ingredients.
         <br><br>
         <strong>Join Us:</strong> Whether you're here for a casual meal with friends or a special celebration, we invite you to experience the magic of The Marble Table. We look forward to serving you soon!
        
    `;
    aboutInfo.appendChild(aboutDetails);

    return aboutContainer;
};
