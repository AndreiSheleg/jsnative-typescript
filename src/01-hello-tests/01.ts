export const value01_01 = '01_01'

export function sum(a:number, b:number) {
    return a + b
}

export function mult(a:number, b:number) {
    return a * b
}

export function splitIntoWords(sentense: string) {
    const words =  sentense.toLowerCase().split(' ')

     return   words.filter(el => el !== '')
        .map(el => el.replace('!',''))
}