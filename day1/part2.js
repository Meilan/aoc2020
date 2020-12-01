function getPart2Result(numbers) {
    const numberArray = numbers.split('\n').map(Number);

    numberArray.forEach((firstNumber, firstNumberIndex) => {
        numberArray.forEach((secondNumber, secondNumberIndex) => {
            numberArray.forEach((thirdNumber, thirdNumberIndex) => {
                const indexArray = [firstNumberIndex, secondNumberIndex, thirdNumberIndex];
                const uniqLength = [...new Set(indexArray)].length;

                if (
                    uniqLength === 3
                    && (firstNumber + secondNumber + thirdNumber === 2020)
                ) {
                    console.log('day2', firstNumber * secondNumber * thirdNumber); // the answer
                }
            });
        });
    })
}

fetch('input.txt')
    .then(response => response.text())
    .then(response => {
        getPart2Result(response);
    });

