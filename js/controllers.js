app.controller('HomeController', ['$scope', '$http', '$location', function ($scope, $http, $location) {
  $scope.movieSearch = function () {
    $http.get('http://www.omdbapi.com/?s='+$scope.title).then(function (results) {
      $scope.results = results.data.Search;
      $location.path('/');
    }, function (err) {
      console.log(err);
      $scope.results = ["Could not connect to the database, please try again"];
    })
  }

}]);

app.controller('ShowController', ['$scope', '$routeParams', '$http', '$location', function ($scope, $routeParams, $http, $location) {
  $scope.test = 'asdf';
  $http.get('http://www.omdbapi.com/?i='+$routeParams.movieId+"&tomatoes=true").then(function (result) {
    $scope.info = result.data;
  }, function (err) {
    console.log(err);
    $location.path('/');
  })
}]);
