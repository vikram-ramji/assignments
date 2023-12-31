const { Router } = require("express");
const {User, Course} = require("../db/index");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;

    const existingUser = await User.findOne({ username: username });
    if (existingUser) {
        return res.status(409).json({ message: "User already exists" });
    }

    const user = new User({
        username: username,
        password: password
    })
    await user.save()
    res.json({
        message: "User created successfully"
    })
});

router.get('/courses', async (req, res) => {
    const courses = await Course.find({})
    if (courses.length === 0) {
        return res.status(404).json({ message: "No courses found" });
    }
    res.json({ courses })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    try {
        const courseId = req.params['courseId'];
        const course = await Course.findOne({ _id : courseId });
        const user = await User.findOne({ username : req.headers.username })

        if (user.purchasedCourses.some(c => c.title === course.title)) {
            return res.status(409).json({ message: "Course already purchased" });
        }
        user.purchasedCourses.push(course);
        await user.save();

        res.json({ message: 'Course purchased successfully' });
    } catch (err) {
        res.status(500).json({ message: 'An error occurred while purchasing the course', error: err.message });
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username

    const user = await User.findOne({ username: username });
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const purchasedCourses = user.purchasedCourses;
    res.json({purchasedCourses});
});

module.exports = router