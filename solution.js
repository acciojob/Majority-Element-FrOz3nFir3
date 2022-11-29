// arr = array of numbers
function major(arr){
  // optimized approach O(N) Time and O(N) Space
  var floorNum = Math.floor(arr.length / 2);
  var countHt = {};

  for(let num of arr){
          if(num in countHt){
                  countHt[num] += 1;
                  if(countHt[num] > floorNum) return num;
          }else{
                  countHt[num] = 1;
          }
  }      
   // although majority num exisit using this as fallback
     return 1;  
}
module.exports=major;
