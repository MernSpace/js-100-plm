
/*  

=> function recive an array and replace all instances of a given value with another value
=> arry.foreach give me all the elements of the array
=> and the if statement checks if the element is equal to the value to be replaced
=> then it replaces the element with the new value



*/



function replaceArray(arry,preplace,add){
    arry.forEach((element ,index)=>{
        if(element === preplace){
            arry[index] = add;
        }
    });
    console.log(arry);
}



replaceArray([5,2,5,4,5,6,7,8,9], 5, 10); // [1,2,3,4,10,6,7,8,9]