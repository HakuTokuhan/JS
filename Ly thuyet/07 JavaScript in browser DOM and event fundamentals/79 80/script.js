'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const bntCloseModal = document.querySelector('.close-modal');
const bntsOpenModal = document.querySelectorAll('.open-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < bntsOpenModal.length; i++)
  bntsOpenModal[i].addEventListener('click', openModal);

bntCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
