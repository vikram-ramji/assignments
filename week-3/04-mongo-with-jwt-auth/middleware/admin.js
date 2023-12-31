// Middleware for handling auth
const {Admin} = require('../db/index')
const jwt = require('jsonwebtoken')
const jwtPassword = 'secret';
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    jwt.verify(token, jwtPassword, (err, token) => {
        if (err) {
            re.status(411).json('Token verification failed')
        } else {
            const person = Admin.findOne({username: token.username})
            if (person.length = 0) {
                res.status(411).json({message: 'Admin not in database'})
            }
            next()
        }
    })
}

module.exports = adminMiddleware;