const mongoose = require('mongoose')


const usuario = "admin"
const senha = "admin"
async function main() {
try {
    await mongoose.connect(
`mongodb+srv://${usuario}:${senha}@cluster0.xpyejiw.mongodb.net/?retryWrites=true&w=majority`

    )
} catch(error) {
    console.log(`${error}`)
}
}

module.exports = main