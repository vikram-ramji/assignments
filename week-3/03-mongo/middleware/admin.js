// Middleware for handling auth
const {Admin} = require("../db/index");
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username
    const password = req.headers.password

    const existingAdmin = await Admin.findOne({username: username, password: password})
    if (!existingAdmin) {
        return res.status(403).send("Invalid credentials")
    }
    next()
}

module.exports = adminMiddleware;