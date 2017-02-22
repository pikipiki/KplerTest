var countryList = {
  controller: 'CountryListController',
  templateUrl: 'src/app/components/countryList/countryList.html',
  bindings: {
    searchBarValue:"@",
    sortByName:"<",
    orderReverse:"<"
  }
}

angular
  .module('components.countryList')
  .component('countryList', countryList)