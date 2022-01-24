// ==UserScript==
// @name         Toggle Dark Light Mode
// @namespace    http://tampermonkey.net/
// @version      2.0
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

    //create toggle switch
    let toggleBtn = document.createElement('input');
    toggleBtn.setAttribute('type', 'checkbox');
    body.appendChild(toggleBtn);
    toggleBtn.style.color = 'black';
    toggleBtn.style.position = 'absolute';
    toggleBtn.style.top = '0px';
    toggleBtn.style.zIndex = "99";


    let handleToggle = (event)=> {
        if (toggleBtn.checked) {
            //turns bg black and text white including anchor tags
            for (let elem of allElem) {
                elem.style.backgroundColor = 'black';
                elem.style.color = 'white';
            }
            //loop through all anchor tags change to light blue
            for (let anchor of anchorTags) {
                if (anchor.value !== "") {
                    anchor.style.color = "#ADD8E6";
                }
            }
        } else {
            //turns bg black and text white including anchor tags
            for (let elem of allElem) {
                elem.style.backgroundColor = 'white';
                elem.style.color = "black";
            }
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
