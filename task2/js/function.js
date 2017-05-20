function addListItem() {
  let parent = document.getElementById("list");
  let numberItem = ++parent.childNodes.length;
  let li = document.createElement('li');
  let inputItem = document.createElement('input');
  let textElem = document.createTextNode('Item');
  let textElemNum = document.createTextNode(numberItem);

  li.appendChild(textElem);
  li.appendChild(textElemNum);
  parent.appendChild(li);
}

function cleanList() {
  let parent = document.getElementById("list");

  while (parent.childNodes.length != 0) {
    parent.removeChild(parent.lastChild);
  }
}
