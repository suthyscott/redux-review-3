const bcrypt = require('bcryptjs')

module.exports = {
    getUser: (req, res) => {
        const {session} = req
        // console.log(session.user.username)
        res.status(200).send(session.user)
    },

    loginUser: async (req, res) => {
        const {username, password} = req.body
        const db = req.app.get('db')
        const {session} = req

        const foundUser = await db.get_user(username)
        const user = foundUser[0]
        
        if(!user){
            res.status(401).send('User not found. Please register as a new user before loggin in.')
        }
        
        const isAuthenticated = bcrypt.compareSync(password, user.password)
        if(!isAuthenticated){
            res.status(403).send('Incorrect password')
        }
        
        session.user = {id: user.user_id, username: user.username}
        res.status(201).send(session.user)
    },

    registerUser: async (req, res) => {
        const {username, password} = req.body
        const db = req.app.get('db')
        const {session} = req

        let result = await db.get_user(username)
        existingUser = result[0]
        existingUser ? res.status(409).send('Username taken') : null

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        let registeredUser = await db.register_user([username, hash])
        let user = registeredUser[0]

        session.user = {id: user.user_id, username: user.username}
        res.status(201).send(session.user)
    },

    logoutUser: (req, res) => {
        console.log('hit logout')
        req.session.destroy()
        res.sendStatus(200)
    }
}