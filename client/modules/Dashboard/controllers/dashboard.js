/*global moment*/
'use strict';

var app = angular.module('dashboardMain', [])
app.controller('dashboardCtrl', function($scope, $http, $state, Common) {
  console.log('inside the dashboard controller - - - - -',JSON.stringify($scope.userData));
  var loginData  = localStorage.getItem('loginData');
       console.log('loginData',JSON.stringify(loginData));

      Common.getLoginDetails(function(response){
        console.log('response-- ',JSON.stringify(response));
      })
  });