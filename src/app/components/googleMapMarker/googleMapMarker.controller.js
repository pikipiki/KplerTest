var GoogleMapMarkerController = function(NgMap, DataService) {
  NgMap.getMap()
  DataService.getData()
    .then(
      (res) => {
        this.country = DataService.getList()
      }     
    )
    .catch(DataService.fail) 
}

angular
  .module('components.googleMapMarker')
  .controller('GoogleMapMarkerController', ['NgMap', 'DataService', GoogleMapMarkerController])