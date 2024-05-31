const Hapi = require('@hapi/hapi');
const Path = require('path');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 9900,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
      files: {
        relativeTo: Path.join(__dirname, 'img'),
      },
    },
  });

  await server.register(require('@hapi/inert'));

  server.route({
    method: 'GET',
    path: '/img/{param*}',
    handler: {
      directory: {
        path: '.',
        index: false,
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();

