const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter')



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
// Add li to the DOM
 itemList.appendChild(li);

 checkUI();

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

function removeItem(e){
  //if the targeted events parent element contains the class of remove-item
  if (e.target.parentElement.classList.contains('remove-item')){
    //within the event parameter target the parent element (button) then the parent element of that (the list item) then remove it
    if(confirm('Are you sure?')){
    e.target.parentElement.parentElement.remove();

    checkUI();
    }
  }
}

function clearItem(){
  while(itemList.firstChild){
    itemList.removeChild(itemList.firstChild);
  }
  checkUI();
}

function checkUI(){
  const items = itemList.querySelectorAll('li');
  if(items.length === 0){
    clearBtn.style.display = 'none';
    itemFilter.style.display = 'none';
  } else {
    clearBtn.style.display = 'block';
    itemFilter.style.display = 'block';
  }
}



//Event Listeners
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItem);

checkUI();