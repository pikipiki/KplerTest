var CountryListController = function(DataService, $filter) {

  DataService.getData()
    .then(
      (res) => {
        this.data = res.data
        this.totalSum = $filter('sumFilter')(this.item)
      }     
    )
    .catch(DataService.fail)

  this.orderByName = () => {
    this.sort = "name"
    this.reverse = false
  }

  this.orderByPopulation = () => {
    this.sort = "population"
    this.reverse = true
  }
}

angular
  .module('components.countryList')
  .controller('CountryListController', ['DataService', '$filter', CountryListController])