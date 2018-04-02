import uiRouter from '@uirouter/angularjs'
import { ContainerComponent } from './container.component'
import { DataService } from './container.service.js'

export const ContainerModule = angular
  .module('container', [
    uiRouter
  ])
  .component('container', ContainerComponent)
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
      .state('container', {
        url: '/app',
        component: 'container'
      })
  })
  .service('DataService', DataService)
  .name