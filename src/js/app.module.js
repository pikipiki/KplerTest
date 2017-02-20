angular
  .module('app', [
    'components'
  ])
  .config(function($locationProvider){
    $locationProvider.html5Mode(true)
  })
  .run(function($http){
    $http.defaults.headers.common['X-Mashape-Key'] = 'l5eMXwY6d3mshmvnljsx6GVH9YWxp1IsKhsjsnSAZ5yXpYiGRl'
  })