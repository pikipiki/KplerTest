export const CountriesComponent = {
  bindings: {
    countries: '<',
    onZoom: '&',
  },
  template: `
    Number total of people : {{ $ctrl.totalPopulation }}
    <ol>
      <li ng-repeat='country in $ctrl.countries'>
        <country
          country='country'
          on-zoom='$ctrl.onZoom($locals)'>
        </country>
      </li>
    </ol>
  `,
  controller : class CountriesController {
    constructor($filter){
      'ngInject';
      this.filter = $filter
    }
    $onChanges(changes) {
      if (changes.countries.isFirstChange()) return
      if (changes.countries) {
        this.countries = angular.copy(this.countries)
        this.populationsArr = this.countries.map((country) => {
          return country.population
        })
        this.totalPopulation = this.filter('sumFilter')(this.populationsArr)
      }
    }
  }
}