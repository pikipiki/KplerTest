var ContainerController = function(DataService) {
  this.changeParentSearchValue = (value) => {
    this.search = value
    this.filteredcountry = DataService.getList()
  }
  this.changeParentSortBy = (name, reverse) => {
    this.sort = {
      name: name,
      reverse: reverse
    }
  }
  this.changeParentCountryLatlagAndZoomValue = (latlng) => {
    this.countryLatlagAndZoomValue = {
      countryLatlag: latlng,
      zoomValue: 8
    }
  }
}

angular
  .module('components.container')
  .controller('ContainerController', ['DataService', ContainerController])