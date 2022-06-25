
var $correctPress = 0;
var $numPress = 0;
var $trainingText = document.getElementsByTagName('span');
$trainingText[$correctPress].className = 'underline';

var $hiddenDiv = document.querySelector('.hidden-div');
var $completed = false;

document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(event) {
  $numPress++;
  if (!$completed) {

    if ($correctPress < $trainingText.length && event.key === $trainingText[$correctPress].textContent) {
      $trainingText[$correctPress].className = 'green-text';
      $correctPress++;
      if ($correctPress < $trainingText.length) {
        $trainingText[$correctPress].className = 'underline';
      } else {
        var typingAccuracy = 'Your typing accuracy is ' + Math.round($correctPress / ($numPress) * 100) + '%.' + '\n Would you like to play again?';
        splashScreen(typingAccuracy);
      }

    } else if ($correctPress < $trainingText.length && event.key !== $trainingText[$correctPress].textContent) {
      $trainingText[$correctPress].className = 'red-text';
    } /* else {
      var $typingAccuracy = Math.round($correctPress / ($numPress - 1) * 100);

      var typingAccuracy = 'Your typing accuracy is ' + $typingAccuracy + '%.' + '\n Would you like to play again?';
      $completed = true;
      splashScreen(typingAccuracy);

    } */
  }
}

function splashScreen(typingAccuracy) {
  while ($hiddenDiv.className === 'hidden-div') {

    $hiddenDiv.className += ' size-out';

    var $modalDiv = document.querySelector('.modal-div');
    var $btnDiv = document.createElement('div');
    var $txtDiv = document.createElement('div');

    var $txt = document.createElement('h3');
    var $btn1 = document.createElement('button');
    var $btn2 = document.createElement('button');
    $btn1.appendChild(document.createTextNode('YES'));
    $btn2.appendChild(document.createTextNode('NO'));
    $btnDiv.appendChild($btn1);
    $btnDiv.appendChild($btn2);
    $txt.appendChild(document.createTextNode(typingAccuracy));
    $txtDiv.appendChild($txt);
    $modalDiv.appendChild($txtDiv);
    $modalDiv.appendChild($btnDiv);
    $modalDiv.className += ' modal-size';
    $txtDiv.className = 'modal-text-div';
    $btnDiv.className = 'modal-button-div';
    $btn1.className = 'modal-button1';
    $btn2.className = 'modal-button2';
    $txt.className = 'modal-text';

    $btn2.addEventListener('click', modalhandleClick2);
    $btn1.addEventListener('click', modalhandleClick1);
  }
}

function modalhandleClick1() {
  var $modalDiv = document.querySelector('.modal-div');
  var newElement = document.querySelector('.modal-text-div');
  $modalDiv.removeChild(newElement);
  newElement = document.querySelector('.modal-button-div');
  $modalDiv.removeChild(newElement);
  $modalDiv.className = 'modal-div';
  $hiddenDiv.className = 'hidden-div';
  for (var i = 0; i < $trainingText.length; i++) {
    $trainingText[i].className = '';
  }
  $correctPress = 0; $numPress = 0; $completed = false;
  $trainingText[$correctPress].className = 'underline';
  document.addEventListener('keydown', handleKeyPress);
}

function modalhandleClick2() {
  var $modalDiv = document.querySelector('.modal-div');
  var newElement = document.querySelector('.modal-text');
  newElement.textContent = 'You can now close the window or refresh this page.';
  newElement = document.querySelector('.modal-button-div');
  $modalDiv.removeChild(newElement);
}
