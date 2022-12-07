"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myFunc = (num) => {
    return num * num;
};
const express = require('express');
const app = express();
const port = 3000;
const image = require('./routes/image.ts');
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/api/image', image);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
exports.default = myFunc;
