// ==UserScript==
// @name        GM-MakeMyTripNonStopFilter
// @namespace   https://github.com/pbvirus
// @description Checks the non-stop filter in the flight search results page
// @author      Prince Biswaranjan
// @homepage    https://github.com/prince-biswaranjan/GM-MakeMyTripNonStopFilter/
// @version     1.1.0
// @grant       none
// @include     https://www.makemytrip.com/flight/search?*
// @run-at      document-end
// ==/UserScript==

"use strict";

function checkNonStopFilter() {
    let filterSections = document.getElementsByClassName('filtersOuter');
    let stopsFilter = filterSections[3].getElementsByTagName('input');
    let nonStopFilter = stopsFilter[0];
    if(!nonStopFilter.checked){
        nonStopFilter.click();
    }
}

window.setInterval(checkNonStopFilter, 5 * 1000);
