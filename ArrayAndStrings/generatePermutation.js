let str = ['A', 'B', 'C'];
let results = [];

function combination(arr) {
    let len = arr.length;
    let indices = Array(len).fill(0);
    results.push(arr.slice());

    let i = 0;
    while (i < len) {
        if (indices[i] < i) {
            let swapIdx = i % 2 === 0 ? 0 : indices[i];
            let temp = arr[i];
            arr[i] = arr[swapIdx];
            arr[swapIdx] = temp;
            results.push(arr.slice());
            indices[i]++;
            i = 0;
        } else {
            indices[i] = 0;
            i++;
        }
    }
}
combination(str);
console.log(results);



