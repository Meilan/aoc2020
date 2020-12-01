function getPart1Result(numbers) {
    const numberArray = numbers.split('\n').map(Number);

    numberArray.forEach((firstNumber, firstNumberIndex) => {
        numberArray.forEach((secondNumber, secondNumberIndex) => {
            if (
                secondNumberIndex !== firstNumberIndex
                && (firstNumber + secondNumber === 2020)
            ) {
                console.log('day1', firstNumber * secondNumber); // the answer
            }
        });
    })
}

fetch('input.txt')
    .then(response => response.text())
    .then(response => {
        getPart1Result(response);
    });

