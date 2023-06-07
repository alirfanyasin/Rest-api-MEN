const express = require("express");
const mahasiswa = express.Router();
const {
  getMahasiswa,
  createMahasiswa,
  showMahasiswa,
  updateMahasiswa,
  deleteMahasiswa,
} = require("../controllers/mahasiswa.controller");

// Get Mahasiswa
mahasiswa.get("/mahasiswa", async (req, res) => {
  res.json(await getMahasiswa());
});
// Show Mahasiswa
mahasiswa.get("/mahasiswa/:id", async (req, res) => {
  const mahasiswaId = req.params.id;
  res.json(await showMahasiswa(mahasiswaId));
});
// Create Mahasiswa
mahasiswa.post("/mahasiswa", async (req, res) => {
  const { name, nim } = req.body;
  const data = { name, nim };
  res.send(await createMahasiswa(data));
});

// Update mahasiswa
mahasiswa.put("/mahasiswa/:id", async (req, res) => {
  const id = req.params.id;
  const { name, nim } = req.body;
  const data = { name, nim };
  res.send(await updateMahasiswa(data, id));
});
// Delete Mahasiswa
mahasiswa.delete("/mahasiswa/:id", async (req, res) => {
  const id = req.params.id;
  res.send(await deleteMahasiswa(id));
});

module.exports = mahasiswa;
