const Mahasiswa = require("../models/mahasiswa.model");

// Get Mahasiswa
exports.getMahasiswa = () => {
  return Mahasiswa.find();
};
// Show Mahasiswa
exports.showMahasiswa = (id) => {
  return Mahasiswa.find({ _id: id });
};
// Create Mahasiswa
exports.createMahasiswa = (data) => {
  return Mahasiswa.create(data);
};
// Update Mahasiswa
exports.updateMahasiswa = (data, id) => {
  return Mahasiswa.updateOne({ _id: id }, data);
};
// Delete Mahasiswa
exports.deleteMahasiswa = (id) => {
  return Mahasiswa.deleteOne({ _id: id });
};
