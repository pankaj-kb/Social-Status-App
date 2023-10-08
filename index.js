const express = require('express');

const app = express()

const PORT = 4000 || process.env.PORT

const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Hello.html'))

    // res.status(201).send("<h1> Hello World </h1>")
})

app.get('/api/v1/instagram', (req, res) => {
    let pankaj = {
        name: "Pankaj",
        followers: "100",
        following: "100",
        posts: "5",
        date: Date.now()
    }
    res.status(200).send(pankaj)
})




app.listen(PORT, () => {
    console.log(`server is running at localhost:${PORT}`)
});