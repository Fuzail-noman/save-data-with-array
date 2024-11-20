var dataArray = []; // Array to store the data

// Function to add an item to the array and display it
function addItem() {
  var input = document.getElementById('userInput');
  var value = input.value.trim();

  if (value === '') {
    alert('Please enter some text!');
    return;
  }

  // Add value to array
  dataArray.push(value);

  // Update the UI
  renderList();

  // Clear input field
  input.value = '';
}

// Function to delete an item from the array
function deleteItem(index) {
  // Remove item from array
  dataArray.splice(index, 1);

  // Update the UI
  // renderList();
}

// Function to render the list
function renderList() {
  var list = document.getElementById('itemList');
  list.innerHTML = ''; // Clear the existing list

  // Render each item
  dataArray.forEach((item, index) => {
    var listItem = document.createElement('li');
    listItem.className = 'item';

    listItem.innerHTML = `
      <span>${item}</span>
      <button class="delete-btn" onclick="deleteItem(${index})">Delete</button>
    `;

    list.appendChild(listItem);
  });
}
var str = " Hello, World! ";
var trimmedStr = str.trim();
console.log(trimmedStr); 