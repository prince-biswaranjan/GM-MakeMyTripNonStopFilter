// ==UserScript==
// @name        GM-MakeMyTripNonStopFilter
// @namespace   https://github.com/pbvirus
// @description Checks the non-stop filter in the flight search results page
// @author      Prince Biswaranjan
// @homepage    <Homepage URL>
// @version     1.0.0
// @grant       none
// @include     https://www.makemytrip.com/flight/search?*
// @run-at      document-end
// ==/UserScript==

"use strict";

function checkNonStopFilter() {
    let filterSections = document.getElementsByClassName('filtersOuter');
    let stopsFilter = filterSections[3].getElementsByTagName('listingFilterCheckbox');
    let nonStopFilter = stopsFilter[0];
    nonStopFilter.click();
}

window.addEventListener('load', () => {
    checkNonStopFilter();
});
