function getPart1Result(input) {
    const inputArray = input.split('\n\n');
    const answersArray = new Array();

    for (let i = 0; i < inputArray.length; i++) {
        const value = inputArray[i].split('\n');
        const combined = value.join('');
        const uniqValue = [...new Set(combined)].join('');

        answersArray.push(uniqValue.length);
    }

    const sum = answersArray.reduce((a, b) => a + b, 0);
    //console.log(sum);
}

fetch('input_test.txt')
    .then(response => response.text())
    .then(response => {
        getPart1Result(response);
    });
