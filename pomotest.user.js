// ==UserScript==
// @name         CW Script: ТЕСТ
// @version      1.0
// @description  Тест редактора карт ЛУ для донатеров и речных помов (НЕ ДЛЯ РАСПРОСТРАНЕНИЯ)
// @author       Krivodushie & Psiii
// @copyright    2024 Дурное Сновидение (https://catwar.su/cat1293224) & Заря (https://catwar.su/cat590698)
// @license      MIT; https://opensource.org/licenses/MIT
// @updateURL    none
// @downloadURL  none
// @match        *://catwar.su/*
// @grant        GM_xmlhttpRequest
// @grant        GM.xmlHttpRequest
// @grant        GM_addStyle
// @require      https://code.jquery.com/jquery-3.4.1.min.js
// @require      https://abstract-class-shed.github.io/cwshed/jquery-ui.js
// ==/UserScript==

'use strict';
const csDefaults = {
  // Лазалки
     'treeMap': false
    ,'tmResetNote': true
    ,'tmShowVolume': true
    ,'tmClearConfirm': true
    ,'tmFolded': true
    ,'tmTecPosY': 50
    ,'tmTecPosX': 50
    ,'tmTecFolNames': ['А', 'Б', 'В', 'Г']
    ,'tmTecFolStatus': [true, true, true, true]
    ,'tmTecLocNames': ['1А', '2А', '3А', '4А', '5А', '6А', '1Б', '2Б', '3Б', '4Б', '5Б', '6Б', '1В', '2В', '3В', '4В', '5В', '6В', '1Г', '2Г', '3Г', '4Г', '5Г', '6Г']
    ,'tmTecLocStatus': [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]
    ,'tmBTNSShowMap': false
    ,'tmSelectedMap': 5
    ,'tmVariant': 1
    ,'tmResetVolume': 0.5
    ,'tmResetSource': 'https://abstract-class-shed.github.io/cwshed/refresh.wav'
  // Сирена для ныряющих
   ,'diverSiren': false
    ,'diverSirenVol': 0.7
    ,'diverSirenHref' : "https://github.com/CatWarScript/CatWarScript/raw/main/audios/SIRENA_SOCIAL_CREDIT.mp3"
    ,'diverSirenMinutes' : 35
};

const globals = {};
for (var key in csDefaults) {
  let settings = getSettings(key);
  if (settings === null) {
    globals[key] = csDefaults[key];
  }
  else {
    if (Array.isArray(csDefaults[key])) {
      globals[key] = JSON.parse(settings);
    }
    else if (typeof csDefaults[key] === 'number') {
      globals[key] = parseFloat(settings);
    }
    else {
      globals[key] = settings;
    }
  }
}

function getSettings(key) {
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

function setSettings(key, val) {
  let setting = 'cs_n_' + key;
  window.localStorage.setItem(setting, String(val));
  globals[key] = val; // Записываем новое значение в globals
}

  const audioGlobal = new Audio();
  audioGlobal.autoplay = false;
  audioGlobal.loop = false;
  function playAudio(src, vlm) {
    //console.log('playAudio fired, src', src,'vlm', vlm);
    let audio = audioGlobal;
    audio.src = src;
    audio.volume = vlm;
    audio.play();
  }

function appendToElementOrPrependFallback(primaryElement, secondaryElement, elementToAdd) {
  if ($(primaryElement).length) {
    $(primaryElement).append(elementToAdd);
  }
  else {
    $(secondaryElement).before(elementToAdd);
  }
}
 // Я был сонненький и функции назвал ущербно конечно
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
const isAll = (/^https:\/\/\w?\.?catwar.su\/.*/.test(pageurl));

try {
  if (isCW3) cw3();
  if (isSett) sett();
  if (isAll) all();
}
catch (error) {
  console.error("An error occurred: ", error);
}

function sett() {
 const html = `<br><hr><div class="cs-set"><h2>Настройки тестовых функций</h2>
        <div><input class="cs-set" id="treeMap" type="checkbox"${globals.treeMap?' checked':''}><label for="treeMap">Редактор карт в игровой</label></div>
       <div><input class="cs-set" id="tmFolded" type="checkbox"${globals.tmFolded?' checked':''}><label for="tmFolded">Изначально сворачивать окошко</label></div>
       <div><input class="cs-set" id="tmShowVolume" type="checkbox"${globals.tmShowVolume?' checked':''}><label for="tmShowVolume">Громкость в чате от ботов (веток)</label></div>
       <div><input class="cs-set" id="tmResetNote" type="checkbox"${globals.tmResetNote?' checked':''}><label for="tmResetNote">Звуковое уведомление при смене карты</label></div>
       <select class="cs-set" id="tmVariant">
       <option value="0">Классический</option>
       <option value="1">Компактный</option>
       <option value="2">Горизонтальный</option>
       </select><label for="tmVariant"> Вариант визуала редактора карт</label><br>
       <div><input class="cs-set" id="diverSiren" type="checkbox"${globals.diverSiren?' checked':''}><label for="diverSiren">Сирена для ныряющих при высоком уровне сна</label></div>
       <div><input class="cs-set" id="diverSirenVol" type="number"${globals.diverSirenVol?' checked':''} style="width: 45px;" step="0.1"> <label for="diverSirenVol">Громкость сирены ныряющих</label></div>
       <div><input class="cs-set" id="diverSirenMinutes" type="number"${globals.diverSirenMinutes?' checked':''} style="width: 40px;" step="5"> <label for="diverSirenMinutes">Во сколько минут начинает срабатывать сирена</label></div>
       <div><input class="cs-set" id="diverSirenHref" type="text"${globals.diverSirenHref?' checked':''} style="width: 350px;" step="5"> <label for="diverSirenHref">Ссылка на звук сирены</label></div>
 <style>.cs-set {margin-left: 15px;};</style>`
appendToElementOrFallback('#branch', 'a[href="del"]', html);

$(document).ready(function() {
  $('#diverSirenVol').val(globals.diverSirenVol);
  $('#diverSirenMinutes').val(globals.diverSirenMinutes);
  $('#diverSirenHref').val(globals.diverSirenHref);
  if (globals.tmVariant !== null) {
    $('#tmVariant').val(globals.tmVariant);
  }
});

  $('.cs-set').on('change', function() {
    let key = this.id;
    let val = this.type === 'checkbox' ? this.checked : this.value;
    if (this.tagName === 'SELECT') {
      val = $(this).prop('selectedIndex');
    }
    setSettings(key, val);
//  console.log(key, ': ', val, '.')
  });
}

function cw3() {
    if (globals["diverSiren"]) {
      $(document).ready(function() {
        let sirenPlaying = false;
        let sirenSound = null;
        let previousWidth = 0;
        let observer = null;
        let sirenTime = globals.diverSirenMinutes * 3;
        sirenTime = 150 - sirenTime;
        console.log(sirenTime)
        function playSiren() {
          if (sirenPlaying) {
            return;
          }
          sirenSound = new Audio(globals.diverSirenHref);
          sirenSound.volume = globals.diverSirenVol;
          sirenSound.onloadedmetadata = () => {
            sirenSound.play();
            sirenPlaying = true;
            sirenSound.onended = () => {
              sirenPlaying = false;
            };
          };
        }
        function startObserver() {
          const greenBar = $('#dream_table .parameter td:first-child');
          previousWidth = parseFloat(greenBar.css('width'));
          observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
              if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                const newWidth = parseFloat(greenBar.css('width'));
                if (newWidth <= sirenTime && newWidth < previousWidth && !sirenPlaying) {
                  playSiren();
                }
                if (newWidth > previousWidth) {
                  sirenPlaying = false;
                }
                previousWidth = newWidth;
              }
            });
          });
          observer.observe(greenBar[0], { attributes: true });
        }
        function stopObserver() {
          if (observer) {
            observer.disconnect();
          }
          if (sirenPlaying) {
            sirenSound.pause();
            sirenPlaying = false;
          }
        }
        const sirenHtml = `
        <div id="sblock">
          <span id="sheader">Нырялочки</span>
          <button id="startButton" class="sirenButtons">Я иду нырять!</button><br>
          <button id="stopButton" class="sirenButtons">Я нанырялся</button><br>
        </div>`
          const cssS = `
          <style>
            .sirenButtons {
            background-color: #333 !important;
            color: #fff !important;
            border: 1px solid #000 !important;
            font-family: Verdana !important;
            font-size: .9em !important;}
            .sirenButtons:hover {
            border: 1px solid #ff0 !important;}
            div#sblock {
            position: absolute;
            top: ${globals.dsY}px;
            left: ${globals.dsX}px;
            height: 100px;
            width: 130px;
            background-color: #d30d0d;
            border-radius: 7px !important;
            z-index: 50;
            font-family: Montserrat;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            text-align: center;}
            div#sblock button {
            margin-top: 4px;}
            span#sheader {
            background-color: var(--cwsc-bckg-1);
            border: 1px solid var(--cwsc-brdr-1);
            border-radius: 7px 7px 0 0;
            color: var(--cwsc-txt-4);
            height: 23px;
            display: grid;
            justify-content: center;
            align-content: center;}
          </style>`
          $('head').append(cssS);
  $('body').on('click', '#startButton', function() {
    console.log('startObserver called'); // Проверка, что startObserver вызывается
    startObserver();
    $('#sblock').animate({ backgroundColor: '#21c44f' }, 500);
  });

  $('body').on('click', '#stopButton', function() {
    console.log('stopObserver called'); // Проверка, что stopObserver вызывается
    stopObserver();
    $('#sblock').animate({ backgroundColor: '#d30d0d' }, 500);
  });
        $('body').append(sirenHtml);
    $("#sblock").draggable({
      containment: "document",
      handle: "span#sheader",
      drag: function () {
        let offset = $(this).offset();
        let xPos = offset.left;
        let yPos = offset.top;
        setSettings('dsX', offset.left);
        setSettings('dsY', offset.top);
      }
    });
      });
    }

  if (globals['treeMap']) {
    if (globals.tmResetNote) {
      let lastNote, noteFirst = true;
      const targetNode = document.getElementById('ist');
      const config = { subtree: true, childList: true };
      const observer = new MutationObserver(mutations => {
        for (const mutation of mutations) {
          if (mutation.type === 'childList') {
            lastNote = $(targetNode.innerHTML.split('.')).get(-2); // Последняя запись в истории
            if (lastNote !== undefined) {
              if (/Услышала? оглушительн/.test(lastNote) && !noteFirst) {
                console.log("Обновилась лазательная локация");
                playAudio(globals.tmResetSource, globals.tmResetVolume);
              }
              noteFirst = false; // История была уже прочитана 1 раз, и страница не только что загрузилась
            }
          }
        }
      });
      observer.observe(targetNode, config);
    }

    if (globals.tmShowVolume) {
      $('head').append(`<style>.vlm0 > .nick[style*="italic"]:after {content:" [0]";}
      .vlm1 > .nick[style*="italic"]:after {content:" [1]";}
      .vlm2 > .nick[style*="italic"]:after {content:" [2]";}
      .vlm3 > .nick[style*="italic"]:after {content:" [3]";}
      .vlm4 > .nick[style*="italic"]:after {content:" [4]";}
      .vlm5 > .nick[style*="italic"]:after {content:" [5]";}
      .vlm6 > .nick[style*="italic"]:after {content:" [6]";}
      .vlm7 > .nick[style*="italic"]:after {content:" [7]";}
      .vlm8 > .nick[style*="italic"]:after {content:" [8]";}
      .vlm9 > .nick[style*="italic"]:after {content:" [9]";}
      .vlm10 > .nick[style*="italic"]:after {content:" [10]";}</style>`);
    }

    $('#app').ready(function () {
      let tmSvgMinus = `<svg id="svgPlus" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 8.4666666 8.466668" version="1.1" id="svg1" inkscape:version="1.3.2 (091e20e, 2023-11-25, custom)" sodipodi:docname="Минус.svg">
      <sodipodi:namedview id="namedview1" pagecolor="#ffffff" bordercolor="#000000" borderopacity="0.25" inkscape:showpageshadow="2" inkscape:pageopacity="0.0" inkscape:pagecheckerboard="0" inkscape:deskcolor="#d1d1d1" inkscape:document-units="mm" inkscape:zoom="20.377441" inkscape:cx="15.998084" inkscape:cy="15.973547" inkscape:window-width="1680" inkscape:window-height="987" inkscape:window-x="1672" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="layer1"/>
      <defs id="defs1">
      <inkscape:path-effect effect="fillet_chamfer" id="path-effect4" is_visible="true" lpeversion="1" nodesatellites_param="F,0,0,1,0,0.26458333,0,1 @ F,0,0,1,0,0.26458333,0,1 @ F,0,0,1,0,0.26458333,0,1 @ F,0,0,1,0,0.26458333,0,1" radius="1" unit="px" method="auto" mode="F" chamfer_steps="1" flexible="false" use_knot_distance="true" apply_no_radius="true" apply_with_radius="true" only_selected="false" hide_knots="false"/>
      <inkscape:path-effect effect="fillet_chamfer" id="path-effect2" is_visible="true" lpeversion="1" nodesatellites_param="F,0,0,1,0,0.26458333,0,1 @ F,0,0,1,0,0.26458333,0,1 @ F,0,0,1,0,0.26458333,0,1 @ F,0,0,1,0,0.26458333,0,1 @ F,0,0,1,0,0.26458333,0,1 @ F,0,0,1,0,0.26458333,0,1 @ F,0,0,1,0,0.26458333,0,1 @ F,0,0,1,0,0.26458333,0,1 @ F,0,0,1,0,0.26458333,0,1 @ F,0,0,1,0,0.26458333,0,1 @ F,0,0,1,0,0.26458333,0,1 @ F,0,0,1,0,0.26458333,0,1" radius="1" unit="px" method="auto" mode="F" chamfer_steps="1" flexible="false" use_knot_distance="true" apply_no_radius="true" apply_with_radius="true" only_selected="false" hide_knots="false"/>
      </defs>
      <g inkscape:label="Слой 1" inkscape:groupmode="layer" id="layer1">
      <path d="M 7.7079536,4.7312995 H 4.9921105 A 0.26458333,0.26458333 135 0 0 4.7275272,4.9958828 V 7.8591123 A 0.26458333,0.26458333 135 0 1 4.4629439,8.1236956 H 4.0037225 A 0.26458333,0.26458333 45 0 1 3.7391392,7.8591123 V 4.9958828 A 0.26458333,0.26458333 45 0 0 3.4745559,4.7312995 H 0.75871306 A 0.26458333,0.26458333 45 0 1 0.49412973,4.4667162 V 3.9999504 A 0.26458333,0.26458333 135 0 1 0.75871306,3.7353671 H 3.4745559 A 0.26458333,0.26458333 135 0 0 3.7391392,3.4707838 V 0.60755435 A 0.26458333,0.26458333 135 0 1 4.0037225,0.34297102 H 4.4629439 A 0.26458333,0.26458333 45 0 1 4.7275272,0.60755435 V 3.4707838 A 0.26458333,0.26458333 45 0 0 4.9921105,3.7353671 H 7.7079536 A 0.26458333,0.26458333 45 0 1 7.9725369,3.9999504 V 4.4667162 A 0.26458333,0.26458333 135 0 1 7.7079536,4.7312995 Z" id="text2" style="font-size:3.175px;display:none;fill:#c9bdb0;fill-opacity:1;stroke:#220a00;stroke-width:0;stroke-linecap:round;stroke-linejoin:round" aria-label="+" inkscape:path-effect="#path-effect2" inkscape:original-d="M 7.9725369,4.7312995 H 4.7275272 V 8.1236956 H 3.7391392 V 4.7312995 H 0.49412973 V 3.7353671 H 3.7391392 V 0.34297102 h 0.988388 V 3.7353671 h 3.2450097 z"/>
      <path d="M 7.7079536,4.7312995 H 0.75871306 A 0.26458333,0.26458333 45 0 1 0.49412973,4.4667162 l 0,-0.4667658 A 0.26458333,0.26458333 135 0 1 0.75871306,3.7353671 l 6.94924054,0 A 0.26458333,0.26458333 45 0 1 7.9725369,3.9999504 V 4.4667162 A 0.26458333,0.26458333 135 0 1 7.7079536,4.7312995 Z" id="path2" style="font-size:3.175px;display:inline;fill:#c9bdb0;fill-opacity:1;stroke:#220a00;stroke-width:0;stroke-linecap:round;stroke-linejoin:round" aria-label="+" inkscape:path-effect="#path-effect4" inkscape:original-d="M 7.9725369,4.7312995 H 0.49412973 V 3.7353671 H 7.9725369 Z" sodipodi:nodetypes="ccccc"/>
      </g>
      </svg>`
            let tmSvgPlus = `<svg id="svgMinus" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"; xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"; xmlns="http://www.w3.org/2000/svg"; xmlns:svg="http://www.w3.org/2000/svg"; width="32" height="32" viewBox="0 0 8.4666666 8.466668" version="1.1" id="svg1" inkscape:version="1.3.2 (091e20e, 2023-11-25, custom)" sodipodi:docname="Плюс.svg">
      <sodipodi:namedview id="namedview1" pagecolor="#ffffff" bordercolor="#000000" borderopacity="0.25" inkscape:showpageshadow="2" inkscape:pageopacity="0.0" inkscape:pagecheckerboard="0" inkscape:deskcolor="#d1d1d1" inkscape:document-units="mm" inkscape:zoom="20.377441" inkscape:cx="15.998084" inkscape:cy="15.973547" inkscape:window-width="1680" inkscape:window-height="987" inkscape:window-x="1672" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="layer1"/>
      <defs id="defs1">
      <inkscape:path-effect effect="fillet_chamfer" id="path-effect4" is_visible="true" lpeversion="1" nodesatellites_param="F,0,0,1,0,0.26458333,0,1 @ F,0,0,1,0,0.26458333,0,1 @ F,0,0,1,0,0.26458333,0,1 @ F,0,0,1,0,0.26458333,0,1" radius="1" unit="px" method="auto" mode="F" chamfer_steps="1" flexible="false" use_knot_distance="true" apply_no_radius="true" apply_with_radius="true" only_selected="false" hide_knots="false"/>
      <inkscape:path-effect effect="fillet_chamfer" id="path-effect2" is_visible="true" lpeversion="1" nodesatellites_param="F,0,0,1,0,0.26458333,0,1 @ F,0,0,1,0,0.26458333,0,1 @ F,0,0,1,0,0.26458333,0,1 @ F,0,0,1,0,0.26458333,0,1 @ F,0,0,1,0,0.26458333,0,1 @ F,0,0,1,0,0.26458333,0,1 @ F,0,0,1,0,0.26458333,0,1 @ F,0,0,1,0,0.26458333,0,1 @ F,0,0,1,0,0.26458333,0,1 @ F,0,0,1,0,0.26458333,0,1 @ F,0,0,1,0,0.26458333,0,1 @ F,0,0,1,0,0.26458333,0,1" radius="1" unit="px" method="auto" mode="F" chamfer_steps="1" flexible="false" use_knot_distance="true" apply_no_radius="true" apply_with_radius="true" only_selected="false" hide_knots="false"/>
      </defs>
      <g inkscape:label="Слой 1" inkscape:groupmode="layer" id="layer1">
      <path d="M 7.7079536,4.7312995 H 4.9921105 A 0.26458333,0.26458333 135 0 0 4.7275272,4.9958828 V 7.8591123 A 0.26458333,0.26458333 135 0 1 4.4629439,8.1236956 H 4.0037225 A 0.26458333,0.26458333 45 0 1 3.7391392,7.8591123 V 4.9958828 A 0.26458333,0.26458333 45 0 0 3.4745559,4.7312995 H 0.75871306 A 0.26458333,0.26458333 45 0 1 0.49412973,4.4667162 V 3.9999504 A 0.26458333,0.26458333 135 0 1 0.75871306,3.7353671 H 3.4745559 A 0.26458333,0.26458333 135 0 0 3.7391392,3.4707838 V 0.60755435 A 0.26458333,0.26458333 135 0 1 4.0037225,0.34297102 H 4.4629439 A 0.26458333,0.26458333 45 0 1 4.7275272,0.60755435 V 3.4707838 A 0.26458333,0.26458333 45 0 0 4.9921105,3.7353671 H 7.7079536 A 0.26458333,0.26458333 45 0 1 7.9725369,3.9999504 V 4.4667162 A 0.26458333,0.26458333 135 0 1 7.7079536,4.7312995 Z" id="text2" style="font-size:3.175px;display:inline;fill:#c9bdb0;fill-opacity:1;stroke:#220a00;stroke-width:0;stroke-linecap:round;stroke-linejoin:round" aria-label="+" inkscape:path-effect="#path-effect2" inkscape:original-d="M 7.9725369,4.7312995 H 4.7275272 V 8.1236956 H 3.7391392 V 4.7312995 H 0.49412973 V 3.7353671 H 3.7391392 V 0.34297102 h 0.988388 V 3.7353671 h 3.2450097 z"/>
      <path d="M 7.7079536,4.7312995 H 0.75871306 A 0.26458333,0.26458333 45 0 1 0.49412973,4.4667162 l 0,-0.4667658 A 0.26458333,0.26458333 135 0 1 0.75871306,3.7353671 l 6.94924054,0 A 0.26458333,0.26458333 45 0 1 7.9725369,3.9999504 V 4.4667162 A 0.26458333,0.26458333 135 0 1 7.7079536,4.7312995 Z" id="path2" style="font-size:3.175px;display:inline;fill:#c9bdb0;fill-opacity:1;stroke:#220a00;stroke-width:0;stroke-linecap:round;stroke-linejoin:round" aria-label="+" inkscape:path-effect="#path-effect4" inkscape:original-d="M 7.9725369,4.7312995 H 0.49412973 V 3.7353671 H 7.9725369 Z" sodipodi:nodetypes="ccccc"/>
      </g>
      </svg>`
      let tmHtml = `
       <div id="tmBlock">
        <div id="tmHeader"><table><tbody><tr><td><p>Минное поле v2</p></td><td><span id="tmHeaderPlusMinus">${tmSvgPlus}${tmSvgMinus}</span></td></tr></tbody></table></div>
       </div>`

      if (1==1) {
       $('body').append(tmHtml);
      }

      if (globals.tmVariant == 0) {
        let tmBlockThings = `
              <div id="blockThings">
        <span class="tmThings"> <!-- КНОПКА 0 -->
          <input type="radio" checked name="tmThing" class="tmThingList" id="tmThing0" value="0" mark="tmThingSafe">
          <label for="tmThing0"><span class="tmThingValues">[0]</span> Без звука</label>
        </span><br>
        <span class="tmThings"> <!-- КНОПКА 1 -->
          <input type="radio" name="tmThing" class="tmThingList" id="tmThing1" value="1" mark="tmThingSafe">
          <label for="tmThing1"><span class="tmThingValues">[1]</span> Едва различимый звук</label>
        </span><br>
        <span class="tmThings"> <!-- КНОПКА 2 -->
          <input type="radio" name="tmThing" class="tmThingList" id="tmThing2" value="2" mark="tmThingSafe">
          <label for="tmThing2"><span class="tmThingValues">[2]</span> Тихий звук</label>
        </span><br>
        <span class="tmThings"> <!-- КНОПКА 3 -->
          <input type="radio" name="tmThing" class="tmThingList" id="tmThing3" value="3" mark="tmThingSafe">
          <label for="tmThing3"><span class="tmThingValues">[3]</span> Приглушённый звук</label>
        </span><br>
        <span class="tmThings"> <!-- КНОПКА 4 -->
          <input type="radio" name="tmThing" class="tmThingList" id="tmThing4" value="4" mark="tmThingSafe">
          <label for="tmThing4"><span class="tmThingValues">[4]</span> Громкий звук</label>
        </span><br>
        <span class="tmThings"> <!-- КНОПКА 5 -->
          <input type="radio" name="tmThing" class="tmThingList" id="tmThing5" value="5" mark="tmThingSafe">
          <label for="tmThing5"><span class="tmThingValues">[5]</span> Очень громкий звук</label>
        </span><br>
        <span class="tmThings"> <!-- КНОПКА 6 -->
          <input type="radio" name="tmThing" class="tmThingList" id="tmThing6" value="6" mark="tmThingSafe">
          <label for="tmThing6"><span class="tmThingValues">[6]</span> Очень громкий звук</label>
        </span><br>
        <span class="tmThings"> <!-- КНОПКА 7 -->
          <input type="radio" name="tmThing" class="tmThingList" id="tmThing7" value="7" mark="tmThingSafe">
          <label for="tmThing7"><span class="tmThingValues">[7]</span> Очень громкий звук</label>
        </span><br>
        <span class="tmThings"> <!-- КНОПКА ОПАСНАЯ КЛЕТКА -->
          <input type="radio" name="tmThing" class="tmThingList" id="tmThingX" value="X" mark="tmThingUnsafe">
          <label for="tmThingX"><span class="tmThingValues">[X]</span> Опасная клетка</label>
        </span><br>
        <span class="tmThings"> <!-- КНОПКА БЕЗОПАСНАЯ КЛЕТКА -->
          <input type="radio" name="tmThing" class="tmThingList" id="tmThingOK" value="" mark="tmThingSafe">
          <label for="tmThingOK"><span class="tmThingValues">[Б]</span> Безопасная клетка</label>
        </span><br>
        <span class="tmThings"> <!-- КНОПКА ПЕРЕХОДА -->
          <input type="radio" name="tmThing" class="tmThingList" id="tmThingP" value="П" mark="tmThingPerehod">
          <label for="tmThingP"><span class="tmThingValues">[П]</span> Клетка перехода</label>
        </span><br>
        <span class="tmThings"> <!-- КНОПКА ОЧИСТКИ -->
          <input type="radio" name="tmThing" class="tmThingList" id="tmThingC" value="" mark="">
          <label for="tmThingC"><span class="tmThingValues">[О]</span> Очистить</label>
        </span><br>
      </div>`

        if (1==1) {
         $('#tmBlock').append(tmBlockThings);
        }



      }
      if (globals.tmVariant != 0) {
        let tmBlockThings = `
        <div id="blockThings">
        <table><tbody><tr><td>
          <span class="tmThings"> <!-- КНОПКА 0 -->
            <input type="radio" checked name="tmThing" class="tmThingList" id="tmThing0" value="0" mark="tmThingSafe">
            <label for="tmThing0"><span class="tmThingValues">[0]</span><small class="tmThingValue"> Без звука</small></label>
          </span><br>
          <span class="tmThings"> <!-- КНОПКА 1 -->
            <input type="radio" name="tmThing" class="tmThingList" id="tmThing1" value="1" mark="tmThingSafe">
            <label for="tmThing1"><span class="tmThingValues">[1]</span><small class="tmThingValue"> Едва различимый звук</small></label>
          </span><br>
          <span class="tmThings"> <!-- КНОПКА 2 -->
            <input type="radio" name="tmThing" class="tmThingList" id="tmThing2" value="2" mark="tmThingSafe">
            <label for="tmThing2"><span class="tmThingValues">[2]</span><small class="tmThingValue"> Тихий звук</small></label>
          </span><br>
          <span class="tmThings"> <!-- КНОПКА 3 -->
            <input type="radio" name="tmThing" class="tmThingList" id="tmThing3" value="3" mark="tmThingSafe">
            <label for="tmThing3"><span class="tmThingValues">[3]</span><small class="tmThingValue"> Приглушённый звук</small></label>
          </span><br>
          <span class="tmThings"> <!-- КНОПКА 4 -->
            <input type="radio" name="tmThing" class="tmThingList" id="tmThing4" value="4" mark="tmThingSafe">
            <label for="tmThing4"><span class="tmThingValues">[4]</span><small class="tmThingValue"> Громкий звук</small></label>
          </span><br>
          <span class="tmThings"> <!-- КНОПКА 5 -->
            <input type="radio" name="tmThing" class="tmThingList" id="tmThing5" value="5" mark="tmThingSafe">
            <label for="tmThing5"><span class="tmThingValues">[5]</span><small class="tmThingValue"> Очень громкий звук</small></label>
          </span><br>

          </td><td>

          <span class="tmThings"> <!-- КНОПКА 6 -->
            <input type="radio" name="tmThing" class="tmThingList" id="tmThing6" value="6" mark="tmThingSafe">
            <label for="tmThing6"><span class="tmThingValues">[6]</span><small class="tmThingValue"> Очень громкий звук</small></label>
          </span><br>
          <span class="tmThings"> <!-- КНОПКА 7 -->
            <input type="radio" name="tmThing" class="tmThingList" id="tmThing7" value="7" mark="tmThingSafe">
            <label for="tmThing7"><span class="tmThingValues">[7]</span><small class="tmThingValue"> Очень громкий звук</small></label>
          </span><br>
          <span class="tmThings"> <!-- КНОПКА ОПАСНАЯ КЛЕТКА -->
            <input type="radio" name="tmThing" class="tmThingList" id="tmThingX" value="X" mark="tmThingUnsafe">
            <label for="tmThingX"><span class="tmThingValues">[X]</span><small class="tmThingValue"> Опасная клетка</small></label>
          </span><br>
          <span class="tmThings"> <!-- КНОПКА БЕЗОПАСНАЯ КЛЕТКА -->
            <input type="radio" name="tmThing" class="tmThingList" id="tmThingOK" value="" mark="tmThingSafe">
            <label for="tmThingOK"><span class="tmThingValues">[Б]</span><small class="tmThingValue"> Безопасная клетка</small></label>
          </span><br>
          <span class="tmThings"> <!-- КНОПКА ПЕРЕХОДА -->
            <input type="radio" name="tmThing" class="tmThingList" id="tmThingP" value="П" mark="tmThingPerehod">
            <label for="tmThingP"><span class="tmThingValues">[П]</span><small class="tmThingValue"> Клетка перехода</small></label>
          </span><br>
          <span class="tmThings"> <!-- КНОПКА ОЧИСТКИ -->
            <input type="radio" name="tmThing" class="tmThingList" id="tmThingC" value="" mark="">
            <label for="tmThingC"><span class="tmThingValues">[О]</span><small class="tmThingValue"> Очистить клетку</small></label>
          </span><br>

          <tr></tbody></table>
        </div>`

        if (1==1) {
         $('#tmBlock').append(tmBlockThings);
        }
      }

      // КНОПКА ПОКАЗАТЬ НА ПОЛЕ
      let tmShowMapSpan = `
      <div id="tmShowMap"><input class="tmBTNS" id="tmBTNSShowMap" type="checkbox"${globals.tmBTNSShowMap?' checked':''}><label for="tmBTNSShowMap">Переносить на игровую</label></div>`

      if (1==1) {
       $('#tmBlock').append(tmShowMapSpan);
      }

      // БЛОК ДЛЯ ПАПОК
      let tmFolderBlock = `
      <div id="tmFolderBlock"></div>`

      if (1==1) {
       $('#tmBlock').append(tmFolderBlock);
      }
      // САМИ ПАПКИ
      for (let i = 0; i <= 3; i++) {
        if (globals.tmTecFolStatus[i] || !i) {
          $('#tmFolderBlock').append(`<input type="radio" name="tmFolder" class="tmFolders" value="${i}" id="tmFolder${i}">
          <label class="tmFolderLabel" for="tmFolder${i}">${globals.tmTecFolNames[i]}</label>`);
        }
      }

      let tmLocBlock = `
      <div id="tmLocBlock"></div>`

      if (1==1) {
       $('#tmBlock').append(tmLocBlock);
      }
      for (let i = 0; i <= 5; i++) {
        if (globals.tmTecLocStatus[i] || !i) {
          $('#tmLocBlock').append(`<input type="radio" name="tmLoc" class="tmLocs" value="${i}" id="tmLoc${i}">
          <label class="tmLocLabel" folder="0" for="tmLoc${i}">${globals.tmTecLocNames[i]}</label>`);
        }
      }

      for (let i = 6; i <= 23; i++) {
        let k = parseInt(i / 6.0);
        if (globals.tmTecLocStatus[i] && globals.tmTecFolStatus[k]) {
          $('#tmLocBlock').append(`<input type="radio" name="tmLoc" class="tmLocs" value="${i}" id="tmLoc${i}">
          <label class="tmLocLabel" style="display:none;" folder="${k}" for="tmLoc${i}">${globals.tmTecLocNames[i]}</label>`);
        }
      }

      const tmFieldDef = `<tbody><tr><td class="tmThingSafe"></td><td class="tmThingSafe"></td><td class="tmThingSafe"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
      <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
      <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
      <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
      <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
      <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody>`;
      let tmMaps = getSettings('tmMaps') === null ? [tmFieldDef, tmFieldDef, tmFieldDef, tmFieldDef, tmFieldDef, tmFieldDef, tmFieldDef, tmFieldDef, tmFieldDef, tmFieldDef, tmFieldDef, tmFieldDef, tmFieldDef, tmFieldDef, tmFieldDef, tmFieldDef, tmFieldDef, tmFieldDef, tmFieldDef, tmFieldDef, tmFieldDef, tmFieldDef, tmFieldDef, tmFieldDef] : JSON.parse(getSettings('tmMaps'));

      let tmFieldBlock = `
      <div id="blockField"></div>`

      if (1==1) {
       $('#tmBlock').append(tmFieldBlock);
      }
      // ЗАГРУЖЕННЫЕ КАРТЫ ЛОКАЦИЙ
      for (let i = 0; i <= 23; i++) {
        if (globals.tmTecLocStatus[i]) {
          if (i !== globals.tmSelectedMap) {
            $('#blockField').append(`<table class="tmTable" style="display:none;" page="${i}">${tmMaps[i]}</table>`);
          } else {
            $('#blockField').append(`<table class="tmTable" page="${globals.tmSelectedMap}">${tmMaps[globals.tmSelectedMap]}</table>`);
          }
        }
      }

      // КНОПКА ОЧИСТКИ ЛОКАЦИИ
      let tmClearButton = `
      <button id="tmClearButton">Очистить всё поле</button>`

      if (1==1) {
       $('#tmBlock').append(tmClearButton);
      }

      let tmAllCSS = `
      <style>
        .tmpmFolded {display: none;}
        div#tmBlock {
      -webkit-touch-callout: none;
        -webkit-user-select: none;
         -khtml-user-select: none;
           -moz-user-select: none;
            -ms-user-select: none;
                user-select: none; }
      </style>`

      if (1==1) {
       $('head').append(tmAllCSS);
      }

      if (globals['tmVariant'] == 0) { // ВИНТАЖНЫЙ ВАРИАНТ
        let tmCSS = `
        <style>
      div#tmBlock {
      overflow: hidden;
      position: absolute;
      width: 270px;
      top: ${globals.tmTecPosY}px;
      left: ${globals.tmTecPosX}px;
      background-color: var(--cwsc-bckg-3);
      color: var(--cwsc-txt-1);
      border: 3px solid var(--cwsc-brdr-1) !important;
      border-radius: 10px;
      height: 630px;
      z-index: 500; }

      .tmTable .tmThingSafe { background-color: var(--tm-safe); }
      .tmTable .tmThingUnsafe { background-color: var(--tm-unsafe); }
      .tmTable .tmThingPerehod { background-color: var(--tm-location); }

      .tmLocs, .tmFolders { display:none; }

      #cages .tmThingSafe { background-color: var(--tm-safe-cage); }
      #cages .tmThingUnsafe { background-color: var(--tm-unsafe-cage); }
      #cages .tmThingPerehod { background-color: var(--tm-location-cage); }

      .tmLocLabel, .tmFolderLabel {
      display: inline-block;
      color: black;
      padding: 2px 10px; }

      .tmTable td {
      font-size: 11pt;
      text-align: center;
      vertical-align: middle;
      height: 30px;
      width: 22px;
      border: 1px solid var(--cwsc-brdr-3); }

      .tmThingList:checked + label span.tmThingValues {
      font-weight: bold; }

      small.tmThingValue {
      display: none; }

      .tmLocs:checked + .tmLocLabel, .tmFolders:checked + .tmFolderLabel {
      background-color: var(--cwsc-bckg-2);
      border: 2px solid var(--cwsc-brdr-1); }

      #tmBlock.folded { height: 25px; }

      div#tmHeader {
      display: grid;
      align-content: center;
      font-family: Montserrat;
      background-color: var(--cwsc-bckg-1);
      border: 1px solid var(--cwsc-brdr-1) !important;
      color: var(--cwsc-txt-4);
      border-radius: 0px;
      font-size: 16px;
      font-weight: 500;
      height: 25px; }

      div#tmHeader p {
      display: grid;
      align-content: center;
      border-right: 2px dashed var(--cwsc-brdr-5) !important;
      width: 225px;
      height: 28px;
      padding: 0;
      margin: 0; }

      span#tmHeaderPlusMinus {
      display: grid;
      justify-content: end;
      height: 29px;
      padding: 0;
      margin: 0; }

      svg#svgMinus, svg#svgPlus {
      transform: scale(65%);
      height: 26px;
      padding: 0;
      margin: 0; }

      div#tmHeader>table>tbody>tr>td {
      text-align: center; }

      div#blockThings {
      margin: 5px; }

      div#tmShowMap {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px dashed var(--cwsc-brdr-3);
      border-left: none;
      border-right: none;
      margin: 10px 0px;
      padding: 5px 0px; }

      div#tmFolderBlock {
      display: flex;
      justify-content: space-evenly;
      margin: 5px; }

      div#tmLocBlock {
      display: flex;
      justify-content: space-evenly;
      margin: 5px; }

      label.tmLocLabel {
      background-color: var(--cwsc-inpt-1);
      color: var(--cwsc-txt-4);
      border: 2px solid var(--cwsc-brdr-3);
      border-radius: 3px !important;
      padding: 0px;
      width: 36px;
      text-align: center;
      margin: 5px 0px;
      font-size: 13px; }

      label.tmFolderLabel {
      background-color: var(--cwsc-inpt-1);
      color: var(--cwsc-txt-4);
      border: 2px solid var(--cwsc-brdr-3);
      border-radius: 3px !important;
      padding: 0px;
      width: 58px;
      text-align: center;
      margin: 5px 0px;
      font-size: 13px; }

      div#blockField {
      display: flex;
      justify-content: center;
      margin: 10px; }

      table.tmTable {
      background-color: var(--cwsc-bckg-7) !important; }

      button#tmClearButton {
      background-color: var(--cwsc-inpt-1);
      color: var(--cwsc-txt-4);
      border: 2px solid var(--cwsc-brdr-3);
      border-radius: 3px !important;
      width: 252px;
      padding: 3px 10px;
      margin: 0px 10px; }
        </style>`

        if (1==1) {
         $('head').append(tmCSS);
        }
      }

    if (globals['tmVariant'] == 1) { // КОМПАКТНЫЙ ВАРИАНТ
      let tmCSS = `
      <style>
      div#tmBlock {
      overflow: hidden;
      position: absolute;
      width: 270px;
      top: ${globals.tmTecPosY}px;
      left: ${globals.tmTecPosX}px;
      background-color: var(--cwsc-bckg-3);
      color: var(--cwsc-txt-1);
      border: 3px solid var(--cwsc-brdr-1) !important;
      border-radius: 10px;
      height: 520px;
      z-index: 500; }

      .tmTable .tmThingSafe { background-color: var(--tm-safe); }
      .tmTable .tmThingUnsafe { background-color: var(--tm-unsafe); }
      .tmTable .tmThingPerehod { background-color: var(--tm-location); }

      .tmLocs, .tmFolders { display:none; }

      #cages .tmThingSafe { background-color: var(--tm-safe-cage); }
      #cages .tmThingUnsafe { background-color: var(--tm-unsafe-cage); }
      #cages .tmThingPerehod { background-color: var(--tm-location-cage); }

      .tmLocLabel, .tmFolderLabel {
      display: inline-block;
      color: black;
      padding: 2px 10px; }

      .tmTable td {
      font-size: 11pt;
      text-align: center;
      vertical-align: middle;
      height: 30px;
      width: 22px;
      border: 1px solid var(--cwsc-brdr-3); }

      .tmThingList:checked + label span.tmThingValues {
      font-weight: bold; }

      small.tmThingValue {
      display: none; }

      .tmLocs:checked + .tmLocLabel, .tmFolders:checked + .tmFolderLabel {
      background-color: var(--cwsc-bckg-2);
      border: 2px solid var(--cwsc-brdr-1); }

      #tmBlock.folded { height: 25px; }

      div#tmHeader {
      display: grid;
      align-content: center;
      font-family: Montserrat;
      background-color: var(--cwsc-bckg-1);
      border: 1px solid var(--cwsc-brdr-1) !important;
      color: var(--cwsc-txt-4);
      border-radius: 0px;
      font-size: 16px;
      font-weight: 500;
      height: 25px; }

      div#tmHeader p {
      display: grid;
      align-content: center;
      border-right: 2px dashed var(--cwsc-brdr-5) !important;
      width: 225px;
      height: 28px;
      padding: 0;
      margin: 0; }

      span#tmHeaderPlusMinus {
      display: grid;
      justify-content: end;
      height: 29px;
      padding: 0;
      margin: 0; }

      svg#svgMinus, svg#svgPlus {
      transform: scale(65%);
      height: 26px;
      padding: 0;
      margin: 0; }

      div#tmHeader>table>tbody>tr>td {
      text-align: center; }

      div#blockThings {
      display: grid;
      text-align: center;
      margin: 5px; }

      div#tmShowMap {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px dashed var(--cwsc-brdr-3);
      border-left: none;
      border-right: none;
      margin: 10px 0px;
      padding: 5px 0px; }

      div#tmFolderBlock {
      display: flex;
      justify-content: space-evenly;
      margin: 5px; }

      div#tmLocBlock {
      display: flex;
      justify-content: space-evenly;
      margin: 5px; }

      label.tmLocLabel {
      background-color: var(--cwsc-inpt-1);
      color: var(--cwsc-txt-4);
      border: 2px solid var(--cwsc-brdr-3);
      border-radius: 3px !important;
      padding: 0px;
      width: 36px;
      text-align: center;
      margin: 5px 0px;
      font-size: 13px; }

      label.tmFolderLabel {
      background-color: var(--cwsc-inpt-1);
      color: var(--cwsc-txt-4);
      border: 2px solid var(--cwsc-brdr-3);
      border-radius: 3px !important;
      padding: 0px;
      width: 58px;
      text-align: center;
      margin: 5px 0px;
      font-size: 13px; }

      div#blockField {
      display: flex;
      justify-content: center;
      margin: 10px; }

      table.tmTable {
      background-color: var(--cwsc-bckg-7) !important; }

      button#tmClearButton {
      background-color: var(--cwsc-inpt-1);
      color: var(--cwsc-txt-4);
      border: 2px solid var(--cwsc-brdr-3);
      border-radius: 3px !important;
      width: 252px;
      padding: 3px 10px;
      margin: 0px 10px; }
      </style>`

      if (1==1) {
       $('head').append(tmCSS);
      }
    }

      if (globals['tmVariant'] == 2) { // ГОРИЗОНТАЛЬНЫЙ ВАРИАНТ
        let tmCSS = `
        <style>
      div#tmBlock {
      overflow: hidden;
      position: absolute;
      width: 270px;
      top: ${globals.tmTecPosY}px;
      left: ${globals.tmTecPosX}px;
      background-color: var(--cwsc-bckg-3);
      color: var(--cwsc-txt-1);
      border: 3px solid var(--cwsc-brdr-1) !important;
      border-radius: 10px;
      width: 495px;
      height: 280px;
      z-index: 500; }

      .tmTable .tmThingSafe { background-color: var(--tm-safe); }
      .tmTable .tmThingUnsafe { background-color: var(--tm-unsafe); }
      .tmTable .tmThingPerehod { background-color: var(--tm-location); }

      .tmLocs, .tmFolders { display:none; }

      #cages .tmThingSafe { background-color: var(--tm-safe-cage); }
      #cages .tmThingUnsafe { background-color: var(--tm-unsafe-cage); }
      #cages .tmThingPerehod { background-color: var(--tm-location-cage); }

      .tmLocLabel, .tmFolderLabel {
      display: inline-block;
      color: black;
      padding: 2px 10px; }

      .tmTable td {
      font-size: 11pt;
      text-align: center;
      vertical-align: middle;
      height: 30px;
      width: 22px;
      border: 1px solid var(--cwsc-brdr-3); }

      .tmThingList:checked + label span.tmThingValues {
      font-weight: bold; }

      small.tmThingValue {
      display: none; }

      .tmLocs:checked + .tmLocLabel, .tmFolders:checked + .tmFolderLabel {
      background-color: var(--cwsc-bckg-2);
      border: 2px solid var(--cwsc-brdr-1); }

      #tmBlock.folded { height: 25px; }

      div#tmHeader {
      display: grid;
      align-content: center;
      font-family: Montserrat;
      background-color: var(--cwsc-bckg-1);
      border: 1px solid var(--cwsc-brdr-1) !important;
      color: var(--cwsc-txt-4);
      border-radius: 0px;
      font-size: 16px;
      font-weight: 500;
      height: 25px; }

      div#tmHeader p {
      display: grid;
      align-content: center;
      border-right: 2px dashed var(--cwsc-brdr-5) !important;
      width: 450px;
      height: 28px;
      padding: 0;
      margin: 0; }

      span#tmHeaderPlusMinus {
      display: grid;
      justify-content: end;
      height: 29px;
      padding: 0;
      margin: 0; }

      svg#svgMinus, svg#svgPlus {
      transform: scale(65%);
      height: 26px;
      padding: 0;
      margin: 0; }

      div#tmHeader>table>tbody>tr>td {
      text-align: center; }

      div#blockThings {
      margin: 5px; }

      div#tmShowMap {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px dashed var(--cwsc-brdr-3);
      border-left: none;
      border-right: none;
      width: 195px;
      margin: 10px 5px;
      padding: 5px 0px; }

      div#tmFolderBlock {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 28px;
      left: 135px;
      width: 60px;
      margin: 5px; }

      div#tmLocBlock {
      display: flex;
      justify-content: space-evenly;
      position: absolute;
      top: 28px;
      left: 200px;
      width: 290px;
      margin: 5px; }

      label.tmLocLabel {
      background-color: var(--cwsc-inpt-1);
      color: var(--cwsc-txt-4);
      border: 2px solid var(--cwsc-brdr-3);
      border-radius: 3px !important;
      padding: 0px;
      width: 36px;
      text-align: center;
      margin: 5px 0px;
      font-size: 13px; }

      label.tmFolderLabel {
      background-color: var(--cwsc-inpt-1);
      color: var(--cwsc-txt-4);
      border: 2px solid var(--cwsc-brdr-3);
      border-radius: 3px !important;
      padding: 0px;
      width: 58px;
      text-align: center;
      margin: 5px 0px;
      font-size: 13px; }

      div#blockField {
      position: absolute;
      top: 55px;
      left: 213px;
      margin: 10px; }

      table.tmTable {
      background-color: var(--cwsc-bckg-7) !important; }

      button#tmClearButton {
      background-color: var(--cwsc-inpt-1);
      color: var(--cwsc-txt-4);
      border: 2px solid var(--cwsc-brdr-3);
      border-radius: 3px !important;
      width: 185px;
      padding: 3px 10px;
      margin: 0px 10px; }
        </style>`

        if (1==1) {
         $('head').append(tmCSS);
        }
      }

      let proj = globals.tmBTNSShowMap;
      let page = globals.tmSelectedMap;
      let text = '0';
      let mark = 'tmThingSafe';

      $("#tmBlock").draggable({
        containment: "document",
        handle: "#tmHeader",
        drag: function () {
          let offset = $(this).offset();
          let xPos = offset.left;
          let yPos = offset.top;
            setSettings('tmTecPosX', offset.left);
            setSettings('tmTecPosY', offset.top);
        }
      });

      let selFolder = getSettings('tmSelFolder');
      if (selFolder !== null) {
        if (!$('#tmFolder' + selFolder).length) {
          selFolder = '0';
        }
        $('#tmFolder' + selFolder).click();
        $('.tmLocLabel').hide();
        $('.tmLocLabel[folder=' + selFolder + ']').show();
        let selectedLoc = getSettings('tmSelectedMap');
        $('#tmLoc' + selectedLoc).click();
      }

      function tmSetStyle($elem, style) {
        $elem.removeClass('tmThingSafe tmThingUnsafe tmThingPerehod').addClass(style);
        if (proj) {
          let col = $elem.index();
          let row = $elem.parent().index();
          $('#cages > tbody > tr').eq(row).children().eq(col).removeClass('tmThingSafe tmThingUnsafe tmThingPerehod').addClass(style);
        }
      }
      function tmDraw() {
        $('.tmTable[page=' + page + '] td.tmThingSafe, .tmTable[page=' + page + '] td.tmThingUnsafe, .tmTable[page=' + page + '] td.tmThingPerehod').each(function () {
          let col = $(this).index();
          let row = $(this).parent().index();
          $('#cages > tbody > tr').eq(row).children().eq(col).addClass($(this)[0].classList.value);
            if ($(this).hasClass('tmThingSafe') || $(this).hasClass('tmThingSafeDef')) {
              $('#cages > tbody > tr').eq(row).children().eq(col).addClass('tmThingSafe');
            }
            else if ($(this).hasClass('tmThingUnsafe')) {
              $('#cages > tbody > tr').eq(row).children().eq(col).addClass('tmThingUnsafe');
            }
            else if ($(this).hasClass('tmThingPerehod')) {
              $('#cages > tbody > tr').eq(row).children().eq(col).addClass('tmThingPerehod');
            }
        })
      }

      $('body').on('change', 'input[name="tmFolder"]', function () {
        let folder = $(this).val();
        setSettings('tmSelFolder', folder);
        $('.tmLocLabel').hide();
        $('.tmLocLabel[folder=' + folder + ']').show();
        $('.tmLocLabel[folder=' + folder + ']')[0].click();
      });

      $('body').on('change', 'input[name="tmLoc"]', function () {
        $('.tmTable[page=' + page + ']').hide();
         page = $(this).val();
        $('.tmTable[page=' + page + ']').show();
         setSettings('tmSelectedMap', page)
        if (proj) {
          $('#cages > tbody > tr > td.tmThingSafe').each(function () {
            $(this).removeClass('tmThingSafe')
          });
          $('#cages > tbody > tr > td.tmThingUnsafe').each(function () {
            $(this).removeClass('tmThingUnsafe')
          });
          $('#cages > tbody > tr > td.tmThingPerehod').each(function () {
            $(this).removeClass('tmThingPerehod')
          });
          tmDraw();
        }
      });

      $('body').on('click', '#tmClearButton', function () {
        let ok = true;
        if (globals.tmClearConfirm) {
          ok = confirm('Очистить поле?');
        }
        if (ok) {
          $('.tmTable .tmThingSafeDef').removeClass('tmThingSafeDef');
          $('.tmTable[page=' + page + '] td:not(.tmThingPerehod)').each(function () {
            $(this).html('');
            tmSetStyle($(this), '');
          });
          tmMaps[page] = $('.tmTable[page=' + page + ']').html();
          setSettings('tmMaps', JSON.stringify(tmMaps));
        }
      });

      $('body').on('change', 'input[name="tmThing"]', function () {
        text = $(this).val();
        mark = $(this).attr('mark');
      });

      $('body').on('click', '.tmTable td', function () {
        $(this).html(text).removeClass('tmThingSafe tmThingUnsafe tmThingPerehod').addClass(mark);
        if (proj) {
          let col = $(this).index();
          let row = $(this).parent().index();
          $('#cages > tbody > tr').eq(row).children().eq(col).removeClass('tmThingSafe tmThingUnsafe tmThingPerehod').addClass(mark);
        }
        tmMaps[page] = $('.tmTable[page=' + page + ']').html();
        setSettings('tmMaps', JSON.stringify(tmMaps));
      });

      if (globals['tmFolded']) {
        $('#tmBlock').addClass('folded');
        $('svg#svgPlus').hide();
      }
      if (!globals['tmFolded']) {
        $('svg#svgMinus').hide();
      }

      $('body').on('click', 'svg#svgMinus', function () {
        $('#tmBlock').toggleClass('folded');
        $('svg#svgMinus').hide();
        $('svg#svgPlus').show();
      });
      $('body').on('click', 'svg#svgPlus', function () {
        $('#tmBlock').toggleClass('folded');
        $('svg#svgPlus').hide();
        $('svg#svgMinus').show();
      });

      $(document).ready(function () {
        if ($('#tmBTNSShowMap').prop('checked')) {
          proj = true;
          tmDraw();
        }
      });

      $('body').on('change', '#tmBTNSShowMap', function () {
        if ($(this).prop('checked')) {
          proj = true;
          tmDraw();
        } else {
          proj = false;
          $('#cages > tbody > tr > td.tmThingSafe').removeClass('tmThingSafe');
          $('#cages > tbody > tr > td.tmThingUnsafe').removeClass('tmThingUnsafe');
          $('#cages > tbody > tr > td.tmThingPerehod').removeClass('tmThingPerehod');
        }
      });

      $('.tmBTNS').on('change', function() {
        let key = this.id;
        let val = this.type === 'checkbox' ? this.checked : this.value;
        setSettings(key, val);
      });
    });
  }
}

function all() {
  function addFont() {
    let link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css?family=Montserrat';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    if (!globals['cwscriptDarkTheme']) {
      let cssDlyaCWScripta = `
       <style id="cssPalette">
      :root {
      --desBckg1: ${(globals['dsghnClr'])};
      --desClr1: ${(globals['dsghnClr2'])};
      --desBckgImg1: url(${(globals['dsghnImg'])});
    }

:root {
--cwsc-scrl-1: #3F2D29;
--cwsc-scrl-2: #AD7B3C;
--cwsc-inpt-1: #342521;
--cwsc-inpt-2: #1d1514;
--cwsc-bttn-1: #342521;

--cwsc-bckg-1: #3F2D29;
--cwsc-bckg-2: #75524C;
--cwsc-bckg-3: #A47C74;
--cwsc-bckg-4: #D1BCB7;
--cwsc-bckg-5: #CAAC88;
--cwsc-bckg-6: #DBAEFF;
--cwsc-bckg-7: #75524C50;

--cwsc-brdr-1: #3F2D29;
--cwsc-brdr-2: #AD7B3C;
--cwsc-brdr-3: #1b1311;
--cwsc-brdr-4: #a07e7740;
--cwsc-brdr-5: #c9bdb090;

--cwsc-txt-1: #180E0D;
--cwsc-txt-2: #CAAC88;
--cwsc-txt-3: #AD7B3C;
--cwsc-txt-4: #c9bdb0;
--cwsc-txt-5: #372a1e;

--cwsc-fltr-vk: hue-rotate(152deg) contrast(35%) brightness(40%);
--cwsc-fltr-tg: hue-rotate(167deg) contrast(40%) brightness(38%);
--cwsc-fltr-bs: hue-rotate(350deg) contrast(37%) brightness(37%);

--tm-safe: rgba(255,255,255,.6);
--tm-unsafe: rgba(204,102,0,.45);
--tm-location: rgba(255,255,255,1);
--tm-safe-cage: rgba(247, 255, 236, .2);
--tm-unsafe-cage: rgba(43, 11, 11, .5);
--tm-location-cage: rgba(247, 255, 236, .4);

--cwdf-bckg-1: #333;
--cwdf-brdr-1: #000;
--cwdf-brdr-2: #ff0;
--cwdf-txt-1: #fff;
--cwdf-txt-2: #000; }

       </style>`
      $('head').append(cssDlyaCWScripta);
    }
    if (globals['cwscriptDarkTheme']) {
      let cssDlyaCWScripta = `
       <style id="cssPalette">

      :root {
      --desBckg1: ${(globals['dsghnClr'])};
      --desClr1: ${(globals['dsghnClr2'])};
      --desBckgImg1: url(${(globals['dsghnImg'])});
    }
        html {
        --scrlClr1: #272727;
        --scrlClr2: #404040;
        --hrClr1: #29292930;
        --txtClr1: #b9b9b9;
        --txtClr2: #070707;
        --txtClr3: #fff;
        --txtClr4: #282828;
        --brdrClr1: #888;
        --brdrClr2: #ff0;
        --brdrClr3: #000;
        --brdrClr4: #282828;
        --brdrClr5: #8c8c8c;
        --bckgClr1: #282828;
        --bckgClr2: #5e5e5e;
        --bckgClr3: #333;
        --bckgClr4: #15151550;
        --bckgClr5: #DBAEFF;
        --bckgClr6: #BB8DEB;
        --bckgClr7: #404040;
        --bckgClr8: #29292930;
        --bckgClr9: #777; }
       </style>`
      $('head').append(cssDlyaCWScripta);
    }
   };
  addFont();
}
