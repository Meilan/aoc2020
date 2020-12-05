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

function getNumberOfTrees(coordinates, stepX, stepY) {
    const stepRight = stepX;
    const stepDown = stepY;
    const markings = [];
    let x = stepX;
    let y = stepY;
    
    for (let i = 0;  i < coordinates.length; i++) {
        if (coordinates[y]) {
            const row = getAppendedRow(coordinates[y], stepRight, coordinates.length);

            if (row[x] === '#') {
                markings.push('X');
            }

            x += stepRight;
            y += stepDown;
        }
    }

    return markings.length;
}

function getPart2Result(input) {
    const coordinates = input.split('\n');
    let x = 1;
    let y = 1;

    const numberOfTreesArray = [];

    for (let i = 0; i < 5; i++) {
        numberOfTreesArray.push(getNumberOfTrees(coordinates, x, y));

        if (x === 7) {
            x = 1;
            y = 2;
        } else {
            x = x + 2;
        }
    }

    console.log(numberOfTreesArray.reduce((a, b) => a * b)); // the answer
}

fetch('input.txt')
    .then(response => response.text())
    .then(response => {
        getPart2Result(response);
    });

