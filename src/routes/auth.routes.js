import Router from "express";
import {
  signup,
  signin,
  signout,
  getUser,
  getUsers,
} from "../controllers/auth.controller.js";
import {
  signupValidator,
  signinValidator,
} from "../validators/auth.validator.js";
import { isAuth } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/signin", signinValidator, signin);

router.post("/signup", signupValidator, signup);

router.post("/signout", signout);

router.get("/users", isAuth, getUsers);

router.get("/user", isAuth, getUser);

export default router;
