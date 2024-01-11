let array =["lucky","scale", "happy", "strength", "peace", "happy", "happy","kuhoo"]

function removeDuplicate(arr){
    let unique = []
    arr.forEach((element)=>{
        if(!unique.includes(element)){
            unique.push(element)
        }
    })
    return unique
}

console.log(removeDuplicate(array))