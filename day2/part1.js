function getPart1Result(passwords) {
    const passwordArray = passwords.split('\n');

    const validPasswordsArray = [];

    passwordArray.forEach((password) => {
        const [policy, word] = password.split(':');
        const [minMaxAppearence, charactor] = policy.split(' ');
        const [min, max] = minMaxAppearence.split('-');

        const charactorLength = (word.match(new RegExp(charactor, 'g')) || []).length;
        if (charactorLength >= min && charactorLength <= max) {
            validPasswordsArray.push(word);
        }
    });

    console.log(validPasswordsArray.length); // the answer
}

fetch('input.txt')
    .then(response => response.text())
    .then(response => {
        getPart1Result(response);
    });

