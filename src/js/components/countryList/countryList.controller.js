var CountryListController = function(DataService) {

  DataService.getData()
    .then(
      (res) => {
        this.data = res.data
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
  .controller('CountryListController', ['DataService', CountryListController])