const submit = document.querySelector("#FormSubmit");
let userInput = document.querySelector("#userInput");

const addList = event => {
  event.preventDefault();

  let list = document.querySelector("#list");
  let listItem = document.createElement("li");
  if (userInput.value.trim() === "") {
    return;
  } else {
    listItem.textContent = userInput.value;
    list.append(listItem);
  }
};
