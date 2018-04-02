import angular              from 'angular'
import ngMap                from 'ngmap'
import uiRouter             from '@uirouter/angularjs'
import { AppComponent }     from './app.component'
import { ComponentsModule } from './components/components.module'

export const AppModule = angular
  .module('app', [
    ngMap,
    uiRouter,
    ComponentsModule
  ])
  .component('app', AppComponent)
  .config(($locationProvider) => {
    'ngInject';
    $locationProvider.html5Mode(true);
  })
  .run(($http) => {
    'ngInject';
    $http.defaults.headers.common['X-Mashape-Key'] = 'l5eMXwY6d3mshmvnljsx6GVH9YWxp1IsKhsjsnSAZ5yXpYiGRl'
  })
  .name