import dotenv from "dotenv";
import mongoose from "mongoose";

import MCQ from "./models/MCQ.js";
import javaQuestions from "./data/javaQuestions.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

await MCQ.deleteMany();

await MCQ.insertMany(javaQuestions);

console.log("✅ Java Questions Inserted");

process.exit();