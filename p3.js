function addBordern(array){
    let wall = "*".repeat(array[0].length + 2);
    array.unshift(wall);
    array.push(wall);
    for(let i = 1; i < array.length - 1; i++){
        array[i] = "*" .concat( array[i] + "*");
    }
return array;
}

console.log(addBordern(["hello", "world", "this", "is", "a", "test"]));
