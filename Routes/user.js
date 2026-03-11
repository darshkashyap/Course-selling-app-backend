const { Router } = require('express');
const userRouter = Router();
const jwt=require("jsonwebtoken");
const { userModel } = require("../db");
const { JWT_USER_PASSWORD } = require("../config.js");
const { userMiddleware } = require('../middleware/user.js');
userRouter.post("/signup",async function(req, res){
const { firstName,lastName, email, password } = req.body;

await userModel.create({
    firstName,
    lastName,
    email,
    password
});
res.status(201).json({message: "User created successfully"});

});

userRouter.post("/signin", async function(req, res) {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email: email, password: password });
    if(user) {
       const token = jwt.sign({id:user._id}, JWT_USER_PASSWORD, { expiresIn: "1h" });
         res.json({message: "User signed in successfully", token: token});
    } else {
        res.status(401).json({message: "Invalid email or password"});
    }
});

userRouter.get("/purchases", userMiddleware,async function(req, res){
const userId = req.userId;
const purchases = await purchaseModel.find({userId: userId});
res.status(200).json({message: "Purchases retrieved successfully", purchases: purchases});
});
module.exports = {userRouter: userRouter};      