'use strict';
var app = angular.module('schoolManagement', ['ui.router','appMain','registerMain','Dashboard','commonServices','ngStorage']);

app.config(['$stateProvider','$urlRouterProvider', function ($stateProvider, $urlRouterProvider){
      $stateProvider.state('app', {
           url: "/app",
           abstract: true
      })

      $urlRouterProvider.otherwise("/app/home")
}])

app.controller('appCtrl', function ($state,$scope,Common) {

     Common.getLoginDetails(function(loginResponse){
        if(loginResponse!== null){
            //logged in
            console.log('logged in'+JSON.stringify(loginResponse));
            $state.go('app.dashboard');
        }else{
            console.log('not logged in ')
           $state.go('app.home');
        }
     })


});