
const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model('User', UserSchema);

async function createUser(data) {
    return await User.create(data);
}

async function getUserById(id) {
    return await User.findById(id);
}

async function updateUser(id, data) {
    return await User.findByIdAndUpdate(id, data, { new: true });
}

async function deleteUser(id) {
    return await User.findByIdAndDelete(id);
}

module.exports = { createUser, getUserById, updateUser, deleteUser };
