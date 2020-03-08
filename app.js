let userInput = document.querySelector("#userInput");

const addItemHandler = event => {
  event.preventDefault();

  let list = document.querySelector("#list");
  let listItem = document.createElement("li");
  const buttonDELETE = document.createElement("button");

  if (userInput.value.trim() === "") {
    alert("შეიყვანე რამე");
  } else {
    listItem.textContent = userInput.value;
    buttonDELETE.textContent = "DELETE";
    listItem.append(buttonDELETE);
    list.append(listItem);
  }

  buttonDELETE.addEventListener("click", deleteMovieHandler);
};

const deleteMovieHandler = e => {
  e.target.parentNode.remove();
};
