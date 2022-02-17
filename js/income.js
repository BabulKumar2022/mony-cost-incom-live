//handle total  balance cost event
document.getElementById('calculate-button').addEventListener('click', 
function(){
    //get the amount income
    const incomeInput = document.getElementById('income-input');
    const newIncomeAmountText = incomeInput.value;
    const newIncomeAmount = parseFloat(newIncomeAmountText);
    //balnce output
    const balanceTotal = document.getElementById('total-balance');
    const previousBalanceText = balanceTotal.innerText;
   const  previusBalanceAmount = parseFloat(previousBalanceText);
// expenses output
    const expensesTotal = document.getElementById('total-expen');
    const previousExpensesText = expensesTotal.innerText;
   const  previusExpenseseAmount = parseFloat(previousExpensesText);
   
   //get the amount expeses
   //expepses food
   const foodCostInput = document.getElementById('food-cost-input');
   const newFoodCostText = foodCostInput.value;
   const newFoodCostAmount = parseFloat(newFoodCostText);
   //expenses rent
   const rentInput = document.getElementById('rent-input');
   const newRentText = rentInput.value;
   const newRentAmount = parseFloat(newRentText);
   //expenses clothes
   const clothesCostInput = document.getElementById('clothes-cost-input');
   const newClotheCostText = clothesCostInput.value;
   const newClotheCostAmount = parseFloat(newClotheCostText);

   const newBalnceTotal = newIncomeAmount + previusBalanceAmount - newClotheCostAmount - newRentAmount - newFoodCostAmount;
     balanceTotal.innerText = newBalnceTotal;
     const newTotalExpenses = previusExpenseseAmount + newClotheCostAmount + newRentAmount + newFoodCostAmount ;
    expensesTotal.innerText = newTotalExpenses;
     

//cleare the inpit feild
    incomeInput.value = '';
    foodCostInput.value = '';
    rentInput.value = '';
    clothesCostInput.value = '';
});
// saving part
document.getElementById('save-button').addEventListener('click',
 function(){
     // svaing amount output
    const savingTotal = document.getElementById('save-total');
    const preSavingTotal = savingTotal.innerText;
    const presavingTotalAmount = parseFloat(preSavingTotal);
    // remaining balance output
    const remainBalance = document.getElementById('remain-balance');
    const preRamainBalnce = remainBalance.innerText;
    const preRamainBalnceAmount = parseFloat(preRamainBalnce);

    //console.log(savingTotalAmount);
    //balnce output
    const balanceTotal = document.getElementById('total-balance');
    const previousBalanceText = balanceTotal.innerText;
    const  previusBalanceAmount = parseFloat(previousBalanceText);

    // expenses output
    const expensesTotal = document.getElementById('total-expen');
    const previousExpensesText = expensesTotal.innerText;
    const  previusExpenseseAmount = parseFloat(previousExpensesText);


    const inputSavePercent = document.getElementById('percetage-input');
    const inputSavePercentText = inputSavePercent.value;
    const inputSavePercentAmount = parseFloat(inputSavePercentText);

    const newSavingAmount = (presavingTotalAmount) + (previusBalanceAmount * inputSavePercentAmount) / 100 ;
    savingTotal.innerText = newSavingAmount;
    const totalRemainBalnce = preRamainBalnceAmount + (previusBalanceAmount - previusExpenseseAmount - newSavingAmount);
    remainBalance.innerText = totalRemainBalnce;
    inputSavePercent.value = '';
 

});