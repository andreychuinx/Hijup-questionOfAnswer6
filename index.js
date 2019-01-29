const questionOrders = (num) => { 
  var arr = Array(num).fill().map((item, index) => index + 1)
  var results = [];   

  const swap = (a, b) => {
    var tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  }

  const generate = (n) => {
    if (n == 1) {
      results.push(arr.concat());
    } else {
      for (var i = 0; i != n; i++) {
        generate(n - 1);
        swap(n % 2 ? 0 : i, n - 1);
      }
    }
  }

  generate(arr.length);
  return results;
}    

console.log(questionOrders(3)); 
