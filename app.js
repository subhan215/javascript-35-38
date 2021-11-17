// Answer 1 //
/* function date(){
   alert( new Date());
}
date(); */
// Answer 2 //
/* var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
function fullName(firstName, lastName){
    alert("hello " + firstName + " " + lastName);
}
fullName(firstName, lastName); */

// Answer 3 //
/* var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");
function sum(num1, num2){
    alert(num1 + num2);
}
sum(num1, num2); */
// Answer 4 //
/* var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");
var opt = prompt("Enter operator");
function calc(num1, num2 ,opt){
    if(opt === "+"){
        return num1 + num2;
    }
    else if(opt === "-"){
        return num1 - num2;
    }
   else if(opt === "/"){
        return num1 / num2;
    } 
    else if(opt === "*"){
        return num1 * num2;
    } else{
        return "Please enter correct operator";
    }
} 
alert(calc(num1, num2, opt)); */
// Answer 5 //
/* var num = +prompt("Enter number for square");
function sq(num){
   alert(num * num);
}
sq(num); */
// Answer 6 //
/*  var answer = 1;
 function factorial(n){
     if(n == 0 || n ==1){
         return answer;
     } else {
         for(var i = n; i >=1 ;i--){
             answer = i * answer;
         }
         return answer;
     }
 }
 var n = +prompt("Enter number")
 answer = factorial(n);
 document.write("The factorial of " + n + " is " + answer); */
// Answer 7 //
/* var startNum = +prompt("Enter start number");
var endNum = +prompt("Enter end number");
function counting(startNum, endNum){
    for(var i = startNum; i <= endNum; i++){
        document.write(i + "<br>");
    }
}
counting(startNum, endNum); */

// Answer 8 //
/* var base = +prompt("Enter base");
var perp = +prompt("Enter perpendicular");
var baseSq;
var perpSq;
function calculateHypotenuse(base, perp){
    function calculateSquare(base,perp){
         baseSq = base * base;
         perpSq = perp * perp;
        return baseSq, perpSq;
        
    }
    calculateSquare(base, perp)
    console.log("Hypotenuse =" + Math.sqrt(baseSq + perpSq));
}

calculateHypotenuse(base, perp); */
// Answer 9 //
/* var width;
var height;
function area(width, height){
    alert("area: " + width * height);
}
area(width = 900, height = 80); */
// Answer 10 //
/* function checkPalindrome(str) {
    var len = str.length;
    for (var i = 0; i < len / 2; i++) {
            if(str[i] !== str[len -1 -i]){
                return("It is not a palindrome")
            }
    }
    return "It is a palindrome";
}
var str = prompt("Enter a string");
console.log(checkPalindrome(str)); */
// Answer 11 //
/* var str = "the quick brown fox";
function s(str) {
    console.log(str.slice(0, 1).toUpperCase() + str.slice(1, 4) +
        str.slice(4, 5).toUpperCase() + str.slice(5, 10) +
        str.slice(10, 11).toUpperCase() + str.slice(11, 16 ) +
        str.slice(16, 17).toUpperCase() + str.slice(17, 19 ) )
}
s(str); */
// Answer 12 //
/* var str = "Web Development Tutorial";
function s(str) {
    var splitStr = str.split(" ");
    if (splitStr[0].length > splitStr[0].length &&
        splitStr[0].length > splitStr[0].length) {
        document.write(splitStr[0]);
    } else if (splitStr[1].length > splitStr[0].length &&
        splitStr[1].length > splitStr[2].length) {
        document.write(splitStr[1]);
    }
    else if (splitStr[2].length > splitStr[0].length &&
        splitStr[2].length > splitStr[1].length) {
        document.write(splitStr[2]);
    }
}
s(str); */

// Answer 13 //
/* var str ;
var letter ;
function occ(str, letter){
   var counts = 0;
   for(var i = 0; i < str.length; i++){
      if( str.charAt(i) === letter){
       counts += 1;
      } 
   }
   return counts;
}
console.log(occ( "Independence", "n")); */

// Answer 14 //
/* var radius = +prompt("enter radius of circle")
function calcCircumference(radius){
     document.write("The circumference is:" + 2 * 3.14 * radius + "<br>")
}
calcCircumference(radius);
function calcArea(radius){
    document.write("The area is:" + 3.14 * (radius * radius));
}
calcArea(radius); */