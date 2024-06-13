import { check } from "express-validator";
import { validateResult } from "../helpers/validationResult.js";
import Categorias from "../models/categorias.model.js";

export const categoriaValidator = [
  check("nombre")
    .exists()
    .withMessage("El nombre de la categoría es requerido")
    .notEmpty()
    .withMessage("El nombre de la categoría no puede estar vacío")
    .isLength({ min: 3 })
    .withMessage("El nombre de la categoría debe tener al menos 3 caracteres")
    .isLength({ max: 50 })
    .withMessage(
      "El nombre de la categoría no puede tener más de 50 caracteres"
    )
    .custom((value, { req }) => {
      return Categorias.findOne({ nombre: value }).then((categoria) => {
        if (categoria) {
          return Promise.reject("El nombre de la categoría ya está en uso");
        }
      });
    }),
  check("descripcion")
    .exists()
    .withMessage("La descripción de la categoría es requerida")
    .notEmpty()
    .withMessage("La descripción de la categoría no puede estar vacía")
    .isLength({ min: 3 })
    .withMessage(
      "La descripción de la categoría debe tener al menos 3 caracteres"
    )
    .isLength({ max: 100 })
    .withMessage(
      "La descripción de la categoría no puede tener más de 100 caracteres"
    ),
  check("imagen")
    .exists()
    .withMessage("La imagen de la categoría es requerida")
    .notEmpty()
    .withMessage("La imagen de la categoría no puede estar vacía")
    .matches(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|png)/)
    .withMessage("La imagen de la categoría debe ser de tipo JPG, JPEG o PNG"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
