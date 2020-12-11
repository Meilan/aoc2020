function getPart1Result(input) {
    const inputArray = input.split('\n');
    const numberOfRows = 128;
    const numberOfColumns = 8;
    const seatIdArray = new Array();

    for (let i = 0; i < inputArray.length; i++) {
        if (i !== 0 || i !== inputArray - 1) {
            const passId = inputArray[i];

            let rowStart = 0;
            let rowEnd = numberOfRows - 1;
            let columnStart = 0;
            let columnEnd = numberOfColumns - 1;

            for (let j = 0; j < passId.length; j++) {
                const code = passId[j];

                if (code === 'F' || code === 'B') {
                    if (code === 'F') {
                        rowStart = rowStart;
                        rowEnd = rowStart + Math.floor((rowEnd - rowStart) / 2);
                    } else {
                        rowStart = rowStart + Math.floor((rowEnd - rowStart) / 2) + 1;
                        rowEnd = rowEnd;
                    }
                }

                if (code === 'L' || code === 'R') {
                    if (code === 'L') {
                        columnStart = columnStart;
                        columnEnd = columnStart + Math.floor((columnEnd - columnStart) / 2);
                    } else {
                        columnStart = columnStart + Math.floor((columnEnd - columnStart) / 2) + 1;
                        columnEnd = columnEnd;
                    }
                }

                if (rowStart === rowEnd && columnStart === columnEnd) {
                    const row = rowStart;
                    const column = columnStart;
                    const seatId = row * 8 + column;
                    seatIdArray.push(seatId);
                }
            }
        }
    }

    console.log(Math.max(...seatIdArray)); // part 1 answer

    const seatIdArraySorted = seatIdArray.sort((a, b) => a - b);
    const missing = new Array();

    for (var i = seatIdArraySorted[0]; i <= seatIdArray.length ; i++) {
      if (seatIdArray.indexOf(i) == -1) {
        missing.push(i);
      }
    }
    console.log(missing[0]); // part 2 answer
}

fetch('input.txt')
    .then(response => response.text())
    .then(response => {
        getPart1Result(response);
    });
