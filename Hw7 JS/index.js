// // b1.a
// let a = 10
// let b = 15
// console.log(a>b)

// // b1.b
// console.log(a==10)

// // b1.c
// console.log (a===10)

// // b1.d
// let x = 5
// let y = 6
// console.log(x!==y)
// // true

// //b2 - a
// var a = 10;
// var b = Number(a);
// var c = a*1;

// console.log(a,b,c); // // b = c

// //b2 - b
// var a = 10;
// var b = '';

// if (a){
//     console.log('a is truthy'); // // a is truthy
// }
// if (b){
//     console.log('b is truthy'); // // b rong
// }

// // b3 - a
// // result true

// // b3 - b
// // result true

// // b3 - c 
// const a = - 1;
// const b = 1;
// if ( a && b){
//     console.log('true');
// }

// // b3 - d
// let a = parseInt(prompt("nhap so can kiem tra :",""));
// let result = a / 3;
// if ( a % 3 == 0){
//     console.log(`Phep chia het cho 3, ket qua : ${result}`);
// }else console.log(" Phep chia ko chia het cho 3")


// //b4 : c1
// const operator = prompt('Enter operator ( either +, -, * or / ): ');
// let a = parseFloat(prompt("nhap so dau tien :",""));
// let b = parseFloat(prompt(" nhap so thu 2 :",""));
// let result
// if(operator == "+"){
//     result = a + b;
// }else
// if ( operator == "-"){
//     result = a - b;
// }else
// if(operator == "*"){
//     result = a * b;
// }else
// if(operator == "/"){
//     result = a / b;
// }
// console.log(`${a} ${operator} ${b} = ${result}`);

// // b4 : c2
// switch(operator)
// {
//     case "+" : 
//         result = a + b;
//         break;
//     case "-":
//         result = a - b;
//         break;
//     case "*":
//         result = a * b;
//         break;
//     case "/":
//         result = a / b;
//         break;
// }
// console.log(`${a} ${operator} ${b} = ${result}`);

// // b5
// const number = parseInt(prompt("Enter a positive number: "));
// let isPrime = true;
// if ( number <= 1 )
// {
//     isPrime = false;
// }
// if (number > 1 )
// {
//     for(i = 2; i < number ; i ++ )
//     if(number % i == 0) {
//         isPrime = false;
//         break;
//     }
// }

// if(isPrime == true)
// {
//     console.log(`${number} la so nguyen to`)
// }else console.log(`${number} khong phai so nguyen to`)