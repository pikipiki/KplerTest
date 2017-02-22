var CountryCardController = function(DataService) {
  this.saveCountryToService = (country) => {
    DataService.addItem(country)
    console.log(DataService.getItem())
  }
}

angular
  .module('components.countryCard')
  .controller('CountryCardController', ['DataService', CountryCardController])