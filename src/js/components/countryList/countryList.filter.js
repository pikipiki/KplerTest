function sumFilter() {
  return function(data){
    if (typeof data != "undefined"){
      let populationSum = 0
      for (country of data){
        populationSum += country.population
      }
      return populationSum/data.length
    }
  }
}

angular
  .module('components.countryList')
  .filter('sumFilter', sumFilter)