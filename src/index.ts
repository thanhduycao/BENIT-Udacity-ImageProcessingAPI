const myFunc = (num: number): number => {
    return num * num;
};
const express = require('express')
const app = express()
const port = 3000
const image= require('./routes/image.ts')
app.get('/', (req:any, res:any) => {
  res.send('Hello World!')
})
app.use('/api/image',image)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
export default myFunc;
