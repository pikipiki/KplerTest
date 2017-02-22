var CountryListController = function(DataService, $filter) {
  DataService.getData()
    .then(
      (res) => {
        this.data = res.data
        this.totalSum = $filter('sumFilter')(this.item)
      }     
    )
    .catch(DataService.fail)
}

angular
  .module('components.countryList')
  .controller('CountryListController', ['DataService', '$filter', CountryListController])