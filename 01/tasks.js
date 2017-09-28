/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028' => { min: -1028, max: 15 }
 */
function getMinMax(string) {
  const number = /-?(\d+)(\.\d+)?/g;
  const result = string.match(number);
  let i;
  let maxN = -Infinity;
  let minN = Infinity;

  for (i = 0; i < result.length; i++) {
    maxN = Math.max(maxN, +(result[i]));
    minN = Math.min(minN, +(result[i]));
  }

  return { min: minN, max: maxN };
}

/* ============================================= */

/**
 * Напишите рекурсивную функцию вычисления чисел Фибоначчи
 * @param {number} x номер числа
 * @return {number} число под номером х
 */

function fibonacciSimple(x) {
  if (x < 2) {
    return x;
  }
  return fibonacciSimple(x - 1) + fibonacciSimple(x - 2);
}

/* ============================================= */

/**
 * Напишите функцию для вычисления числа Фибоначчи с мемоизацией:
 * при повторных вызовах функция не вычисляет значения, а достает из кеша.
 * @param {number} x номер числа
 * @return {number} число под номером х
 */

function fibonacciWithCache(x) {
  const memo = {};

  memo[0] = 0;
  memo[1] = 1;
  function f(n) {
    memo[n] = (n in memo) ? memo[n] : (f(n - 1) + f(n - 2));
    return memo[n];
  }

  return f(x);
}
/* ============================================= */

/**
 * Напишите функцию printNumbers, выводящую числа в столбцах
 * так, чтобы было заполнено максимальное число столбцов при
 * минимальном числе строк.
 * Разделитель межу числами в строке - один пробел,
 * на каждое число при печати - отводится 2 символа
 * Пример работы: printNumbers(11, 3)
 *  0  4  8
 *  1  5  9
 *  2  6 10
 *  3  7 11
 * @param  {number} max  максимальное число (до 99)
 * @param  {number} cols количество столбцов
 * @return {string}
 */
function printNumbers(max, cols) {
  let string = '';
  let l, p = 1;
  let i = 0, num = 0;

  for (i = 0; i < (parseInt((max + 1) / cols, 10) + +((max + 1) % cols > 0)); i++) {
    string += (parseInt(i / 10, 10)) ? ('' + i) : (' ' + i);
    for (l = 1; l < cols; l++) {
      num = i + parseInt((max + 1) / cols, 10) * l + p * (+((max + 1) % cols > 0));
      if (p < (max + 1) % cols) {
        p += 1;
      } else if (i === parseInt((max + 1) / cols, 10)) {
        break;
      }
      string += (parseInt(num / 10, 10)) ? (' ' + num) : ('  ' + num);
    }
    string += '\n';
    p = 1;
  }
  string = string.substr(0, string.length - 1);
  return string;
}
/* ============================================= */

/**
 * Реализуйте RLE-сжатие: AAAB -> A3B, BCCDDDEEEE -> BC2D3E4
 * @param  {string} value
 * @return {string}
 */
function rle(input) {
  const string = input;
  let i;
  let j;
  let symb;
  let str = '';

  for (i = 0; i < string.length; i++) {
    symb = string[i];
    j = 0;
    while (string[i + j] === symb) {
      j += 1;
    }
    i = i + j - 1;
    if (j - 1) {
      str += symb + j;
    } else {
      str += symb;
    }
  }
  return str;
}

module.exports = {
  getMinMax,
  rle,
  printNumbers,
  fibonacciSimple,
  fibonacciWithCache
};
