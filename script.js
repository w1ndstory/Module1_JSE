//MODULE 1. JAVASCRIPT
// 1. Змінні та математичні оператори
let a = 10, b = 5
let sum = a+b, diff = a-b, prod = a*b, div = a/b
alert("Sum=" + sum + " Diff=" + diff + " Prod=" + prod + " Div=" + div)

// 2. Цикли та масиви
let array = [5,5,1,1,3], sum2 = 0
for(let i = 0; i<array.length; i++)
    sum2+=array[i]
alert("Array sum is " + sum2)

// 3. Функції
function Calculate(x, y){
    return x+y
}
let sum3 = Calculate(55, 5)
alert("Sum is " + sum3)

// 4. Змінні, цикли та функції
let Fibonacci = (number) =>{
    let Fib = [0, 1]
    for(let i = 2; i < number; i++){
        let temp = Fib[i - 1] + Fib[i - 2]
        Fib[i] = temp
    }
    return Fib
}
let f = Fibonacci(6)
alert(f)