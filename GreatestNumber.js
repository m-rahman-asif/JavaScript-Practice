var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
var g = 0;
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > g)
        g = numbers[i];
}
console.log("The greatest number: ", g);