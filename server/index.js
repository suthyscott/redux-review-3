require('dotenv').config()

const express = require('express')
const massive = require('massive')
const session = require('express-session')
const app = express()

const authCtrl = require('./authController')
const checkForSession = require('./middleware/checkForSession')

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set("db", db);
    console.log("DB connected");
});

app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET
}))

app.use(checkForSession)

app.get('/api/user', authCtrl.getUser)
app.post('/api/login', authCtrl.loginUser)
app.post('/api/register', authCtrl.registerUser)
app.post('/api/logout', authCtrl.logoutUser)




app.listen(SERVER_PORT, console.log(`Take us to warp ${SERVER_PORT}!`))