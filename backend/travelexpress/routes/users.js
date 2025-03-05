var express = require('express');
var router = express.Router();
var UserModel = require('../models/userModel');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
require('dotenv').config();

router.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existingUser = await UserModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "Email already registered" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new UserModel({ username, email, password: hashedPassword });
        await user.save();

        const token = jwt.sign({ email }, process.env.SECRET_KEY, { expiresIn: '1h' });
        const verificationLink = `http://localhost:3001/users/verify/${token}`;

        const transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        await transport.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: "Verify your email",
            html: `<a href="${verificationLink}">Click here to verify</a>`
        });

        res.status(200).json({ message: "Signup successful. Check your email for verification." });

    } catch (err) {
        res.status(500).json({ message: "Internal server error", error: err.message });
    }
});

router.get('/verify/:token', async (req, res) => {
    try {
        const { token } = req.params;
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const user = await UserModel.findOne({ email: decoded.email });

        if (!user) {
            return res.status(400).json({ message: "Invalid or expired token" });
        }

        user.isVerified = true;
        await user.save();

        res.status(200).json({ message: "Verification Successful. You can now log in." });

    } catch (err) {
        res.status(400).json({ message: "Invalid or expired token" });
    }
});


router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        if (!user.isVerified) {
            return res.status(400).json({ message: "Please verify your email before logging in" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: '1d' });

        res.status(200).json({ message: "Login successful", token });

    } catch (err) {
        res.status(500).json({ message: "Internal server error", error: err.message });
    }
});

module.exports = router;
