angular
  .module('app', [
    'components',
    'ngMap'
  ])
  .run(['$http', function($http){
    $http.defaults.headers.common['X-Mashape-Key'] = 'l5eMXwY6d3mshmvnljsx6GVH9YWxp1IsKhsjsnSAZ5yXpYiGRl'
  }])