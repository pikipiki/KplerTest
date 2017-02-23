var countryCard = {
  controller: 'CountryCardController',
  templateUrl : 'src/app/components/countryCard/countryCard.html',
  bindings: {
    country: "<"
  },
  require:{
    grandparent: '^^container'
  }
}

angular
  .module('components.countryCard')
  .component('countryCard', countryCard)