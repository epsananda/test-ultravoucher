function arrayGroup(arr) {
    let groups = [];

    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        let sortirWord = sortirString(word);
        let found = false;

        for (let j = 0; j < groups.length; j++) {
            if (sortirString(groups[j][0]) === sortirWord) {
                groups[j].push(word);
                found = true;
                break;
            }
        }

        if (!found) {
            groups.push([word]);
        }
    }

    return groups;
}

function sortirString(str) {
    return str.split('').sort().join('');
}

console.log(arrayGroup(['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map']));