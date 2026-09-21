let arr = [10, 5, 8, 10, 3, 8];

let largest = -Infinity;
let second = -Infinity;

for (let x of arr) {
    if (x > largest) {
        second = largest;
        largest = x;
    }
    else if (x > second && x !== largest) {
        second = x;
    }
}

console.log(second);
