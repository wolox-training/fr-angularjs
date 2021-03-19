const angular = require('angular');

import books from '../../models/books.json';
import coverImage from '../../assets/book-cover.png';
import badgeImage from '../../assets/badge.png';
import backArrowImage from '../../assets/back-arrow-20.png';

angular.module('app-bootstrap').component('coverController', {
  template: require('./cover.template.html'),
  controller: ['$stateParams', '$scope', function($stateParams) {
    this.book = undefined;
    this.defaultCoverImage = coverImage;
    this.defaultbadgeImage = badgeImage;
    this.defaultbackArrowImage = backArrowImage;

    console.log(books);
    console.log($stateParams.bookId)

    if ($stateParams.bookId) {
     this.book = books.filter(book => book.id === parseInt($stateParams.bookId))[0];
    }

  }]
});
