const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/proyecto-final";

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "API funcionando" });
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

async function start() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Conectado a MongoDB");
    app.listen(PORT, () =>
      console.log(`Servidor escuchando en el puerto ${PORT}`),
    );
  } catch (error) {
    console.error("Error al conectar con MongoDB:", error.message);
    process.exit(1);
  }
}

start();

module.exports = app;
