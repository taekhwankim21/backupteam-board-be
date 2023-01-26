const messages = { en: "hello world", kr: "안녕하세유" }

const { en } = messages
console.log(en)

const addition = (x, y) => x + y

console.log("result : ", addition(1, 2))

module.exports = addition
