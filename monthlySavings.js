var n, arr = [];
n = prompt();
n = parseInt(n);
for (var i = 0; i < n; i++)
    arr[i] = prompt();
var livingCost = prompt();
livingCost = parseInt(livingCost);
console.log(monthlySavings(arr, livingCost));

function monthlySavings(arr, num) {
    if (typeof arr != "object" || typeof num != "number")
        return ("invalid input");
    var tax = 0, total = 0;
    for (var i = 0; i < arr.length; i++) {
        arr[i] = parseInt(arr[i]);
        if (arr[i] >= 3000) {
            tax += arr[i] * (20 / 100);
        }
        total += arr[i];
    }
    total -= (tax + livingCost);
    if (total >= 0)
        return total;
    else
        return ("earn more");
}


