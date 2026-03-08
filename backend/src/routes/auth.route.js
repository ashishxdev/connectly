import express from "express"
import { login, logout, singup, onboard } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", singup)
router.post("/login", login)
router.post("/logout", logout)
// Logout method as post method. why?
// Answer -> So post method is for operations that change the server state and logging does that. It destroys a session invalids a token. So it basically update something on the server side and that's why we would like to keep this as post.

router.post("/onboarding", protectRoute, onboard)

// check if user is logged in or not
router.get("/me", protectRoute, (req, res) => {
    res.status(200).json({ success: true, user: req.user })
})

export default router;