// ==UserScript==
// @name         Toggle Dark Light Mode
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Change DOM text to black or white
// @author       Clinton Cregger
// @match        https://surfersconnect.com/*
// @icon         https://www.google.com/s2/favicons?domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //variables
    let body = document.querySelector('body');
    let anchorTags = document.querySelectorAll('a');

    //create toggle switch
    let toggleBtn = document.createElement('input');
    toggleBtn.setAttribute('type', 'checkbox');
    toggleBtn.textContent = "Dark Mode Toggle";
    body.appendChild(toggleBtn);

    let handleToggle = (event)=> {
        if (toggleBtn.checked) {
            //turns bg black and text white including anchor tags
            body.style.color = "white";
            body.style.backgroundColor = "black";
            //loop through all anchor tags change to light blue
            for (let anchor of anchorTags) {
                if (anchor.value !== "") {
                    anchor.style.color = "#ADD8E6";
                }
            }
        } else {
            //turns bg black and text white including anchor tags
            body.style.color = "black";
            body.style.backgroundColor = "white";
            //loop through all anchor tags change to light blue
            for (let anchor of anchorTags) {
                if (anchor.value !== "") {
                    anchor.style.color = "blue";
                }
            }
        }

    }

    //listen for click event on button
    document.addEventListener('click', handleToggle);

})();
