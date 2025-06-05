let cars = [
    { name: "Toyota", qty: 4, price: "1200" },
    { name: "Honda", qty: 2, price: "2020" },
    { name: "Ford", qty: 1, price: "2022" }
];

function calculateTotalPrice(data){
    let totalPrice = 0;
    data.forEach((items)=>{
        let tempPrice = items.qty * Number(items.price)
        totalPrice += tempPrice
    })

    return totalPrice;
}


console.log(`The total price of all product is`,calculateTotalPrice(cars))