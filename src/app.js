const express = require("express");
const noteRoutes = require("./routes/note.routes");
const { notFound, errorHandler } = require("./middleware/error.middleware");

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Notes/Task API is running"
  });
});

app.use("/api/notes", noteRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;