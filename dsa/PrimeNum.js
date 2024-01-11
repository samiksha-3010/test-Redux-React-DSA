let num = 13;
function isPrime(num){
    let isPrime = true;
    for(let i = 2; i<num-1; i++){
        if(num%i==0){
            isPrime=false;
        }
        else{
            isPrime
        }
    }
    return isPrime;
}

console.log(isPrime(num));