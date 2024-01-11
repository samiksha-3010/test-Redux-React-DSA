let arr = [5, 7, 1, 2, 9];
function reversearr() {
  temp = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    temp.push(arr[i]);
  }
  return temp;
}
const answer = reversearr();
console.log(answer, "got it");