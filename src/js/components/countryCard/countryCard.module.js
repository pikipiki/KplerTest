angular
  .module('components.countryCard', ['ui.router'])
  .config(function($stateProvider){
    $stateProvider
      .state('countryCard', {
        url: '/',
        component: 'countryCard'
      })
  })