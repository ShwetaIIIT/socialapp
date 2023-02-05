const express = require("express");
const format = require("date-format");

const app = express()

const PORT = process.env.PORT || 4000;
app.get('/', (req, res) => {
    res.send("<h1>hello</h1>")
})

app.get('/v1/instagram', (req, res) => {
    const response = {
         name:'shweta',
         followers: 10,
         following: 20,
         date: format.asString("dd/mm/yyyy",new Date)
    }
    res.status(200).send(response)
})
app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`)
})