const { User } = require('../db/index')
const jwt = require('jsonwebtoken')
const jwtPassword = 'secret';
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization
    jwt.verify(token, jwtPassword, (err, token) => {
        if (err) {
            re.status(411).json('Token verification failed')
        } else {
            const person = User.findOne({username: token.username})
            if (person.length = 0) {
                res.status(411).json({message: 'User not in database'})
            }
            next()
        }
    })
}

module.exports = userMiddleware;