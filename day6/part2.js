function getPart2Result(input) {
    const inputArray = input.split('\n\n');
    const answersArray = new Array();

    for (let i = 0; i < inputArray.length; i++) {
        const value = inputArray[i].split('\n');
        const personCount = value.length;
        const combined = value.join('').split('');
        const uniqValue = [...new Set(combined)];

        let yesCount = 0;
        for (let j = 0; j < uniqValue.length; j++) {
            const question = uniqValue[j];
            const found = combined.filter(val => val === question);
            if (found.length === personCount) {
                yesCount++;
            }
        }

        answersArray.push(yesCount);
    }

    console.log(answersArray)
    const sum = answersArray.reduce((a, b) => a + b, 0);
    console.log(sum);
}

fetch('input.txt')
    .then(response => response.text())
    .then(response => {
        getPart2Result(response);
    });
