const angular = require('angular');

import books from '../../models/books.json';
import coverImage from '../../assets/book-cover.png';

angular.module('app-bootstrap').component('bookController', {
  template: require('./book-list.template.html'),
  controller: ['BooksService', function (BooksService) {

    this.books = BooksService.getAllBooks();
    this.coverImage = coverImage;
    this.query = '';

    console.log(books);


  }]
});
