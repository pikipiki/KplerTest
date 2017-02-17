angular
  .module('app', [
    'components'
  ])
  .config(function($locationProvider){
    $locationProvider.html5Mode(true)
  })