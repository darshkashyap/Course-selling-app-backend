const { Router } = require('express');
const adminRouter = Router();
const { adminModel } = require("../db.js");
const jwt=require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config.js");
const { adminMiddleware } = require('../middleware/admin.js');
const zod = require("zod");


const signupSchema = zod.object({
    firstName: zod.string().min(2).max(100),
    lastName: zod.string().min(2).max(100),
    email: zod.string().email(),
    password: zod.string().min(6)
});

const signinSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6)
});

adminRouter.post("/signup", async function(req, res){
const {email, password,firstName,lastName} = req.body;
const validationResult = signupSchema.safeParse({ firstName, lastName, email, password });

if (!validationResult.success) {
    return res.status(400).json({ message: "Invalid input data", errors: validationResult.error.issues });
}
await adminModel.create({
    email,
    password,
    firstName,  
    lastName,
});
res.status(201).json({message: "Admin created successfully"});

});

adminRouter.post("/signin", async function(req, res) {
  const { email, password } = req.body;
    const validationResult = signinSchema.safeParse({ email, password });
    if (!validationResult.success) {
        return res.status(400).json({ message: "Invalid input data", errors: validationResult.error.issues });
    }
    const user = await adminModel.findOne({ email: email, password: password });
    if(user) {
       const token = jwt.sign({id:user._id}, JWT_ADMIN_PASSWORD, { expiresIn: "1h" });
         res.json({message: "Admin signed in successfully", token: token});
    } else {
        res.status(401).json({message: "Invalid email or password"});
    }
});

adminRouter.post("/course",adminMiddleware, async function(req, res){
const adminId = req.adminId;
const { title, description, price, imageLink, published } = req.body;
const course = await courseModel.create({
    title,
    description,
    price,
    imageLink,
    published,
    creatorID: adminId,
});
res.status(201).json({message: "Course created successfully", courseID: course._id});
});

adminRouter.get("/course/bulk",adminMiddleware,async function(req, res)  { 
    const adminId = req.adminId;
const course = await courseModel.findOne({
   creatorID: adminId
});
res.status(201).json({message: "Course updated successfully", courses : course});
});



adminRouter.put("/course",adminMiddleware,async function(req, res)  {
const adminId = req.adminId;
const { title, description, price, imageLink, published } = req.body;
const course = await courseModel.updateOne({
    _id:courseId,creatorID: adminId
}, {
    title,
    description,
    price,
    imageLink,
    published,
});
res.status(201).json({message: "Course updated successfully", courseID: course._id});
});


module.exports = {adminRouter: adminRouter}