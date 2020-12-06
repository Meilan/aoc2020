function getValidFields(values) {
    const validFields = [];

    values.forEach((keyValue) => {
        const key = Object.keys(keyValue)[0];
        const value = keyValue[key];

        switch (key) {
            case 'byr':
                if (
                    typeof Number(value) === 'number'
                    && value >= 1090
                    && value <= 2002
                ) {
                    validFields.push(key);
                }
            case 'iyr':
                if (
                    typeof  Number(value) === 'number'
                    && value >= 2010
                    && value <= 2020
                ) {
                    validFields.push(key);
                }
            case 'eyr':
                if (
                    typeof  Number(value) === 'number'
                    && value >= 2020
                    && value <= 2030
                ) {
                    validFields.push(key);
                }
            case 'hgt':
                const hgtInCm = value.split('cm');
                if (hgtInCm.length === 2) {
                    const height = Number(hgtInCm[0]);

                    if (height >= 150 && height <= 193) {
                        validFields.push(key);
                    }
                }

                const hgtInIn = value.split('in');
                if (hgtInIn.length === 2) {
                    const height = Number(hgtInIn[0]);

                    if (height >= 59 && height <= 76) {
                        validFields.push(key);
                    }
                }
            case 'hcl':
                if (
                    value.charAt(0) === '#'
                    && /^([a-f0-9]{6,})$/.test(value.slice(1))
                ) {
                    validFields.push(key);
                }
            case 'ecl':
                const condition = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];

                if (
                    condition.includes(value)
                ) {
                    validFields.push(key);
                }
            case 'pid':
                if (
                    value.length === 9
                    && typeof Number(value) === 'number'
                ) {
                    validFields.push(key);
                }
        }
    });

    return validFields;
}

function getPart2Result(input) {
    const inputArray = input.split('\n\n');
    const mandatoryFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
    const optionalFields = ['cid'];
    let valid = 0;

    for (let i = 0; i < inputArray.length; i++) {
        const values = inputArray[i]
            .split(' ')
            .map((val) => val.split('\n'))
            .flat()
            .map(item => {
                const [key, value] = item.split(':');

                return { [key]: value };
            });

        // check 1: check the length
        if (values.length === (mandatoryFields.length + optionalFields.length)) {
            const validFields = getValidFields(values);
            
            if (validFields.length === 7) {
                valid = valid + 1;
            }
        }

        // check 2: check the length and if the missing field is cid
        if (values.length === mandatoryFields.length) {
            const intersection = values.filter(value => optionalFields.includes(Object.keys(value)[0]));
            
            if (intersection.length === 0) {
                const validFields = getValidFields(values);

                if (validFields.length === 7) {
                    valid = valid + 1;
                }
            }
        }
    }

    console.log(valid); // the answer
}

fetch('input.txt')
    .then(response => response.text())
    .then(response => {
        getPart2Result(response);
    });

