var googleMapMarker = {
  controller: 'GoogleMapMarkerController',
  templateUrl: 'src/app/components/googleMapMarker/googleMapMarker.html',
  bindings: {
    countryLatlag:"<",
    filteredCountry:"<"
  }
}

angular
  .module('components.googleMapMarker')
  .component('googleMapMarker', googleMapMarker)