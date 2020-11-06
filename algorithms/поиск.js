// Линейный                           
  let linearSearch = (list,value)=>{
    for (let i = 0; i < list.length; i++) {
        if (list[i] === value) {
            return i;
        }
    }
    return -1;
}


// Бинарный (двоичный) 
// (интерполяционный)
let BinarySearch = (list,val)=>{
  let left = 0;
  let right = list.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (list[mid] !== val && left <= right) {
      if (val < list[mid]) {
          right = mid - 1
      } else {
          left = mid + 1
      }
      mid = Math.floor((left + right) / 2);
      // mid = Math.round(left + (val - list[start]) * (right - left) / (list[right] - list[left]));  // интерполяционный
      // начальный индекс + (разница искомого и стартового значения * разница стартового и конечного индекса / разница значений вначала и вконце)
  }
  if (list[mid] === val) {
      return mid;
  } else {
      return -1
  }
}