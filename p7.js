function mostFrequent(array) {
    let i = 1;
   array.forEach((items)=>{
        console.log(`Items ${i} is ${items}`)
        i ++
   })
}




mostFrequent([1, 3, 1, 3, 2, 1]); // Output: 1
mostFrequent(["apple", "banana", "apple", "orange", "banana", "apple"]); // Output: "apple"
