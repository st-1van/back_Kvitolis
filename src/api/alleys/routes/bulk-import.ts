export default {
  type: 'content-api',
  routes: [
    {
      method: 'POST',
      path: '/alleys/bulk-import',
      handler: 'bulk-import.handle',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};