module.exports = app => {
  const { router, controller } = app;

  router.get('/test/find', controller.test.find);
  router.post('/test/create', controller.test.create);
};
