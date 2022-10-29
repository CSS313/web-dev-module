var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var listItems = document.querySelectorAll('.list-group-item')


// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);

// Load event to add edit buttons
window.addEventListener('load', (event) => {
    for(var i = 0; i < listItems.length; i++) {
    addEditBtn(listItems[i])
    };
})

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');

  // Add class
  li.className = 'list-group-item';

  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);

  addEditBtn(li)
}

function addEditBtn(li) {
    // Add Edit Button to existing list items
    // Create Edit Button
    var editBtn = document.createElement('button');

    // Add classes to edit button
    editBtn.className = 'btn btn-success btn-sm float-right edit';

    // Append text node
    editBtn.appendChild(document.createTextNode('Edit'));

    // Append button to li
    li.appendChild(editBtn);

    // Append li to list
    itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
