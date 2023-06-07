const mongoose = require("mongoose");

const mahasiswaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  nim: {
    type: String,
    required: true,
  },
});

const mahasiswa = mongoose.model("Mahasiswa", mahasiswaSchema);
module.exports = mahasiswa;
