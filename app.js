import express from 'express'
import mongoose from 'mongoose'
import { Schema, model } from 'mongoose'

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





const user_schema = Schema({
    name: {
        type: String,
        require: true
    },
    nickname: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    cel: {
        type: String,
        require: true
    },
    email: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const user = model('user', user_schema)

const first_user = new user({
    name: "Victor",
    nickname: "vmbarbosa",
    password: "pass",
    cel: "134423243"
})

try {
    await first_user.save()
} catch (error) {
    
}


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
