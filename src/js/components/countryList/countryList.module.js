angular
  .module('components.countryList', ['ui.router'])
  .config(function($stateProvider){
    $stateProvider
      .state('countryList', {
        url: '/',
        component: 'countryList'
      })
  })