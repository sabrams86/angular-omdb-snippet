var app = angular.module('omdbApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home',
      controller: 'HomeController'
    })
    .when('/:movieId', {
      templateUrl: 'partials/show',
      controller: 'ShowController'
    })
    .otherwise({redirectTo: '/'});
})
