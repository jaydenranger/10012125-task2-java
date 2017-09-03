console.log("This program will display the division tables 1 to 12 based on your number input");

let num1 = prompt("enter a number");

var number1 = parseInt(num1);

if(number1<100){
    let count = 12;
    for(var i = 0; i<count;i++){
       let a = i+1;
        console.log(number1+"/"+a+"="+number1/a);

    }



}else{

    console.log("The number you entered was greater than 100")
}