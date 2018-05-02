function omnitool(array, callback) {
  let arr = [];
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) {
      arr.push(array[i]);
    }
  }
  return arr;
}

function flat(arr, depth, count= 0, array= []){
  

    if (count >= depth) {
      return array.concat(arr);
    }

  if (Array.isArray(arr[0])){
    array = array.concat(arr[0]);
    count++;
    arr= arr.slice(1);
    return flat(arr, depth, count, array);
  }
  if (!Array.isArray(arr[0])){
    array.push(arr[0]);
    arr= arr.slice(1);
    return flat(arr, depth, count, array);
  }
}
module.exports = { omnitool, flat };
