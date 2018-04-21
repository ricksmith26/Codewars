function omnitool(array, callback) {
  let arr = [];
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) {
      arr.push(array[i]);
    }
  }
  return arr;
}

module.exports = { omnitool };
