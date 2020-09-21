/*

Поиск самого длинного слово в строке с пробелами

Напиши функцию findLongestWord(string = ""), которая принимает 
параметром произвольную строку (в строке будут только слова и пробелы) 
и возвращает самое длинное слово в этой строке.

*/
// /*

// Автопроверка

function findLongestWord(string = "") {
  // Write code under this line
  let words = string.split(" ");

  let longestWord = "";
  let longestLength = 0;

  for (let i = 0; i < words.length; i += 1) {
    if (longestLength < words[i].length) {
      longestLength = words[i].length;
      longestWord = words[i];
    }
  }

  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

console.log(findLongestWord("Google do a roll"));
// 'Google'

console.log(findLongestWord("May the force be with you"));
// 'force'

// */
/*

// VSC

function findLongestWord(string = "") {
  let words = string.split(" ");
  // console.log(words);

  let longestWord = "";
  let longestLength = 0;

  for (let i = 0; i < words.length; i += 1) {
    // console.log("words i: ", words[i], words[i].length);

    // console.log(longestLength + words[i].length);
    // let result = words[i];
    if (longestLength < words[i].length) {
      longestLength = words[i].length;
      // let result = words[i];
      // console.log(words[i].length, result);
      longestWord = words[i];
    }

    // let word = words[i];
    // longestWord = word;
    // // console.log("longestWord", longestWord);

    // let wordLength = words[i].length;
    // console.log(`wordLength ${words[i]} ${wordLength}`);
  }

  // console.log("Ответ:", longestLength);

  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

console.log(findLongestWord("Google do a roll"));
// 'Google'

console.log(findLongestWord("May the force be with you"));
// 'force'

*/
