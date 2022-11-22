let totalAmount = document.getElementById("total-amount");
let userAmount = document.getElementById("user-amount");
const checkAmountButton = document.getElementById("check-amount");
const totalAmountButton = document.getElementById("total-amount-button");
const productTitle = document.getElementById("product-title");
const errorMessage = document.getElementById("budget-error");
const productTitleError = document.getElementById("product-title-error");
const productCostError = document.getElementById("product-cost-error");
const amount = document.getElementById("amount");
const expenditureValue = document.getElementById("expenditure-value");
const balanceValue = document.getElementById("balance-amount");
const list = document.getElementById("list");
var alldata1 = [];
var alldata2 = [];
let tempAmount = 0;

//Set Budget Part
totalAmountButton.addEventListener("click", () => {
  tempAmount = totalAmount.value;
  //empty or negative input
  if (tempAmount === "" || tempAmount < 0) {
    errorMessage.classList.remove("hide");
  } else {
    errorMessage.classList.add("hide");
    //Set Budget
    amount.innerHTML = tempAmount;
    //Set Balance
    balanceValue.innerText = tempAmount - expenditureValue.innerText;
    //Clear Input Box
    totalAmount.value = "";
  }
  
});

//Function To Disable Edit and Delete Button
const disableButtons = (bool) => {
  let editButtons = document.getElementsByClassName("edit");
  Array.from(editButtons).forEach((element) => {
    element.disabled = bool;
  });
};

//Function To Modify List Elements
const modifyElement = (element, edit = false) => {
  let parentDiv = element.parentElement;
  let currentBalance = balanceValue.innerText;
  let currentExpense = expenditureValue.innerText;
  let parentAmount = parentDiv.querySelector(".amount").innerText;
  if (edit) {
    let parentText = parentDiv.querySelector(".product").innerText;
    productTitle.value = parentText;
    userAmount.value = parentAmount;
    disableButtons(true);
  }
  balanceValue.innerText = parseInt(currentBalance) + parseInt(parentAmount);
  expenditureValue.innerText =
    parseInt(currentExpense) - parseInt(parentAmount);
  parentDiv.remove();
};

//Function To Create List
const listCreator = (expenseName, expenseValue) => {
  let sublistContent = document.createElement("div");
  sublistContent.classList.add("sublist-content", "flex-space");
  list.appendChild(sublistContent);
  sublistContent.innerHTML = `<p class="product">${expenseName}</p><p class="amount">${expenseValue}</p>`;
  let editButton = document.createElement("button");
  editButton.classList.add("fa-solid", "fa-pen-to-square", "edit");
  editButton.style.fontSize = "1.2em";
  editButton.addEventListener("click", () => {
    modifyElement(editButton, true);
  });
  let deleteButton = document.createElement("button");
  deleteButton.classList.add("fa-solid", "fa-trash-can", "delete");
  deleteButton.style.fontSize = "1.2em";
  deleteButton.addEventListener("click", () => {
    modifyElement(deleteButton);
  });
  sublistContent.appendChild(editButton);
  sublistContent.appendChild(deleteButton);
  document.getElementById("list").appendChild(sublistContent);
};

//Function To Add Expenses
checkAmountButton.addEventListener("click", () => {
  //empty checks
  if (!userAmount.value || !productTitle.value) {
    productTitleError.classList.remove("hide");
    return false;
  }
  //Enable buttons
  disableButtons(false);
  //Expense
  let expenditure = parseInt(userAmount.value);
  let pd = parseInt(productTitle.innerText);
  //Total expense (existing + new)
  let sum = parseInt(expenditureValue.innerText) + expenditure;
  expenditureValue.innerText = sum;
  //Total balance(budget - total expense)
  const totalBalance = tempAmount - sum;
  balanceValue.innerText = totalBalance;


  
  //Create list
  listCreator(productTitle.value, userAmount.value);






  var data1 = {"data1": userAmount};
  alldata1.push(expenditure); //ดันข้อมูลใส่อาเรย์
  console.info(expenditure);; //แสดงข้อมูลหน้าconsole
; //ดันข้อมูลใส่อาเรย์
  // console.info(pd);; //แสดงข้อมูลหน้าconsole


  // var data2 ={"data2": pd};
  // alldata2.push(data2);
  // console.info(alldata2);
  //Empty inputs
  // productTitle.value = "";
  // userAmount.value = "";
  
});

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

//function fsort() {
  //alldata1.sort();
  //console.info(alldata1);
//



function myFunction2() {
  // alldata1.sort(function(a, b){return a - b});
  // document.getElementById("demo").innerHTML = alldata1;
  // document.getElementById("demo1").innerHTML = alldata2;
  var Amount = document.getElementsByClassName("amount")
  var Result = []
  for(var i = 0;i <= (Amount.length - 1);i++){
    Result[i] = parseInt(Amount[i].innerText)
  }
  Result.sort(function(a, b){return a - b});
  document.getElementById("demo").innerHTML = Result;
  // SortItem()



}



function SortItem(){
  var amount = document.getElementsByClassName("amount")
  var name = document.getElementsByClassName("product")
  var Result = []
  for(var i = 0; i <= (amount.length - 1); i++){
    console.log(amount[i].innerText)
    var Data = {"key": i, "value": parseInt(amount[i].innerText), "name": name[i].innerText }
    Result.push(Data)
  }
  console.log(Result)
  Result.sort((a, b) => a.value - b.value)
  // console.log(Result)
  Result.forEach(element => {
    console.table(element)
    listCreatorSorted(element.name, element.value)
  });
}


const listCreatorSorted = (expenseName, expenseValue) => {
  let sublistContent = document.createElement("div");
  sublistContent.classList.add("sublist-content", "flex-space");
  list.appendChild(sublistContent);
  sublistContent.innerHTML = `<p class="product">${expenseName}</p><p class="amount">${expenseValue}</p>`;
  // let editButton = document.createElement("button");
  // editButton.classList.add("fa-solid", "fa-pen-to-square", "edit");
  // editButton.style.fontSize = "1.2em";
  // editButton.addEventListener("click", () => {
  //   modifyElement(editButton, true);
  // });
  // let deleteButton = document.createElement("button");
  // deleteButton.classList.add("fa-solid", "fa-trash-can", "delete");
  // deleteButton.style.fontSize = "1.2em";
  // deleteButton.addEventListener("click", () => {
  //   modifyElement(deleteButton);
  // });
  // sublistContent.appendChild(editButton);
  // sublistContent.appendChild(deleteButton);
  document.getElementById("sort_list").appendChild(sublistContent);
};