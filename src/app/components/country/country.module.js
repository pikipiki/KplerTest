import { CountryComponent } from './country.component'

export const CountryModule = angular
  .module('country', [])
  .component('country', CountryComponent)
  .name