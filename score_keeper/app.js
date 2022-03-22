const playTo = document.querySelector('form').value;
const p1PlusOne = document.querySelector('#p1add');
const p2PlusOne = document.querySelector('#p2add');
const p1score = document.querySelector('#p1score');
const p2score = document.querySelector('#p2score');
const reset = document.querySelector('#reset');

p1PlusOne.addEventListener('click', function(e) {
  p1score.innerText = parseInt(p1score.innerText) + 1;
});

p2PlusOne.addEventListener('click', function() {
  p2score.innerText = parseInt(p2score.innerText) + 1;
});

reset.addEventListener('click', function() {
  p1score.innerText = "0";
  p2score.innerText = "0";

});