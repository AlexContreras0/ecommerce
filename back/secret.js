// guardar siempre en .gitignore así: /secret.js para que no suba a github

const crypto = require("crypto")
const secret = "La tienda gourmet"
const secret2 = "La mejor tienda agro del mundo"
const hash = crypto.createHmac("sha256", secret).update(secret2).digest("hex")

const secretRefresh = "La tienda refresh gourmet"
const secretRefresh2 = "No hay otra tienda igual"
const hashRefresh = crypto.createHmac("sha256", secretRefresh).update(secretRefresh2). digest("hex")

console.log(hash)
console.log(hashRefresh)