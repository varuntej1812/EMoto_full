const mongoose = require("mongoose");

const DashboardSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  data: { type: Object, required: true },
});

module.exports = mongoose.model("Dashboard", DashboardSchema);
