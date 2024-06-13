import { check } from "express-validator";
import { validateResult } from "../helpers/validationResult.js";
import Categorias from "../models/categorias.model.js";

export const encuestaValidator = [
  check("nombre")
    .optional()
    .notEmpty()
    .withMessage("El nombre de la encuesta no puede estar vacío")
    .bail()
    .isLength({ min: 3 })
    .withMessage("El nombre de la encuesta debe tener al menos 3 caracteres")
    .isLength({ max: 50 })
    .withMessage(
      "El nombre de la encuesta no puede tener más de 50 caracteres"
    ),
  check("descripcion")
    .optional()
    .notEmpty()
    .withMessage("La descripción de la encuesta no puede estar vacía")
    .bail()
    .isLength({ min: 3 })
    .withMessage(
      "La descripción de la encuesta debe tener al menos 3 caracteres"
    )
    .isLength({ max: 100 })
    .withMessage(
      "La descripción de la encuesta no puede tener más de 100 caracteres"
    ),
  check("preguntas")
    .optional()
    .isArray()
    .withMessage("Las preguntas de la encuesta deben ser un arreglo")
    .custom((value) => {
      if (value.length === 0) {
        throw new Error("El arreglo de preguntas no debe estar vacío");
      }
      return true;
    }),
  /* check("respuestas")
    .optional()
    .notEmpty()
    .withMessage("Las respuestas de la encuesta no pueden estar vacías")
    .isArray()
    .withMessage("Las respuestas de la encuesta deben ser un arreglo"), */
  check("categoria")
    .notEmpty()
    .withMessage("Debes seleccionar una categoria")
    .custom(async (value, { req }) => {
      const categoria = await Categorias.findById(value);
      if (!categoria) {
        throw new Error("La categoría no existe");
      }
    }),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
