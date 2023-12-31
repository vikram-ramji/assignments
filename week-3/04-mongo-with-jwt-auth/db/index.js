const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://root:j4XEhIdLlveIYxXD@cluster0.ekkkv5i.mongodb.net/course-app');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses: Array
});

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published: { type: Boolean, default: true}
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}