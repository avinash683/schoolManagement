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

  var stateType = $state.current.name;
     var stateType = stateType.split('.')[1];
    console.log('stateType',stateType);

   function init(){
       $scope.queryCriteria = {
              fullName :"",
              password :"",
              mobileNumber : "",
              emailId : "",
              userType : "TEACHER",
              type : stateType
        };
        console.log(' $scope.queryCriteria dashboard',JSON.stringify( $scope.queryCriteria));
      }


  $scope.addProfessor = function(){
       var addProfessorQuery = {
            fullName : $scope.queryCriteria.fullName,
            password :$scope.queryCriteria .password,
            mobileNumber : $scope.queryCriteria.mobileNumber,
            emailId : $scope.queryCriteria.emailId,
            userType : "TEACHER",
            type : stateType
       };
       console.log('addProfessorQuery'+JSON.stringify(addProfessorQuery));
       $http.post('api/register',addProfessorQuery).then(function(result){
         console.log('result'+JSON.stringify(result));
         if(result && result.status){
            console.log('message',JSON.stringify(result.message));
            init();
       }
   })
}

$scope.selectActions = function(event, status_name){
  var i;
    $scope.tabcontent;
    $scope.tablinks;
    $scope.tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < $scope.tabcontent.length; i++) {
        $scope.tabcontent[i].style.display = "none";
    }
    $scope.tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < $scope.tablinks.length; i++) {
        $scope.tablinks[i].className = $scope.tablinks[i].className.replace(" active", "");
    }
    document.getElementById(status_name).style.display = "block";
//    console.log('event.currentTarget',event.currentTarget);
//    event.currentTarget.className += "active";

}

document.getElementById("defaultOpen").click();

});