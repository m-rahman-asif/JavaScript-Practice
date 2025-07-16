var mark = prompt("Enter mark: ");
mark = parseInt(mark);
if (mark >= 80 && mark <= 100)
    console.log("A+");
else if (mark >= 70 && mark <= 79)
    console.log("A");
else if (mark >= 60 && mark <= 69)
    console.log("A-");
else if (mark >= 50 && mark <= 59)
    console.log("B");
else if (mark >= 40 && mark <= 49)
    console.log("C");
else if (mark >= 33 && mark <= 39)
    console.log("D");
else if (mark >= 0 && mark <= 32)
    console.log("F");
else
    console.log("Invalid Mark")
