var ContainerController = function() {
  this.changeParentSearchValue = (value) => {
    this.search = value
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
  .controller('ContainerController', ContainerController)