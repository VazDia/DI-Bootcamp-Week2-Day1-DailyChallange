/*
Remove Banana from the array.
Sort the array in alphabetical order.
Add “Kiwi” to the end of the array.
Remove “Apples” from the array. Don’t use the same method as in part 1.
Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
At the end you should see this outcome:
["Kiwi", "Oranges", "Blueberries"]
*/


/* Création de variable */
const fruit =["Banana","Apples","oranges","Blueberries"];
console.log(fruit);
/*Remove Banana from the array */
fruit.splice(0,1);
console.log(fruit);

/*Sort the array in alphabetical order */
fruit.sort();
console.log(fruit);

/* Add "kiwi" to the end of the array */
fruit.push("kiwi");
console.log(fruit);

/* Remove Apples from the array. Don't use the same method as in part 1. */
fruit.shift();
console.log(fruit);
/* Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e.
[‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’]) */
fruit.reverse();
console.log(fruit);
