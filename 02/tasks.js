/**
 * Исправьте проблему с таймером: должны выводиться числа от 0 до 9.
 * Доп. задание: предложите несколько вариантов решения.
 */
function timer(logger = console.log) {
  let i = 0;

  function time(x) {
    return () => { logger(x); };
  }
  for (i; i < 10; i++) {
    setTimeout(time(i), 100);
  }
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
  return function(...fnArgs) {
    return func.apply(context, args.concat(fnArgs));
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

const sum = x => { return x ? (n => sum(x + n) || x) : 0; };

/*= ============================================ */
/**
 * Определите, являются ли строчки анаграммами (например, “просветитель” — “терпеливость”).
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
function anagram(first, second) {
  const firstLine = first.replace(/[,.;:]/g, '');
  const secondLine = second.replace(/[,.;:]/g, '');

  function lineLetters(line) {
    return line.toLowerCase().split('').reduce(function(acc, el) {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
    }, {});
  }

  if (firstLine.length !== secondLine.length) {
    return false;
  }
  const firstSet = lineLetters(firstLine);
  const secondSet = lineLetters(secondLine);

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
function getUnique(array) {
  const object = {};

  for (let i of array) {
    object[i] = true;
  }

  return Object.keys(object);
}
/**
 * Найдите пересечение двух массивов
 * [1, 3, 5, 7, 9] и [1, 2, 3, 4] → [1, 3]
 * @param {Array<number>, Array<number>} first, second исходные массивы
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getIntersection(first, second) {
  const result = [];

  function getUniq(array) {
    const object = {};

    for (let i of array) {
      object[i] = ((object[i] + 1) || 1);
    }

    return object;
  }
  const firstArrUniq = getUniq(first);
  const secondArrUniq = getUniq(second);

  for (const key in firstArrUniq) {
    if (firstArrUniq[key] && secondArrUniq[key]) {
      for (let i = 0; i < Math.min(firstArrUniq[key], secondArrUniq[key]); i++) {
        result.push(key);
      }
    }
  }
  return result;
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
  let flag;

  if (left.length !== right.length) {
    return false;
  }
  for (let i = 0; i < left.length; i++) {
    if (left[i] !== right[i]) {
      if (flag) {
        return false;
      }
      flag = true;
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
