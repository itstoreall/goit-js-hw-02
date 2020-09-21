/*
 * Функция предикат
 *
 * Функция предикат возвращает true или false
 *
 * Напиши функцию checkForSpam(message), принимающую 1 
 параметр message - строку. Функция проверяет ее на 
 содержание слов spam и sale. Если нашли запрещенное 
 слово то функция возвращает true, если запрещенных 
 слов нет функция возвращает false. Слова в строке 
 могут быть в произвольном регистре.
 *
 */

// /*

// Автопроверка

function checkForSpam(str) {
  "use strict";
  // Write code under this line
  const message = str;
  const normalizedMessage = message.toLowerCase();
  let result;

  if (
    normalizedMessage.includes("spam") ||
    normalizedMessage.includes("sale")
  ) {
    result = true;
  } else {
    result = false;
  }

  return result;
}

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// */
/*

// VSC

function checkForSpam(str) {
  //   console.log(typeof str);
  const message = str;
  const normalizedMessage = message.toLowerCase();
  let result;
  // console.log(normalizedStr);
  // console.log(normalizedMessage.includes("spam"));
  // console.log(normalizedMessage.includes("sale"));

  if (
    normalizedMessage.includes("spam") ||
    normalizedMessage.includes("sale")
  ) {
    result = true;
  } else {
    result = false;
  }

  return result;
}

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

*/
