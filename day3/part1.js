function getAppendedRow(baseRow, stepRight, rowRepeated) {
    const defaultRowLength = baseRow.length; // 31
    const minStepOnEachRow = stepRight * rowRepeated; // 3 * 323
    const numberOfTimesToAdd = Math.ceil(minStepOnEachRow / defaultRowLength);
    let newRow = '';

    for (let i = 0; i <= numberOfTimesToAdd; i++) {
        newRow = newRow.concat(baseRow);
    }

    return newRow;
}

function getPart1Result(input) {
    const coordinates = input.split('\n');
    const stepRight = 3;
    const stepDown = 1;
    const markings = [];
    let x = 3;
    let y = 1;
    
    for (let i = 0;  i < coordinates.length - stepDown; i++) {
        const row = getAppendedRow(coordinates[y], stepRight, coordinates.length);

        if (row[x] === '#') {
            markings.push('X');
        }

        x += stepRight;
        y += stepDown;
    }

    console.log(markings.length); // result 181
}

fetch('input.txt')
    .then(response => response.text())
    .then(response => {
        getPart1Result(response);
    });

