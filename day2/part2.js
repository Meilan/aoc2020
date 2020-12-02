function getPart2Result(passwords) {
    const passwordArray = passwords.split('\n');

    const validPasswordsArray = [];

    passwordArray.forEach((password) => {
        const [policy, word] = password.split(':');
        const [positions, charactor] = policy.split(' ');
        const [firstPosition, secondPosition] = positions.split('-').map(Number);

        const isFirstPositionValid = word.trim()[firstPosition - 1] === charactor.trim();
        const isSecondPositionValid = word.trim()[secondPosition - 1] === charactor.trim();

        if (isFirstPositionValid !== isSecondPositionValid) {
            validPasswordsArray.push(word);
        }
    });

    console.log(validPasswordsArray.length); // the answer
}

fetch('input.txt')
    .then(response => response.text())
    .then(response => {
        getPart2Result(response);
    });

