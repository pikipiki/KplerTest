var DataService = function($http) {
  this.getData = () => $http.get('https://restcountries-v1.p.mashape.com/all')
  this.fail = (err) => console.log(err.statusText)
  this.list = []
  this.item = null
  this.addList = (value) => {
    this.list.push(value)
  }
  this.getList = () => {
    return this.list
  }
  this.clearList = () => {
    this.list = []
  }
  this.addItem = (value) => {
    this.item = value
  }
  this.getItem = () => {
    return this.item
  }
}

angular
  .module('components')
  .service('DataService', ['$http', DataService])