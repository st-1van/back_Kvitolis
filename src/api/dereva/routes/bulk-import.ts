export default {
  type: 'content-api',
  routes: [
    {
      method: 'POST',
      path: '/dereva/bulk-import',
      handler: 'bulk-import.handle',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};