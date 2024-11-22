function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i); 
    }
}


forEach([1, 2, 3], (element, index) => {
    console.log(`Element: ${element}, Index: ${index}`);
});

let arr = [3, 4, 2, 8, 9, 2];

forEach(arr, (element, index) => {
    console.log(`Element: ${element}, Index: ${index}`);

});