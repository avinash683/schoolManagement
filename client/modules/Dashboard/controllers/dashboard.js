/*global moment*/
'use strict';

var app = angular.module('dashboardMain', [])
app.controller('dashboardCtrl', function($scope, $http, $state, Common,$rootScope) {
    console.log('inside dashboard controller');
    var userData = JSON.parse(localStorage.getItem('userData'));
    function checkUserLogin(){
      if(userData!=null){
          $rootScope.isLoggedIn = true;
          $state.go('app.dashboard');
        }else{
          $state.go('app.home');
          localStorage.removeItem('userData')
          $rootScope.isLoggedIn = false;
      }
  }
  checkUserLogin();


/*
  $scope.addProfessor = function(){

  }$scope.addStudents = function(){

  }$scope.addClasses = function(){

  }*/
});