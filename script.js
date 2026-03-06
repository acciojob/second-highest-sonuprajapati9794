function secondHighest(arr) {

    if (arr.length < 2) {
        return -Infinity;
    }

    let unique = [...new Set(arr)];  // duplicate remove

    if (unique.length < 2) {
        return -Infinity;
    }

    unique.sort((a, b) => b - a);  // descending order

    return unique[1]; // second highest
}