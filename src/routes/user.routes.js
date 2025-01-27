import {Router} from "express";

import {upload} from "../middlewares/multer.middleware.js"

import {loginUser, logoutUser, registerUser} from "../controllers/user.controller.js"

const router = Router()

router.route("/register").post(upload.fields([
    {
        name:"avatar",
        maxCount:1
    },{
        name:"coverImage",
        maxCount:1
    }
]),registerUser)

router.route("/login").post(loginUser)

//secured routes
router.route("/logout").post(verifyJWT,logoutUser)

export default router 