//Rajat kinkhabwala
//CWID - 10414081
//Date - 9/07/2017


function sumOfSquares(num1, num2 , num3) {
    
     if(num1 % 1 === 0 && num2 % 1 === 0 && num3 % 1 === 0){
 
         let a = num1 * num1;
         let b = num2 * num2;
         let c = num3 * num3;
         return a + b + c;
     }   
     else{
         throw new UserException("Input must be integer \n");
     }          
     
 }
 
 function sayHelloTo(firstName, lastName, title){
 
     if(firstName == undefined && lastName == undefined && title == undefined){
          throw  new UserException("Please enter firstname lastname title");
     }
     else if(lastName == undefined && title == undefined){
 
         if(typeof firstName === 'string'){
             console.log(`Hello, ${firstName}!`);
         }
         else{
             throw new UserException("Input must be a string\n")
         }
             
     }
     else if(title == undefined){
 
         if(typeof firstName === 'string' && typeof lastName === 'string'){
             console.log(`Hello, ${firstName} ${lastName}. I hope you are having a good day!`);
         }
         else{
             throw new UserException("Input must be a string\n")
         }   
     }
     else{
          if(typeof firstName === 'string' && typeof lastName === 'string' && typeof title === 'string'){
             console.log(`Hello, ${title} ${firstName} ${lastName}! Have a good evening!`);
         }
         else{
             throw new UserException("Input must be a string\n")
         } 
     }
 }
 
 function cupsOfCoffee(howManyCups){
 
     if(howManyCups % 1 === 0  && howManyCups > 0){
 
         for(let i = howManyCups ; i > 0 ; i--){
 
         if(i == 1){
            console.log(`${i} cup of coffee on the desk! ${i} cup of coffee!
 Pick it up, drink the cup, no more coffee left on the desk!\n`);
        }
         else if(i == 2){
             console.log(`${i} cups of coffee on the desk! ${i} cups of coffee!
 Pick one up, drink the cup, ${i-1} cup of coffee on the desk!\n`);
         }
         else{
              console.log(`${i} cups of coffee on the desk! ${i} cups of coffee!
 Pick one up, drink the cup, ${i-1} cups of coffee on the desk!\n`);
             }    
     }
     }
     else{
         throw  new UserException("Input must be positive integer");
     }
 }
 
 function occurenceOfSubstring(fullString , substring){
     
     if(typeof fullString === 'string' && typeof substring === 'string'){
 
         let occurrence = 0;
         let position = fullString.indexOf(substring);
         while(position > -1){
             ++occurrence;
             position = fullString.indexOf(substring, ++position);
         }
         return occurrence;
     }
     else{
         throw new UserException("Input must be a string");
     }
     
 }
 
 function randomizeSentences(paragraph){
 
     if(typeof paragraph === 'string'){
 
         let p = paragraph.replace("!","!%");
         p = p.replace(".",".%");
         p = p.replace("?","?%");
         let bits = p.split("%");
         let j = 0;
         let moveBits = null;
 
         for(let i = bits.length - 1 ; i > 0 ; i--){
 
             j = Math.floor(Math.random() * (i + 1));
             moveBits = bits[i];
             bits[i] = bits[j];
             bits[j] = moveBits;
         }
         let string1 = "";
         for(let i = 0 ; i < bits.length ; i++){
 
             string1 = string1 + bits[i];
         }
         return string1;
     }
     else{
         throw new UserException("Input must be string");
     }    
 }
 function UserException(message) {
    this.message = message;
    this.name = "UserException :";
 }
 try{
     let num1 = 5;
     let num2 = 3;
     let num3 = 10;
     let sum = sumOfSquares(num1,num2,num3);
     console.log(`The sum of squares of ${num1},${num2},${num3} is ${sum}`);
     let num4 = 2;
     let num5 = 4;
     let num6 = 1;
     let sum1 = sumOfSquares(num4,num5,num6);
     console.log(`The sum of squares of ${num4},${num5},${num6} is ${sum1} \n`);
     let num7 = 2;
     let num8 = 4;
     let num9 = "a";
     let sum2 = sumOfSquares(num7,num8,num9);
     console.log(`The sum of squares of ${num7},${num8},${num9} is ${sum2} \n`);
 }
 catch (e) {
 
    console.log(e.name, e.message);
 }
 console.log("----------------------------------------------");
 try{
     sayHelloTo("Rajat");
     sayHelloTo("Rajat","Kinkhabwala");
     sayHelloTo("Rajat","Kinkhabwala","Mr.");
     sayHelloTo();
 }
 catch (e) {
 
    console.log(e.name, e.message);
 }
 console.log("--------------------------------------------");
 try{
     cupsOfCoffee(5);
     cupsOfCoffee("a");
 }
 catch (e) {
 
    console.log(e.name, e.message);
 }
 console.log("--------------------------------------------");
 try{
     let sentence = "Hellllo worlld";
     let substr = "ll";
     console.log(`Number of occurrences of '${substr}' in ${sentence} :`+occurenceOfSubstring(sentence,substr)+`\n`);
     let sentence1 = "Hello world";
     let substr1 = "a";
     console.log(`Number of occurrences of '${substr1}' in ${sentence1} :`+occurenceOfSubstring(sentence1,substr1)+`\n`);
 }
 catch (e) {
 
    console.log(e.name, e.message);
 }
 console.log("---------------------------------------------------");
 try{
     let para ="Hello! Rajat Kinkhabwala. Good Morning! How are you?"
     console.log(`Entered paragraph : ${para}\nRandomized paragraph : `+randomizeSentences(para)+`\n`);
 }
 catch (e) {
 
    console.log(e.name, e.message);
 }
 