function secondHighest(arr) {

    // If array has less than 2 elements
    if (arr.length < 2) {
        return -Infinity;
    }

    // Remove duplicate values
    let uniqueArr = [...new Set(arr)];

    // If all elements are same
    if (uniqueArr.length < 2) {
        return -Infinity;
    }

    // Sort array in descending order
    uniqueArr.sort(function(a, b) {
        return b - a;
    });

    // Return second highest element
    return uniqueArr[1];
}