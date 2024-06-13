import { check } from "express-validator";
import { validateResult } from "../helpers/validationResult.js";
import Roles from "../models/roles.model.js";

export const rolesValidator = [
  check("nombre")
    .exists()
    .withMessage("El nombre del rol es requerido")
    .notEmpty()
    .withMessage("El nombre del rol no puede estar vacío")
    .isLength({ min: 3 })
    .withMessage("El nombre del rol debe tener al menos 3 caracteres")
    .isLength({ max: 50 })
    .withMessage("El nombre del rol no puede tener más de 50 caracteres")
    .custom((value, { req }) => {
      return Roles.findOne({ nombre: value }).then((rol) => {
        if (rol) {
          return Promise.reject("El nombre del rol ya está en uso");
        }
      });
    }),
  check("descripcion")
    .exists()
    .withMessage("La descripción del rol es requerida")
    .notEmpty()
    .withMessage("La descripción del rol no puede estar vacía")
    .isLength({ min: 3 })
    .withMessage("La descripción del rol debe tener al menos 3 caracteres")
    .isLength({ max: 100 })
    .withMessage("La descripción del rol no puede tener más de 100 caracteres"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
