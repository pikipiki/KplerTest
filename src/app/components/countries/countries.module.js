import { CountriesComponent } from './countries.component'

export const CountriesModule = angular
  .module('countries', [])
  .component('countries', CountriesComponent)
  .name