var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
var t, mxLength = 0;
for (i = 0; i < friends.length; i++)
{
    if (friends[i].length > mxLength)
    {
        t = friends[i];
        mxLength = friends[i].length;
    }
}
console.log("The largest name is", t);
