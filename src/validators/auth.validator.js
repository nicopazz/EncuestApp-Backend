import { check } from "express-validator";
import { validateResult } from "../helpers/validationResult.js";

export const signupValidator = [
  check("username")
    .exists()
    .withMessage("El nombre de usuario es requerido")
    .notEmpty()
    .withMessage("El nombre de usuario no puede estar vacío")
    .isLength({ min: 3 })
    .withMessage("El nombre de usuario debe tener al menos 3 caracteres")
    .isLength({ max: 20 })
    .withMessage("El nombre de usuario no puede tener más de 20 caracteres"),
  check("email")
    .exists()
    .withMessage("El correo es requerido")
    .notEmpty()
    .withMessage("El correo no puede estar vacío")
    .isEmail()
    .withMessage("El correo no es válido"),
  check("password")
    .exists()
    .withMessage("La contraseña es requerida")
    .notEmpty()
    .withMessage("La contraseña no puede estar vacía")
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener al menos 6 caracteres"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

export const signinValidator = [
  check("email")
    .exists()
    .withMessage("El correo es requerido")
    .notEmpty()
    .withMessage("El correo no puede estar vacío")
    .isEmail()
    .withMessage("El correo no es válido"),
  check("password")
    .exists()
    .withMessage("La contraseña es requerida")
    .notEmpty()
    .withMessage("La contraseña no puede estar vacía"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
