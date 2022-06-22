/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples: 

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

// your code here
// function subsets(arr){
// if(arr.length === 0) {
//   return []
// }

// let newArr= [[]]
// for(let i =0; i < arr.length; i++){
//   let el = arr[i]
//  newArr.push([el])
// }
 
//   return newArr.concat([arr], [arr.slice(1, arr.length)], [arr.slice(0, arr.length-1)], [arr.slice(0,1).concat(arr.slice(2,4))])

// }
function subsets(arr){
  let res = [];

  let subset = [];

  (function find_subSets(idx) {
    if (idx >= arr.length) {
      res.push(subset.slice())
      return
    }

    subset.push(arr[idx])
    find_subSets(idx + 1)

    subset.pop();
    find_subSets(idx + 1);
  })(0)
  // find_subSets(0);
  return res
}

console.log(subsets([1, 2, 3])) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
