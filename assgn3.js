// ----------assignment level 1------------
// 1.	Iterate 0 to 10 using for loop, do the same using while and do while loop
// using for loop
for (let i=0;i<=10;i++){
    console.log(i)
}
// using while loop
let j=0;
while (j<=10){
    console.log(j)
    j++;
}
// using do while loop
let k=0;
do {
    console.log(k)
    k++;
}while(k<=10);

// 2.	Iterate 10 to 0 using for loop, do the same using while and do while loop

// using for loop
for(let a=10;a>=0;a--){
    console.log(a)
}
// using while loop
let b=10;
while (b>=0){
    console.log(b)
    b--;
}
// using do while loop
let c=10;
do{
    console.log(c)
    c--;
}while(c>=0);

// 3.	Iterate 0 to n using for loop
let n = 5;
for(let i=0;i<=5;i++){
    console.log(i)
}

// 4.	Write a loop that makes the following pattern using console.log ():
	    // #
	    // ##
        // ###
	    // ####
	    // #####
	    // ######
        // #######
for (i=0;i<=7;i++){
    console.log('#'.repeat(i))
}

// 5.	Use loop to print the following pattern:
// 	0 x 0 = 0
// 	1 x 1 = 1
// 	2 x 2 = 4
// 	3 x 3 = 9
// 	4 x 4 = 16
// 	5 x 5 = 25
// 	6 x 6 = 36
// 	7 x 7 = 49
// 	8 x 8 = 64
// 	9 x 9 = 81
//  10 x 10 = 100
for (let i=0;i<=10;i++){
    console.log(i +"x"+i +"="+i*i);
}

// 6.	Using loop print the following pattern
	//  i    i^2   i^3
	//  0    0     0
	//  1    1     1
	//  2    4     8
	//  3    9     27
	//  4    16    64
	//  5    25    125
	//  6    36    216
	//  7    49    343
	//  8    64    512
	//  9    81    729
    //  10   100   1000
    console.log("i\ti^2\ti^3");
for (let i=0;i<=10;i++){
    console.log(i+"\t"+i*i+"\t"+i*i*i)
}

// 7.	Use for loop to iterate from 0 to 100 and print only even numbers
for(let i=0;i<=100;i++){
    if(i%2==0)
    console.log(i)
}
// 8.	Use for loop to iterate from 0 to 100 and print only odd numbers
for(let i=0;i<=100;i++){
    if(i%2!==0)
    console.log(i)
}
// 9.	Use for loop to iterate from 0 to 100 and print only prime numbers
for(let i=2;i<=100;i++){
    let isPrime = true;
    for(let j=2;j<i;j++){
        if(i%j===0){
            isPrime=false;
            break;
        }
    }
    if(isPrime){
        console.log(i);
    }
}

// 10.	Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum=0;
for (let i=0;i<=100;i++){
sum+=i;
}
console.log('The sum of all numbers from 0 to 100 is ' + sum);

// 11.	Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let evensum = 0;
let oddsum = 0;
for (i=0;i<100;i++){
    if(i%2==0)
    evensum+=i;
    if(i%2!==0)
    oddsum +=i;
}
console.log(evensum , oddsum);
// Print sum of evens and sum of odds as array
console.log([evensum,oddsum]);

// 12.	Develop a small script which generate array of 5 random numbers

  let randomNum = ()=>Math.floor(Math.random() * 100) + 1;
  const randomArray = Array.from({length:5},randomNum)
    console.log(randomArray)
  

// 13.	Develop a small script which generate array of 5 random numbers and the numbers must be unique
let arr = [];

while (arr.length < 5) {
  let randomNum = Math.floor(Math.random() * 100) + 1;
  if (!arr.includes(randomNum)) {
    arr.push(randomNum);
  }
}
console.log(arr);

// 14.	Develop a small script which generate a six characters random id:
// Generate a six-character random ID without repeated characters
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let randomId = '';

for (let i = 0; i < 6; i++) {
  const index = Math.floor(Math.random() * characters.length);
  randomId += characters[index];
}

console.log(randomId);

// -------------------assignment level 2---------------
// 15.	Develop a small script which generate any number of characters random id:
function generateRandomId(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
  
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  
    return result;
  }
  
  console.log(generateRandomId(10)); 
  console.log(generateRandomId(20));

//   16.	Write a script which generates a random hexadecimal number.
   function generateRandomHex() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
  
  console.log(generateRandomHex()); 
  
//   17.	Write a script which generates a random rgb colour number.

function generateRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  }
  
  console.log(generateRandomColor());
  
  const countrie_list = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
//   18.	Using the above countrie_list array, create the following new array.
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

const uppercaseCountries = countrie_list.map((country) => country.toUpperCase());

console.log(uppercaseCountries);

// 19.	Using the above countrie_list array, create an array for countrie_list length'.
// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

  const country_list_length = countrie_list.map((country) => country.length);

console.log(country_list_length);

// 20.	Use the countrie_list array to create the following array of arrays:
//   [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]

const countries = countrie_list.map((country) => {
    const abbreviation = country.substring(0, 3).toUpperCase();
    return [country, abbreviation, country.length];
  });
  
  countries[9][0] = "Iceland";
  countries[9][1] = "ICE";
  console.log(countries);
  
  //21.   In above countrie_list array, check if there is a country or countrie_list containing the word 'land'. If there are countrie_list containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countrie_list are without land'.
  // ['Finland', 'Ireland', 'Iceland']
  const countriesWithLand = countrie_list.filter((country) => {
    return country.includes("land");
  });
  
  if (countriesWithLand.length > 0) {
    console.log(countriesWithLand);
  } else {
    console.log("All these countries are without land");
  }
//   22.	In above countrie_list array, check if there is a country or countrie_list end with a substring 'ia'. If there are countrie_list end with, print it as array. If there is no country containing the word 'ai', print 'These are countrie_list ends without ia'.
//   ['Albania', 'Bolivia', 'Ethiopia']
  
  const countriesEndsWithIA = countrie_list.filter((country) => {
    return country.endsWith("ia");
  });
  
  if (countriesEndsWithIA.length > 0) {
    console.log(countriesEndsWithIA);
  } else {
    console.log("These are countries that don't end with 'ia'");
  }

//   23.	Using the above countrie_list array, find the country containing the biggest number of characters
// Ethiopia
  const longestCountry = countrie_list.reduce((prev, current) => {
    return prev.length > current.length ? prev : current;
  });
  
  console.log(longestCountry);

//   24.	Using the above countrie_list array, find the country containing only 5 characters.
// ['Japan', 'Kenya']

  const countriesWith5Characters = countrie_list.filter((country) => {
    return country.length === 5;
  });
  
  console.log(countriesWith5Characters);

  const full_stack_technologies = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
//   25.	Find the longest word in the full_stack_technologies array  
// let longestWord = '';
// for (let i = 0; i < full_stack_technologies.length; i++) {
//   if (full_stack_technologies[i].length > longestWord.length) {
//     longestWord = full_stack_technologies[i];
//   }
// }

// console.log(longestWord);
// ------------or-------------
const longestWord = full_stack_technologies.reduce((prev, current) => {
    return prev.length > current.length ? prev : current;
  });
  
  console.log(longestWord);

//   26.	Use the full_stack_technologies array to create the following array of arrays:
// [["HTML", 4], ["CSS", 3], ["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

const technologies = full_stack_technologies.map((technology) => {
    return [technology,  technology.length];
  });
  console.log(technologies)

//   27.	An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mern_stack
  const mern_stack = ['MongoDB', 'Express', 'React', 'Node'];
const MERN = mern_stack.reduce((acc, tech) => acc + tech[0], ''); 

console.log(MERN);

// 28.	Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
  
// const technologies = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];

for (const tech of technologies) {
  console.log(tech);
}

// 29.	This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method
const fruits = ['banana', 'orange', 'mango', 'lemon'];
const reversedFruits = [];

for (let i = fruits.length - 1; i >= 0; i--) {
  reversedFruits.push(fruits[i]);
}

console.log(reversedFruits); 

// 30.	Print all the elements of array as shown below.
//   const full_stack = [['HTML', 'CSS', 'JS', 'React'],['Node', 'Express', 'MongoDB']]
//   HTML
//   CSS
//   JS
//   REACT
//   NODE
//   EXPRESS
//   MONGODB
const full_stack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ];
  
  for (const subArray of full_stack) {
    for (const tech of subArray) {
      console.log(tech.toUpperCase());
    }
  }

//   ----------------assignment level 3---------------
// 1.	Copy country_list array (Avoid mutation)
const country_list = ["India", "USA", "Japan", "Russia", "China"];

// using the spread operator to create a new array with the same elements
const copied_country_list = [...country_list];

// testing that the original array is not mutated
// country_list.push("Brazil");

console.log(country_list); // Output: ["India", "USA", "Japan", "Russia", "China", "Brazil"]
console.log(copied_country_list); // Output: ["India", "USA", "Japan", "Russia", "China"]

// 2.	Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sorted_country_list

// const country_list = ["India", "USA", "Japan", "Russia", "China"];

// // using the spread operator to create a new array with the same elements
// const copied_country_list = [...country_list];

// sorting the copied array without modifying the original
const sorted_country_list = copied_country_list.sort();

console.log(country_list); // Output: ["India", "USA", "Japan", "Russia", "China"]
console.log(sorted_country_list); // Output: ["China", "India", "Japan", "Russia", "USA"]

// 3.	Sort the full_stack_technologies array and mern_stack array
// const full_stack_technologies = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ];
  
  const mern__stack = ['MongoDB', 'Express', 'React', 'Node'];
  
  // sorting the arrays in alphabetical order
  const sorted_full_stack_technologies = full_stack_technologies.sort();
  const sorted_mern__stack = mern__stack.sort();
  
  console.log(sorted_full_stack_technologies); // Output: ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]
  console.log(sorted_mern__stack); // Output: ["Express", "MongoDB", "Node", "React"]

//   4.	Extract all the countrie_list contain the word 'land' from the countrie_list array and print it as array
const countryWithia = country_list.filter((country) => {
    return country.includes("ia");
  });
  
  if (countryWithia.length > 0) {
    console.log(countryWithia);
  } else {
    console.log("All these countries are without ia");
  }


//   5.	Find the country containing the highest number of characters in the countrie_list array
const longWord = country_list.reduce((prev, current) => {
    return prev.length > current.length ? prev : current;
  });
  
  console.log(longWord);

  
