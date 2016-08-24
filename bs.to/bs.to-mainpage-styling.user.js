// ==UserScript==
// @name         bs.to-mainpage-styling
// @namespace    https://github.com/Sly321/bs.to-startseite-serien
// @author       Sly321
// @description  Styling für die Main Page.
// @include      https://bs.to/
// @include      https://bs.to/settings/series
// @icon         https://s.bs.to/favicon.ico
// @version      1.0
// @updateURL    https://raw.githubusercontent.com/Sly321/bs.to-startseite-serien/master/bs.to/bs.to-mainpage-styling.user.js
// @require		 https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js
// @grant        unsafeWindow
// ==/UserScript==

(function() {
    'use strict';

    function addGlobalStyle(css) {
		var head, style;
		head = document.getElementsByTagName('head')[0];
		if (!head) { return; }
		style = document.createElement('style');
		style.type = 'text/css';
		style.innerHTML = css;
		head.appendChild(style);
	}
	addGlobalStyle("a.nav-link { text-decoration: none; transition: all 0.5s ease; } a.nav-link:hover { box-shadow: inset 0px -10px 15px -10px #1b70d2; border-bottom: 1px solid #2a8af8; }");
	addGlobalStyle(".navigation-panel > label { position: absolute; }");
	addGlobalStyle(".navigation-panel > .label-Favoriten { top: 30px; left: 6px; }");
	addGlobalStyle(".navigation-panel > .label-Serien { top: 48px; left: 6px; }");
	addGlobalStyle(".navigation-panel > .label-Sitcoms { top: 66px; left: 6px; }");
	addGlobalStyle(".navigation-panel > .label-Upcoming { top: 84px; left: 6px; }");
	addGlobalStyle(".navigation-panel > .label-Finished { top: 102px; left: 6px; }");
	addGlobalStyle(".navigation-panel > .label-Anime { top: 30px; right: 6px; }");
	addGlobalStyle(".navigation-panel > .label-Season-2016 { top: 48px; right: 6px; }");
	addGlobalStyle(".navigation-panel > .label-Classics { top: 66px; right: 6px; }");
	addGlobalStyle(".navigation-panel > .label-Anime-Finished { top: 84px; right: 6px; }");
})();