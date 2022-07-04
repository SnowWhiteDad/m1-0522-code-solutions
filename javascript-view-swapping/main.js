// query DOM for the .tab-container element
var $tabContainer = document.querySelector('.tab-container');
// query DOM for all .tab elements
var $tabs = document.querySelectorAll('.tab');
// query DOM for all .view elements
var $tabView = document.querySelectorAll('.view');
// add event listener to the tabContainer object
$tabContainer.addEventListener('click', function (event) {
  // if the event.target matches the .tab class
  if (event.target.matches('div.tab')) {
    // loop through the $tabs variable
    for (var i = 0; i < $tabs.length; i++) {
      // if the event.target matches the current $tabs[i]
      if ($tabs[i] === event.target) {
        // add the .active class to the current $tabs[i]
        $tabs[i].className = $tabs[i].className + ' active';
        // set the className of the current $tabView[i] to 'view'
        $tabView[i].className = 'view';
        // continue the loop
        continue;
      }
      // otherwise, remove the .active class from the current $tabs[i]
      $tabs[i].className = 'tab';
      // set the className of the current $tabView[i] to 'view hidden'
      $tabView[i].className = 'view hidden';
    }
  }
});
