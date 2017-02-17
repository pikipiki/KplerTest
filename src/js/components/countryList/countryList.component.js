var countryList = {
  controller: 'CountryListController',
  templateUrl : 'src/js/components/countryList/countryList.html'
}

angular
  .module('components.countryList')
  .component('countryList', countryList)