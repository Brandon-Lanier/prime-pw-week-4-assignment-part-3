console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

function addItem(item) {
  if (isFull()) {
    return false;
  }
  else {
    basket.push(item);
    return true;
  }
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
  for (let i = 0; i < array.length; i++) {
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

// Had to move my maxItems const to the top of the page for this to work.  Wanted the variable declared before I edited the addItems function.

function isFull() {
  if (basket.length >= maxItems) {
    return true;
  }
  else {
    return false;
  }
}

console.log(`Lets make sure the is full function is working by adding items to our basket again.  Add some rice? ${addItem('rice')}`);
console.log(`Basket is now: ${basket}`)
console.log(`Maybe add some tuna? ${addItem('tuna')}`);
console.log(`Basket is now: ${basket}`);
// Testing that the isFull formula will read false here since we have not hit our max items.
console.log(`We now have 2 items, is our basket full (Should read false)? ${isFull(basket)}`);
console.log(`Adding some cucumber. ${addItem('cucumber')}`);
console.log(`Basket is now: ${basket}`);
console.log(`Adding some jalapenos. ${addItem('jalapenos')}`);
console.log(`Basket is now: ${basket}`);
console.log(`Adding some edamame. ${addItem('edamame')}`);
console.log(`Basket should now have five items: ${basket}`);
console.log(`I believe 5 items is our max, is our basket now full (should read true)? ${isFull(basket)}`);
console.log(`Trying to add 1 more item now that we are full(should read false): ${addItem('ginger')}`);
console.log(`Opps, we couldn't add it beause our basket is full, correct? ${isFull(basket)}`);

function removeItem(inputItem) {
  
}
