export const GoogleMapComponent = {
  bindings: {
    countries: '<',
    countryCenteredOn: '@',
    onZoom:'@'
  },
  template: `
    <ng-map
      zoom='{{ $ctrl.onZoom }}'
      center='{{ $ctrl.countryCenteredOn }}'>
      <marker 
        ng-repeat='country in $ctrl.countries'
        position='{{ country.latlng }}'>
      </marker>
    </ng-map>
  `,
  controller: class GoogleMapController {
    $onInit() {
      this.countryCenteredOn = [46, 2]
      this.onZoom = 1
    }
    $onChanges(changes) {
      if (changes.countries) {
        this.countries = angular.copy(this.countries)
      }
      if (changes.countryCenteredOn) {
        this.countryCenteredOn = angular.copy(this.countryCenteredOn)
      }
      if (changes.onZoom){
        this.onZoom = angular.copy(this.onZoom)
      }
    }
  }
}