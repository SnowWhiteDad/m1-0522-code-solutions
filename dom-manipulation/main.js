// addeventlistener to the button
function handleClick(event) {
  $numClicks++;
  // console.log($numClicks);

  $clickCount.textContent = 'Clicks: ' + $numClicks;
  if ($numClicks < 4) {
    $hotButton.className = 'hot-button cold';

  } else if ($numClicks < 7) {
    $hotButton.className = 'hot-button cool';
  } else if ($numClicks < 10 && $numClicks >= 7) {
    $hotButton.className = 'hot-button tepid';
  } else if ($numClicks < 13 && $numClicks >= 10) {
    $hotButton.className = 'hot-button warm';
  } else if ($numClicks < 16 && $numClicks >= 13) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
}

var $numClicks = 0;
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', handleClick);
// console.log($numClicks);
