/*
  Problem 1: Fix the Scope Bug
  Rewrite using let to fix the output.
*/
let status = 'order Placyed';
for (var i = 1; i <= 3; i++) {
  let stautes = 'Proccing items' + i;
  console.log(stautes);
}
console.log('filanes', status);
/*
  Problem 2: Receipt Generator (Template Strings)
  Build a receipt generator using template strings — take item name,
  price, qty as input, output formatted multiline receipt.

  Example: Input ("Pen", 20, 3) -> Output "Pen x3 = 60 Taka"
*/

function recepitGeneation(name, price, qty) {
  // console.log(name, price, qty);

  // return name + ' x' + qty +  ' =' +  price * qty + 'Taka';
  return`${name} x ${qty} =${price*qty} Taka`
}
console.log(recepitGeneation('pen',20,3));
console.log(recepitGeneation('Easer',45,10));
