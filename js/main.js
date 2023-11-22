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
}

// Function to create buttons
function createButton(classes){
  const button = document.createElement();
}

//Event Listeners
itemForm.addEventListener('submit', addItem);