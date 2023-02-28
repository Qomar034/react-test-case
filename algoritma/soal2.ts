/* 2. Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, 
jika ada kata dengan panjang yang sama silahkan ambil salah satu

Contoh:  
```
const sentence = "Saya sangat senang mengerjakan soal algoritma"

longest(sentence) 
// mengerjakan: 11 character */

const testSentence1: string = "Saya sangat senang mengerjakan soal algoritma";

const findLongestCount = (sentence: string): string => {
  let word: string = "",
    temporary: string = "";

  sentence
    .split("")
    .forEach((el: string, i: number) => {
      if (el == " " || i == sentence.length) {
        if (temporary.length > word.length) word = temporary;

        temporary = "";
      } else {
        temporary += el;
      }
    });

  return `${word}: ${word.length} character`;
};

console.log(findLongestCount(testSentence1));