const express = require('express')
const faker = require('faker')
const path = require('path')

const app = express()
const port = 3000

app.get('/generate', (req, res) => {
    const randomName = faker.name.findName();
    res.send(randomName);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, ()=> {
    console.log(`Server is listening on http://localhost:${port}`);
});