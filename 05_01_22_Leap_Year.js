let year = parseInt(prompt("Enter a year"));
let LY = false;

if (year % 4 == 0){
    if (year % 100 ==0){
        if (year % 400 ==0)
            LY = true;
    }
    else{
    LY = true;
    }
}
if (LY){
    alert(year + " is a leap year");
}
else{
    alert(year + " is NOT a leap year");
}