import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: [
      {
        ref: "Roles",
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
    encuestasRealizadas: [
      {
        encuesta: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Encuestas",
        },
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        preguntasRespuestas: [
          {
            pregunta: String,
            respuestas: [String],
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
