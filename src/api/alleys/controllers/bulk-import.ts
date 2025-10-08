export default {
  async handle(ctx) {
    const entries = ctx.request.body.data;
    if (!Array.isArray(entries)) {
      ctx.status = 400;
      ctx.body = { success: false, error: 'Data should be an array of entries' };
      return;
    }
    try {
      const createdEntries = await Promise.all(
        entries.map((entry) =>
          strapi.entityService.create('api::alleys.alleys', { data: entry })
        )
      );
      ctx.body = {
        success: true,
        created: createdEntries.length,
        entries: createdEntries,
      };
    } catch (err) {
      ctx.status = 500;
      ctx.body = { success: false, error: err.message };
    }
  },
};