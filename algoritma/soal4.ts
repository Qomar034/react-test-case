/* 4. Silahkan cari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN Contoh:

Contoh:
```
Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]

diagonal pertama = 1 + 5 + 9 = 15 
diagonal kedua = 0 + 5 + 7 = 12 

maka hasilnya adalah 15 - 12 = 3
``` */

const matrix: Array<number>[] = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]

const sumDiagonally = (arr: Array<number>[]): number => {
    let diagonal1: number = 0, diagonal2: number = 0

    arr.forEach((el: number[], i: number) => {
        el.forEach((val: number, index: number) => {
            index == i ? diagonal1 += val : null
            index == el.length - 1 - i ? diagonal2 += val : null
        })
    })
    return diagonal1 - diagonal2
}

console.log(sumDiagonally(matrix));