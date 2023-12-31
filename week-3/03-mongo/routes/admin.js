const { Router } = require("express");
const {Admin, Course} = require("../db/index");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;

    const existingAdmin = await Admin.findOne({ username: username });
    if (existingAdmin) {
        return res.status(409).json({ message: "Admin already exists"});
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

router.post('/courses', adminMiddleware,async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    const existingCourse = await Course.findOne({ title: title });
    if (existingCourse) {
        return res.status(409).json({ message: "Course already exists" });
    }

    const course = new Course({
        title: title,
        description: description,
        price: price,
        imageLink: imageLink
    })
    const savedCourse = await course.save();
    res.json({
        message: "Course created successfully",
        courseId: savedCourse._id
    })
});

router.get('/courses', adminMiddleware,async (req, res) => {
    const courses = await Course.find({});
    if (courses.length === 0) {
        return res.status(404).json({ message: "No courses found" });
    }
    res.json({ courses })
});

module.exports = router;