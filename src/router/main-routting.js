const express = require('express');
const bcrypt = require('bcryptjs');

const User = require('../model/user');

const router = express.Router();

router.post('/registration/user', async (req, res) => {
    try {
        const createUser = new User(req.body);
        const data = await createUser.save();
        res.status(201).send(data)
    } catch (err) {
        res.status(400).send(err)
    }
});

router.get('/registration/user', async (req, res) => {
    try {
        const getData = await User.find();
        res.status(200).send(getData);
    } catch (err) {
        res.status(400).send(err)
    }
});

router.get('/registration/user/:id', async (req, res) => {
    try {
        const _id = req.params.id
        const userData = await User.findById({_id: _id});
        res.status(200).send(userData);

    } catch (err) {
        res.status(400).send(err)
    }
});

router.patch('/registration/user/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updateUser = await User.findByIdAndUpdate({_id: id}, req.body, {new: true})
        res.status(201).send(updateUser);
    } catch (e) {
        res.status(400).send(e)
    }
});

router.delete('/registration/user/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deleteUser = await User.findByIdAndDelete({_id: id})
        res.status(201).send(deleteUser);
    } catch (e) {
        res.status(400).send(e)
    }
});

//Login Api

router.post('/login/user', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const user = await User.findOne({email:email})

        console.log("user:::::",userEmail);

        // const isMatch = await bcrypt.compare(password, user.password);

        if (userEmail.password === password) {
        // if (isMatch) {
            res.send("login successfully");
            console.log('login successfully')
        } else {
            res.status(401).send("Invalid email and password")
            console.log('Invalid email and password')
        }
    } catch (err) {
        res.status(400).send("Invalid details")
    }
});

module.exports = router;
