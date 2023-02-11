const express = require("express");
const serverless = require("serverless-http");
const format = require("date-format");
const router = express.Router();

const app = express()

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.status(200).send("successful")
})

app.get('/v1/instagram', (req, res) => {
    const response = {
         name:'shweta',
         followers: 10,
         following: 20,
         date: format.asString("dd/mm/yyyy",new Date)
    }
    res.status(200).json(response)
}) 
app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`)
})

app.use('/.netlify/functions/index', router)
module.exports.handler = serverless(app)