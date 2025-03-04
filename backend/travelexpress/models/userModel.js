const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    isVerified: { type: Boolean, default: false }
}, { timestamps: true });

const UserModel = mongoose.model('users', userSchema);
module.exports = UserModel;
