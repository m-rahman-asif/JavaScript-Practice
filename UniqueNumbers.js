var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
console.log("Unique numbers in the array: ")
for (var i = 0; i < numbers.length; i++) {
    var c = 0;
    for (j = 0; j < numbers.length; j++) {
        if (numbers[i] == numbers[j]) {
            c++;
        }
    }
    if (c == 1)
        console.log(numbers[i]);
}