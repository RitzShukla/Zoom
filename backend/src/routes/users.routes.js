import { Router } from "express";
import { addToHistory, getUserHistory, login, register } from "../controllers/user.controller.js";

const router = Router();

router.get("/test", (req, res) => {
    res.send("✅ User API working!");
});

// ✅ Correct login route (Remove the hardcoded one)
router.route("/login").post(login);
router.route("/register").post(register);
router.route("/add_to_activity").post(addToHistory);
router.route("/get_all_activity").get(getUserHistory);

export default router;
