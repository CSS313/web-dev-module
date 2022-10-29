var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var listItems = document.querySelectorAll('.list-group-item')
var filter = document.getElementById('filter');
var description = document.getElementById('description')


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

// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('item').value;

    // Get input value from description field
    var desItem = description.value;

    // Create new li element
    var li = document.createElement('li');

    // Add class
    li.className = 'list-group-item';

    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create linebreak element
    var linebreak = document.createElement("br");

    // Add linebreak between two input text fields
    li.appendChild(linebreak);

    // Add text node with description input value
    li.appendChild(document.createTextNode(desItem));

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

// Filter Items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();

    // Get lis
    var items = itemList.getElementsByTagName('li');
    
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      var desItemName = item.childNodes[2].textContent

      if(itemName.toLowerCase().indexOf(text) != -1 || desItemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
        
      } else {
        item.style.display = 'none';
      }
    });
  }

