var y = prompt("Enter year: ");
y = parseInt(y);
if ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0)
    console.log("Leap Year");
else
    console.log("Not Leap Year");