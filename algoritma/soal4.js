/* 4. Silahkan cari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN Contoh:

Contoh:
```
Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]

diagonal pertama = 1 + 5 + 9 = 15 
diagonal kedua = 0 + 5 + 7 = 12 

maka hasilnya adalah 15 - 12 = 3
``` */

const matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]

const sumDiagonally = (arr) => {
    let diagonal1 = 0, diagonal2 = 0

    arr.forEach((el, i) => {
        el.forEach((val, index) => {
            index == i ? diagonal1 += val : null
            index == el.length - 1 - i ? diagonal2 += val : null
        })
    })
    return diagonal1 - diagonal2
}

console.log(sumDiagonally(matrix));