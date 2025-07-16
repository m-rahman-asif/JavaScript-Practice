var arr=[17, 9, 18, 11, 2, 15, 8, 13, 12, 20, 3, 19, 14, 7, 1, 5, 4, 10, 16, 6];
for (var i = 0; i < arr.length; i++)
{
    for (var j = 0; j < arr.length - i - 1; j++)
    {
            if (arr[j] > arr[j + 1])
              {
                var t=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=t;
              } 
    }
}
console.log("Sorted Array: ", arr);