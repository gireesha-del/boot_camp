debugger;
var app = angular.module('myApp', []);
app.controller('Democtrl', function ($scope, $http) {

  $scope.employee = {

  };
  $scope.employees = [];
  $scope.Gender = ["male", "female", "others"];
  $scope.Country = ["India", "Russia", "Canada", "China", "United States"];
  $scope.State = ["Tamilnadu", "kerala", "karanataka"];

  $scope.loaddata = function () {
    $http({
      method: 'GET',
      url: 'http://localhost:50557/api/values',
    })
      .then(function (response) {
        debugger;
        $scope.content = response.data;
      });
  }
  $scope loadata();
  //Create New User
  $scope.submitform = function (empobj) {
    debugger;
    //$http POST function
    $http({

      method: 'POST',
      url: 'http://localhost:50557/api/values',
      data: empobj

    }).then(function (response) {
      debugger;
      $scope.content = response.data;
    });
  }
  $scope.updateUser = function (empobj) {

    //$http PUT function
    $http({

      method: 'PUT',
      url: 'http://localhost:50557/api/values/1' + $scope.content.id,
      data: empobj

    }).then(function (response) {
      debugger;
      $scope.content = response.data;
    });
  }


});


