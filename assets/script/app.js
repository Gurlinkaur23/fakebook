'use strict';

// Imports
import { onEvent, select } from './utils.js';
import User, { Subscriber } from './Class.js';

// Selections
const inputText = select('.input-text');
const profileImg = select('.profile-img');
const fileInput = select('#file-input');
const fileInputName = select('.file-input-name');
const btnPost = select('.btn-post');
const posts = select('.posts');
const modal = select('.modal');
const overlay = select('.overlay');
const btnCloseModal = select('.close-modal');
const userInfo = select('.user-info');

/* - - - - - - Main code - - - - - - - */

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const subscriber = new Subscriber(
  4540,
  'Gurlin Kaur',
  'gurlinkaur01',
  'gurlinkaur@gmail.com',
  ['Sarcastic Us', 'Fun with Coding'],
  ['Coders', 'Badminton Squad'],
  true
);

// Function to create date
function getDate() {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  return `${months[month].slice(0, 3)} ${day}, ${year}`;
}

// Function to create a post element
function createPost(text, image) {
  if (text.length > 0 || image) {
    const userPost = document.createElement('div');
    userPost.classList.add('post');

    // Create HTML for post header
    userPost.innerHTML = `
    <header class="post-header">
    <figure><img src="./assets/img/profile-img.webp"></figure>
    <div class="user-name"><p>${subscriber.name}</p></div>
    <div class="date">${getDate()}</div>
    </header>
    <div class="post-text"><p>${text}</p></div>
    `;

    if (image) {
      userPost.innerHTML += `<div class="post-img-div"><img class="post-img" src="${image}"></div>`;
    }

    posts.prepend(userPost);

    // Clear the input fields
    fileInputName.innerText = '';
    inputText.value = '';
  } else {
    inputText.value = 'Add text or image or both to create a new post :)';
    setTimeout(() => {
      inputText.value = '';
    }, 2000);
  }
}

// Modal functions
function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  userInfo.innerText = subscriber.getInfo();
}

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

/* - - - - - - Events - - - - - - - */

// Display selected file name
onEvent('change', fileInput, event => {
  const fileName = event.target.files[0].name;
  const fileURL = URL.createObjectURL(event.target.files[0]);

  fileInputName.innerText = fileName;
  fileInputName.dataset.url = fileURL;
});

// Add posts
onEvent('click', btnPost, function (event) {
  event.preventDefault();

  createPost(inputText.value, fileInputName.dataset.url);
});

// Open modal
onEvent('click', profileImg, () => {
  openModal();
});

// Close modal
onEvent('click', btnCloseModal, () => {
  closeModal();
});
