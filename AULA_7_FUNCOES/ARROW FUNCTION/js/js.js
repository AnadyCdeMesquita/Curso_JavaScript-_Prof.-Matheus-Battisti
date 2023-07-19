
let flecha = (n, x, y) => {
    return Math.max(n, x, y);
}

console.log(flecha(59, 25, 34))

let testandoFlecha = p => {
    return Math.round((p * 20/6) + (323 * p) + (p*20))
}

console.log(testandoFlecha(2))