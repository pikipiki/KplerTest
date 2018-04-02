export const CountryComponent = {
  bindings: {
    country: '<',
    onZoom: '&'
  },
  template: `
    <button ng-click='$ctrl.onZoom(
      { $event: 
        { latlng: $ctrl.country.latlng } 
      }
    )'>
      Zoom
    </button>
    {{ $ctrl.country.name | json}},
    {{ $ctrl.country.capital | json}}, 
    {{ $ctrl.country.area | json}},
    {{ $ctrl.country.languages | json}},
    {{ $ctrl.country.population | json}} people
    <br></br>
  `,
  controller: class CountryController {
    $onChanges(changes) {
      if (changes.country) {
        this.country = angular.copy(this.country)
      }
    }
  }
}