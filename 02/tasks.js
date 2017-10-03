/**
 * Исправьте проблему с таймером: должны выводиться числа от 0 до 9.
 * Доп. задание: предложите несколько вариантов решения.
 */
function timer(logger = console.log) {
  let i = 0;

  function time() {
    if (i < 10) {
      setTimeout(time, 100);
      logger(i);
      i += 1;
    }
  }
  time();
}
/*= ============================================ */
/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind(func, context, ...args) {
  const bindArgs = [].slice.call(arguments, 2);

  return function() {
    const fnArgs = [].slice.call(arguments);

    return func.apply(context, bindArgs.concat(fnArgs));
  };
}
/*= ============================================ */
/**
 * Напишите функцию sum, вычисляющую суммы подобным образом:
 * sum(1)(2)( ) // 3
 * sum(1)(2)(3)( ) // 6
 * sum :: Number -> sum
 * sum :: void -> Number
 */

function sum(x) {
  function add(n) {
    if (isNaN(n)) {
      return x;
    }
    x += n;
    return add;
  }

  if (isNaN(x)) {
    return 0;
  }

  return add;
}
/*= ============================================ */
/**
 * Определите, являются ли строчки анаграммами (например, “просветитель” — “терпеливость”).
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
function anagram(first, second) {
  let firstLine = first.replace(/[,.;:]/g, '');
  let secondLine = second.replace(/[,.;:]/g, '');
  let firstSet;
  let secondSet;

  function lineLetters(line) {
    return line.toLowerCase().split('').sort().reduce(function(acc, el) {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
    }, {});
  }

  if (firstLine.length !== secondLine.length) {
    return false;
  }
  firstSet = lineLetters(firstLine);
  secondSet = lineLetters(secondLine);
  for (const key in firstSet) {
    if (firstSet[key] !== secondSet[key]) {
      return false;
    }
  }
  return true;
}
/*= ============================================ */
/**
 * Сократите массив до набора уникальных значений
 * [1,1, 2, 6, 3, 6, 2] → [1, 2, 3, 6]
 * @param {Array<number>} исходный массив
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getUnique(arr) {
  const obj = {};

  for (let i of arr) {
    const str = i;

    obj[str] = true;
  }

  return Object.keys(obj);
}
/**
 * Найдите пересечение двух массивов
 * [1, 3, 5, 7, 9] и [1, 2, 3, 4] → [1, 3]
 * @param {Array<number>, Array<number>} first, second исходные массивы
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getIntersection(first, second) {
  let firstArrUniq;
  let secondArrUniq;
  const result = {};

  function getUniq(arr) {
    const obj = {};

    for (let i = 0; i < arr.length; i++) {
      const str = arr[i];

      obj[str] = true;
    }

    return obj;
  }
  firstArrUniq = getUniq(first);
  secondArrUniq = getUniq(second);
  for (const key in firstArrUniq) {
    if (firstArrUniq[key] === secondArrUniq[key]) {
      result[key] = true;
    }
  }
  return Object.keys(result);
}
/* ============================================= */
/**
 * Две строки называются изоморфными, когда в строке A можно заменить
 * конкретный символ на любой другой для получения строки B. (Расстояние Левенштейна, при возможных мутациях
 * ограничивающихся заменой символа - отличается на 1).
 * Отдельно стоит отметить что строка изоморфна самой себе.
 * Порядок символов должен остаться неизменным. Каждый
 * последовательный символ в строке A сравнивается с
 * каждым последовательным символов в строке B.
 *
 * @param  {string} left
 * @param  {string} right
 * @return {boolean}
 */
function isIsomorphic(left, right) {
  let i;
  let flag = 0;

  if (left.length !== right.length) {
    return false;
  }
  for (i = 0; i < left.length; i++) {
    if (left[i] !== right[i]) {
      if (flag === 1) {
        return false;
      }
      flag = 1;
    }
  }
  return true;
}
module.exports = {
  timer,
  customBind,
  sum,
  anagram,
  getUnique,
  getIntersection,
  isIsomorphic
};
