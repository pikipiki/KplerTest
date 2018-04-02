export class DataService {
  constructor($http) {
    'ngInject';
    this.http = $http
  }
  get() {
    return this.http.get(
      'https://restcountries-v1.p.mashape.com/all'
    ).then((response) => {
      return response.data
    })
  } 
}