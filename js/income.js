//handle total  balance cost event
document.getElementById('calculate-button').addEventListener('click', function(){
    //get the amount income
    const incomeInput = document.getElementById('income-input');
    const newIncomeAmountText = incomeInput.value;
    const newIncomeAmount = parseFloat(newIncomeAmountText);
    const balanceTotal = document.getElementById('total-balance');
    const previousBalanceText = balanceTotal.innerText;
   const  previusBalanceAmount = parseFloat(previousBalanceText);

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
     
     console.log();
     

    
  



//cleare the inpit feild
  
    // console.log('clicked');
    incomeInput.value = '';
});