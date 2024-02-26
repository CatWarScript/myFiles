// ==UserScript==
// @name         С любовью для Пихуши
// @version      1.0
// @description  Я так тебя люблю на самом деле, солнышко
// @author       Krivodushie
// @copyright    2024 Дурное Сновидение (https://catwar.su/cat1293224)
// @match        *://catwar.su/*
// @grant        GM_xmlhttpRequest
// @grant        GM.xmlHttpRequest
// @grant        GM_addStyle
// @require      https://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

const defaultSets = {
    'costumeDelay': true
}

const globals = {};
for (var key in defaultSets) {
  let settings = getSettings(key);
  if (settings === null) {
    globals[key] = defaultSets[key];
  }
  else {
    if (Array.isArray(defaultSets[key])) {
      globals[key] = JSON.parse(settings);
    }
    else if (typeof defaultSets[key] === 'number') {
      globals[key] = parseFloat(settings);
    }
    else {
      globals[key] = settings;
    }
  }
}

function getSettings(key) { //Получить настройку
  let setting = 'cs_n_' + key;
  let val = window.localStorage.getItem(setting);
  switch (val) {
    case null:
      return null;
    case 'true':
      return true;
    case 'false':
      return false;
    default:
      return val;
  }
}

function setSettings(key, val) { // Задать настройку
  let setting = 'cs_n_' + key;
  window.localStorage.setItem(setting, String(val));
  globals[key] = val; // Записываем новое значение в globals
}

function appendToElementOrFallback(primaryElement, secondaryElement, elementToAdd) {
  if ($(primaryElement).length) {
    $(primaryElement).append(elementToAdd);
  }
  else {
    $(secondaryElement).after(elementToAdd);
  }
}

const pageurl = window.location.href;
const isCW3 = (/^https:\/\/\w?\.?catwar.su\/cw3(?!(\/kns|\/jagd))/.test(pageurl));
const isSett = (/^https:\/\/\w?\.?catwar.su\/settings/.test(pageurl));
try {
  if (isCW3) cw3();
  if (isSett) sett();
}
catch (error) {
  console.error("An error occurred: ", error);
}

function sett() {
  const html = `<br><div><input class="cs-set" id="costumeDelay" type="checkbox"${globals.costumeDelay?' checked':''}><label for="costumeDelay">Включить костюмчик (Я тебя люблю!)</label></div>`
  appendToElementOrFallback('#branch', 'a[href="del"]', html);
  $('.cs-set').on('change', function() {
    let key = this.id;
    let val = this.type === 'checkbox' ? this.checked : this.value;
    setSettings(key, val);
  });
  }

function cw3() {
         if (globals['costumeDelay']) {
    let costumeCss = `<style>
/* Статичная моделька */
div[style*="/cw3/composited/b3adc5468b452c7b.png"] {
background-image: url(https://i.ibb.co/ftj7ptn/1392-20240226195750.png) !important; }

/* Водоросли под статичную модельку */
div[style*="/cw3/cats/0/costume/144.png"] {
background-image: url(https://i.ibb.co/yqhL6R5/391.png) !important; }

/* Моделька сна */
div[style*="/cw3/composited/908fd592db41e61d.png"] {
background-image: url(https://i.ibb.co/SDg0Zkd/1392-20240226195808.png) !important; }

/* Водоросли под модельку сна */
div[style*="/cw3/cats/1/costume/144.png"] {
background-image: url(https://i.ibb.co/gtHtMSc/392.png) !important; }

/* Моделька питья сразу с водорослями */
div[style*="/cw3/composited/1e575f1497edf6ce.png"] {
background-image: url(https://i.ibb.co/fnBVy3C/393-1.png) !important; }

/* Язык показывать неприлично */
div[style*="/cw3/cats/5/base/top/tongue.gif"] {
display: none !important; }
    </style>
    `
    $('head').append(costumeCss);
  }
}