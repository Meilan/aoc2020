function getPart1Result(input) {
    const inputArray = input.split('\n\n');
    const mandatoryFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
    const optionalFields = ['cid'];
    let valid = 0;

    for (let i = 0; i < inputArray.length; i++) {
        const values = inputArray[i]
            .split(' ')
            .map((val) => val.split('\n'))
            .flat()
            .map(item => item.split(':'));
            
        // check 1: check the length
        if (values.length === (mandatoryFields.length + optionalFields.length)) {
            valid = valid + 1;
        }

        // check 2: check the length and if the missing field is cid
        if (values.length === mandatoryFields.length) {
            const intersection = values.filter(value => optionalFields.includes(value[0]));

            if (intersection.length === 0) {
                valid = valid + 1;
            }
        }
    }

    console.log(valid); // the answer 192
}

fetch('input.txt')
    .then(response => response.text())
    .then(response => {
        getPart1Result(response);
    });

