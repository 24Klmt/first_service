/**
 * test
 * @param app
 * @returns {{schedule: {cron: string, immediate: boolean, type: string}, task(*): Promise<void>}}
 */

let globalLock = false;

module.exports = app => {
  return {
    schedule: {
      cron: '0 */5 6-23 * * ?',
      type: 'worker',
      immediate: true,
    },
    async task(ctx) {
      // if (!app.config.schedulers.enable) {
      //   app.schedules[__filename].schedule.disable = true;
      //   app.logger.info("app.config.schedulers.enable="+app.config.schedulers.enable);
      //   return;
      // }
      if (globalLock) {
        app.logger.info('定时任务正在执行中......');
        return;
      }
      try {
        globalLock = true;
        app.logger.info('[test] start');
        app.logger.info('[test] end');
      } finally {
        globalLock = false;
      }
    },
  };
};
