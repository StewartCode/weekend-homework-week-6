const bleep = new Audio();
bleep.src = '1.1mp3';
let counter;
if (counter === 1) {
  var bool = false;
}

function loadContent() {
  if (bool === true) {
    bleep.play();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('lets go2');



  const pushWhenComplete = document.querySelector('#whole-form');
  pushWhenComplete.addEventListener('submit', notSureWhatToCallThis);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', deleteAllOption);
})

const deleteAllOption = function(event) {
   bool = false;
  const dataPoint = document.querySelector('#data-point');
  dataPoint.innerHTML = '';
}

const handleDeleteAllClick = function(event) {
  const readingList = document.querySelector('#reading-list');
  readingList.innerHTML = '';
}

const notSureWhatToCallThis = function(event) {
  bool = true;
  event.preventDefault();
  const readingListItem = createReadingListItem(event.target);
  const readingList = document.querySelector('#data-point');
  readingList.appendChild(readingListItem);
  event.target.reset();
}

const createReadingListItem = function(form) {
  bleep.play();
  const readingListItem = document.createElement('li');
  readingListItem.classList.add('chickens')

  const name = document.createElement('h4');
  name.textContent = form.name.value;
  readingListItem.appendChild(name);

  const age = document.createElement('h4');
  age.textContent = form.age.value;
  readingListItem.appendChild(age);

  const gender = document.createElement('p');
  gender.textContent = form.gender.value;
  readingListItem.appendChild(gender);

  const guns = document.createElement('h1');
  guns.textContent = form.guns.value;
  readingListItem.appendChild(guns);

  return readingListItem;


}
