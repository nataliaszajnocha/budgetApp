var incomingsList = document.querySelector('#incomingsList')
var addIncoming = document.querySelector('#addIncoming')
var outgoingsList = document.querySelector('#outgoingsList')
var addOutgoing = document.querySelector('#addOutgoing')
var budgetBalance = document.querySelector(".budgetBalance")
var deleteBtn=document.querySelector(".deleteBtn")
var state = {
  incomings: [
],
  outgoings: [
]
}

renderApp()

function renderApp() {
  renderUI()
  renderSumUI()
  renderOUT()
  renderSumOUT()
  // addBalance()
}

function renderUI() {
  incomingsList.innerHTML = ""
  
  state.incomings.forEach(item => {
    var liInnerHTML = `
        <li data-name="${item.name}">
          ${item.name} - ${item.amount}zl 
          <button class="editBtn">Edytuj</button> 
          <button class="deleteBtn">Usun</button>
        </li>
    `

    incomingsList.setAttribute("style", "font-size:1.5rem; margin-left:20px 20px; color: #14A76C");
    
    var newLi = document.createElement("li")
    newLi.innerHTML = liInnerHTML
    incomingsList.append(newLi)
  })
}
function renderOUT() {

  outgoingsList.innerHTML = ""
  
  state.outgoings.forEach(item => {
    var liInnerHTML = `
        <li data-name="${item.name}">
          ${item.name} - ${item.amount}zl 
          <button class="editBtn">Edytuj</button> 
          <button class="deleteBtn">Usun</button>
        </li>
    `
    
    outgoingsList.setAttribute("style", "font-size:1.5rem; margin-left:20px 20px; color: #14A76C;");
    
    var newLi = document.createElement("li")
    newLi.innerHTML = liInnerHTML
    outgoingsList.append(newLi)
  })
}
// 

function renderSumUI() {
  var incomingsSum = document.querySelector('#incomingsSum')
  incomingsSum.innerHTML = `Suma przychodów: ${sum(state.incomings)}zl`
}
function renderSumOUT (){// TODO: outgoingsSum update
  var outgoingsSum = document.querySelector('#outgoingsSum')
  outgoingsSum.innerHTML = `Suma wydatków: ${sum(state.outgoings)}zl`
}


function sum(arr) {
  return arr.reduce((acc, item) => acc + item.amount, 0)
}


// ADD NEW ITEM

addIncoming.addEventListener('click', addNewItem)
addOutgoing.addEventListener('click', addNewItem2)


function addNewItem(e) {
  e.preventDefault()
  
  var newName = document.querySelector('#newName').value
  var newAmount = Number(document.querySelector('#newAmount').value)
  var newItem = {name: newName, amount: newAmount}
  state.incomings.push(newItem) //update of data (danych)


  renderApp()
}


function addNewItem2(e) {
  e.preventDefault()
  
  var newName2 = document.querySelector('#newName2').value
  var newAmount2 = Number(document.querySelector('#newAmount2').value)
  var newItem2 = {name: newName2, amount: newAmount2}
  state.outgoings.push(newItem2) //update of data (danych)

  renderApp()
}
