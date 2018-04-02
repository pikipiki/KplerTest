export const ContainerComponent = {
  template:`
    <div class='search'>

      <search
        on-search='$ctrl.search($event)'
        on-order-by-population='$ctrl.orderByPopulation()'
        on-order-by-name='$ctrl.orderByName()'
        countries='$ctrl.countries'></search>

    </div>

    <div class='google-map'>

      <google-map
        countries='$ctrl.filteredCountries'
        country-centered-on='{{ $ctrl.countryLatlng }}'
        on-zoom='{{ $ctrl.zoom }}'
        ><google-map>

    </div>


    <div class='countries'>

      <countries
        countries='$ctrl.filteredCountries'
        on-zoom='$ctrl.displayCountry($event)'
        ></countries>

    </div>
  `,
  controller: class ContainerController {
    constructor(DataService, $filter) {
      this.dataService = DataService
      this.filter = $filter
    }
    $onInit() {
      this.dataService.get()
        .then((countriesData) => {
          this.countries = countriesData
          this.filteredCountries = countriesData
        }) 
    }
    orderByName() {
      this.filteredCountries = this.filter('orderBy')(this.filteredCountries, 'name')
    }
    orderByPopulation() {
      this.filteredCountries = this.filter('orderBy')(this.filteredCountries, '-population')
    }
    search({ name }) {
      this.filteredCountries = this.countries.filter((country) => {
        return country.name.toLowerCase().startsWith(name.toLowerCase())
      })
    }
    displayCountry({ latlng }) {
      this.countryLatlng = latlng
      this.zoom = 5
    }
  }
}