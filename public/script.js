var app = angular.module('MyApp',[]);

app.controller('mainctrl',function($scope, $http){
  
  $http.get('/candidates').success(function(res){
    $scope.candidates = res;
  });

  $scope.deletecandidate = function(Id) {
    alert('Are you sure ? ');
    $http.delete('/candidate/' + Id).success(function(res) {
           $scope.candidates = res;
    });
  };

  $http.get('/jobs').success(function(res){
      $scope.jobs = res;

  });

  $scope.deletejob = function(Id) {
    alert('Are you sure ? ');
    $http.delete('/job/' + Id).success(function(res) {
        $scope.jobs = res;
    });
  };

  $scope.fetchid = function(id){
    $scope.j_id = id;
  };

  $scope.fetch_name = function(name){
    $scope.j_name = name;
  };

});