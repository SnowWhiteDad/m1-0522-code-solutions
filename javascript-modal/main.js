
var $defaultButton = document.querySelector('.default-button');
var $hiddenDiv = document.querySelector('.hidden-div');

$defaultButton.addEventListener('click', defaulthandleClick);

function defaulthandleClick(event) {
  // check if className for $hiddenDiv is 'hidden-div'
  while ($hiddenDiv.className === 'hidden-div') {
    // create new elements for the hidden div
    // add siz-out class to the className
    $hiddenDiv.className += ' size-out';
    // add two div elementsto modal-div
    var $modalDiv = document.querySelector('.modal-div');
    var $btnDiv = document.createElement('div');
    var $txtDiv = document.createElement('div');
    // add h3 element to first div, and button element to the second div
    var $txt = document.createElement('h3');
    var $btn = document.createElement('button');
    $btn.appendChild(document.createTextNode('NO'));
    $btnDiv.appendChild($btn);
    $txt.appendChild(document.createTextNode('Would you like to take a survey?'));
    $txtDiv.appendChild($txt);
    $modalDiv.appendChild($txtDiv);
    $modalDiv.appendChild($btnDiv);
    $modalDiv.className += ' modal-size';
    $txtDiv.className = 'modal-text-div';
    $btnDiv.className = 'modal-button-div';
    $btn.className = 'modal-button';
    $txt.className = 'modal-text';
    // add an event listener to the new button element
    $btn.addEventListener('click', modalhandleClick);
  }
}

function modalhandleClick() {

  var $modalDiv = document.querySelector('.modal-div');
  var newElement = document.querySelector('.modal-text-div');
  $modalDiv.removeChild(newElement);
  newElement = document.querySelector('.modal-button-div');
  $modalDiv.removeChild(newElement);
  $modalDiv.className = 'modal-div';
  $hiddenDiv.className = 'hidden-div';
}
