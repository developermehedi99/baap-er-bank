
// deposite er kaj kormo

// step-1
document.getElementById('btn-deposite').addEventListener('click', function(){
    // step-2
    const depositeField = document.getElementById('deposit-field');
    const depositeAmount = depositeField.value;

    const currentDeposite = document.getElementById('current-deposite');
    const totalDeposite = currentDeposite.innerText;
    currentDeposite.innerText = depositeAmount; 

    depositeField.value = '';
})





// withdraw er kaj kormo
document.getElementById('btn-withdraw').addEventListener('click', function(){

    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawAmountString);

    const currentWithdraw = document.getElementById('current-withdraw');
    const totalWithdrawString = currentWithdraw.innerText;
    const totalWithdraw = parseFloat(totalWithdrawString);

    const totalWithdrawTaka = totalWithdraw + withdrawAmount;
    currentWithdraw.innerText = totalWithdrawTaka;

    const balanceTotal = document.getElementById('balance');
    const previousBalanceString = balanceTotal.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    const newBalance = previousBalance - withdrawAmount;
    balanceTotal.innerText = newBalance;

    withdrawField.value = '';
})