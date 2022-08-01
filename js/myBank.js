function totalExpense() {
    const food = document.getElementById("food");
    let foodInput = parseFloat(food.value);
    const rent = document.getElementById('rent');
    let rentInput = parseFloat(rent.value);
    const other = document.getElementById('other');
    let otherInput = parseFloat(other.value)
    if (foodInput > 0 && rentInput > 0 & otherInput > 0) {
        const total = foodInput + rentInput + otherInput;
        const expense = document.getElementById("expense");
        let expenseInput = parseFloat(expense.innerText);

        let previousExpense = expenseInput + total;

        expense.innerText = previousExpense;

        const income = document.getElementById('income');
        const incomeInput = parseFloat(income.value);

        let blanced = document.getElementById("blance");
        let blanceInput = parseFloat(blanced.innerText);
        console.log(incomeInput);
        console.log(expenseInput);
        let totalBlance = incomeInput - previousExpense;
        console.log(totalBlance)

        blanced.innerText = totalBlance;




        food.value = "";
        rent.value = '';
        other.value = '';
        return totalBlance;
    }
    else {
        food.value = "";
        rent.value = '';
        other.value = '';

    }



}


function saving(id) {
    const savingPersentage = document.getElementById("saving");
    const savingInput = parseFloat(savingPersentage.value)
    const income = document.getElementById(id)
    const incomeInput = parseFloat(income.value);
    let saving = (incomeInput * savingInput) / 100;
    let savingAmount = document.getElementById("sAmount");
    savingAmount.innerText = saving;
    let balance = document.getElementById('blance')
    let bal = parseFloat(balance.innerText);
    const rBlance = bal - saving;
    let remainingBlance = document.getElementById('rBlance');
    remainingBlance.innerText = rBlance;

}




document.getElementById('calculate').addEventListener("click", function () {


    let total = totalExpense();
    console.log(total);



});

document.getElementById("savingBtn").addEventListener("click", function () {
    saving("income",);
})