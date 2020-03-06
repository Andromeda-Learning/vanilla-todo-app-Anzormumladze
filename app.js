let userInput = document.querySelector("#userInput");
let list = document.querySelector("#list");
let listItem = document.createElement("li");

const addItemHandler = event => {
  event.preventDefault();

  if (userInput.value.trim() === "") {
    return;
  } else {
    listItem.textContent = userInput.value;
    list.append(listItem);
  }
};
