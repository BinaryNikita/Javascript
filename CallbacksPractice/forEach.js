function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i); // Pass the element and its index to the callback
    }
}


forEach([1, 2, 3], (element, index) => {
    console.log(`Element: ${element}, Index: ${index}`);
});

