module.exports = {
  mongoose: {
    url: 'mongodb://mongouser:B1nNm2WF@test_jike_mongondb:27017/jike?authSource=admin',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoReconnect: true,
      serverSelectionTimeoutMS: 15000, // 设置为 15 秒
    },
  },
};
