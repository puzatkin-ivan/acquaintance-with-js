createList();

function createList() {
  let buttonAdd = document.getElementById("buttonAddItem");
  let buttonClean = document.getElementById("buttonCleanList");
  let buttonRemove = document.getElementById("buttonRemoveItems");
  let numberItem = 1;

  buttonAdd.addEventListener("click", function() {
    addListItem(numberItem);
    ++numberItem;
  });
  buttonClean.addEventListener("click", function() {
    cleanList();
    numberItem = 1;
  });
  buttonRemove.addEventListener("click", removeItem);
}

function addListItem(numberItem) {
  let parent = document.getElementById("list");
  let li = document.createElement('li');
  let checkboxItem = document.createElement('input');
  let textItem = document.createElement('input');

  textItem.type = "text";
  textItem.id = "textItem" + numberItem;
  textItem.value = "Item" + numberItem;
  textItem.addEventListener("keydown", function() {
    editListItem(textItem);
  });

  checkboxItem.type = "checkbox";
  checkboxItem.name = "box";
  li.id = "item" + numberItem;
  li.type = "none";

  checkboxItem.addEventListener("click", function() {
    enableButtonRemove();
  });
  li.appendChild(checkboxItem);
  li.appendChild(textItem);
  parent.appendChild(li);
}

function enableButtonRemove() {
  let buttonRemove = document.getElementById("buttonRemoveItems");
  let inputCheckbox = document.getElementsByName("box")
  let numberCheckbox = inputCheckbox.length;

  while (numberCheckbox !== 0) {
    let inputCheckboxItem = inputCheckbox[numberCheckbox - 1];
    if (inputCheckboxItem.checked) {
      buttonRemove.disabled = false;
      break;
    } else {
      buttonRemove.disabled = true;
    }
    numberCheckbox = numberCheckbox - 1;
  }
}

function cleanList() {
  let parent = document.getElementById("list");
  let buttonRemove = document.getElementById("buttonRemoveItems");

  while (parent.childNodes.length !== 0) {
    let item = parent.lastChild;
    let checkboxItem = item.firstChild;

    checkboxItem.removeEventListener("click", enableButtonRemove);
    parent.removeChild(item);
  }

  buttonRemove.disabled = true;
}

function removeItem() {
  let parent = document.getElementById("list");
  let numberItem = parent.childNodes.length;
  let buttonRemove = document.getElementById("buttonRemoveItems");

  while (numberItem !== 0) {
    let item = parent.childNodes[numberItem - 1];
    let checkboxItem = item.firstChild;

    if (checkboxItem.checked) {
      checkboxItem.removeEventListener("click", enableButtonRemove);
      item.remove();
    }

    numberItem = numberItem - 1;
  }

  buttonRemove.disabled = true;
}

function editListItem(input) {
  let key = window.event.keyCode;

  if (key === 13) {
    input.disabled = true;
  }
}