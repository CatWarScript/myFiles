// ==UserScript==
// @name         Баголовилочка
// @version      1.0
// @description  Баголовилочка ловит баги (инструмент чтобы достать все данные из localStorage)
// @author       ScriptTeam
// @copyright    2024 ScriptTeam (https://vk.com/cwscript)
// @license      MIT; https://opensource.org/licenses/MIT
// @updateURL    none
// @downloadURL  none
// @match        *://catwar.su/*
// @grant        GM_xmlhttpRequest
// @grant        GM.xmlHttpRequest
// @grant        GM_addStyle
// @require      https://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

$(document).ready(function(){
  (function() {
    const keys = Object.keys(localStorage);
    const localStorageData = [];
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const value = localStorage.getItem(key);
      localStorageData.push({ key, value });
    }
    const input = document.createElement('input');
    const jsonData = JSON.stringify(localStorageData, null, 2);
    input.value = jsonData;
    document.body.appendChild(input);
  })();
})
