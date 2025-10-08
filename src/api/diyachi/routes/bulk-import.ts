export default {
  type: 'content-api',
  routes: [
    {
      method: 'POST',
      path: '/diyachi/bulk-import',
      handler: 'bulk-import.handle',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};