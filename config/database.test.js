module.exports = {
  mongoose: {
    url: 'mongodb://localhost:27017/lmt',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoReconnect: true,
      serverSelectionTimeoutMS: 15000, // 设置为 15 秒
    },
  },
};
