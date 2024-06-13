import mongoose from "mongoose";

const encuestasSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    descripcion: {
      type: String,
      required: true,
      trim: true,
    },
    preguntas: {
      type: Array,
      required: true,
    },
    /* respuestas: {
      type: Array,
      required: true,
    }, */
    categoria: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Categorias",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    available: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Encuestas", encuestasSchema);
