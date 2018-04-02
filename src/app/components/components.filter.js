export function sumFilter(){
  return function (collection) {
    return collection.reduce((total, population) => {
      return total + population
    })
  }
}