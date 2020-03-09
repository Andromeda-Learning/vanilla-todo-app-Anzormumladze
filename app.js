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
    buttonEDIT.textContent = "EDIT";
    buttonDELETE.textContent = "DELETE";
    listItem.append(buttonDELETE);
    list.append(listItem);
  }

  buttonEDIT.addEventListener("click", renameItemHander);
  buttonDELETE.addEventListener("click", deleteMovieHandler);
};

const deleteMovieHandler = e => {
  e.target.parentNode.remove();
};

const renameItemHandler = e => {
  e.target.parentNode.firstChild.textContent = prompt("change items name");
};
