import Router from "express";
import {
  getEncuestas,
  getEncuesta,
  getEncuestasPorCategoria,
  getEncuestaRealizada,
  createEncuesta,
  updateEncuesta,
  deleteEncuesta,
  createRealizarEncuesta,
  getEncuestasPorUsuarioId,
} from "../controllers/encuestas.controller.js";
import { isAuth } from "../middlewares/auth.middleware.js";
import { encuestaValidator } from "../validators/encuestas.validator.js";

const router = Router();

router.get("/encuestas", /* isAuth, */ getEncuestas);

router.get("/encuestas/:id", /* isAuth, */ getEncuesta);

router.get(
  "/encuestas/categoria/:categoria",
  /* isAuth, */ getEncuestasPorCategoria
);

router.get(
  "/encuestas/realizadas/:encuestarealizadaid",
  isAuth,
  getEncuestaRealizada
);

router.get("/mis-encuestas", isAuth, getEncuestasPorUsuarioId);

router.post("/encuestas", isAuth, encuestaValidator, createEncuesta);

router.post("/encuestas/realizar", isAuth, createRealizarEncuesta);

router.patch("/encuestas/:id", isAuth, updateEncuesta);

router.delete("/encuestas/:id", isAuth, deleteEncuesta);

export default router;
