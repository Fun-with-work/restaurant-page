import { garlicBreadImg, spaghettiImg, chickenAlfredoImg, cremeBruleeImg } from "./menu-imgs.js"; 


export function renderMenu() {

    const menuContainer = document.createElement("div");
    menuContainer.id = "menu-container";

    const menuImagesContainer = document.createElement("div");
    menuImagesContainer.id = "menu-images-container";
   
    const menu = document.createElement("div");
    menu.id = "menu";
    menuContainer.appendChild(menu);

    const menuTitle = document.createElement("h1");
    menuTitle.id = "menu-title";
    menuTitle.textContent = "Menu";
    menu.appendChild(menuTitle);

    const appetizersTitle = document.createElement("h2");
    appetizersTitle.id = "appetizers-title";
    appetizersTitle.textContent = "Appetizers";
    menu.appendChild(appetizersTitle);

    const menuItemAppetizers = [
        { name: "Garlic Bread", price: 12.99},
        { name: "Stuffed Mushrooms", price: 9.99 },
        { name: "Antipasto Platter", price: 14.99 },
        { name: "Spinach Artichoke Dip", price: 8.99 },
        { name: "Caesar Salad", price: 8.99 },
    ];

    menuItemAppetizers.forEach(item => {
        const menuItemAppetizer = document.createElement("div");
        menuItemAppetizer.classList.add("menu-item");
        menuItemAppetizer.innerHTML = `
        <span class="item-name">${item.name}</span>
        <span class="item-price">$${item.price.toFixed(2)}</span>
    `;
        menu.appendChild(menuItemAppetizer);
    });

     const mainDishesTitle = document.createElement("h2");
    mainDishesTitle.id = "main-dishes-title";
    mainDishesTitle.textContent = "Main Dishes";
    menu.appendChild(mainDishesTitle);

    const mainDishItems = [
        { name: "Spaghetti Carbonara", price: 12.99 },
        { name: "Grilled Salmon", price: 15.99 },
        { name: "Chicken Parmesan", price: 13.99 },
        { name: "Vegetable Stir Fry", price: 11.99 },
        { name: "Pasta Primavera", price: 10.99 },
        { name: "Seafood Paella", price: 19.99 },
        { name: "Margherita Pizza", price: 11.99 },
        { name: "Chicken Alfredo", price: 12.49 },
        { name: "Vegetarian Lasagna", price: 10.49 },
        { name: "Beef Stroganoff", price: 14.49 },
        { name: "Shrimp Scampi", price: 17.49 },
        { name: "Stuffed Bell Peppers", price: 9.49 },
    ];

    mainDishItems.forEach(item => {
        const mainDishItem = document.createElement("div");
        mainDishItem.classList.add("menu-item");
        mainDishItem.innerHTML = `
        <span class="item-name">${item.name}</span>
        <span class="item-price">$${item.price.toFixed(2)}</span>
    `;
        menu.appendChild(mainDishItem);
    });
    
    const dessertsTitle = document.createElement("h2");
   dessertsTitle.id = "desserts-title";
   dessertsTitle.textContent = "Desserts";
   menu.appendChild(dessertsTitle);

   const dessertItems = [
       { name: "Fruit Tart", price: 4.99 },
         { name: "Tiramisu", price: 6.49 },
         { name: "Ice Cream Sundae", price: 4.49 },
         { name: "Creme Brulee", price: 7.49 },
   ];

   dessertItems.forEach(item => {
       const dessertItem = document.createElement("div");
       dessertItem.classList.add("menu-item");
       dessertItem.innerHTML = `
       <span class="item-name">${item.name}</span>
       <span class="item-price">$${item.price.toFixed(2)}</span>
   `;
       menu.appendChild(dessertItem);
   });

    const drinksTitle = document.createElement("h2");
    drinksTitle.id = "drinks-title";
    drinksTitle.textContent = "Drinks";
    menu.appendChild(drinksTitle);

    const drinkItems = [
        { name: "Coke", price: 1.99 },
        { name: "Sprite", price: 1.99 },
        { name: "Water", price: 0.99 },
        { name: "Coffee", price: 2.49 },
    ];

    drinkItems.forEach(item => {
        const drinkItem = document.createElement("div");
        drinkItem.classList.add("menu-item");
        drinkItem.innerHTML = `
        <span class="item-name">${item.name}</span>
        <span class="item-price">$${item.price.toFixed(2)}</span>
    `;
        menu.appendChild(drinkItem);
    });

    menuContainer.appendChild(menuImagesContainer);
    menuImagesContainer.appendChild(garlicBreadImg);
    menuImagesContainer.appendChild(spaghettiImg);
    menuImagesContainer.appendChild(chickenAlfredoImg);
    menuImagesContainer.appendChild(cremeBruleeImg);

    return menuContainer; // Return the menu container for further manipulation if needed

};