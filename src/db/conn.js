const mongoose = require('mongoose')

async function main() {
try {
    await mongoose.connect(
"mongodb+srv://<pablo>:<fonseca>@cluster0.xpyejiw.mongodb.net/?retryWrites=true&w=majority"

    )
} catch(error) {
    console.log(`${error}`)
}
}

module.exports = main