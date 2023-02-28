/* 3. Terdapat dua buah array yaitu array INPUT dan array QUERY, 
silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT

Contoh:  
```
INPUT = ['xc', 'dz', 'bbb', 'dz']  
QUERY = ['bbb', 'ac', 'dz']  

OUTPUT = [1, 0, 2] karena kata 'bbb' terdapat 1 pada INPUT, kata 'ac' tidak ada pada INPUT, 
dan kata 'dz' terdapat 2 pada INPUT */

const INPUT: string[] = ['xc', 'dz', 'bbb', 'dz']  
const QUERY: string[] = ['bbb', 'ac', 'dz']

const countSpawn = (input: string[], query: string[]): number[] => {
    let result: number[] = []
    query.forEach((el: string, i: number) => {
        result.push(0)
        input.forEach((chars: string) => el == chars ? result[i]++ : null)
    })
    
    return result
}

console.log(countSpawn(INPUT, QUERY));