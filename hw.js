//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(string, list){
    const myArray = string.split("");
    for (let i = 0; i < myArray.length; i++){
        result = list.includes(myArray[i])
        if (result = true){
            console.log('Matched dog_name')
        } else{
            console.log('Not a match')
        }

    }
    
}
findWords(dog_string, dog_names)

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */
let array = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i++) {
        if(i % 2 === 0) { 
            arr.splice(i,1,"even index");
        }
    }
}

replaceEvens(array)
console.log(array)


//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


//Complete the square sum function so that it squares each number passed into it and then sums the results together.

//For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


function squareSum(numbers){
    let count = 0
    for (let i = 0; i < numbers.length; i++){
      count += numbers[i] ** 2
    }
    return count
  }




  //Create a function called shortcut to remove all the lowercase vowels in a given string.

  function shortcut(string){
    return string.replace(/[aeiou]/gi, '');
  }