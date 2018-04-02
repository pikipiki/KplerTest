import { ContainerModule } from './container/container.module'
import { CountriesModule } from './countries/countries.module'
import { CountryModule }   from './country/country.module'
import { GoogleMapModule } from './googleMap/googleMap.module'
import { SearchModule }    from './search/search.module'
import { sumFilter }       from './components.filter'

export const ComponentsModule = angular
  .module('components', [
    ContainerModule,
    CountriesModule,
    CountryModule,
    GoogleMapModule,
    SearchModule
  ])
  .filter({ sumFilter })
  .name