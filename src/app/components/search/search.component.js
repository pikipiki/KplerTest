export const SearchComponent = {
  bindings: {
    name: '@',
    onSearch: '&',
    onOrderByName: '&',
    onOrderByPopulation: '&'
  },
  template:` 
    <input 
    type='text' 
    ng-model='$ctrl.searchText'
    ng-change='$ctrl.onSearch(
      {
        $event:
          { name : $ctrl.searchText }
      }
    )'></input>

    <button ng-click='$ctrl.onOrderByPopulation()'>
      Order by population
    </button>

    <button ng-click='$ctrl.onOrderByName()'>
      Order by alphabetic
    </button>
    <br></br>    
  `,
  controller: class SearchController {
    $onChanges(changes) {
      if (changes.name) {
        this.name = angular.copy(this.name)
      }
    }
  }
}