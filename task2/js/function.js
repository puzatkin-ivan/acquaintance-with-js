
List();

function cleanList() {
  let parent = document.getElementById("list");

  while (parent.childNodes.length != 0) {
    parent.removeChild(parent.lastChild);
  }

  return document.getElementById("list").childNodes.length
}

function addListItem(numberItem) {
  let parent = document.getElementById("list");
  let li = document.createElement('li');  
  let checkboxItem = document.createElement('input');
  let textItem =  document.createElement('input');
  let textElem = document.createTextNode('Item' + numberItem);

  textItem.type = "text";
  textItem.id = "textItem" + numberItem;  
  textItem.value = "Item" + numberItem;

  checkboxItem.type = "checkbox";
  checkboxItem.id = "box" + numberItem;
  li.id = "item" + numberItem;

  li.appendChild(checkboxItem);
  li.appendChild(textItem);
  parent.appendChild(li);
}

function removeItem() {
  let lengthList = document.getElementById("list").childNodes.length; 
  if (lengthList != 0) {
    let numberItem = 1;
    let item = document.getElementById("box" + numberItem);
    let buttonRemove = document.getElementById("buttonRemoveItems"); 

    buttonRemove.disabled = false;
  }  
}

function List() {
  let buttonAdd = document.getElementById("buttonAddItem");
  let buttonClean = document.getElementById("buttonCleanList")
  let buttonRemove = document.getElementById("buttonRemoveItems");  
  let numberItem = 1; 

  buttonAdd.onclick = function add() { 
    let lengthList = document.getElementById("list").childNodes.length; 
    
    if (lengthList == 0) {
      numberItem = 1;
    }

    addListItem(numberItem);
    ++numberItem
  }

  buttonClean.onclick = cleanList;
}