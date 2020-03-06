let userInput = document.querySelector("#userInput");

const addItemHandler = event => {
  event.preventDefault();

  let list = document.querySelector("#list");
  let listItem = document.createElement("li");

  if (userInput.value.trim() === "") {
    alert("შეიყვანე რამე");
  } else {
    listItem.textContent = userInput.value;
    list.append(listItem);
  }
  listItem.addEventListener("click", deleteMovieHandler);
};

const deleteMovieHandler = e => e.target.remove();
