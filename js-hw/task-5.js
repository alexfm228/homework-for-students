const array = [1, 2, 3, 4, 5, 6];

const Numbers = [];

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        Numbers.push(array[i]);
    }
}

console.log(Numbers);
