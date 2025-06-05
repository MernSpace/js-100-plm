function stringToNumber(...str){
    let number =[]
    str.forEach((items)=>{
        let num = Number(items)
        number.push(num)
    })

    return number
}
console.log(stringToNumber("20","10","40","60","20"))