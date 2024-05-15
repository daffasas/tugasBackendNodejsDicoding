// routes.js


const { 
  postBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  PutByIdHandler,
  deleteBookByIdHandler
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: postBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: PutByIdHandler,
  },
  
];

module.exports = routes;