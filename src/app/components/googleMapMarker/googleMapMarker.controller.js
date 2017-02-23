var GoogleMapMarkerController = function(NgMap, DataService) {
  this.$onInit = () => {
    this.countryLatlag = {
    "countryLatlag":
      {
        "latlng":[40.74,-74.18]
      },
    "zoomValue":2
    }
  }
  NgMap.getMap()
  DataService.getData()
    .then(
      (res) => {
        this.filteredCountry = res.data
      }     
    )
    .catch(DataService.fail) 
}

angular
  .module('components.googleMapMarker')
  .controller('GoogleMapMarkerController', ['NgMap', 'DataService', GoogleMapMarkerController])