document.querySelector("button").addEventListener("click", calculate);
const option = document.querySelector("select");
const clear = document.querySelector(".btn");

//Lists for ins and outs
let currentInc = [];
let currentExp = [];
let incomeList = [];
let expenseList = [];
let historyList = [];

//Variables for balance calculation
let incBalance = 0;
let expBalance = 0;
const balance = document.querySelector(".money");

function calculate(e) {
	e.preventDefault();
	//console.log(option.value);

	if (option.value == "+") {
		const item = document.querySelector("#item").value;
		const amount = document.querySelector("#amount").value;
		const incValue = document.querySelector(".income-current");
		const incHistory = document.querySelector(".income-list");
		const history = document.querySelector(".history-list");
		currentInc.push(amount), incomeList.push(amount), historyList.push(amount);
		incValue.innerHTML = `<li id='0'>	${item} ${amount}</li>`;
		incHistory.innerHTML += `<li id='0'>	${item} ${amount}</li>`;
		history.innerHTML += `<li id='0'>	${item} ${amount}</li>`;
	}

	if (option.value == "-") {
		const item = document.querySelector("#item").value;
		const amount = document.querySelector("#amount").value;
		const expValue = document.querySelector(".expense-current");
		const expHistory = document.querySelector(".expense-list");
		const history = document.querySelector(".history-list");
		currentExp.push, expenseList.push(amount), historyList.push(amount);
		expValue.innerHTML = `<li id='0'>	${item} ${amount}</li>`;
		expHistory.innerHTML += `<li id='0'>	${item} ${amount}</li>`;
		history.innerHTML += `<li id='0'>	${item} ${amount}</li>`;
	}
	if (option.value == "choose") {
		alert("Please add Income or Expense");
	}

	for (var i = 0; i < incomeList.length; i++) {
		incBalance += Number(incomeList[i]);
	}
	for (var i = 0; i < expenseList.length; i++) {
		expBalance += Number(expenseList[i]);
	}

	console.log(incBalance, expBalance);
	balance.textContent = incBalance - expBalance;
}

console.log(currentExp, currentInc, incomeList, expenseList, historyList);
