let arr = [5,2,6,9,8]
let val = 6;
let res = 7;

for(let i = 0; i<arr.length; i++){
    if(arr[i]==val){
        arr[i]=arr[i+1];
        res = res + 1;
    }
    else{
        
    }
}

console.log(arr);
console.log(res);    //Ans