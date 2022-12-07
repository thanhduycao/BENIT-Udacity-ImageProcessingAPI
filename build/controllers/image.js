"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sharp = require('sharp');
exports.resizeImage = (req, res) => {
    var newpath = 'D:\\benit\\FullStack\\Nodejs\\BENIT-Udacity-ImageProcessingAPI\\images\\' + `${req.query.fileName}.jpg`;
    var diachixuat = __dirname + '/output.jpg';
    req.query;
    var width = parseInt(req.query.width);
    var height = parseInt(req.query.height);
    console.log(width);
    console.log(height);
    sharp(newpath)
        .rotate()
        .resize(width, height)
        .toFile(diachixuat, function (err) {
        console.log(err); //
    });
    res.sendFile(diachixuat);
    //    res.send(req.params.image)
};
