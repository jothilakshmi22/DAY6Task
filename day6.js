/*PART 1

1.Find the culprit fix.html

<!DOCTYPE html>
<html>
<body>
 <script>
 alert( “I’m JavaScript!’);
 </script>
 Whats the error in this ?
</body>
</html>

SOLUTION:

Brackets needed to be closed.
<!DOCTYPE html>
<html>
<body>
 <script>
 alert( "I’m JavaScript!");
 </script>
 Whats the error in this ?
</body>
</html>



2.Find the culprit and invoke the alert

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
scripts.js
alert(“I’m invoked!”);



SOLUTION:  Brackets needed to be closed.

<!DOCTYPE html>
<html>
<body>
 <script src="script.js"></script>
</body>
</html>

Script.js
alert("I’m invoked!");



3.Explain the below how it works
explain.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
alert("I'm JavaScript!");
alert('Hello') // this line is not having semicolon
alert(`Wor
 ld`)
alert(3 +
1
+ 2); // this is multiple line code and its working

SOLUTION:
<!DOCTYPE html>
<html>
<body>
 <script src="script.js"></script>
</body>
</html>

Script.js
alert("I'm JavaScript!"); //Alerts Im JavaScript. 
alert('Hello') //Alters Hello even if semicolon is absent.
alert(`Wor //Alters Wor in one line and ld in next line.
 ld`) 
alert(3 + //Displays the result 6 in one line.
1
+ 2); 


4.Fix the below to alert Guvi geek

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+lname;alert( admin ); // "Guvi geek"

SOLUTION:
Adding of spacing betweeen fname & lname

<!DOCTYPE html>
<html>
<body>
 <script src="script.js"></script> <!-- correct close symbols " "-->
</body>
</html>
script.js
let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek";
admin = fname+" "+lname;
alert(admin);



5.Fix the below to alert hello Guvi geek
fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let fname=10.5; 
fname = "Guvi";
lname = "geek"let name = fname+lname;alert( 'hello ${name}' );

SOLUTION:
Proper usage of template literals in alert message. 

<!DOCTYPE html>
<html>
<body>
 <script src="script.js"></script> <!-- correct close symbols " "-->
</body>
</html>
Script.js
let fname=10.5; 
fname = "Guvi";
lname = "geek"
let name = fname+lname;
alert( `hello ${name}` );


6.Fix the below to alert sum of two numbers
fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let a = prompt("First number?");
let b = prompt("Second number?");
alert(a + b);

SOLUTION:
ParseInt to convert string to number.
Fix.html
<!DOCTYPE html>
<html>
<body>
 <script src="script.js"></script> <!-- correct close symbols " "-->
</body>
</html>

Script.js
let a = parseInt(prompt("First number?"));
let b = parseInt(prompt("Second number?"));
alert(a+b);


7.If you run the below scritpt you will get “Code is Blasted”
Explain Why the Code is blasted and how to diffuse it and get “Diffused”.
fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
var a = "2" > "12";//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}

SOLUTION:

The above code considers the values “2” and “12” as strings and compares them with their decimal ASCII value .
So the var a becomes as a boolean value and here it takes true .
If we need “Diffused” as output we should alter the condition to 
Var a = “2” < “12” ; 





8.How to get the success in console.
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let a = prompt("Enter a number?");//Don't modify any code below thisif (a) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}

SOLUTION:

Do not enter any value 
    (or)
Enter the value as NULL in the prompt box to obtain the output “Success”.


9.How to get the correct score in console.
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let value = prompt('How many runs you scored in this ball');
if (value === 4) {
      console.log("You hit a Four");
} else if (value === 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}

SOLUTION:

Script.js
let value = prompt('How many runs you scored in this ball');
if (value == 4) {
      console.log("You hit a Four");
} else if (value == 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}

10.Fix the code to welcome the Employee
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let login = 'Employee';
let message = (login == 'Employee') ? :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';console.log(message);

SOLUTION:

Script.js

let login = 'Employee';
let message = (login == 'Employee') ?
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' : 'Welcome':''
  console.log(message);


11.Fix the code to welcome the boss
fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
// You cant change the value of the msg
let message;if (null || 2 || undefined )
{
 let message = "welcome boss";
}
else
{
 let message = "Go away";
}
  console.log(message);

SOLUTION:
let message;
if (null || 2 || undefined )
{
  message = "welcome boss";
}
else
{
  message = "Go away";
}
 console.log(message);

12.Fix the code to welcome the boss
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let message;
let lock = 2;//Dont change any code below this if (null || lock || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
  console.log(message);
SOLUTION:

let message;
let lock;
if (null || lock || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
  console.log(message);

13.Fix the code to welcome the boss
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let message;
let lock = 2;//Dont change any code below thisif (lock && " " || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
console.log(message);
SOLUTION:

let message;
let lock = 2;
if (lock && " " && undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
console.log(message);

14.Change the code to print

3
2
1
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
//You can change only 2 characterslet i = 3;while (i) {
  console.log( --i );
}

SOLUTION:

let i = 3;
while (i) 
{
  console.log( i-- );
}

15.Change the code to print 1 to 10 in 4 lines
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let num = 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)

SOLUTION:

let num=1;
while(num<=10){
    console.log(num);
    num++;
}

16.Change the code to print even numbers
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
//You are allowed to modify only one character for (let num = 2; num <= 20; num += 1) {
  console.log(num)
}

SOLUTION:

Script.js
for (let i = 2; i <= 20; i += 2)
{ 
    console.log(i);
}

17.Change the code to print all the gifts
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>

script.js
let gifts = ["teddy bear", "drone", "doll"];for (let i = 0; i < 3; i++) {
  console.log('Wrapped ${'gifts[i]'} and added a bow!');
}

SOLUTION:

Script.js
let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) 
{
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}


18.Fix the code to disarm the bomb.
fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let countdown = 100;while (countdown > 0) {
  countdown--;
  if(countdown == 0)
  {
   console.log("bomb triggered");
  }
}

SOLUTION:

Script.js
let countdown = 100;
while (countdown >= 0) {
  countdown--;
  if(countdown == 0)
  {
   console.log("bomb triggered");
  }
}


19.Whats the msg printed and why?
var lemein = “0”;
var lemeout = 0;
var msg = “”;if (lemein) {
 msg += “hi”;
 }if (lemeout) {
 msg += ‘Hello’;
}console.log(msg);

SOLUTION:

The message printed in the above given code will be “hi”.Because the if conditions handles a boolean of true value.


20.Whats the msg printed and why? Guess you answer before running it.
var lemein = “0”;
var lemeout = 0;
var msg = “”;if (lemein) {
 msg += “hi”;
 }if (lemeout) {
 msg += ‘Hello’;
}console.log(msg);

SOLUTION:

The message printed in the above given code will be “hi”.*/

/*PART-2


1.Write a code to print the numbers in the array
Output: 1234567891011
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];var new_string = “”;
 
for (var i = 1; i < 11; i--) {
 new_string += numsArr[i] 
}console.log(new_string);

SOLUTION:
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = " ";
for (var i = 0; i < 11; i++) 
{ 
 new_string += numsArr[i] 
}
console.log(new_string);


2.Write a code to print the numbers in the array
Output: 1,2,3,4,5,6,7,8,9,10,11
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];var new_string = “”;
 
for (var i = 1; i < 11; i++) {
 new_string += numsArr[i] + , 
}console.log(new_string);

SOLUTION:

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = " "; 
for (var i = 0; i < 11; i++)
 {
 new_string += numsArr[i] + ',' ;
}
console.log(new_string);

3.Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)
Output: 11 10 9 8 7 6 5 4 3 2 1
var new_string = “”;
 
for (var i = 11; i > 0; i — ) {
 new_string += numsArr[i] + “ “ 
}
console.log(new_string);

SOLUTION:

var new_string = "";
 
 for (var i = 11; i > 1; i --) {
  new_string += i + " " ;
 }
 new_string=new_string+"1";
 console.log(new_string);


4.Write a code to replace the array value — If the number is even, replace it with ‘even’.
Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 0 )
 {
 numsArr[i] = odd
 }
}
console.log(numsArr);

SOLUTION:

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 0 )
 {
 numsArr[i] ="even"
 }
}
console.log(numsArr);


5.Write a code to replace the array value — If the index is even, replace it with ‘even’.
Output: [ “even”, 2, “even”, 4, “even”, 6, “even”, 8, “even”, 10, … ]
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 0 )
 {
 numsArr[i] = even
 }
}
console.log(numsArr);

SOLUTION:

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(i%2 == 0 )
 {
 numsArr[i] = "even";
 }
}

6.Write a code to add all the numbers in the array
Output: 66
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];for (var i = 0; i <=10; i++) {
 var sum;
 sum += numsArr[i]
}
console.log(sum);

SOLUTION:

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <=10; i++) 
{
 sum += numsArr[i]
}
console.log(sum);


11.Write a code to add the even numbers only
Output: 30
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;for (var i = 0; i <10; i++) {
 if(numsArr[i]%2==0);
 sum += numsArr[i]
}
console.log(sum);

SOLUTION:

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <10; i++)
{
 if(numsArr[i]%2==0)
 		sum += numsArr[i]
}
console.log(sum);

12.Write a code to add the even numbers and subract the odd numbers
Output: 94
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=100;for (var i = 0; i <=10; i++) {
 if(numsArr[i]%2!=0);
 {
 sum += numsArr[i]
 }
 else
 {
 sum -= numsArr[i]
 }
}
console.log(sum);

SOLUTION:

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=100;
for (var i = 0; i <=10; i++) 
{
 if(numsArr[i]%2==0);
 {
 sum += numsArr[i]
 }
 else
 {
 sum -= numsArr[i]
 }
}
console.log(sum);


13.Write a code to print inner arrays
Output:
Array(5) [ 1, 2, 3, 4, 5 ]
Array(6) [ 6, 7, 8, 9, 10, 11 ]
var numsArr = [[1, 2, 3, 4, 5][ 6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr.length; i++); {
 console.log( numsArr[i])
}

SOLUTION:

var numsArr = [[1, 2, 3, 4, 5][ 6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr.length; i++)
 {
 console.log( numsArr[i])
}

14.Write a code to replace the array value — If the index is even, replace it with ‘even’.
Output: [ [“even”, 2, “even”, 4, “even”], [6, “even”, 8, “even”, 10, …] ]
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0;for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;i++ )
      if(numsArr[i] %2 == 0 )
      {
         numsArr[i] = even
       }
}
console.log(numsArr);

SOLUTION:


var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0;
for (var i = 0; i < numsArr.length; i++) 
{
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;i++ )
      if(j %2 == 0 )
      {
         numsArr[i][j] = “even”;
       }
}
console.log(numsArr);


15.Write a code to print elements in the inner arrays in reverse
Output: 11 10 9 8 7 6 5 4 3 2 1
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0;for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = inner_array.length; j < 0 ;j-- )
     str_all +=inner_array[j]
}
console.log(str_all);

SOLUTION:

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=“”;
for (var i = 0; i < numsArr.length; i++) 
{
 var inner_array = numsArr[i];
 for(var j = inner_array.length-1; j > 0 ;j-- )
     str_all +=inner_array[j]
}
console.log(str_all);


16.Write a code to add elements in the inner arrays based on odd or even values
Output:
36
30
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_odd=0;
var sum_even=0;for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
 if(numsArr[i]%2!=0)
 {
 sum_odd += numsArr[i]
 }
 else
 {
 sum_even += numsArr[i]
 }
}
}
console.log(sum_odd);
console.log(sum_even);

SOLUTION:
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_odd=0;
var sum_even=0;for (var i = 0; i < numsArr.length; i++) {
var inner_array = numsArr[i];
for(var j = 0 ; j < inner_array.length;j++ ){
 if(numsArr[i][j]%2!=0)
 sum_odd += numsArr[i][j];
 else
 sum_even += numsArr[i][j];
}
}
console.log(sum_odd);
console.log(sum_even);
PART-3


17.Fix the code to get the largest of three.
Code:
aa = (f,s,t) => {
 let f,s,t;
 console.log(f,s,t);
 if(f>s &&f>t){
 console.log(f)}
 else if(s>f && s>t){
 console.log(s)}
 else{
 console.log(t)}
}aa(1,2,3);

SOLUTION:

aa = (f,s,t) => {
 console.log(f,s,t);
 if(f>s &&f>t)
 console.log(f);
 else if(s>f && s>t)
 console.log(s);
 else
 console.log(t);
}
aa(1,2,3);

OUTPUT:

1 2 3
3

18.Fix the code to Sum of the digits present in the number
Code:
let n = 123;console.log(add(n));function add(n)
{
let sum = 10;
for(var i=0;i<n.length;i++){
 sum+=n[i]
 }
 return sum;
}

SOLUTION:

let n = 123;
console.log(add(n));

function add(n)
{
let sum = 0;
while (n) 
{
    sum += n % 10;
    n = Math.floor(n / 10);
}

 return sum;
}
OUTPUT:
6



19.Fix the code to Sum of all numbers using IIFE function
Code:
const arr = [9,8,5,6,4,3,2,1];(function() {
 let sum = 0;
 for (var i = 0; i <= arr.length; i++);{
 sum += arr[i];
 }
 console.log(sum);
 return sum;
})();

SOLUTION:

const arr = [9,8,5,6,4,3,2,1];
(function()
{
let sum = 0;
for (var i = 0; i <= arr.length; i++)
{
 sum += arr[i];
}
console.log(sum);
return sum;
})();

OUTPUT:
45




20.Fix the code to remove duplicates.
Code:
var res = function(arr){
 for(var i=0; i < arr.length; i++){
 newArr = [];
 if(newArr.indexOf(arr[i]) == -1) {
 newArr.push(arr[i]);
 } }
 console.log(newArr)
}res([“guvi”,”geek”,”guvi”,”duplicate”,”geeK”])

SOLUTION:

var res = function(arr){
var newArr = [];
for(var i=0; i < arr.length; i++)
{
 if(newArr.indexOf(arr[i]) == -1) 
{
 	newArr.push(arr[i]);
 }
}
console.log(newArr)
}res([“guvi”,”geek”,”guvi”,”duplicate”,”geeK”]);


OUTPUT:
[“guvi”,”geek”,”duplicate”,”geeK”]



Fix the code to give the below output:
Expected Output:
[
{firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},
{firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}
]
Code:
var array =[[[“firstname”,”vasanth”],[“lastname”,”Raje”],[“age”,24],[“role”,”JSWizard”]],[[“firstname”,”Sri”],[“lastname”,”Devi”],[“age”,28],[“role”, “Coder”]]];
var final=[]
while(array.length!=0)
{
 var outer_remove = array.shift();
 
 while(outer_remove.length!=0)
 {
 var inner_remove = outer_remove.shift()
 var key = inner_remove[0]
 var value =inner_remove[1]
 new_object[key]=value
 }
 final.push(new_object)}
SOLUTION:

var array =[[[“firstname”,”vasanth”],[“lastname”,”Raje”],[“age”,24],[“role”,”JSWizard”]],[[“firstname”,”Sri”],[“lastname”,”Devi”],[“age”,28],[“role”, “Coder”]]];
var final=[]
var new_object;
while(array.length!=0)
{
 var outer_remove = array.shift();
 
 while(outer_remove.length!=0)
 {
 var inner_remove = outer_remove.shift()
 var key = inner_remove[0]
 var value =inner_remove[1]
 new_object[key]=value
 }
 final.push(new_object)}

22.Fix the code to give the below output:
Sum of odd numbers in an array
Code:

var as=[12,34,5,6,2,56,6,2,1];
var s=as.reduce(function(a,c){
 if(c%2!=0)
 {
 return a+c;
 }
 return a;});
console.log(s);

SOLUTION:

var as=[12,34,5,6,2,56,6,2,1];
var s=as.reduce((a,c)=> c%2 != 0 ? a+c : a);
console.log(s);

OUTPUT:
124*/
