const express = require('express');

const app = express()

const PORT = 4000 || process.env.PORT

const path = require('path');

app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, 'Hello.html'))
    res.send("<h1> Hello World </h1>")
})

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`)
});