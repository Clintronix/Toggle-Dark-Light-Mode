// ==UserScript==
// @name         Toggle Dark Light Mode
// @namespace    http://tampermonkey.net/
// @version      2.2 - Updated Input
// @description  Change DOM text to black or white
// @author       Clinton Cregger
// @match        http*://*.com/*
// @icon         https://www.google.com/s2/favicons?domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //variables
    let body = document.querySelector('body');
    let allElem = document.querySelectorAll('*');
    let anchorTags = document.querySelectorAll('a');


    const style = document.createElement('style');
    const app = document.querySelector('#app');
    //create label
    const label = document.createElement('label');
    label.classList.add('switch');
    body.append(label);
    const btn = document.querySelector('.switch');

    btn.innerHTML = `<input type="checkbox">
         <span class="slider round"></span>`;
    let toggleBtn = document.querySelector('.switch input');



//add CSS to toggle switch
    style.innerHTML = `
      .switch {
      position: -webkit-sticky;
  position: fixed;
  top: 100px;
  right: 0;
  display: inline-block;
  width: 60px;
  height: 34px;
  z-index: 99999;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
    `;


document.head.appendChild(style);

    let handleToggle = (event)=> {
        if (toggleBtn.checked) {
            //turns bg black and text white including anchor tags
            for (let elem of allElem) {
                if (elem.nodeName === 'IMG') return;
                elem.style.backgroundColor = 'black';
                if (!elem.value === '') return;
                elem.style.color = 'white';
            }
            //loop through all anchor tags change to light blue
            for (let anchor of anchorTags) {
                if (!anchor.value) {
                    anchor.style.color = "#ADD8E6";
                }
            }
        } else {
            //set style to nothing
            for (let elem of allElem) {
                elem.style.backgroundColor = '';
                elem.style.color = '';
            }
            //loop through all anchor tags change to light blue
            for (let anchor of anchorTags) {
                if (!anchor.value) {
                    anchor.style.color = '';
                }
            }
        }

    }
    //listen for click event on button
    toggleBtn.addEventListener('click', handleToggle);

})();
