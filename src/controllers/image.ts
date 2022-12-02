const sharp = require('sharp');
import { Request, Response, NextFunction } from 'express';
interface RequestQuery
{
  fileName:String,
  width:Number,
  height:Number,
}
exports.resizeImage=( req:any ,res:any) :void=> 
{   
    var newpath ='D:\\benit\\FullStack\\Nodejs\\BENIT-Udacity-ImageProcessingAPI\\images\\' +`${req.query.fileName}.jpg`
    var diachixuat=__dirname+'/output.jpg'
    req.query  as unknown as RequestQuery
    var width=parseInt(req.query.width) ;
    var height=parseInt(req.query.height);
    console.log(width)
    console.log(height)
   sharp(newpath)
   .rotate()
   .resize(width,height)
   .toFile(diachixuat, function(err:any) {
    console.log(err)//
  });
   res.sendFile(diachixuat)
//    res.send(req.params.image)
}
