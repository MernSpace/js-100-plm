function math(...num){
    let sum = 0;
    num.forEach((item)=>{
        sum += item
    })
    return sum.toFixed(2);
}


console.log(math(3,4,5,6,7.77))