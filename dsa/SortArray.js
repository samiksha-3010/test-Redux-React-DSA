let arr = [5,7,1,2,9]

function sort (){
      for(var i = 0 ; i < arr.length ; i++){
            for(var j = 0 ; j < arr.length ; j++){
                  if(arr[i]>arr[j]){
                        let temp = arr[i]
                        arr[i]=arr[j]
                        arr[j]=temp
                  }

            }
      }
      return arr

}

const sortedARR = sort()
console.log(sortedARR);
