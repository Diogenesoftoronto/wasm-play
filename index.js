const fs = require('fs')
const square_math_wasm = fs.readFileSync('./square-math.wasm')
console.log("square function in wasm!", square_math_wasm)
