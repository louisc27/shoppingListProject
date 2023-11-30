const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter')



// Function to add items to list
function onAddItemSubmit(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  // Validate Input
  if (newItem === '') {
    alert('List is empty');
    return;
  }
// create item dom element
addItemToDOM(newItem);
 
//add item to local storage
addItemToStorage(newItem);

 checkUI();

 itemInput.value = '';
}

function addItemToDOM(item){
  const li = document.createElement('li');
  
  li.appendChild(document.createTextNode(item));
 
  
  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);
 
  itemList.appendChild(li);
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

function getItemsFromStorage(){
  let itemsFromStorage;
// Check storage for variables
  if(localStorage.getItem('items') === null){
    //if there are none set to an empty array
    itemsFromStorage = [];
  } else {
    //if there are items in storage parse into an array
    itemsFromStorage = JSON.parse(localStorage.getItem('items'));
  }
  return item
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

function addItemToStorage(item){
  //initialize variable

  const itemsFromStorage = getItemsFromStorage();

// add new item to array
  itemsFromStorage.push(item);

  // Convert To JSON string and set to local storage
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function clearItem(){
  while(itemList.firstChild){
    itemList.removeChild(itemList.firstChild);
  }
  checkUI();
}

function filterItems(e){
  const items = itemList.querySelectorAll('li');
  const text = e.target.value.toLowerCase();

  items.forEach(item => {
    const itemName = item.firstChild.textContent.toLocaleLowerCase();

    if(itemName.indexOf(text) != -1){
      
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
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
itemForm.addEventListener('submit', onAddItemSubmit);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItem);
itemFilter.addEventListener('input', filterItems);

checkUI();

/*
localStorage Methods

localStorage.setItem('name','Robert');   Set value with a key
localStorage.getItem('name');            Get value using the key
localStorage.removeItem('name');         Remove item using the key
localStorage.clear();                    Clear all values

check localStorage in console by visiting the application tab

*/ 