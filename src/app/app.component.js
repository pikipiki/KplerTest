export const AppComponent = {
  template : `
    <div class='app'>
      <a 
        ui-sref='container' ui-sref-active='active'>Go to Container Page</a>
      <ui-view></ui-view>
    </div>
  `
}