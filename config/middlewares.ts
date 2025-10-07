module.exports = [
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      // origin: [
      //   'http://localhost:3000',
      //   'https://kvitolis-front.vercel.app', 
      //   'https://kvitolis-front-git-backintegration-dfff-pj.vercel.app',
      //   'https://kvitolis.com.ua'
      // ],
      origin: ['https://kvitolis-front-git-backintegration-dfff-pj.vercel.app'],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
    },
  },
  'strapi::security',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

// module.exports = [
//   'strapi::errors',
//   'strapi::security',
//   'strapi::poweredBy',
//   'strapi::logger',
//   'strapi::query',
//   'strapi::body',
//   'strapi::session',
//   'strapi::favicon',
//   'strapi::public',
// ];