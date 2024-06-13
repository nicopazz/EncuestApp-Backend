import Router from "express";

import { isAuth } from "../middlewares/auth.middleware.js";
import {
  getRoles,
  getRol,
  createRol,
  updateRol,
  deleteRol,
} from "../controllers/roles.controller.js";
import { rolesValidator } from "../validators/roles.validator.js";

const router = Router();

router.get("/roles", getRoles);

router.get("/roles/:id", getRol);

router.post("/roles", rolesValidator, createRol);

router.put("/roles/:id", isAuth, rolesValidator, updateRol);

router.delete("/roles/:id", isAuth, deleteRol);

export default router;
