console.log("hello world");
// arithmetic operator
// console.log(2+4);
// console.log(8-3);
// console.log(2*4);
// console.log(42/21);
// console.log(2%4);

// comparision  operator
// let a=34;
// let b=47;
// console.log(a==b);
// console.log(a>=b);
// console.log(a<=b);
// console.log(a>b);
// console.log(a<b);


// let a=3;
// let b=4;
// console.log("sum is :" ,a + b);

// template literals
// let pencil=5;
// let notebook=40;
// console.log("the sum of all price is :",pencil+notebook,"rs");
// console.log(`the sum of all price is :${pencil+notebook}rs`);

// console.log("before if statement ");
// let age=23;
// if(age>18){
//     console.log("you can vote");
// }
// console.log("after if statement");

// let color="red";
// if(color=="red"){
//     console.log("stop");
// }
// if(color=="green"){
//     console.log("go");;
// }
// if(color=="yellow"){
//     console.log("ready");;
// }

// let color;
// color=prompt("enter color here");
// if(color=="red"){
//     console.log("stop");
// }
// else if(color=="green"){
//     console.log("go");;
// }
// else if(color=="yellow"){
//     console.log("ready");;
// }

// let mark;
// mark=prompt("enter your marks here");
// if(mark>90){
//     console.log("A++");
// }
// else if(mark>80){
//     console.log("A");
// }
// else if(mark>70){
//     console.log("B")
// }

// let size="XL";
// // size=prompt("enter your choice");
// if(size==="XL"){
//     console.log("you have to pay 250rs");
// }
// else if(size==="L"){
//     console.log("you have to pay 200rs");
// }
// else if(size==="M"){
//     console.log("you have to pay 100rs");
// }
// else if(size==="S"){
//     console.log("you have to pay 50rs");
// }
// else{
//     console.log("you have chosen wrong size")
// }

// let marks;
// marks=prompt("enter your marks");
// if(marks>33){
//     console.log("passed");
//     if(marks>90){
//         console.log("outstanding ")
//     }
//     else if(marks>70){
//         console.log("A")
//     }
//     else if (marks>50){
//         console.log("B")
//     }
//     else{
//         console.log("passed by low marks")
//     }
// }
// else{
//     console.log("fail");
// }

// let str;
// str=prompt("enter your string value");
// if(str[0]=='a' && str.length>3){
//     console.log("good string");
// }
// else{
//     console.log("not good")
// }

// if(undefined){
//     console.log("in boolean value is true");
// }
// else{
//     console.log("falsy value")
// }

// switch statement
// let color;
// color=prompt("enter your color")
// switch(color){
//     case "red":
//         console.log("stop")
//         break;
//     case "yellow":
//         console.log("slow down")
//         break;
//     case "green":
//         console.log("go")
//         break;
//     default:
//         console.log("something error")
// }

// alert("parmeshwar yadav")
// prompt("enter your name :")


// practice question 1
// let num;
// num=parseInt(prompt("enter your number"));
// if(num%10==0){
//     console.log("good")
// }
// else{
//     console.log("bad")
// }

// practice question 2
// let name;
// let age;
// name=prompt("enter your name");
// age=prompt("enter your age");
// console.log(`${name} is ${age} years old`)

// practice question 3
// let mcode;
// mcode=parseInt(prompt("enter your m code value"));
// switch(mcode){
//     case 1:
//         console.log(`month in quater 1: january ,february ,march`);
//         break;
//     case 2:
//         console.log(`month in quater 2: april , may ,june`);
//         break;
//     case 3:
//         console.log(`month in quater 3: july ,august , september`);
//         break;
//     case 4:
//         console.log(`month in quater 4: october , november ,december`);
//         break;
//     default:
//     console.log(`you have entered wrong mcode`);
// }

// practice question 3
// let word;
// word=prompt("enter word here");
// if((word[0]=="A" || word[0]=="a") && word.length>=5){
//     console.log("golden word");
// }
// else{
//     console.log("not golden")
// }

// practice question 3
// let a;
// let b;
// let c;
// a=parseInt(prompt("enter first No."));
// b=parseInt(prompt("enter second No."));
// c=parseInt(prompt("enter third No."));
// console.log(a)
// console.log(b)
// console.log(c)
// if(a>b){
//     if(a>c){
//         console.log(`a:${a} is greater `);
//     }else{
//         console.log(`c:${c} is greater`)
//     }
// }else if(b>c){
//     console.log(`b:${b} is greater`)
// }else{
//     console.log(`c: ${c} is greater`)
// }

// practice question 4
// let num1=parseInt(prompt("enter first number"));
// let num2=parseInt(prompt("enter second number"));
// if((num1%10)==(num2%10)){
//     console.log("both no. has same end with" ,(num1 % 10));
// }
// else{
//     console.log("no end with same");
// }


// js part 3
// let msg="   hello   ";
// console.log(msg.trim());
// console.log(msg)

// let str="Parmeshhwar yadav";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);
// console.log(str.indexOf("sh"));
// console.log(str.indexOf("y"))
// console.log(str.indexOf("slh"))
// console.log(str.indexOf("l"))
// console.log(str.trim().toUpperCase().indexOf("A"))
// console.log(str.slice(3));
// console.log(str.slice(3,10));
// console.log(str.slice(0));
// console.log(str.slice(-2));
// console.log(str.slice(-5,-1));
// console.log(str.slice(-99));
// console.log(str.substring(3))
// console.log(str.substring(3,10));
// console.log(str.substring(0));
// console.log(str.substring(-2));
// console.log(str.substring(-5,-1));
// console.log(str.substring(-99));
// console.log(str.replace("yadav","ahir"));
// console.log(str)
// console.log(str.repeat(4))


// let str="help!";
// console.log(str.trim().toUpperCase())
// let name="ApnaCollege";
// console.log(name.slice(4,9));
// console.log(name.indexOf("na"));
// console.log(name.replace("Apna","Our"));
// console.log(name.slice(4).replace("l","t"))

// array 
// let students=["aman","rahul","ram","rohit",2,3.4]
// console.log(students)
// students[0]="parmeshwar";
// console.log(students)
// students[10]="raman";
// console.log(students)
// console.log(students.length)
// console.log(students.push(5))
// console.log(students)
// console.log(students.pop())
// console.log(students)
// console.log(students.unshift(5))
// console.log(students)
// console.log(students.shift())
// console.log(students)


// let months=["january","july","march","august"];
// console.log(months.shift())
// console.log(months.shift())
// console.log(months.unshift("june"))
// console.log(months.unshift("july"))
// console.log(months)
// console.log(months.indexOf("january"))
// console.log(months.includes("january"))
// let arr2=["2","3","4"]
// console.log(months.concat(arr2))
// console.log(months)
// console.log(arr2)
// console.log(months.reverse())
// console.log(months.reverse())
// console.log(months.slice(2))
// console.log(months.slice(1,3))
// console.log(months.slice())
// console.log(months.slice(8))
// console.log(months.slice(-3))
// console.log(months)
// console.log(months.splice())
// console.log(months.splice(1))
// console.log(months)
// console.log(months.splice(1,1))
// console.log(months)
// console.log(months.splice(0,1 ,102,203))
// console.log(months)
// console.log(months.splice(78))
// console.log(months)

// console.log(months.sort())
// let days=["monday","sunday","wednesday","tuesday"]
// console.log(days.sort())
// let sqr=[25,16,4,49,36,9]
// console.log(sqr.sort())


// console.log(months.splice(0,2,"july","june"))
// console.log(months)
// let lang=["c","c++","html","javascript","python","java","c#","sql"]
// console.log(lang.reverse().indexOf("javascript"))
// let nums=[[2,4],[3,6],[4,8]];
// console.log(nums)

// let game=[["*",null,0],[null,"*",null],[0,null,"*"]]
// console.log(game)

// assignment question practice
// let nums=[7,0,9,4]
// console.log(nums.slice(0,3))
// console.log(nums.slice(-3))

// let str;
// str=prompt("enter your string");
// if(str.length==0){
//     console.log("string is empty");
// }else{
//     console.log("not empty")
// }

// let str="Parmeshwar Yadav";
// idx=4;
// if(str[idx]==str[idx].toLowerCase()){
//     console.log("equal hai")
// }else{
//     console.log("not equal")
// }

// let str=prompt("enter your text");
// console.log(`original string:${str}`);
// console.log(`after trim:${str.trim()}`);

// let arr=[48,78,39,"hello","rahul"]
// let item=64;
// if(arr.indexOf(item)!=-1){
//     console.log("already exist");
// }else{
//     console.log("nahi hai ye ")
// }


// js part4
// for(let i=1; i<=5; i++){
//     console.log(i);
// }

// for(let i=5; i>=1; i--){
//     console.log(i);
// }

// for(let i=1; i<=15; i=i+2){
//     console.log(i);
// }

// console.log("backward");
// for(let i=15; i>=1; i=i-2){
//     console.log(i);
// }

// for(let i=2; i<=10; i=i+2){
//     console.log(i);
// }

// let n=parseInt(prompt("enter for table no"));
// for(let i=n; i<=10*n; i=i+n){
//     console.log(i);
// }

// for(let i=1;i<=3;i++){
//     console.log(`outer loop :${i}`)
//     for(let j=1;j<=3;j++){
//         console.log(j);
//     }
// }

// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }


// let n=parseInt(prompt("enter your no"));
// let j=n;
// while(j<=n*10){
//     console.log(j);
//     j=j+n;
// }

// let fruits=["mango","apple","banana","litchi","orange"]
// for(let i=0; i<=fruits.length-1;i++){
//     console.log(`${i} ${fruits[i]}`)
// }
// for(let i=fruits.length-1;i>=0;i--){
//     console.log(`${i}:${fruits[i]}`);
// }




// let heros=[["ironman","spiderman","thor"],["superman","wonder woman","flash"]];
// for(let i=0;i<heros.length;i++){
//     console.log(`list #${i}`);
//     for(let j=0;j<heros[i].length;j++){
//         console.log(`${j}:${heros[i][j]}`);
//     }
// }

// let fruits=["mango","apple","banana","litchi","orange"]
// for(fruit of fruits){
//     console.log(fruit);
// }

// for(char of "apnacollege"){
//     console.log(char);
// }

// let heros=[["ironman","spiderman","thor"],["superman","wonder woman","flash"]];
// for(list of heros){
//     for(hero of list){
//         console.log(hero);
//     }
// }



// js part4 assignment question
// practice question1
// let arr=[1,2,3,4,5,6,2,3];
// let num=2;
// for(let i=0;i<arr.length;i++){
//     if(num==arr[i]){
//         arr.splice(i,1);
//     }
// }
// console.log(arr)

// question 2
// let num=parseInt(prompt("enter any digit no"));
// console.log(num.length);
// let count=0;
// let copy=num;
// while(copy>0){
//     count++;
//     copy=Math.floor(copy/10);
// }
// console.log(count);


// question 3
// let num=23567780;
// let sum=0;
// let copy=num;
// while(copy>0){
//     digit=copy%10;
//     sum +=digit;
//     copy=Math.floor(copy/10);
// }
// console.log(sum);

// let num=parseInt(prompt("enter no for factorial"));
// let fact=1;
// for(i=1;i<=num;i++){
//     fact *= i;
// }
// console.log(`factorial of ${num} is ${fact}`);

// let arr=[2,3,4,5,6,7,8,9,28];
// let largest=0;
// for(i=0;i<=arr.length;i++){
//     if(largest<arr[i]){
//         largest=arr[i];
//     }
// }
// console.log(largest);

// object literal
// let student={
//     name:"parmeshwar",
//     age:18,
//     city:"gorakhpur"
// };
// console.log(student);

// let post={
//     username:"@parmeshwar",
//     content:"#this is my first post",
//     likes:160,
//     repost:6,
//     tags:["@apnacollege","@delta"]
// };
// console.log(post);

// const student={
//     name:"parmeshwar",
//     age:18,
//     marks:94,
//     city:"mumbai"
// };
// console.log(student)
// student.city="mumbai";
// student.gender="male";
// student.marks="A";
// console.log(student)
// delete student.marks;


// const classInfo={
//     aman:{
//         grade:"A+",
//         city:"delhi"
//     },
//     amit:{
//         grade:"A",
//         city:"pune"
//     },
//     sumit:{
//         grade:"O",
//         city:"gkp"
//     }
//  };
// console.log(classInfo);
// console.log(classInfo.aman);
// console.log(classInfo.amit);
// console.log(classInfo.sumit);
// console.log(classInfo.aman.grade);
// console.log(classInfo.aman.city);
// console.log(classInfo);
// console.log(classInfo);


// const classInfo=[
//     {
//         name:"aman",
//         age:24,
//         grade:"A+"
//     },
//     {
//         name:"amit",
//         age:16,
//         grade:"A"
//     },
//     {
//         name:"sumit",
//         age:25,
//         grade:"O"
//     }
// ];

// console.log(classInfo);
// console.log(classInfo[0]);
// console.log(classInfo[1]);
// console.log(classInfo[2]);
// console.log(classInfo[1].age);
// console.log(classInfo[0].name);


// let random=Math.floor(Math.random()*10)+1;
// console.log(random);

// let num=Math.floor(Math.random()*100)+1;
// console.log(num);

// let num=Math.floor(Math.random()*5)+1;
// console.log(num);

// let random=Math.floor(Math.random()*6)+1;
// console.log(random);

// let cars={
//     name:"audi",
//     model:"2024",
//     color:"black"
// };
// console.log(cars.name)

// let person={
//     name:"parmeshwar",
//     age:24,
//     city:"patna"
// };
// console.log(person);
// person.city="new york";
// person.country="united state";
// console.log(person);


// js part 6 function
// function hello(){
//     console.log("hello world");
// }
// hello();

// let name=prompt("enter your name")
// function printName(){
//     console.log(`your name is ${name}`);
// }
// printName();

// function print1to5(){
//     for(let i=1;i<=5;i++){
//         console.log(i);
//     }
// }
// print1to5();


// let age=parseInt(prompt("enter your age"));
// function isAdult(){
//     if(age>=18){
//         console.log("you are elligible to vote");
//     }else{
//         console.log("you are not elligible to vote");
//     }
// }
// isAdult();

// practice qs 1
// function printPoem(){
//     console.log("twinkle twinkle ");
//     console.log("little star");
// }
// printPoem();

// function roolDice(){
//     let rand=Math.floor(Math.random()*6)+1;
//     console.log(rand);
// }
// roolDice();

// function printName(name){
//     console.log(`your name is ${name}`);
// }
// printName("Parmeshwar Yadav");

// function printInfo(name,age){
//     console.log(`${name}'s age is ${age}.`);
// }
// printInfo("rajat",24);

// function sum(a,b){
//     console.log(a+b);
// }
// sum(3,8);

// function avg(a,b,c){
//     console.log((a+b+c)/3);
// }
// avg(2,4,6);
// avg(2,2,2);

// let n=parseInt(prompt("enter no for table"));
// function printTable(n){
//     for(let i=n;i<=n*10;i+=n){
//         console.log(i);
//     }
// }
// printTable(n);

// function sum(a,b){
    // return a+b;
// }
// let s=sum(3,6);
// console.log(s);
// or
// console.log(sum(2,6));
// console.log(sum(sum(2,7),9));

// function sum(a,b){
//     console.log("hello");
//     return a+b;
//     console.log("hello ");
// }
// console.log(sum(2,6));


// function isAdult(age){
//     if(age>18){
//         return "adult";
//     }else{
//         return "not adult";
//     }
//     console.log("bye bye");
// }
// console.log(isAdult(28))

// function getSum(n){
//     let sum=0;
//     for(let i=1;i<=n;i++){
//         sum +=i;
//     }
//     return sum;
// }
// console.log(getSum(5));

// let arr=["hi","hello","byy","!"];
// function concatArr(arr){
//     let result="";
//     for(let i=0;i<arr.length;i++){
//         result +=arr[i];
//     }
//     return result;
// }
// console.log(concatArr(arr));

// let sum=353;
// function calSum(a,b){
//     let sum=a+b;
//     console.log(sum);
// }
// console.log(sum);
// calSum(3,6);


// {
//     var a=3;
// }
// console.log(a);

// {
//     let a=3;
// }
// console.log(a);

// {
//     const a=4;
// }
// console.log(a);

// function outerFunc(){
//     let x=5;
//     let y=6;
//     function innerFunc(){
//         console.log(x);
//         console.log(y);
//     }
//     innerFunc();
// }
// outerFunc();

// let greet="hello";
// function changeGreet(){
//     let greet="namaste";
//     console.log(greet);
//     function innerGreet(){
//         console.log(greet);
//     }
// }
// console.log(greet);
// changeGreet();

// const sum=function(a,b){
//     return a+b;
// }
// console.log(sum(2,4));


// function multipleGreet(func,n){
//     for(let i=1;i<=n;i++){
//         func();
//     }
// }
// function greet(){
//     console.log("hello");
// }
// multipleGreet(greet,4);
// multipleGreet(function (){console.log("namaste")},5);

// let even=function(n){
//     console.log(n%2==0);
// }
// even(6);
// even(67);
// even(0);
// even(-6);
// even(-7);
// even(NaN);

// let odd=function(n){
//     console.log(!(n%2==0));
// }
// odd(3);
// odd(32);
// odd(0);
// odd(-0);
// odd(-4);
// odd(-3);
// odd(NaN);


// function oddEvenFactory(request){
//     if(request=="odd"){
//         let odd=function(n){
//             console.log(!(n%2==0));
//         }
//         return odd;
//     }else if(request=="even"){
//         let even=function(n){
//             console.log(n%2==0);
//         }
//         return even;
//     }else{
//         console.log("wrong request");
//     }
// }
// let request="odd";

// const calculator={
//     add:function(a,b){
//         return a+b;
//     },
//     sub:function(a,b){
//         return a-b;
//     },
//     mul:function(a,b){
//         return a*b;
//     }
// };

// const calculator={
//     add(a,b){
//         return a+b;
//     },
//     sub(a,b){
//         return a-b;
//     },
//     mul(a,b){
//         return a*b;
//     }
// };

// let arr=[8,9,10,1,2,3,4,5,6,7,8,9,11,12];
// let num=5;
// function getElements(arr,num){
//     for(i=0;i<=arr.length;i++){
//         if(arr[i]>num){
//             console.log(arr[i]);
//         }
//     }
// }
// getElements(arr,num);


// let str="abcdabcdefgggh";
// function getUnique(str){
//     let ans="";
//     for(i=0;i<=str.length;i++){
//         let currChar=str[i];
//         if(ans.indexOf(currChar)==-1){
//             ans += currChar;
//         }
//     }
//     return ans;
// }
// getUnique(str);

// function extractUniqueCharacters(str) {
//     let uniqueChars = "";
//     for (let char of str) {
//       if (!uniqueChars.includes(char)) {
//         uniqueChars += char;
//       }
//     }
//     return uniqueChars;
//   }
  
  // Example usage
//   let str = "abcdabcdefgggh";
//   let ans = extractUniqueCharacters(str);
//   console.log(ans); // Output: "abcdefgh"
  

// function countVowel(str){
//     let count=0;
//     for(const char of str){
//         if(char==="a"||char==="e"||char==="i"||char==="0"||char==="u"){
//             count++;
//         }
//     }
//     console.log(count);
// }
// countVowel("parmeshwar yadav");


// function countVowel(str){
//     let count=0;
//     for(let char of str){
//         if(char==="a"||char==="e"||char==="i"||char==="0"||char==="u"){
//             count++;
//         }
//     }
//     console.log(count);
// }
// countVowel("parmeshwar yadav");

// const countVowel=(str)=>{
//     let count=0;
//     for(let char of str){
//         if(char==="a"||char==="e"||char==="i"||char==="0"||char==="u"){
//             count++;
//         }
//     }
//     console.log(count);
// }
// countVowel("parmeshwar yadav");


// let arr=[1,2,3,4,5,6,7,8];
// arr.forEach(function printVal(val){
//     console.log(val);
// });
// arr.forEach((val)=>{
//     console.log(val*val);
// });

// console.log(this);

// const student={
//   name:"parmeshwar",
//   age:28,
//   eng:95,
//   maths:98,
//   phys:94,
//   chem:93,
//   getAvg(){
//     let avg=((this.eng+this.maths+this.phys)/3);
//     console.log(`${this.name} got avg marks ${avg}`);
//   }
// };

// console.log(a);
// console.log("hello");
// console.log("hello");
// try{
//   console.log(a);
// }catch(err){
//   console.log("error occoured here");
//   console.log(err);
// }
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");

// const sum=(a,b)=>{
//   return a+b;
// };

// const mul=(a,b)=>{
//   return a*b;
// };

// const cube=(n)=>{
//   return n*n*n;
// };

// const pow=(a,b)=>{
//   return a**b;
// };

// const sum=(a,b)=>(a+b);

// const mul=(a,b)=>(a,b);

// const cube= n =>(n*n*n);

// const pow=(a,b)=>(a**b);

// console.log("hi there!");

// setTimeout( ()=>{
//   console.log("apna college");
// },4000);

// console.log("hello world");

// let id=setInterval( ()=>{
//   console.log("apna college");
// },2000);

// console.log(id);

// let id2=setInterval( ()=>{
//   console.log("hello world");
// },2000);

// console.log(id2);


// let student={
//   name:"amit",
//   marks:94,
//   prop:this
// };
// console.log(student);

// let student={
//   name:"amit",
//   marks:93,
//   prop:this,
//   getName:function (){
//     console.log(this),
//     console.log(this.name)
//   }
// };
// console.log(student);
// console.log(student.getName());


// let student={
//   name:"amit",
//   marks:93,
//   prop:this,
//   getName:function (){
//     console.log(this);
//     console.log(this.name);
//   },
//   getMarks: ()=>{
//     console.log(this);
//     console.log(this.marks);
//   }
// };
// console.log(student);
// console.log(student.getName());
// console.log(student.getMarks());

// let student={
//   name:"amit",
//   marks:93,
//   prop:this,
//   getName:function (){
//     console.log(this);
//     console.log(this.name);
//   },
//   getMarks: ()=>{
//     console.log(this);
//     console.log(this.marks);
//   },
//   getInfo1:function (){
//     setTimeout( ()=>{
//       console.log(this);
//     },2000);
//   },
//   getInfo2:function (){
//     setTimeout( function (){
//       console.log(this);
//     },2000);
//   }
// };

// const squr= (n)=>{
//   console.log(n*n);
// };
// const squr= n =>(n*n);


// let id=setInterval( ()=>{
//   console.log("hello world");
// },2000);

// setTimeout( ()=>{
//   clearInterval(id);
//   console.log("clear interval");
// },10000);

// const arrayAverage=(arr)=>{
//   let total=0;
//   for(let num of arr){
//     total+=num;
//   }
//   return total/arr.length;
// };
// arr=[2,3,4,5,6];
// console.log(arrayAverage(arr));

// const isEven=(num)=> num%2==0;


// const arrAverage=(arr)=>{
//   let total=0;
//   for(let num of arr){
//     total+=num;
//   }
//   return total/arr.length;
// };
// arr=[2,4,6,8,10];
// console.log(arrAverage(arr));

// let isEven=(n)=>n%2==0;

// const object={
  // message:'Hello world',
  // logMessage(){
    // console.log(this.message);
  // }
// };
// setTimeout(object.logMessage,1000);

// let length=4;
// function callBack(){
//   console.log(this.length);
// }
// const object={
//   length:5,
//   method(callBack){
//     callBack();
//   },
// };
// object.method(callBack,1,2);

// let arr=[1,2,3,4,5,6,7];
// let print=function (el){
//   console.log(el);
// };
// arr.forEach(print);
// or

// arr.forEach(function (el){
//   console.log(el);
// });

// arr.forEach( (el)=>{
//   console.log(el);
// });

// let arr=[{
//   name:"amit",
//   marks:95,
// },
// {
//   name:"sumit",
//   marks:94,
// },
// {
//   name:"rajat",
//   marks:98,
// }];
// arr.forEach((student)=>{
//   console.log(student);
//   console.log(student.marks);
//   console.log(student.name);
// })

// let arr=[1,2,3,4,5,6,7,8];
// let newArr=arr.map(function (el){
//   return el*2;
// });
// console.log(arr);
// console.log(newArr);


// let arr=[{
//   name:"amit",
//   marks:95,
// },
// {
//   name:"sumit",
//   marks:94,
// },
// {
//   name:"rajat",
//   marks:98,
// }];

// let gpa=arr.map(function (mark){
//   return mark.marks/10;
// });
// console.log(gpa);

// let arr=[2,3,4,5,6,7,8,9,10,11,12,15,17,18,20];
// let even=arr.filter( (num)=>{
//   return num%2==0;
// });
// console.log(even);

// let newArr=arr.filter( (el)=>el%2==0);
// console.log(newArr);

// let eve=[2,4,6,8].every( (el)=>(el%2==0));
// console.log(eve);

// let eve=[2,4,6,8,7].every( (el)=>(el%2==0));
// console.log(eve);

// let arr=[1,2,3,4].some((el)=>(el%2==0));
// console.log(arr);

// let arr=[1,3].some((el)=>(el%2==0));
// console.log(arr);

// const arr=[1,2,3,4,5];
// const output=arr.reduce((res,acc)=>res+acc);
// const output=arr.reduce( (res,el)=>{
//   return res+el;
// });
// console.log(output);

// let nums=[2,3,4,5,6,7,8,9,10,19];
// let max=nums.reduce((max,el)=>{
//   if(max<el){
//     return el;
//   }else{
//     return max;
//   }
// });
// console.log(max);

// let max=-1;
// for(let i=0;i<=nums.length;i++){
//   if(max<nums[i]){
//     max=nums[i];
//   }
// }
// console.log(max);

// let max=nums.reduce((max,el)=>{
//   return max>el?max:el;
// });
// console.log(max);

// let arr=[20,30,34,50,-2];
// let res=arr.every((el)=>(el%10==0));
// console.log(res);


// let min=arr.reduce((min,el)=>{
//   if(min>el){
//     return el;
//   }else{
//     return min;
//   }
// });
// console.log(min);

// function getMin(arr){
//   let min=arr.reduce((min,el)=>{
//       if(min>el){
//         return el;
//       }else{
//         return min;
//       }
//     });
//     return min;
// }
// let arr=[1,2,3,4,5,6,7,8,8,99,9,-1]

// function sum(a=2,b){
//   return a+b;
// }


// console.log("apnacollege");
// console.log(..."apnacollege");
// let arr=[1,2,3,4,5];
// console.log(arr);
// console.log(...arr);
// console.log(Math.min(...arr));
// let newArr=[...arr];
// console.log(newArr);
// let odd=[1,3,5,7,9];
// let even=[2,4,6,8,10];
// let nums=[...odd,...even];
// console.log(odd);
// console.log(even);
// console.log(nums);

// let data={
//   email:"abc@gmail.com",
//   password:256378,
// };
// console.log(data);
// let dataCopy={...data,id:"anit2@",country:"india"};
// console.log(dataCopy);
// console.log(data);

// let arr=[1,2,3,4,5,6];
// console.log(arr);
// let obj1={...arr};
// console.log(obj1);

// let str="helloduniya";
// let obj2={...str};
// console.log(str);
// console.log(obj2);

// function sum(...args){
//   for(let i=0;i<args.length;i++){
//     console.log("you gave us :",args[i]);
//   }
// }

// function min(a,b,c,d){
//   console.log(arguments);
//   console.log(arguments.length);
//   arguments.push(1);
// }

// function sum(...args){
//   return args.reduce( (sum,el)=>sum+el);
// }

// function min(...args){
//   return args.reduce( (min,el)=>{
//     if(min<el){
//       return min;
//     }else{
//       return el;
//     }
//   })
// }

// function min(msg,name,...args){
//   console.log(msg);
//   console.log(name);
//   return args.reduce( (min,el)=>{
//     if(min<el){
//       return min;
//     }else{
//       return el;
//     }
//   })
// }

// let names=["tom","jerry","alice","bruce","mark"];
// let [winner,runnerup,...other]=names;

// const student={
//   name:"parmeshwar",
//   class:12,
//   age:24,
//   subject:["hindi","english","maths","science"],
//   username:"karan123",
//   password:17792,
//   city:"pune",
// };
// const {username:user,password:pass,city:palace="mumbai"}=student;
// let student2=student;
// console.log(student2);
// let {...student,class=9}=student;
// console.log({name:"sumit",class:9,...student});



// let btn=document.createElement('button');
// btn.innerText="click me";
// btn.style.backgroundColor="red";
// btn.style.color="white";
// let body=document.querySelector("body");
// body.prepend(btn);

// let para=document.createElement("p");
// para.innerText="hi i am paragraph";
// document.querySelector('body').append(para);
// para.classList.add("red");

// let h3=document.createElement("h3");
// h3.innerText="i am a blue text";
// h3.classList.add("blue");
// document.querySelector("body").append(h3);

// let div=document.createElement("div");
// div.classList.add("box");
// let h1=document.createElement("h1");
// h1.innerText="this is h1 tag";
// let para=document.createElement("p");
// para.innerText="this is paragraph";

// div.append(h1);
// div.append(para);
// document.querySelector("body").append(div);


// let input=document.createElement("input");
// let btn=document.createElement("button");
// btn.innerText="click me";
// document.querySelector("body").append(input);
// document.querySelector("body").append(btn);

// btn.setAttribute('id','button');
// input.setAttribute("placeholder","username");

// btn.setAttribute("id","#btn");
// btn.style.color="white";
// btn.style.backgroundColor="red";

// let h1=document.createElement("h1");
// h1.innerText="DOM Practice";
// h1.style.textDecoration="underline";
// h1.style.color="blue";
// document.querySelector("body").append(h1);

// let para=document.createElement("p");
// para.innerHTML="apna college <b>dom</b> practice here";
// document.querySelector("body").append(para);


// let btn=document.querySelector("button");
// console.dir(btn);
// btn.onclick=function (){
//   console.log("btn was clicked");
// }
// btn.onclick=sayHello;
// function sayHello(){
//   alert("btn was clicked");
// }

// let btns=document.querySelectorAll("button");
// for(let btn of btns){
//   btn.onclick=hello;
  // btn.onmouseenter = function () {
  //   console.log("you entered the btn range ");
  // };
//   btn.onclick=name;
//   btn.addEventListener("dblclick",function (){
//     console.log("you double click me");
//   })
// }
// function hello(){
//   console.log("btn was clicked");
// }
// function name(){
//   console.log("parmeshwar yadav");
// }


// let btns=document.querySelectorAll("button");
// for(let btn of btns){
//   btn.addEventListener("mouseover",function(){
//     console.log("you are inside btn")
//   })
//   btn.addEventListener("dblclick",function(){
//     console.log("you double click me ")
//   })
// }


// let btn=document.querySelector("button");
// btn.onclick=((evt)=>{
//   console.log(evt);
//   console.log(evt.target);
//   console.log(evt.type);
//   console.log(evt.clientX);
//   console.log(evt.clientY);
// })

// let btn=document.querySelector("button");
// btn.addEventListener("click",(e)=>{
//   console.log("btn was clicked");
//   console.log(e);
// });
// btn,addEventListener("click",()=>{
//   console.log("hanleer 2 vala call");
// })

// let btn=document.querySelector("button");
// btn.addEventListener("click",function (){
//   console.log(this);
//   console.dir(this);
//   this.style.backgroundColor="blue";
// });

// let btn=document.querySelector("button");
// let h1=document.querySelector("h1");
// let h3=document.querySelector("h3");
// let p=document.querySelector("p");

// btn.addEventListener("click",function (){
//   console.log(this.innerText);
//   this.style.backgroundColor="blue";
// });
// h1.addEventListener("click",function (){
//   console.log(this.innerText);
//   this.style.backgroundColor="blue";
// });
// h3.addEventListener("click",function (){
//   console.log(this.innerText);
//   this.style.backgroundColor="blue";
// });
// p.addEventListener("click",function (){
//   console.log(this.innerText);
//   this.style.backgroundColor="blue";
// });

// function changeColor(){
//   console.log(this.innerText);
//   this.style.backgroundColor="blue";
// }
// btn.addEventListener("click",changeColor);
// h1.addEventListener("click",changeColor);
// h3.addEventListener("click",changeColor);
// p.addEventListener("click",changeColor);

// let btn=document.querySelector("button");
// btn.addEventListener("click",function (evt){
//   console.log("btn clicked ");
//   console.log(evt);
// });

// let inp=document.querySelector("input");
// inp.addEventListener("keydown",function (){
//   console.log("key was pressed");
// })
// inp.addEventListener("keyup",function (){
//   console.log("key was released");
// })
// let btn=document.querySelector("button");
// btn.onclick=function (){
//   console.log("button was clicked by parmeshwar yadav");
// }
// btn.onclick=()=>{
//   alert("btn was clicked");


// for(btn of btns){
//   btn.onclick=sayHello;
// }
// function sayHello(){
//   console.log("btn was clicked");
// }

// function sayAlert(){
//   alert("you cliacked your btn");
// }
// // btn.onclick=sayHello;
// // btn.onclick=sayAlert;

// btn.addEventListener("click",sayHello);
// btn.addEventListener("click",sayAlert);
// btn.addEventListener("click",function (){
//   console.log("hello you have crossed your all limit");
// })


// let para=document.querySelector("p");
// let head=document.querySelector("h3");
// let btn=document.querySelector("button");

// para.addEventListener("click",function (){
//   console.log(this.innerText);
//   this.style.backgroundColor="blue";
// })
// head.addEventListener("click",function (){
//   console.log(this.innerText);
//   this.style.backgroundColor="blue";
// })
// btn.addEventListener("click",function (){
//   console.log(this.innerText);
//   this.style.backgroundColor="blue";
// })

// another way using this keyword for Solve redundency
// function changeColor(){
//   console.log(this.innerText);
//   this.style.backgroundColor="blue";
// }
// para.addEventListener("click",changeColor);
// head.addEventListener("click",changeColor);
// btn.addEventListener("click",changeColor);

// let inp=document.querySelector("input");
// let btn=document.querySelector("button");

// inp.addEventListener("keyup",function (evt){
//   console.log(evt);
//   console.log("code:",evt.code);
//   console.log("key:",evt.key)
// })

// let form=document.querySelector("form");
// form.addEventListener("submit",function (evt){
//   evt.preventDefault();
//   console.log("form submiteed");
  // alert("form submitted");
// })
// let form=document.querySelector("form");
// form.addEventListener("submit",function (evt){
//   evt.preventDefault();
//   // console.dir(form);
  // let user=document.querySelector("#user");
  // let pass=document.querySelector("#pass");
  // console.log(evt);
  // console.log(user.value);
  // console.log(pass.value);
// })

// let form=document.querySelector("form");
// form.addEventListener("submit",function (evt){
//   evt.preventDefault();
// })

// let user=document.querySelector("#user");
// user.addEventListener("change",function (){
//   console.log("change ki initial value");
//   console.log("final value:",user.value);
// })
// user.addEventListener("input",function (){
//   console.log("input ki initial value");
//   console.log("final value:",user.value);
// })

// let inp=document.querySelector("input");
// inp.addEventListener("input",function (){
//   let p=document.querySelector("p");
//   p.innerText=inp.value;
//   console.log(inp.value);
// })

// let btn=document.createElement("button");
// let body=document.querySelector("body");
// body.append(btn);
// btn.innerText="click";
// btn.addEventListener("click",function(){
//   this.style.backgroundColor="green";
//   console.log("color changed");
// })

// let inp=document.querySelector("input");
// inp.addEventListener("input",function(){
//   let h1=document.querySelector("h1");
//   h1.innerText=inp.value;
// })

// let div=document.querySelector("div");
// let ul=document.querySelector("ul");
// let lis=document.querySelectorAll("li");
// div.addEventListener("click",function (){
//   console.log("div was clicked");
// })
// ul.addEventListener("click",function (evt){
//   evt.stopPropagation();
//   console.log("ul was clicked");
// })
// for(li of lis){
//   li.addEventListener("click",function (evt){
//     evt.stopPropagation();
//     console.log("li was clicked");
//   })
// }

// jspart 11
// function hello(){
//   console.log("calling hello func");
//   console.log("hello programmer");
// }
// function call(){
//   console.log("calling call function");
//   hello();
//   console.log("end call func");
// }
// console.log("starting");
// call();
// console.log("end of all func");

// function one(){
//   return 1;
// }
// function two(){
//   return one() + one();
// }
// function three(){
//   let ans= two() + one();
//   console.log(ans);
// }
// three();

// setTimeout(function (){
//   console.log("apna college");
// },2000);
// console.log("hello");

// let h1=document.querySelector("h1");

// function changeColor(color){
//   h1.style.color="color";
// }

// setTimeout(changeColor("red"),1000);
// setTimeout(changeColor("orange"),2000);
// setTimeout(changeColor("green"),3000);

// function changeColor(color,delay){
//   setTimeout(()=>{
//     h1.style.color=color;
//   },delay);
// };
// changeColor("red",1000);
// changeColor("orange",2000);
// changeColor("green",3000);


// callback hell color problem 
// function changeColor(color,delay,nextColorChange){
//   setTimeout(() => {
//     h1.style.color=color;
//     if(nextColorChange)nextColorChange();
//   }, delay);
// }
// changeColor("red",1000,()=>{
//   changeColor("orange",1000,()=>{
//     changeColor("green",1000)
//   });
// });

// callback hell  save to database problem setting for promise

// function saveToDb(data, success, failure){
//   let internetSpeed=Math.floor(Math.random()*10)+1;
//   if(internetSpeed>4){
//     success();
//   }else{
//     failure();
//   }
// }

// saveToDb("Parmeshawra yadav",()=>{
//   console.log("success: your data was saved");
//   saveToDb("amit shah",
//     ()=>{
//     console.log("sccess: data2 was saved ");
//     saveToDb("karan arjun",
//       ()=>{
//       console.log("success: data3 was saved");
//     },
//     ()=>{
//       console.log("failure: data3 was not saved");
//     }
//   );
//   },
//   ()=>{
//     console.log("failure: data2 was not saved");
//   }
// );
// },
// ()=>{
//   console.log("failure: your data was not saved");
// }
// );



// function saveToDb(data){
//   return new Promise((resolve,reject)=>{
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//       resolve("success: data was saved");
//     }else{
//       reject("failure:data was  not saved");
//     }
//   });
// }

// saveToDb("arpit");

// let result=saveToDb("sumit");
// result.then(()=>{
//   console.log("data was submitted");
//   console.log(result);
// })
// .catch(()=>{
//   console.log("data was not submited");
//   console.log(result);
// })

// saveToDb("sumit").then(()=>{
//   console.log("data was submitted");
// })
// .catch(()=>{
//   console.log("data was not submited");
// })

// saveToDb("sumit").then(()=>{
//   console.log("data was submitted");
//   saveToDb("amit").then(()=>{
//     console.log("data 2 was submitted");
//     saveToDb("rajesh").then(()=>{
//       console.log("data 3 was saved");
//     })
//   })
// })
// .catch(()=>{
//   console.log("weak connection promise failed");
// })

// saveToDb("sumit")
// .then(()=>{
//   console.log("data was submitted");
//   return saveToDb("amit");
// })
// .then(()=>{
//   console.log("data 2 was saved");
//   return saveToDb("ramu");
// })
// .then(()=>{
//   console.log("data 3 was saved ");
// })
// .catch(()=>{
//   console.log("weak connection promise failed");
// })

// saveToDb("aman")
// .then((result)=>{
//   console.log("data 1 saved ");
//   console.log("result:",result);
//   return saveToDb("amit");
// })
// .then((result)=>{
//   console.log("data 2 was saved ");
//   console.log("result",result);
//   return saveToDb("parmeshwar ");
// })
// .then((result)=>{
//   console.log("data 3 was saved");
//   console.log("result: ",result);
// })
// .catch((error)=>{
//   console.log("weak coonection :data not saved");
//   console.log("error: ",error);
// })


// let h1=document.querySelector("h1");

// function changeColor(color,delay,nextColorChange){
//   setTimeout(() => {
//     h1.style.color=color;
//     console.log("color changed :",color)
//     if(nextColorChange)nextColorChange();
//   }, delay);
// }

// changeColor("red",1000,()=>{
//   changeColor("green",1000,()=>{
//     changeColor("blue",1000,()=>{
//       changeColor("yellow",1000,()=>{
//         changeColor("pink",1000)
//       });
//     });
//   });
// });


// function changeColor(color,delay){
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       h1.style.color=color;
//       console.log("color changed :",color);
//       resolve();
//     }, delay);
//   })
// }

// changeColor("red",1000)
// .then(()=>{
//   console.log("red color was changed ");
//   return changeColor("green",1000);
// })
// .then(()=>{
//   console.log("green color was changed ");
//   return changeColor("orange",1000);
// })
// .then(()=>{
//   console.log("orange color was changed ")
// })

// async function greet (){
//   // abc.abc();
//   throw "random error";
//   console.log("hello coder ");
// }

// greet()
// .then(()=>{
//   console.log("prommise was resolved ");
// })
// .catch((err)=>{
//   console.log("error occur promise was failed",err);
// })

// let demo= async ()=>{
//   return 5;
// }

// function getNum(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       let num=Math.floor(Math.random()*10)+1;
//       console.log(num);
//       resolve();
//     },1000);
//   });
// }

// async function demo(){
//   await getNum();
//   await getNum();
//   await getNum();
//   getNum();
// }

// let h1=document.querySelector("h1");
// function changeColor(color,delay){
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       h1.style.color=color;
//       console.log("color changed :",color);
//       resolve();
//     }, delay);
//   })
// }


// changeColor("red",1000)
// .then(()=>{
//   console.log("red color was changed ");
//   return changeColor("green",1000);
// })
// .then(()=>{
//   console.log("green color was changed ");
//   return changeColor("orange",1000);
// })
// .then(()=>{
//   console.log("orange color was changed ")
// })


// async function demo() {
//     await changeColor("red",1000);
//     await changeColor("orange",1000);
//     changeColor("green",1000);
// }


// let h1=document.querySelector("h1");
// function changeColor(color,delay){
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       let num=Math.floor(Math.random()*10)+1;
//       if(num>4){
//         reject("promise rejected");
//       }
//       h1.style.color=color;
//       console.log("color changed :",color);
//       resolve();
//     }, delay);
//   })
// }

// async function demo() {
//   try{
//     await changeColor("red",1000);
//     await changeColor("green",1000);
//     await changeColor("blue",1000);
//     await changeColor("yellow",1000);
//     await changeColor("black",1000);
//     await changeColor("pink",1000);
//   }catch(err){
//     console.log("error caught");
//     console.log(err);
//   }
//     let a=5;
//     console.log(a);
//     console.log(a+3);
// }


// let jsonRes='{"fact":"In just seven years, a single pair of cats and their offspring could produce a staggering total of 420,000 kittens.","length":115}';
// let valData=JSON.parse(jsonRes);
// console.log(valData);

// let students={
//   name:"amit",
//   age:34,
//   gender:"male"
// };
// let jsonData=JSON.stringify(students);
// console.log(jsonData);

// api calling first time using javascript
// let url="https://catfact.ninja/fact";
// fetch(url)
// .then((res)=>{
//   console.log(res);
//   return res.json();
// })
// .then((data)=>{
//   // console.log(data);
//   console.log(data.fact);
// })
// .catch((err)=>{
//   console.log("Error:",err);
// })


// let url="https://catfact.ninja/fact";
// fetch(url)
// .then((res)=>{
//   // console.log(res);
//   return res.json();
// })
// .then((data)=>{
//   console.log("data1:",data.fact);
//   return fetch(url);
// })
// .then((res)=>{
//   // console.log(res);
//   return res.json();
// })
// .then((data2)=>{
//   console.log("data2:",data2.fact);
// })
// .catch((err)=>{
//   console.log("error:",err);
// })

// vaise hi randomely second time practice
// fetch(url)
// .then((res)=>{
//   return res.json();
// })
// .then((data)=>{
//   console.log("Data 1:",data.fact);
//   return fetch(url);
// })
// .then((res2)=>{
//   return res2.json();
// })
// .then((data)=>{
//   console.log("data 2:",data.fact);
// })
// .catch((err)=>{
//   console.log("error :",err);
// })

// let url="https://catfact.ninja/fact";

// async function getFacts(){
//   try{
//   let res1=await fetch(url);
//   let data1=await res1.json();
//   console.log("data 1:",data1.fact);

//   let res2=await fetch(url);
//   let data2=await res2.json();
//   console.log("data 2:",data2.fact);
//   }catch(e){
//     console.log("error :",e);
//   }
// }

// let url="https://catfact.ninja/fact";
// async function getFacts(){
//   try{
//     let res1=await axios.get(url);
//     console.log(res1.data.fact);
//   }catch(e){
//     console.log("eror :",e);
//   }
// }


// let url="https://catfact.ninja/fact";
// let btn4=document.querySelector("button");

// btn4.addEventListener("click",async ()=>{
//   let fact=await getFacts();
//   console.log(fact);
//   let p=document.querySelector("#result");
//   p.innerText=fact;
// });

// async function getFacts(){
//   try{
//     let res=await axios.get(url);
//     return res.data.fact;
//   }catch(e){
//     console.log("error :",e);
//     return "ERROR";
//   }
// }


// dog image api
// let url="https://dog.ceo/api/breeds/image/random";
// let btn=document.querySelector("button");
// btn.addEventListener("click",async ()=>{
//   let link=await getImg();
//   let result=document.querySelector("img");
//   result.setAttribute("src",link);
//   console.log(link);
// })

// async function getImg(){
//   try{
//     let res=await axios.get(url);
//     return res.data.message;
//   }catch(e){
//     console.log("error",e);
//     return  "/";
//   }
// }


// let url="https://icanhazdadjoke.com/";
//  async function getJokes(){
//   try{
//     const config={headers :{ Accept :"application/json"}};
//     let res=await axios(url,config);
//     console.log(res.data);
//   }catch(e){
//     console.log("error",e);
//     return "error";
//   }
//  }



let url="http://universities.hipolabs.com/search?name=";

let btn=document.querySelector("button");

btn.addEventListener("click",async ()=>{
  let country=document.querySelector("input").value;
  console.log(country);
  let collArr=await getColleges(country);
  show(collArr);
  let inp=document.querySelector("input");
  inp.value="";
})

function show(collArr){
  let list=document.querySelector("#list");
  list.innerText=" ";
  for(col of collArr){
    console.log(col.name);

    let li=document.createElement("li");
    li.innerText=col.name;
    list.appendChild(li);
  }
}
async function getColleges(country){
  try{
    let res=await axios.get(url+country);
    return res.data;
  }catch(err){
    console.log(err);
  }
}


// 2nd time practice for our clearing concept
// let btn=document.querySelector("button");

// btn.addEventListener("click",async ()=>{
//   let country=document.querySelector("input").value;
//   console.log(country);
//   let collArr=await getColleges(country);
//   show(collArr);
//   let inp=document.querySelector("input");
//   inp.value="";
// })
// function show(collArr){
//   let list=document.querySelector("#list");
//   list.innerText="";
//   for(col of collArr){
//     console.log(col.name);

//     let li=document.createElement("li");
//     li.innerText=col.name;
//     list.appendChild(li);
//   }
// }
// async function getColleges(country){
//   try{
//     let res=await axios.get(url+country);
//     return res.data;
//   }catch(err){
//     console.log(err);
//   }
// }