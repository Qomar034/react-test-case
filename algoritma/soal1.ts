//1. Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"
const testWord1: string = "NEGIE1"

const revWord = (word: string): string => {
    const numberWord: number[] = [], alphaWord: string[] = []
    word.split("").forEach(el => isNaN(Number(el)) ? alphaWord.push(el) : numberWord.push(Number(el)))
    
    return alphaWord.reverse().join("").concat((numberWord.join()))
}

console.log(revWord(testWord1));