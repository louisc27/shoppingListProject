const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');


// Function to add items to list
function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  // Validate Input
  if (newItem === '') {
    alert('List is empty');
    return;
  }


  //Create list items
 const li = document.createElement('li');
 // Place text in list item
 li.appendChild(document.createTextNode(newItem));

 
 const button = createButton('remove-item btn-link text-red');
 li.appendChild(button);

 itemList.appendChild(li);

 itemInput.value = '';
}

// Function to create buttons
function createButton(classes){
  const button = document.createElement('button');
  button.className = classes;
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}

// Function to create icons

function createIcon(classes){
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

//Event Listeners
itemForm.addEventListener('submit', addItem);