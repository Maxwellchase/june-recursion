/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/
//newArr = []
//base case in for loop
// your code here
function flatten(arr) {
  // return arr.reduce((start, end) => {
  //    if(Array.isArray(start)) {return start.concat(flatten(end))
  //     } else {return start.concat(end)}
  //    }, [])
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i]
    if (Array.isArray(ele)) {
      newArr = newArr.concat(flatten(ele, newArr)) }
      if (!Array.isArray(ele)) {
        newArr.push(ele)
      }

  }
  return newArr
}


// if (Array.isArray(arr[0])){
//   return flatten(arr)
// }else {
//   newArr.push(arr[0])
// }


console.log(flatten([1, 2]))
console.log(flatten([]))
console.log(flatten([1, [2, [3]]]))
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
