// ------ define a function handleClick with one paramenter, event ----
function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

var clickButton = document.querySelector('.click-button');
clickButton.addEventListener('click', handleClick);

// ---- define a function handleMouseover with one paramenter, event ----
function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

var hoverButton = document.querySelector('.hover-button');
hoverButton.addEventListener('mouseover', handleMouseover);

// ---- define a function handleDoubleClick with one paramenter, event ----
function handleDoubleClick(event) {
  console.log('button double clicked');
  console.log(event);
  console.log(event.target);
}

var dblclickButton = document.querySelector('.double-click-button');
dblclickButton.addEventListener('dblclick', handleDoubleClick);
