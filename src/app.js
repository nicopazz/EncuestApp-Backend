import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import encuestasRoutes from "./routes/encuestas.routes.js";
import categoriasRoutes from "./routes/categorias.routes.js";
import rolesRoutes from "./routes/roles.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
  methods: 'GET, POST, PUT, DELETE',   
  allowedHeaders: 'Content-Type, Authorization',
}

app.use(cors(corsOptions));

app.use("/api", authRoutes);
app.use("/api", encuestasRoutes);
app.use("/api", categoriasRoutes);
app.use("/api", rolesRoutes);

export default app;
