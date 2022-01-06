console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item) {
  basket.push(item)
  return true;
}

console.log('Checking that the cart is empty:', basket);

console.log(`Wife likes wine so lets put that in the cart (Should be true): ${addItem('wine')}`);
console.log(`Our basket is now: ${basket}`);
console.log(`Adding a bottle of whiskey for good measure (Should be true): ${addItem('whiskey')}`);
console.log(`Our basket is now: ${basket}`);
console.log(`Every party should have some beer, I'll add it (Should be true): ${addItem('beer')}`);
console.log(`Our basket is now: ${basket}`);
console.log(`Friends enjoy hard seltzers, better get some of those (Should be true): ${addItem('seltzer')}`);
console.log(`Making sure I have all the beverages I need in my cart: ${basket}`);


function listItems(array){
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

// Testing that the function will print each item to it's own line on the console.
listItems(basket);
// Success!

function empty(emptyArray) {
  emptyArray.length = 0;
}
// Not sure if this is the best method to get an array empty, but it seems to work!

console.log(`We decided to cancel our party so I need to empty our basket`);

empty(basket);

console.log('Is our basket empty?', basket);

// Stetch goals

const maxItems = 5;

function isFull(basket){
  if (basket.length < maxItems)
  return false;
  else {basket.length >= maxItems}
  return true;
}
