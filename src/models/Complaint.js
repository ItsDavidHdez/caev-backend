const { Schema, model } = require("mongoose");

const complaintSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    // ["Fuga", "Falta de Servicio", "Drenajes", "Varios"]
    type: {
      type: String,
      require: true,
    },
    domicile: {
      type: String,
      require: true,
    },
    colony: {
      type: String,
      require: true,
    },
    phone: String,
    sector: String,
    zone: String,
    comment: String,
    status: {
      type: String,
      require: true,
    }, // "Done", "In progress", "To do"
  },
  {
    timestamps: true,
  }
);

module.exports = model("Complaint", complaintSchema);
