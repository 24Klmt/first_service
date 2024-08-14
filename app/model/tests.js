// const timestamps = require('mongoose-timestamp');

module.exports = app => {
  const mongoose = app.mongoose;
  const schema = new mongoose.Schema({
    timestamp: Number,
  });
  // schema.plugin(timestamps);
  return mongoose.model('Tests', schema);
};
