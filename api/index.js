const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcrypt');
const jst = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const bcryptSalt = bcrypt.genSaltSync(10);
const jstSecret= 'namajkisoinakjj3jiji2891nxnijs90wq';

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: ['http://127.0.0.1:5173', 'http://localhost:5173'], // Allow both origins
}));

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

app.get('/test', (req, res) => {
    res.json('test ok');
});

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    // Log the received data to debug the backend
    console.log("Received Data:", { name, email, password });

    try {
        const hashedPassword = bcrypt.hashSync(password, bcryptSalt);
        const userDoc = await User.create({
            name,
            email,
            password: hashedPassword,
        });
        res.json(userDoc);
    } catch (e) {
        res.status(422).json({ error: 'Registration failed', details: e });
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const userDoc = await User.findOne({ email });
        if (userDoc) {
            const isPasswordCorrect = bcrypt.compareSync(password, userDoc.password);
            if (isPasswordCorrect) {
                jst.sign({email:userDoc.email,id:userDoc._id},jstSecret,{},(err,token)=>{
                    if(err) throw err;
                    
                })
                res.cookie('token','').json({ status: 'success', message: 'Login successful' });
            } else {
                res.status(401).json({ status: 'error', message: 'Invalid password' });
            }
        } else {
            res.status(404).json({ status: 'error', message: 'User not found' });
        }
    } catch (e) {
        res.status(500).json({ status: 'error', message: 'Login failed', details: e });
    }
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
