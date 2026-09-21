let name ="Rahul";
let marks = [78,85,92,67,88];
let sum =0;
for (x  of marks) {
    sum = sum+x;
    
}
console.log(sum);
let Avg = sum/marks.length;
console.log(Avg);

if(Avg>=90)
{
    console.log("GradeA");
}
else if(Avg<=90 && Avg>=75)
{
    console.log("GradeB");
}

else if(Avg<=75 && Avg>=60)
{
    console.log("Grade C");
}
else if(Avg<=60 && Avg>=40)
{
    console.log("GradeD");

}
else{
    console.log("Fail");
}

