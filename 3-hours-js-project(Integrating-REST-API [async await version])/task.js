//Select DOM
const expenseInput = document.querySelector('#expenses')
const descriptionInput = document.querySelector('#description')
const expenseTypeInput = document.querySelector('#expense-type')
const addBtn = document.querySelector('#add-btn')
const expenseList = document.querySelector('.expense-list')


//Add event listeners
document.addEventListener('DOMContentLoaded', getExpenses)
addBtn.addEventListener('click', addExpense)



//Fuctions

async function getExpenses() {
    const response = await axios.get("https://crudcrud.com/api/f06d6c8f923f427ea4d5be77f19af584/expenseData")
         try {
            for(let i = 0; i < response.data.length; i++) {
                showExpenses(response.data[i])
            }    
         } catch (error) {
            console.log(error)
         }
}

function addExpense(event) {
    //Prevent default behaviour
    event.preventDefault()

    //Create dynamic id from date
    // const id = new Date().getTime().toString()

    //Extract values from input fields
    const expense =  expenseInput.value
    const description = descriptionInput.value
    const expenseType = expenseTypeInput.value

    //Create object of data to be stored in crudcrud
    const expenseObj = {
        // id,
        expense,
        description,
        expenseType
    }

    saveToCrudCrud(expenseObj)  
}

function showExpenses(expenseObj) {
     //Create expense div
     const expenseDiv = document.createElement('div')
     expenseDiv.classList.add('expense-div')
     expenseDiv.setAttribute("id", expenseObj._id)
     
     //Create list
     const newExpense = document.createElement("li");
     newExpense.innerText = expenseObj.expense
 
     const newDescription = document.createElement("li")
     newDescription.innerText = expenseObj.description
 
     const newExpenseTypeInput = document.createElement("li")
     newExpenseTypeInput.innerText = expenseObj.expenseType
 
     expenseDiv.appendChild(newExpense)
     expenseDiv.appendChild(newDescription)
     expenseDiv.appendChild(newExpenseTypeInput)
 
     //Create delete Button
     const deleteButton = document.createElement("button")
     deleteButton.innerText = 'Delete'
     deleteButton.classList.add("delete-btn")
     expenseDiv.appendChild(deleteButton)
 
     //Add event listener to delete button
     deleteButton.addEventListener('click', (event) => {
        deleteExpense(event,expenseObj._id)
     })
 
     //Create edit button
     const editButton = document.createElement("button")
     editButton.innerText = 'Edit'
     editButton.classList.add('edit-btn')
     expenseDiv.appendChild(editButton)
 
     //Add event listener to edit button
     editButton.addEventListener('click', (event) => {
        editExpense(event, expenseObj)
     })
     
     //Attach final expense, description and expenseType
     expenseList.appendChild(expenseDiv)
 
     
     expenseInput.value = ''
     descriptionInput.value = ''
     expenseTypeInput.value = ''
}


async function saveToCrudCrud(expenseObj) {
    try {
        const response = await axios.post("https://crudcrud.com/api/f06d6c8f923f427ea4d5be77f19af584/expenseData", expenseObj)

        showExpenses(response.data)
    } catch (error) {
        console.log(error)
    }
}

async function deleteExpense(event, id) {
    try {
        const response = await axios.delete(`https://crudcrud.com/api/f06d6c8f923f427ea4d5be77f19af584/expenseData/${id}`)
       
        const toRemove = event.target.parentElement
        toRemove.remove()
    } catch (error) {
        console.log(error)
    }
    
}

function editExpense(event, expenseObj) {
    
    //Populate input fields with corresponding values from required object
    expenseInput.value = expenseObj.expense
    descriptionInput.value = expenseObj.description
    expenseTypeInput.value = expenseObj.expenseType

    //Delete specified object from crudcrud's expenseData resource
    deleteExpense(event, expenseObj._id)

    //Remove required object's data from screen
    // const toRemove = event.target.parentElement
    // toRemove.remove()
}
