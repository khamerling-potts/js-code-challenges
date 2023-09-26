/* First create a function that will render the people array to the DOM - "{name} is {age} years old."
Check the HTML file to see what element you should be appending them to.
Then write the code that will allow the user to click the button and
sort the people by age in ascending order.
 */

const peopleArr = [
  { id: 1, name: "Maria", age: 32 },
  { id: 2, name: "Ryan", age: 37 },
  { id: 3, name: "Zoe", age: 11 },
  { id: 5, name: "Adette", age: 9 },
  { id: 6, name: "Gio", age: 15 },
];

const ul = document.getElementById("list");
const sortButton = document.getElementById("sortButton");

function renderPeople() {
  peopleArr.forEach((person) => {
    const li = document.createElement("li");
    li.innerText = `${person.name} is ${person.age} years old.`;
    ul.append(li);
  });
}

sortButton.addEventListener("click", (event) => {
  ul.innerHTML = "";
  peopleArr.sort((a, b) => a.age - b.age);
  // peopleArr.sort((a, b) => {
  //   if (a.age < b.age) {
  //     return -1;
  //   } else if (a.age > b.age) {
  //     return 1;
  //   } else {
  //     return 0;
  //   }
  // });
  renderPeople();
});

renderPeople();
