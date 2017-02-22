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
}

angular
  .module('components.container')
  .controller('ContainerController', ContainerController)