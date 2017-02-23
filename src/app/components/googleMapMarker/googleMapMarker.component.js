var googleMapMarker = {
  controller: 'GoogleMapMarkerController',
  templateUrl: 'src/app/components/googleMapMarker/googleMapMarker.html',
  bindings: {
    countryLatlag:"<"
  }
}

angular
  .module('components.googleMapMarker')
  .component('googleMapMarker', googleMapMarker)