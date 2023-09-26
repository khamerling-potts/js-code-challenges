/* 
  Create a search feature. When the user makes a change to the input field,
  capture the user input and use it to filter through the products - this should happen in real time (which event type listens for).
  Then list the products on the page that pass the filter - remember to account for letter case. 
  You should allow products that contain **ALL of the letters in order in the input to pass the filter. 
  Use a h3 tag for the product name and a p tag for the category.
  */

const products = [
    { id: 1, name: "Apple", category: "Fruits" },
    { id: 2, name: "Banana", category: "Fruits" },
    { id: 3, name: "Carrot", category: "Vegetables" },
    { id: 4, name: "Tomato", category: "Vegetables" },
    { id: 5, name: "Orange", category: "Fruits" },
    { id: 6, name: "Broccoli", category: "Vegetables" },
  ];
  
  