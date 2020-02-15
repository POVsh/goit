"use strict";
import galleryItems from "./gallery-items.js";

const galleryList = document.querySelector(".js-gallery");
const lightbox = document.querySelector(".js-lightbox");

galleryList.addEventListener("click", handleOpenLightbox);
lightbox.addEventListener("click", hendleBtnClick);
lightbox.addEventListener("click", hendleBackGroundClick);
window.addEventListener("keydown", hendleEscape);

function handleOpenLightbox(el) {
  el.preventDefault();
  if (el.target === el.currentTarget) {
    return;
  }
  lightbox.classList.add("is-open");
  lightbox.querySelector(".lightbox__image").src = el.target.dataset.source;
}
function createGalleryItem(arr) {
  const galleryItem = arr.reduce((acc, item) => {
    acc += `<li class="gallery__item"> <a class="gallery__link" href = "${item.original}"> <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/> </a> </li>`;
    return acc;
  }, "");
  galleryList.insertAdjacentHTML("afterbegin", galleryItem);
}

createGalleryItem(galleryItems);

function hendleCloseLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.querySelector(".lightbox__image").src = "";
}

function hendleBtnClick(el) {
  if (
    el.target ===
    el.currentTarget.querySelector('button[data-action="close-lightbox"]')
  ) {
    hendleCloseLightbox(el);
  }
}

function hendleBackGroundClick(el) {
  if (
    el.target ===
    el.currentTarget.querySelector('.lightbox__content')
  ) {
    hendleCloseLightbox(el);
  }
}

function hendleEscape(el) {
  if (el.keyCode !== 27) {
    return;
  }
  hendleCloseLightbox();
}
