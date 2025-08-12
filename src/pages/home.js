import restaurantImage from "../images/restaurant-img.jpg";
export function renderHome() {
const home = document.createElement("div");
home.id = "home";

const contentDiv = document.getElementById("content");

const image = document.createElement("img");
image.id = "restaurant-image";
image.src = restaurantImage;
image.alt = "Restaurant Image";

const homeDetails = document.createElement("div");
homeDetails.id = "home-details";
homeDetails.innerHTML = `
<h1>Welcome to The Marble Table Eatery</h1>
<p>Experience the best culinary delights with exquisite flavors of our dishes. Enjoy our delicious food prepared with the finest ingredients and by our talented chefs. The atmosphere is warm and inviting, perfect for a memorable meal. We pride ourselves on our exceptional service.</p>
`;

contentDiv.appendChild(home);
home.appendChild(image);
home.appendChild(homeDetails);
return home; // Return the home element for further manipulation if needed
};