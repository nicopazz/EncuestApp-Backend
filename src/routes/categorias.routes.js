import Router from "express";
import {
  getCategorias,
  getCategoria,
  createCategoria,
  updateCategoria,
  deleteCategoria,
} from "../controllers/categorias.controller.js";
import { categoriaValidator } from "../validators/categorias.validator.js";
import { isAuth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/categorias", getCategorias);

router.get("/categorias/:id", getCategoria);

router.post("/categorias", /* isAuth, */ categoriaValidator, createCategoria);

router.put(
  "/categorias/:id",
  /* isAuth, */ categoriaValidator,
  updateCategoria
);

router.delete("/categorias/:id", /* isAuth, */ deleteCategoria);

export default router;
