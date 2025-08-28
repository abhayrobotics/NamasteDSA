// TODO 37:  Selection sORT
let arr = [5, 2, 4, 1, 7, 3];
arr = [5, 2, 4, 1, 6, 3, -5, 34, 43, -11];

function selection(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    // find smallest
    let x = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[x] > arr[j]) {
        x = j;
        console.log(i, j, x, arr);
      }
    }
    // swap

    // if (x != i) {
      let c = arr[i];
      arr[i] = arr[x];
      arr[x] = c;
    // }
  }
  return arr;
}

console.log(selection(arr));
