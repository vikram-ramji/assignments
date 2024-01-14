const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://root:j4XEhIdLlveIYxXD@cluster0.ekkkv5i.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false
    }
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}