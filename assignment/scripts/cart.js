console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

let addItem = function(item){
  basket.push(item);
  return true;
}

function listItems(array){
  for (let i = 0; i < array.length; i++){
    console.log(array[i]);
  }
}

function empty(){
  basket = [];
}

addItem('Whole Milk');
addItem('Meatless Chicken');
addItem('Sliced Bread');
console.log(addItem('Watermelon'));

listItems(basket);

let backupBasket = basket.slice();
empty();

console.log('This: ' + basket + ' should be empty');

const maxItems = 5;

function isFull(array){
  if (array.length < maxItems) {
    return false;
  } return true;
}

basket = backupBasket.slice();

console.log(isFull(basket));

addItem = function(item){
  if (!isFull(basket)) {
    basket.push(item);
    return true;
  } return false;
}

console.log(addItem('burritos'));

console.log(basket);

addItem('Pop');
addItem('Pregnancy Test');
console.log(addItem('Baguettes'));

console.log(isFull(basket));

console.log(basket);

function removeItem(item){
  let thisOne = basket.indexOf(item)
  if (thisOne !== -1) {
    return basket.splice(thisOne, 1);
  } return null;
}

console.log(removeItem('porcupine'));
console.log(removeItem('Whole Milk'));
