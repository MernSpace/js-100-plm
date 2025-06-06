function miniMaxSum(arr) {
    let totalSum = 0;
    let min = arr[0];
    let max = arr[0];

    arr.forEach((item) => {
        totalSum += item;
        if (item < min) min = item;
        if (item > max) max = item;
    });

    const minSum = totalSum - max;
    const maxSum = totalSum - min;

    console.log(`${minSum} ${maxSum}`);
}


miniMaxSum([1,4,5,6,7,8,9,3,2,4,6,7,8,4,3,5])