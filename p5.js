const data = [
    {
        title: "Apple 1",
        price: 300,
        color: "Black"
    },
    {
        title: "Apple 2",
        price: 400,
        color: "Black"
    },
    {
        title: "Apple 3",
        price: 500,
        color: "Black"
    }
]



function discountPrice(arr,discountPer){
    let total = 0;
    arr.forEach((items)=>{
         total += items.price
    })


    let finalPrice = Math.round(total - ( total * (discountPer / 100)))

    return finalPrice;
}


console.log(discountPrice(data,10))