/*
  Problem 1: Flexible Total Calculator
  calculateTotal(...prices) using rest params, sums any number of
  prices.

  Example: calculateTotal(0, 100, 200, 300) -> 600
  Example: calculateTotal(10, 100, 200) -> 270   (10 = discount%)
*/

// Simple rule: discount is ALWAYS the first argument.
function calculatetotal(discount, ...price) {
  // console.log(discount, price);
  // let total = 0;
  // for (let i = 0; i < price.length; i++) {
  //   total += price[i];
  // }
  let total = price.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
  let discountAmount = (total * discount) / 100;
  console.log(discountAmount);
  let totalAfterDiscountApply = total - discount;
  return totalAfterDiscountApply;
}

console.log(calculatetotal(10, 100, 200, 50, 300));

/*
  Problem 2: Merge & Deduplicate Arrays
  Merge two arrays and remove duplicates using spread + Set.

  Example: [1,2,3] + [2,3,4] -> [1,2,3,4]
*/
let arr1 = [10, 20, 30, 40, 50];
let arr2 = [50, 60, 70, 80, 90];
let mergeArr = [...arr1, ...arr2];
console.log(mergeArr);

let newArr = Array.from(new Set(mergeArr));

console.log(newArr);