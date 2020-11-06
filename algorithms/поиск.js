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


// Поиск подстроки
function SubstringSearch(sub, str)    // sub - искомая подстрока
{                                     // str - строка, в которой ищем
    var i, j, n = sub.length,
        N = str.length - n + 1;
    
    for (i = 0; i < N; i++)
    {  j = 0;
       while (j < n && sub.charAt(j) === str.charAt(i+j)) j++;
       if (j === n) return i;
    }                                // На выходе индекс 1-го символа подстроки.
                                     // Если искомой подстроки нет в строке, то -1.
    return -1;                       // Например,
}                                    // SubstringSearch('ips', 'Lorem ipsum') = 6,
                                     // SubstringSearch('dolor', 'Lorem ipsum') = -1.