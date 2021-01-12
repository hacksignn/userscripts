// ==UserScript==
// @name        TH Adidas colorful badge
// @description Color the badge to make it easy to see.
// @author      hacksignn
// @copyright   hacksignn
// @version     1.0
// @namespace   https://github.com/hacksignn/userscripts
// @license     GPL: https://www.gnu.org/copyleft/gpl.html
// @match       https://www.adidas.co.th/*
// @require     https://code.jquery.com/jquery-3.2.1.min.js
// @grant       GM_addStyle
// @grant       GM_setValue
// @grant       GM_getValue
// @run-at      document-start
// ==/UserScript==

// add color to out-of-stock and on-sale badge
GM_addStyle ( `
    .gl-badge--inactive {
        background-color: red !important;
        color: white !important;
    }

    .gl-badge--urgent {
        background-color: yellow !important;
        color: black !important;
    }
` );