function handleClick(event) {
  var $currentBgClass = $circleBulb.className;

  if ($currentBgClass === 'bulb-wrapper dark-grey') {
    $mainBkGrnd.className = 'light-yellow';
    $circleBulb.className = 'bulb-wrapper bulb-yellow';
  } else if ($currentBgClass === 'bulb-wrapper bulb-yellow') {
    $mainBkGrnd.className = 'black';
    $circleBulb.className = 'bulb-wrapper dark-grey';
  }
}

var $circleBulb = document.querySelector('.bulb-wrapper');
var $mainBkGrnd = document.getElementById('main-bkgrnd');

$circleBulb.addEventListener('click', handleClick);
