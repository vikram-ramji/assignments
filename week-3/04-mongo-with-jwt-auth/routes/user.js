const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");
const jwt = require("jsonwebtoken");
const jwtPassword = "secret";

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const { username, password } = req.body;
    const user = new User({
        username: username,
        password: password
    })
    await user.save()
    res.status(200).json({message: 'User created successfully'})
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;
    const token = jwt.sign({username: username}, jwtPassword)
    res.status(200).json({token: token})
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses =await Course.find();
    res.status(200).json({courses})
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const { courseId } = req.params;
    const course = await Course.findById(courseId);
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, jwtPassword);
    const user = await User.findOne({username: decoded.username});

    if (user.purchasedCourses.some(c => c.title === course.title)) {
        return res.status(409).json({ message: "Course already purchased" });
    }

    user.purchasedCourses.push(course);
    await user.save();
    res.status(200).json({message: 'Course purchased successfully'})
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, jwtPassword);
    const user = await User.findOne({username: decoded.username});

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const purchasedCourses = user.purchasedCourses;

    res.status(200).json({purchasedCourses})
});

module.exports = router