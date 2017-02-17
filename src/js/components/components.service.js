var DataService = function($http) {
  this.getData = () => $http.get('https://restcountries-v1.p.mashape.com/all')
  this.fail = (err) => console.log(err.statusText)
}

angular
  .module('components')
  .service('DataService', ['$http', DataService])