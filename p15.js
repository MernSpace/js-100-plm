function plusMinus(arr) {
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    const total = arr.length;

    arr.forEach((num) => {
        if (num > 0) positiveCount++;
        else if (num < 0) negativeCount++;
        else zeroCount++;
    });

    console.log((positiveCount / total).toFixed(6));
    console.log((negativeCount / total).toFixed(6));
    console.log((zeroCount / total).toFixed(6));
}



plusMinus([-1,0,-2,6,0,7,-7])