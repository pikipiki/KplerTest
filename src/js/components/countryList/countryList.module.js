angular
  .module('components.countryList', ['ui.router'])
  .config(function($stateProvider){
    $stateProvider
      .state('countryList', {
        url: '/',
        component: 'countryList'
      })
  })
  .run(function($http){
    $http.defaults.headers.common['X-Mashape-Key'] = 'l5eMXwY6d3mshmvnljsx6GVH9YWxp1IsKhsjsnSAZ5yXpYiGRl'
  })