var countryCard = {
  templateUrl : 'src/js/components/countryCard/countryCard.html',
  bindings: {
    country: '<'
  }
}

angular
  .module('components.countryCard')
  .component('countryCard', countryCard)