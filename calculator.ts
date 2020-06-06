const add = (first: number, second: number): number => {
    return first + second;
}

const substract = (first: number, second: number): number => {
    return first - second;
}

const isOdd = (num: number): boolean => {
    if (num % 2 === 0) {
        return false
    }
    return true
}

const sum = (numbers: Array<number>): number => {
    let s = 0;
    numbers.forEach(num => s += num)
    return s
}

export { add, substract, isOdd, sum }
