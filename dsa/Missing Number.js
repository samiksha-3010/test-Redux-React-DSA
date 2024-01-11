
let num =[2,3,4,5,6,7,8];
function missingNumber(num){
    for (let i=1; i<num.length; i++){
        if(!num.includes(i)){
        return i;

        }
    }
    return i;
}

console.log(missingNumber(num));