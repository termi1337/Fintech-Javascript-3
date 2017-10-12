/**
 * Реализовать функцию, поведение которой аналогично поведению Promise.all,
 * которая возвращает в качестве результата rejected промис c первым reject value или resolve с массивом resolveValues,
 * в соответствущих исходному массиву промисов позициях, если не было ни одного промиса с reject.
 * @param {Array<Promise>} promises - массив с исходными промисами
 * @return {Promise}
 */
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const array = [];
    let counter = promises.length;

    promises.forEach((promise, index) => {
      promise.then(result => {
        array[index] = result;
        if (!(counter -= 1)) {
          resolve(array);
        }
      },
      reject);	
    });
  });
}

module.exports = promiseAll;