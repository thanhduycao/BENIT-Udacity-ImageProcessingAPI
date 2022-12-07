const sharp = require('sharp');
import { Request, Response, NextFunction } from 'express';
const NodeCache = require( "node-cache" );
const myCache = new NodeCache();
interface RequestQuery
{
  fileName:String,
  width:Number,
  height:Number,
}
exports.resizeImage=( req:any ,res:any) :void=> 
{   
  const key=req.url
  const cacheResponse=myCache.get(key)

  if(cacheResponse)
  {
    console.log("da tim duoc image co san")
    res.sendFile(cacheResponse)
  }
  else
  {
    var newpath ='D:\\benit\\FullStack\\Nodejs\\BENIT-Udacity-ImageProcessingAPI\\images\\' +`${req.query.fileName}.jpg`
    var diachixuat=__dirname+`/${req.query.fileName}.jpg`
    req.query  as unknown as RequestQuery
    var width=parseInt(req.query.width as string) ;
    var height=parseInt(req.query.height as string);
    console.log(width)
    console.log(height)
   sharp(newpath)
   .rotate()
   .resize(width,height)
   .toFile(diachixuat, function(err:any) {
    console.log(err)//
  });
  console.log("lan dau load anh nay")
  myCache.set(key,diachixuat)
   res.sendFile(diachixuat)
  }   
}
