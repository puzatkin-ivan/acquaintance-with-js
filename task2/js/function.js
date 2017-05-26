createList();

function createList() {
  let buttonAdd = document.getElementById("buttonAddItem");
  let buttonClean = document.getElementById("buttonCleanList");
  let buttonRemove = document.getElementById("buttonRemoveItems");
  let numberItem = 1;

  buttonAdd.addEventListener("click", function () {
    addListItem(numberItem);
    ++numberItem;
  });
  buttonClean.addEventListener("click", function () {
    cleanList();
    numberItem = 1;
  });
  buttonRemove.addEventListener("click", removeItem);
}

function addListItem(numberItem) {
  let parent = document.getElementById("list");
  let li = document.createElement('li');
  let checkboxItem = document.createElement('input');
  let textItem =  document.createElement('input');

  textItem.type = "text";
  textItem.id = "textItem" + numberItem;
  textItem.value = "Item" + numberItem;

  checkboxItem.type = "checkbox";
  checkboxItem.id = "box" + numberItem;
  li.id = "item" + numberItem;
  li.type = "none";

  checkboxItem.addEventListener("click", includeButtonRemove);
  li.appendChild(checkboxItem);
  li.appendChild(textItem);
  parent.appendChild(li);
}

function includeButtonRemove() {
  let buttonRemove = document.getElementById("buttonRemoveItems");

  buttonRemove.disabled = false;
}

function cleanList() {
  let parent = document.getElementById("list");
  let buttonRemove = document.getElementById("buttonRemoveItems");

  while (parent.childNodes.length !== 0) {
    let item = parent.lastChild;
    let checkboxItem = item.firstChild;

    checkboxItem.removeEventListener("click", includeButtonRemove());
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
      checkboxItem.removeEventListener("click", includeButtonRemove());
      item.remove();
    }

    numberItem = numberItem - 1;
  }

  buttonRemove.disabled = "true";
}