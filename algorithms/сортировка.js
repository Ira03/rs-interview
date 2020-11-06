// Bubble sort
// если правый меньше левого, менем местами, выпонять, пока не будет чего менять, или array.length - 1 раз
bubbleSort = (array) => {
  let swapped = false;
  do {
    swapped = false;
    array.forEach((current, i) => {
      if (current > array[i + 1]) {
        const temp = current;
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    })
  } while(swapped);
  return array;
}


// Insertion Вставка
// если правый элемент меньше левого, все слева от него сдвигаются на 1 вперед, до тех пор, пока не найдется место, где левый меньше чем сохраненный элемент
insertionSort = (array) => {
  for (let i = 1; i < array.length; i += 1) {
    let curr = arr[i];
    let j = i - 1;

    while(j >= 0 && arr[j] > curr){
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = curr;
  }
  return array;
}


// Сортировка выбором
// перемещаем самый малій элемент в начало массива, а на его место елемента с начала массива
function selectionSort(array){
  for (let j = 0; j < array.length - 1; j++){
    let min = Infinity;
    let index = null;
    for (let i = j; i < array.length; i++){
      if(array[i] > min){
        min = array[i];
        index = i;
      }
    }
    const buff = array[j];
    array[j] = min;
    array[index] = buff;
  }
  return array;
}


// Быстрая сортировка
// определаяем разделитель
// двигаясь слева останавливаемся на элементе больше разделителя
// двигаясь справа останавливаемся на элементе меньше разделителя
// когда оба найдены меняем их местами
// продолжаем пока левый и правый индекс не встретятся
// оба отрезка раздеяем новыми разделителями и выполняем те же действия
function swap(items, firstIndex, secondIndex){
  const temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

function partition(items, left, right) {
  var pivot   = items[Math.floor((right + left) / 2)],
      i       = left,
      j       = right;
  while (i <= j) {
      while (items[i] < pivot) {
          i++;
      }
      while (items[j] > pivot) {
          j--;
      }
      if (i <= j) {
          swap(items, i, j);
          i++;
          j--;
      }
  }
  return i;
}

function quickSort(items, left, right) {
  
  var index;
  if (items.length > 1) {

    left = typeof left != "number" ? 0 : left;
    right = typeof right != "number" ? items.length - 1 : right;


      index = partition(items, left, right);
      if (left < index - 1) {
          quickSort(items, left, index - 1);
      }
      if (index < right) {
          quickSort(items, index, right);
      }
  }
  return items;
}


// Сортировка Шелла
// выбираем стартовый разрыв
// елементы с этим разрывом меняем местами проходя слева направо (если левое больше правого)
// ументшаем разрыв вдвое
// если после замены, слева через разрые есть еще элемент сравниваем с ним и так до начала массива
const ShellSort = arr => {
  let gap = Math.floor(arr.length / 2);
  while (gap >= 1) {
      for (let i = gap; i < arr.length; i++) {
          const current = arr[i];
          let j = i;
          while (j > 0 && arr[j - gap] > current) {
              arr[j] = arr[j - gap];
              j -= gap;
          }
          arr[j] = current;
      }
      gap = Math.floor(gap / 2);
  }
  return arr;
};



// Слиянием merge

const merge = (arrFirst, arrSecond) => {
  const arrSort = [];
  let i = j = 0;
  // сравниваем два массива, поочередно сдвигая указатели
  while (i < arrFirst.length && j < arrSecond.length) {
      arrSort.push(
          (arrFirst[i] < arrSecond[j]) ?
              arrFirst[i++] : arrSecond[j++]
      );
  }
  // обрабатываем последний элемент при разной длине массивов
  // и возвращаем один отсортированный массив
  return [
      ...arrSort,
      ...arrFirst.slice(i),
      ...arrSecond.slice(j)
  ];
};

const mergeSort = arr => {
  // Проверяем корректность переданных данных
  if (!arr || !arr.length) {
      return null;
  }
  //Если массив содержит один элемент просто возвращаем его
  if (arr.length <= 1) {
      return arr;
  }
  // Находим середину массива и делим его на два
  const middle = Math.floor(arr.length / 2);
  const arrLeft = arr.slice(0, middle);
  const arrRight = arr.slice(middle);
  // Для новых массивов снова вызываем сортировку,
  // сливаем их и возвращаем снова единый массив
  return merge(mergeSort(arrLeft), mergeSort(arrRight));;
};

// имеет меньшую сложность — не O(n²), а O(n log n), но при этом он задействует O(n) дополнительной памяти