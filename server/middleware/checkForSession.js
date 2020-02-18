

module.exports = function (req, res, next){
    if(!req.session.user){
        req.session.user = {
            username: 'An User'
        }
    }
    next()
}