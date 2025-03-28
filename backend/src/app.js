import express from "express";
import { createServer } from "node:http";
import cors from "cors";
import mongoose from "mongoose";
import userRoutes from "./routes/users.routes.js";

import dotenv from "dotenv";
dotenv.config();

const connectionDb = await mongoose.connect(process.env.MONGO_URI);

const app = express();
const server = createServer(app);

app.set("port", process.env.PORT || 8000);
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));


app.use("/", userRoutes);



// ✅ Ensure API routes are correctly set up
app.use("/api/v1/users", userRoutes);

const start = async () => {
    try {
        const connectionDb = await mongoose.connect("mongodb+srv://ritikshukla921:hUIMOiwgLvUKgyv8@zoom-clone.vzmi85m.mongodb.net/");
        console.log(`✅ MONGO Connected: ${connectionDb.connection.host}`);

        server.listen(app.get("port"), () => {
            console.log(`🚀 Server is running on http://localhost:${app.get("port")}`);
        });

    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
        process.exit(1);
    }
};

start();
