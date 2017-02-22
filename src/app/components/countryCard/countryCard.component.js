var countryCard = {
  controller: 'CountryCardController',
  templateUrl : 'src/app/components/countryCard/countryCard.html',
  bindings: {
    country: "<"
  }
}

angular
  .module('components.countryCard')
  .component('countryCard', countryCard)