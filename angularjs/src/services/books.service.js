const angular = require('angular');

import books from '../models/books.json';

angular.module('app-bootstrap').factory('BooksService', [function(){
  
  return {
    getAllBooks: () => books,
      // return $http.get('../../models/books.json', {cache: true}).then (function(resp) {
      //   return resp.data;
      // });

    getBook: (id) => books.find(book => book.id === id)
  }
}])
