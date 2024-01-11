let num = 20;

function fact(num){
    let factorial = num;
    for(let i= num-1; i>=1 ; i--){
        factorial = factorial*i
    }
    return factorial;
}

console.log(fact(num));