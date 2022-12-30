"use strict";


//FUNCTIONALITY FOR DARK MODE 

const darkMode = document.getElementById('moon');
const lightMode = document.getElementById('sun');
const bgSection = document.getElementById('overall-section');
const todoContainer = document.getElementById('todo');
const searchInput = document.getElementById('search');
const dragAndDropMsg = document.getElementById('d&dmesg');
const mobileDiv = document.querySelector('mobile-div');

function Dark(params) {
    bgSection.classList.remove('bg-mobilelightmode');
    bgSection.classList.remove('lg:bg-lightmode');
    bgSection.classList.add('bg-mobiledarkmode');
    bgSection.classList.add('lg:bg-darkmode');
    darkMode.classList.add('hidden');
    lightMode.classList.remove('hidden');
    todoContainer.classList.remove('bg-white');
    todoContainer.classList.add('bg-vdarkgrayblue');
    document.body.classList.add('bg-blackblue');
    searchInput.classList.remove('bg-white');
    searchInput.classList.add('bg-vdarkgrayblue');
    todoContainer.classList.add('text-white');
    dragAndDropMsg.classList.add('text-white');
    mobileDiv.classList.add('bg-vdarkgrayblue');
}

darkMode.addEventListener(
    'click', Dark
)