//CORE FUNCTION
document.querySelector("button").addEventListener("click", calculate);
const option = document.querySelector("select");

//SELECTION ELEMENTS FOR LISTS
const history = document.querySelector(".history-list");
const expValue = document.querySelector(".expense-current");
const expHistory = document.querySelector(".expense-list");
const incValue = document.querySelector(".income-current");
const incHistory = document.querySelector(".income-list");

//TOGGLE TABS
const tabs = document.querySelector(".tabs");
const incTab = document.querySelector(".incTab");
const expTab = document.querySelector(".expTab");

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
	incBalance = 0;
	expBalance = 0;
	const item = document.querySelector("#item").value;
	const amount = document.querySelector("#amount").value;
	const history = document.querySelector(".history-list");

	if (option.value == "+") {
		const incValue = document.querySelector(".income-current");
		const incHistory = document.querySelector(".income-list");
		currentInc.push(amount), incomeList.push(amount), historyList.push(amount);
		incValue.innerHTML = `<li id='incCurrent-1'>	${item} ${amount}</li>`;
		incHistory.innerHTML += `<li id='incHistory-1'>	${item} ${amount}</li>`;
		history.innerHTML += `<li id='history-2'>	${item} ${amount}</li>`;
	}

	if (option.value == "-") {
		const expValue = document.querySelector(".expense-current");
		const expHistory = document.querySelector(".expense-list");
		currentExp.push, expenseList.push(amount), historyList.push(amount);
		expValue.innerHTML = `<li id='expCurrent-1'>	-	${item} ${amount}</li>`;
		expHistory.innerHTML += `<li id='incHistory-1'> -	${item} ${amount}</li>`;
		history.innerHTML += `<li id='history-1'> -	${item}	 ${amount}</li>`;
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

	//TAB ACTIVATOR
	const tabs = document.querySelectorAll("[data-tab-target]");
	const tabContent = document.querySelectorAll("[data-tab-content]");

	tabs.forEach((tab) => {
		tab.addEventListener("click", () => {
			const target = document.querySelector(tab.dataset.tabTarget);
			tabContent.forEach((tabContent) => tabContent.classList.remove("active"));
			target.classList.add("active");
		});
	});
}
