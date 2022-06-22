'use strict'

const letters = "abcdefghijklmnopqrstuvwxyzабвгдеёжзийклмнопрстуфхцчшщъыьэюяієґ";

function talkToBob(sentence) {
  sentence = sentence.trim();

  const isAQuestion = sentence[sentence.length - 1] == "?";
  const isUpper = isUpperCase(sentence);


  if (isUpper && isAQuestion) {
    return "Успокойся, я знаю, что делаю!";
  }

  if (isUpper) {
    return "Вау, расслабься!";
  }

  if (isAQuestion) {
    return "Конечно"
  }

  if (sentence == "") {
    return "Хорошо. Пусть так и будет!";
  }

  return "Всё равно";
}

function isUpperCase(str) {
  let hadAtLeastOneCaps = false;
  for (let i = 0; i < str.length; i += 1) {
    if (letters.indexOf(str[i]) != -1) {
      return false;
    } else if (letters.indexOf(str[i].toLowerCase()) != -1 ) {
      hadAtLeastOneCaps = true;
    }
  }

  return hadAtLeastOneCaps;
}