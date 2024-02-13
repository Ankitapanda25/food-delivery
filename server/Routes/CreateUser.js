const express = require('express')
const router = express.Router()
// const app = express()
const User = require('../Models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

  
router.post("/createuser", [
    body('email').isEmail().withMessage("Invalid email address"),
    body('name').isLength({ min: 5 }).withMessage("Please enter a username with more than 5 characters"),
    body('password').isLength({ min: 5 }).withMessage("Please enter a username with more than 5 characters"),
],
    async (req, res) => {

        const email = req.body.email
    const emailExists = await User.findOne({email})
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
        }
        
        const salt = await bcrypt.genSalt(10);
        const secPassword = await bcrypt.hash(req.body.password, salt)

    
        try {
            if (emailExists) {
            alert('Email already exists')
            }
            else {
                
                await User.create({
                    name: req.body.name,
                    password: secPassword,
                    email: req.body.email,
                    location: req.body.location
                });
                res.json({ "success": true });
            }
        
        
        
    } catch (error) {
        console.log(error);
        res.json({ "success": false });
        
    }
    })

    router.post("/login", 
        async (req, res) => {
    
        try {
            const email = req.body.email
            const usermail = await User.findOne({email});
            if (!usermail) {
                return (
                    res.status(400).json({ error: "Invalid credentials" })
                    
                )
                
                        
            }

            const comparePwd = await bcrypt.compare(req.body.password, usermail.password)
            if (!comparePwd) {
                return(res.status(400).json({ error: "Invalid credentials" }))
            }
            else {
                const data = {
                    user: {
                        id: usermail.id
                    }
                }
                const authToken = jwt.sign(data, process.env.JWT_SECRET)
                res.json({ "success": true, authToken });
            }
            
            
        } catch (error) {
            console.log(error);
            res.json({ "success": false });
            
        }
    })

module.exports = router;