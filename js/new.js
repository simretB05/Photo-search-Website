// Write your code here:
function reverseArray(arry){
    let newArry =[]
  for (let i = arry.length-1; i >= 0; i--){
     newItem= arry.pop()
     
      newArry.push(newItem)
      console.log(newArry)
  }
      console.log(newArry)
       return newArry
  
  }
  
  
  
  const sentence = ['sense.','make', 'all', 'will', 'This'];
   reverseArray(sentence); 
  
  
  // When you're ready to test your code, uncomment the below and run:
  /*
  const sentence = ['sense.','make', 'all', 'will', 'This'];
  
  console.log(reverseArray(sentence)) 
  // Should print ['This', 'will', 'all', 'make', 'sense.'];
  */
  
  // Write your code here:

function greetAliens(arry) {
    for (i = 0; i < arry.length; i++) {
      console.log(
        `Oh powerful ${arry[i]}, we humans offer our unconditional surrender!`
      );
    }
  }
  
  // When you're ready to test your code, uncomment the below and run:
  const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
  
greetAliens( aliens );
  // Write your code here:

function convertToBaby( arry )
{
    let newA = []
    for ( let i = 0; i < arry.length; i++ )
    {
   
    
      newA.push(`baby ` + arry[i]);
      
    }
    return newA
  }
  
  // When you're ready to test your code, uncomment the below and run:
  const animals = ["panda", "turtle", "giraffe", "hippo", "sloth", "human"];
  
  console.log(convertToBaby(animals));
  
  const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

  function politelyDecline (veg) {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:
function declineEverything(arry){

  arry.forEach(politelyDecline)

}


function acceptEverything(arry){
  arry.forEach(arr=>{
          console.log(`Ok, I guess I will eat some ${arr}.`);
  })

}
let newStatement = declineEverything( veggies )
console.log(newStatement)
let newStatement2 = acceptEverything( veggies )

console.log(newStatement2)
const numbers = [2, 7, 9, 171, 52, 33, 14]

// Write your code here:
let newSquerArry = []
function squareNums( nums ){
  nums.map( num =>{
    let seq = num * num
    newSquerArry.push(seq)
  } )
    
  return newSquerArry
}

console.log( squareNums( numbers ) )

// Write your code here:

// const shoutGreetings = arr => arr.map(word => word.toUpperCase() + '!');

function shoutGreetings( arry )
{
  let arr = [];
  for (i = 0; i < arry.length; i++) {
   
      arr.push(`${arry[i].toUpperCase()}!`);
    
 
  }
  return arr;
}

// Feel free to uncomment out the code below to test your function!

const greetings = ["hello", "hi", "heya", "oi", "hey", "yo"];

console.log(shoutGreetings(greetings));
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]

 


