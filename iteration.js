
function sumDivisibleBy3Or5(n){
    let sum = 0;
    for (let num = 1; num < n ; num++) {
        if(num % 3 === 0 || num % 5 === 0) {
            sum += num;
        }
    }
    return sum;
}

let add = sumDivisibleBy3Or5(15);
console.log(add)

