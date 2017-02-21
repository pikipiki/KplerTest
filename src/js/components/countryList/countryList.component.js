var countryList = {
  controller: 'CountryListController',
  templateUrl: 'src/js/components/countryList/countryList.html',
  bindings: {
    searchBarValue:"@",
    sortByName:"<",
    orderReverse:"<"
  }
}

angular
  .module('components.countryList')
  .component('countryList', countryList)