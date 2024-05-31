const { addCultureHandler, getAllCulturesHandler, getCultureByIdHandler, editCultureByIdHandler, deleteCultureByIdHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/cultures',
    handler: addCultureHandler,
  },
  {
    method: 'GET',
    path: '/cultures',
    handler: getAllCulturesHandler,
  },
  {
    method: 'GET',
    path: '/cultures/{cultureId}',
    handler: getCultureByIdHandler,
  },
  {
    method: 'PUT',
    path: '/cultures/{cultureId}',
    handler: editCultureByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/cultures/{cultureId}',
    handler: deleteCultureByIdHandler,
  },
];

module.exports = routes;
