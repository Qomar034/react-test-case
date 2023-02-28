//1. Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"
const test = "NEGIE1"

const revWord = (word) => {
    const numberWord = [], alphaWord = []
    word.split("").forEach(el => isNaN(el) ? alphaWord.push(el) : numberWord.push(el))
    
    return alphaWord.reverse().join("").concat((numberWord.join()))
}

console.log(revWord(test));