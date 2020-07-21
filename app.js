const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("dontpressthebutton");
});

app.listen(3000, () => {
    console.log("HelloWorld");
});