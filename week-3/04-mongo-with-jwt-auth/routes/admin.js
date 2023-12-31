const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db/index");
const router = Router();
const jwt = require('jsonwebtoken')
const jwtPassword = 'secret';

// Admin Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const existingAdmin = await Admin.findOne({ username: username });
    if (existingAdmin) {
        return res.status(409).json({ message: "Admin already exists" });
    }

    const admin = new Admin({
        username: username,
        password: password
    })
    await admin.save()
    res.json({
        message: "Admin created successfully"
    })
});

router.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const token = jwt.sign({username: username}, jwtPassword)

    res.json({token})
});

router.post('/courses', adminMiddleware, async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    const course = new Course({
        title: title,
        description: description,
        price: price,
        imageLink: imageLink
    })
    await course.save()
    res.json({
        message: "Course created successfully",
        courseId: course._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find()
    res.json({courses})
});

module.exports = router;