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
	i++;
	};
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
  let bindArgs = [].slice.call(arguments, 2);
  return function() { 
    let fnArgs = [].slice.call(arguments);
    return func.apply(context, bindArgs.concat(fnArgs));
  };
}
//var bind = function(fn, context) {
  // обрезаем ненужные аргументы (функцию и контекст)
  //var bindArgs = [].slice.call(arguments, 2);
  //return function() {
    // здесь все аргументы будут необходимы
   // var fnArgs = [].slice.call(arguments);
    // собираем все 
   // return fn.apply(context, bindArgs.concat(fnArgs));
 // };
//};
/*= ============================================ */

/**
 * Напишите функцию sum, вычисляющую суммы подобным образом:
 * sum(1)(2)( ) // 3
 * sum(1)(2)(3)( ) // 6
 * sum :: Number -> sum
 * sum :: void -> Number
 */
function sum(x) {
  return 0;
}

/*= ============================================ */

/**
 * Определите, являются ли строчки анаграммами (например, “просветитель” — “терпеливость”).
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
function anagram(first, second) {
  let fir = first.replace(/[,.;:]/g, '');
  let sec = second.replace(/[,.;:]/g, '');

  if (fir.length != sec.length) {
    return false;
  } 
  fir = fir.toLowerCase().split('').sort().reduce(function(acc, el) {
  acc[el] = (acc[el] || 0) + 1;
  return acc;
}, {});
  sec = sec.toLowerCase().split('').sort().reduce(function(acc, el) {
  acc[el] = (acc[el] || 0) + 1;
  return acc;
}, {});

  for (let key in fir) {
    if (fir[key] != sec[key]) {
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
  let obj = {};
    
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
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
  let fir = getUniq(first);
  let sec = getUniq(second);
  let result ={};
  
  function getUniq(arr) {
    let obj = {};   
    for (let i = 0; i < arr.length; i++) {
      let str = arr[i];
      obj[str] = true;
      }
	
    return obj;
    }
  for (let key in fir) {
    if (fir[key] === sec[key]) {
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