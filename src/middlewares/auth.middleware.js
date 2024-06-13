import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

//* Middleware para verificar si el usuario está autenticado
export const isAuth = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "No autorizado" });
  }

  jwt.verify(token, process.env.SECRET_JWT, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "No autorizado" });
    }

    req.userId = decoded.id;

    next();
  });
};
