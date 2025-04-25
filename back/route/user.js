const express = require('express');
const router = express.Router();
const User=require('../model/User');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

router.post('/', async (req, res) => {
    const { name, email, password } = req.body;
    console.log(req.body);
    
    try {
        
        const existingUser = await User.findOn({ email });
        if(existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }
        password = await bcrypt.hash(password, 10); 
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.log(error);
        
        res.status(500).json({ error: 'Error registering user' });
    }
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }
        const token = jwt.sign({ id: user._id, email: user.email, name:user.name }, 'secretKey####', { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful', token });

    }catch (error) {
        res.status(500).json({ error: 'Error logging in' });
    }
})


module.exports = router;