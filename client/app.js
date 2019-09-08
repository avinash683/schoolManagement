'use strict';
var app = angular.module('schoolManagement', ['ui.router','appMain','registerMain','Dashboard','commonServices']);

app.config(['$stateProvider','$urlRouterProvider', function ($stateProvider, $urlRouterProvider){
      $stateProvider.state('app', {
           url: "/app",
           abstract: true
      })

      $urlRouterProvider.otherwise("/app/home")
}])

app.controller('appCtrl', function ($state,$scope,Common,$rootScope) {
       $rootScope.isLoggedIn = false;
       var userData = JSON.parse(localStorage.getItem('userData'));
       console.log('inside app control',JSON.stringify(userData));

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

       $scope.logout = function(){
          $state.go('app.home');
          localStorage.removeItem('userData')
          $rootScope.isLoggedIn = false;
       }
});