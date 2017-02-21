var searchBar = {
  controller: 'SearchBarController',
  templateUrl : 'src/js/components/searchBar/searchBar.html',
  bindings: {
    searchBarValue:"@",
    searchBarChange:"&",
    orderByNameChange:"&",
    orderByPopulationChange:"&"
  }
}

angular
  .module('components.searchBar')
  .component('searchBar', searchBar)