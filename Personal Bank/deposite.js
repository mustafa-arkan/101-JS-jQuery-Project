//step-1: add event listener to the deposite button

document.getElementById("btn_deposite").addEventListener("click", function () {
  //   console.log("deposite button clicked");
  //Step-2: get the deposite amount from input field after user type amount
  const depositeField = document.getElementById("deposite_field");
  //2.1: ekn amr dorkar user kotu input diche seta ....amra jani input field tekhe value pawa jai....so .value nibo
  const newDepositeAmountStr = depositeField.value;
  const newDepositeAmount = parseFloat(newDepositeAmountStr);
  //   console.log(depositeAmount);
  //ekn amar kaj hocche user input dibe vlo kotha seta upore jei deposite box ta ache seikane show kora
  //er age amake dekhete hobe deposite box tate current amount kotu ache or user taka add korar aag porjonto kotu chilo or ache seta nite hobe

  //step-3: get the current deposite total
  //ekn jehetu eta input field na tai value pabo na amra pabo innerText
  const depositeTotalElement = document.getElementById("deposite_total");

  const previousDepositeTotalStr = depositeTotalElement.innerText;
  const previousDepositeTotal = parseFloat(previousDepositeTotalStr);
  //   console.log(depositeTotal);

  // ekn ekta problem suppose 120 dilam input e so deposite box e 120 set hoilo but pore abr 150 dile ager 120 nai hoi jai and 150 bose jai.
  //ekn amra add er kaj korbo
  //step-4:add numbers of amount not string to the deposite total...eikane current amount hobe age kotu chilo + ekn kotu dicchi
  const currentDepositeTotal = previousDepositeTotal + newDepositeAmount;
  //ekn amra current amount ta paichi but ekn amader amount ta set korte hobe.taile depositeTotalElement e amra set kore dibo innerText hisabe ki? depositeAmount e value paichilam seta.jodio add hobe string hisabe ...so pore kaj ache
  depositeTotalElement.innerText = currentDepositeTotal;
  //ekn deposite box e amount asteche or add hocche ....jokoni user deposite kore same time e balance o add hoi
  //step-5:
  //step-3 tekhe 4 porjonto repeate
  const balanceTotalElement = document.getElementById("balance_total");

  const previousBalanceTotalStr = balanceTotalElement.innerText;

  const previousBalanceTotal = parseFloat(previousBalanceTotalStr);
  //step-6:
  const currentBalanceTotal = previousBalanceTotal + newDepositeAmount;
  //add korar por set kora laghbe
  balanceTotalElement.innerText = currentBalanceTotal;

  //setp-7: clear the input field

  depositeField.value = "";
});
