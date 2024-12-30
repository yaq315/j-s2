//comparison operatores

/*console.log(10 == "10"); //value only
console.log(-100 == "-100");
console.log(10 != "10");


console.log(10 === "10");//value+type
console.log(10 !== "10");
console.log(10 !== 10);


console.log(10 >20);// larger than 
console.log(10 >10);
console.log(10 >= 10);//larger than or equal


console.log(10 <20);// smaller than 
console.log(10 <10);
console.log(10 <= 10);//smaller than or equal


console.log("osama"==="ahmad") //false
console.log(typeof"osama"===typeof"ahmad")//false*/

//assignment operatores
/*let a = 10;
a = a + 20;
a = a + 70;
a += 100 ;// a = a +100
a -= 50 ;//a = a-50 
console.log(a);*/

/*logical operatores
! Not
&& And 
|| Or*/

/*console.log(true);
console.log(!true);
console.log(!(10 == "10"));

console.log(10 == "10" && 10 >8 && 10>50);

console.log(10 == "10" || 10 >8 || 10>50);*/

/*
control flow 
- if 
- else if 
- else 
if (condition){
//block of code }
*/
/*task1*/
var age = 27;
if (age > 18) {
   ;}
   console.log("you are an adult") 
/*task2*/
var score = 45;
if (score <=50) {
   ;}
   console.log("You failed the test")
    /*task3*/
    var name ="john";
    if (name ="john") {
       ;}
       console.log("Hello, John" )
 /*task4*/
 var day ="Monday";
 if (day !="Saturday" && "sunday") {
    console.log("It's a weekday" )
    ;}
    
 /*task5*/
 var num = 4;
 if (num%2==0) {
    console.log("The number iseven")
    ;}
 /*task6*/
 var char="a";
 if (char = "letter") {
    console.log("It's a letter"   )
    ;}  
/*task7*/
var list=[1,2,3];
if (list= "array") {
   console.log( "It's an array")
   ;}  
/*task8*/
var x=5;
if (x= "positive number") {
    console.log("x is a positive number"   )
    ;}
/*task9*/
var y=-5;
if (y= "negative number") {
    console.log( "y is a negative number" )
    ;}
/*task10*/
var z=9;
if (z= " multiple of 3") {
    console.log("z is a multiple of 3")
    ;}
 /*task11*/
 var GPA ="a";
 switch(GPA){
    case "A":
        case "a":
     console.log( "Excellent" )
     case "B":
        case "b":
        console.log("Very Good")
        case "C":
            case "c":
            console.log( " Good")
            case "F":
                case "f":
                console.log("Failed" )
           default:
        console.log("a proper message")
 }
 /*task12*/
 var month = "January"
 if (month = "December","January","February" ) {
    console.log("Winter")
}else if (month ==="March","April","May"){
    console.log("spring")
} else if (month ==="June","July","August" ){
    console.log("Summer") }
else {
    console.log("Autumn")
}
/*task 13*/
var password = "mypassword123" 
if (password.length>= 8 ){
    console.log("Your password is strong" )
} else{
    console.log("Your password is short" )
} 
/*task14*/
const Email = "admin@admin.com";
const Password = "12345Admin";
var Email="correct"
var Password="correct"
function adminLoginCheck(enteredEmail, enteredPassword) {
  if (enteredEmail !== correctEmail) {
    console.log("Incorrect email");
  } else if (enteredPassword !== correctPassword) {
    console.log("Incorrect password");
  } else {
    console.log("Welcome");
  }
}


/*let discount = true;
let discountAmount = 30;
let country = "ksa"

if (age > 18) {
    price -= discountAmount; //price = price - discountAmount
}
/* else if ( country === "Egypt"){
    price -= 40;
} else if (country === "ksa"){
    price -= 40;}

/*} else {
    price -= 10
}

;*/













