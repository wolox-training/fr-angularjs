const angular = require('angular');

import logo from '../../assets/LogoWolox.png';

angular.module('app-bootstrap').component('loginController', {
  template: require('./login.html'),
  controller: [function () {
    this.logo = logo;

    this.formData = {
      email: '',
      password: ''
    }

    this.login = (isValid) => {
      if (isValid) {
        alert ('Login correcto')
      } 
    }

  



  } 
]});
