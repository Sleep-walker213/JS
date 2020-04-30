//alert("Hey there skinbags");

//confirm("r u piece of sh1t?");

//let answer = prompt("Is it hard to a retard?", "quite")
let answer = prompt("ur budget for a month?");
let date = prompt("enter date in YYYY-MM-DD format");
let appData = {
    budget : answer,
    timeData : date,
    expenses:{},
    optionalExpenses:{},
    income : [],
    saving : false
}
let a = prompt("enter expenses in this month");
let b = prompt("what they cost?");
appData.expenses[0] = (a + ":" + b);
alert(appData.budget/30);
