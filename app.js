import express from 'express'
import mongoose from 'mongoose'

const app = express()
const port = process.env.PORT

const userdb = process.env.USERDB
const passdb = process.env.PASSDB
const hostdb = process.env.HOSTDB
const namedb = process.env.NAMEDB 

const url = `mongodb+srv://${userdb}:${passdb}@${hostdb}/?retryWrites=true&w=majority&appName=${namedb}`

try{
    await mongoose.connect(url)
    console.log("Database connected");
}catch (error){
    console.log('Error Database', error);
}

console.log(url);

app.use(express.json())




// app.get('/', (req, res) => {
//     res.json({
//         server:true
//     })
// })

// app.get('/test', (req, res) => {
//     res.json({
//         server:false
//     })
// })

// app.post('/', (req, res) => {
//     console.log(req.body);
//     res.json({
//         msg: 'TODO OK'
//     })

// })

app.listen(port, () => console.log(`Server on port:${port}`))
