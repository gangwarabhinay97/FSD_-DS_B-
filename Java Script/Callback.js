/*function sum(a, b) {
    return a+b;
}
function sumWithMsg(clbk , msg){
    const result = clbk(5, 10);
    const fresult = "HI " + msg + "Your Score is  " + result;
    console.log(fresult);

}

sumWithMsg(sum, "Mr. Deepak"); */

function greet(name ){
    console.log("Hello" + name);
}
function greetWithMsg(clbk , msg){
    const result = clbk(" Abhinay");
    const fresult = "Hii " + msg + " You are the best!";
    console.log(fresult);
}
  
 greetWithMsg(greet, "Mr. Abhinay");