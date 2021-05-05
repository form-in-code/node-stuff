const fs = require('fs')

const dataBuffer=fs.readFileSync("1-json.json")
const personObject = JSON.parse(dataBuffer.toString())
personObject.name = "manish"
personObject.age=1
fs.writeFileSync("1-json.json",JSON.stringify(personObject))