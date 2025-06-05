/*
 * Function to add all numbers passed as arguments
 * @param {...number} num - The numbers to be added
 * @returns {number} - The sum of all numbers
 */



function addAllNumbers(...num){
    
    let total = 0;
    num.forEach((number)=>{
        total += number;
    })
    return total;
}




console.log(addAllNumbers(1,2,3,4,5)); // 15