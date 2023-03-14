//Long version to make it look complicated
const transFee = 3;
const interFee = 0.01;

let payAmount = 5000;

const calculatePayAmount = () => {
  return payAmount + transFee + ((payAmount + transFee) * interFee);
}

const finalPayAmount = calculatePayAmount();
console.log(finalPayAmount);