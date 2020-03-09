const userInput = document.querySelector("#userInput");

const addItemHandler = event => {
  event.preventDefault();

  const list = document.querySelector("#list");
  const listItem = document.createElement("li");
  const buttonDELETE = document.createElement("button");
  const buttonEDIT = document.createElement("button");

  if (userInput.value.trim() === "") {
    alert("შეიყვანე რამე");
  } else {
    listItem.textContent = userInput.value;
    buttonDELETE.textContent = "DELETE";
    buttonEDIT.textContent = "EDIT";
    listItem.append(buttonDELETE, buttonEDIT);
    list.append(listItem);
  }

  buttonDELETE.addEventListener("click", deleteMovieHandler);
  buttonEDIT.addEventListener("click", renameItemHander);
};

const deleteMovieHandler = e => {
  e.target.parentNode.remove();
};

const renameItemHander = e => {
  e.target.parentNode.firstChild.textContent = prompt("change items name");
};
