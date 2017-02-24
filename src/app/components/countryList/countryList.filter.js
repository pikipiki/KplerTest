function sumFilter(DataService) {
  return function(data){
    if (typeof data != "undefined"){
      let populationSum = 0
      DataService.clearList()
      for (let country of data){
        populationSum += country.population
        DataService.addList(country)
      }
      return populationSum/data.length
    }
  }
}

angular
  .module('components.countryList')
  .filter('sumFilter',['DataService', sumFilter])