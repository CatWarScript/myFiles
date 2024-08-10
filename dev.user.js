// ==UserScript==
// @name         CatWar Script DEV
// @version      0.3
// @description  Новый мод-скрипт для браузерной игры CatWar. Обычно разработчиков скрипта держат в подвале, чтобы они хоть что-то делали.
// @author       Krivodushie & Psiii
// @copyright    2024 Дурное Сновидение (https://catwar.su/cat1293224) & Весело (https://catwar.su/cat590698)
// @license      MIT; https://opensource.org/licenses/MIT
// @updateURL    1
// @downloadURL  2
// @match        *://catwar.su/*
// @grant        GM_xmlhttpRequest
// @grant        GM.xmlHttpRequest
// @grant        GM_addStyle
// @require      https://code.jquery.com/jquery-3.4.1.min.js
// @require      https://abstract-class-shed.github.io/cwshed/jquery-ui.js
// @require      https://raw.githubusercontent.com/litera/jquery-scrollintoview/master/jquery.scrollintoview.min.js
// ==/UserScript==

'use strict';

const csDefaults = {
     'textTemplates': true //               ШАБЛОНЫ В ЛС
      ,'toggleTT': false //                  Сворачивать ли шаблоны ЛС по умолчанию
      ,'ttReplaceTheme': true //             Заменять ли тему сообщения названием шаблона?
     ,'ttBlog': true //                     ШАБЛОНЫ В БЛОГАХ И ЛЕНТЕ
      ,'toggleTTBlog': true //               Сворачивать ли шаблоны БЛОГОЛЕНТЫ по умолчанию
      ,'ttReplaceThemeB': true //            Вставлять ли название шаблона как название поста?
     ,'ttChat': true //                     ШАБЛОНЫ В ЧАТЕ
      ,'toggleTTChat': true //               Сворачивать ли шаблоны ЧАТА по умолчанию

     ,'inGameClock': false //               ЧАСЫ В ИГРОВОЙ
      ,'isClockMoscow': true //              Московсике ли часы?
      ,'isDateShow': true //                 Показывать ли дату?
      ,'movableClocks': false //             Перетаскиваемые часы
      ,'clockFontWeight': '17' //            Размер шрифта часов



    ,'customDefects': false //              ОТОБРАЖЕНИЕ ДЕФЕКТОВ В ИГРОВОЙ
     ,'cdSColors': true //                   Выделять ли клетку цветом?
     ,'cdSRamki': true //                    Выделять ли клетку рамкой? (Да/Нет)
     ,'cdOpacity': "0.3" //                  Прозрачность выделения клетки
     ,'cdSIcon': true //                     Показывать ли иконки дефектов в игровой?
     ,'cdCRani': "#4646ff" //                РАНЫ (ЦВЕТ)
      ,'cdSRani1': true //                    1 стадия
      ,'cdSRani2': true //                    2 стадия
      ,'cdSRani3': true //                    3 стадия
      ,'cdSRani3B': true //                   3 стадия (!)
      ,'cdSRani4': true //                    4 стадия
      ,'cdSRani4B': true //                   4 стадия (!!!)
     ,'cdCPoison': "#ff4646" //              ОТРАВЛЕНИЕ (ЦВЕТ)
      ,'cdSPoison1': true //                  1 стадия
      ,'cdSPoison2': true //                  2 стадия
      ,'cdSPoison3': true //                  3 стадия
      ,'cdSPoison3B': true //                 3 стадия (!)
      ,'cdSPoison4': true //                  4 стадия
      ,'cdSPoison4B': true //                 4 стадия (!!!)
     ,'cdCTrauma': "#46ffef"  //             УШИБЫ (ЦВЕТ)
      ,'cdSTrauma1': true //                  1 стадия
      ,'cdSTrauma2': true //                  2 стадия
      ,'cdSTrauma3': true //                  3 стадия
      ,'cdSTrauma3B': true //                 3 стадия (!)
      ,'cdSTrauma4': true //                  4 стадия
      ,'cdSTrauma4B': true //                 4 стадия (!!!)
     ,'cdCDrown': "#68ff46" //               ПЕРЕЛОМЫ (ЦВЕТ)
      ,'cdSDrown1': true //                   1 стадия
      ,'cdSDrown2': true //                   2 стадия
      ,'cdSDrown3': true //                   3 стадия
      ,'cdSDrown3B': true //                  3 стадия (!)
      ,'cdSDrown4': true //                   4 стадия
      ,'cdSDrown4B': true //                  4 стадия (!!!)
     ,'cdCGryaz': "#9446ff" //               ГРЯЗЬ (ЦВЕТ)
      ,'cdSGryaz1': true //                   1 стадия
      ,'cdSGryaz2': true //                   2 стадия
      ,'cdSGryaz3': true //                   3 стадия
      ,'cdSGryaz3B': true //                  3 стадия (!)
      ,'cdSGryaz4': true //                   4 стадия
      ,'cdSGryaz4B': true //                  4 стадия (!!!)
     ,'cdSCough': true //                    КАШЕЛЬ
      ,'cdCCough': "#eeff46" //               Цвет кашля
     ,'cdSPodstilki': true //                ПОДСТИЛКИ
      ,'cdCPodstilki': "#79553d" //           Цвет подстилок
     ,'cdSDivers': false //                  НЫРЯЮЩИЕ (Показываются картиночкой)

    ,'customItems': true //                 ОТОБРАЖЕНИЕ ПОЛЕЗНЫХ РЕСУРСОВ В ИГРОВОЙ
     ,'ciSHerb': true //                     Травы
      ,'ciCHerb': '#2bff75' //                Цвет трав
     ,'ciSMoss': false //                    Мох
      ,'ciCMoss': '#2bff75' //                Цвет мха
     ,'ciSWeb': false //                     Паутина
      ,'ciCWeb': '#2bff75' //                 Цвет паутины
     ,'ciSStick': false //                   Ветки
      ,'ciCStick': '#2bff75' //               Цвет веток
     ,'ciSDust': false //                    Пыль
      ,'ciCDust': '#c096e2' //                Цвет пыли
     ,'ciSMusor': false //                   Мусор
      ,'ciCMusor': '#ff2b2b' //               Цвет мусора
     ,'ciOpacity': '0.25' //                 Прозрачность выделения клеток с предметами

 //                                        ЛИЧНЫЕ СООБЩЕНИЯ
    ,'dontReadenLS': false //               Непрочитанные ЛС для себя
    ,'timerForLS': false //                 Таймер до удаления ЛС

 //                                        ИГРОВАЯ - БОЕРЕЖИМ
    ,'phoneFightPanel': false //            Переместить кнопочки боережима для телефонщиков
    ,'friendlyCatWar': false //             Удалить кнопки захода в опасные БР
    ,'deleteFPTitles': false //             Убрать тайтлы у кнопок боережима
    ,'showButterflyBots': false //          Показывать бота-бабочку для прокачки бу

 //                                         СПИСОК ДРУЗЕЙ И ВРАГОВ
    ,'showEnemy': true //                    Показывать котиков из списка врагов в Игровой?
     ,'enemyList': [] //                     Список врагов (обновляется при обновлении страницы списка врагов)
     ,'enemyColor': '#FFA500' //             Цвет выделения врагов в игровой

 //                                        РАЗНОЕ
    ,'brightGameField': false //            Выключить затемнение поля игровой
    ,'nightLagsWarning': true //            Предупреждение о лагах в 3-4 ночи
    ,'darkCatTooltip': false //             Тёмное окошко информации о котах
    ,'boneCorrectTimer': false //           Таймер ношения костоправов
    ,'toggleBoneTimer': false //            Свернуть таймер ношения костоправов
    ,'hideWoundWarning': true //            Скрыть предупреждение о ранах
    ,'hideFieldButton': false //            Кнопочка "Скрыть поле" для ПК-версии сайта
    ,'newInfoBlock': true // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ДОБАВИТЬ ПОЧИНЕННОЕ ОКОШКО ИНФЫ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    ,'autoHidingBlocks': false //           Автосворачивание блоков
     ,'ahbHistory': true //                  История
     ,'ahbRelatives': true //                Родственные связи
     ,'ahbParameter': true //                Параметры и навыки
    ,'actionEndTimer': true //             Таймер до окончания действия как на телефоне !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ДОДЕЛАТЬ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    ,'diverSiren': false //                Громкие звуки при большом сне на нырялках !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ДОБАВИТЬ ВЫДЕЛЕНИЕ ВКЛЮЧЕНЫ ЛИ ОНИ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
     ,'diverSirenMinutes' : 35 //           На какой минуте начинает срабатывать сирена?
     ,'diverSirenVol': 0.7 //               Громкость звука (Дефолтный звук - сирена минус 10 социальный кредит)
     ,'diverSirenHref' : "https://github.com/CatWarScript/CatWarScript/raw/main/audios/SIRENA_SOCIAL_CREDIT.mp3"
     ,'dsY': 50
     ,'dsX': 50

    ,'treeMap': true //                    ОКОШКО ЛАЗАЛОК
     ,'tmResetNote': true //                Уведомление при изменении карты
     ,'tmResetVolume': 0.5 //               Громкость уведомления об изменении карты
     ,'tmResetSource': 'https://abstract-class-shed.github.io/cwshed/refresh.wav'
     ,'tmShowVolume': true //               Показывать громкость звуков в чате?
     ,'tmClearConfirm': true //             Запрашивать подтверждение при очистке карты?
     ,'tmFolded': true //                   Окошко изначально свёрнуто?
     ,'tmBTNSShowMap': false //             Показывать карту на игровой
     ,'tmSelectedMap': 5 //                 Выбранная карта
     ,'tmVariant': 1 //                     Вариант визуала окошка ЛУ
     ,'tmTecPosY': 50 //                    Пиксели окошка сверху
     ,'tmTecPosX': 50 //                    Пиксели окошка слева
     ,'tmTecFolNames': ['А', 'Б', 'В', 'Г']
     ,'tmTecFolStatus':[true, true, true, true]
     ,'tmTecLocNames': ['1А', '2А', '3А', '4А', '5А', '6А', '1Б', '2Б', '3Б', '4Б', '5Б', '6Б', '1В', '2В', '3В', '4В', '5В', '6В', '1Г', '2Г', '3Г', '4Г', '5Г', '6Г']
     ,'tmTecLocStatus':[true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]

 //                                        СТИЛИ
    ,'cwscriptDarkTheme': false //          Тёмная тема для фишек из скрипта
    ,'cageGrid': true //                    Сетка ячеек локации
     ,'cgColor': "#ffffff" //                Цвет сетки ячеек
     ,'cageGridV' : false //                 Сетка как в Варомоде
     ,'cgOpacity': "0.25" //                 Прозрачность сетки
    ,'desighnColors': false //    (beta)    Основные моменты в стилях в зависимости от дизайна
     ,'dsghnClr': '#random' //    (beta)     Цвет 1
     ,'dsghnClr2': '#random' //   (beta)     Цвет 2
     ,'dsghnImg': '' //           (beta)     Фоновое изображение
    ,'customGame': true //        (beta)   ПОЛЬЗОВАТЕЛЬСКАЯ КАСТОМНАЯ ИГРОВАЯ (Настройки)
     ,'compactTool': true //      (beta)    Инструмент отладки на страничке настройки кастомной игровой
     ,'ctTecPosX': 50 //          (beta)    Положение инструмента отладки (Слева)
     ,'ctTecPosY': 50 //          (beta)    Положение инструмента отладки (Сверху)
     ,'playerCustom': false //    (beta)    Включить кастомную компактную игровую
     ,'cgpcImport': '' //         (beta)    Окошко импорта кастомной компактной игровой
     ,'cgpcExport': '' //         (beta)    Окошко экспорта кастомной компактной игровой
    ,'compactDefault1': false //  (beta)    Компактная игровая (Вариант 1)
    ,'compactDefault2': false //  (beta)    Компактная игровая (Вариант 2)
    ,'compactDefault3': false //  (beta)    Компактная игровая (Вариант 3)

    ,'cgBorderWid': 3 ,'cgBorderType': 'solid' ,'cgBorderCol': '#000000' ,'cgBorderRad': 6 ,'cgIsBorderRad': true
    ,'cgBodyCol': '#ff0000' ,'cgFieldWid': '' ,'cgFieldHei': '' ,'cgFieldX': 500 ,'cgFieldY': 500 ,'cgIsFieldFix': false
    ,'cgParWid': 500 ,'cgParHei': 500 ,'cgParX': 500 ,'cgParY': 500 ,'cgParCol': '#ffdead', 'cgParFCol': '#000000'
    ,'cgTOSWid': 500 ,'cgTOSHei': 500 ,'cgTOSX': 500 ,'cgTOSY': 500, 'cgTOSCol': '#000000'
    ,'cgSkyWid': 500 ,'cgSkyHei': 500 ,'cgSkyX': 500 ,'cgSkyY': 500
    ,'cgSmallWid': 500 ,'cgSmallHei': 500 ,'cgSmallX': 500 ,'cgSmallY': 500, 'cgSmallCol': '#ffdead', 'cgSmallFCol': '#000000'
    ,'cgOCLWid': 500 ,'cgOCLHei': 500 ,'cgOCLX': 500 ,'cgOCLY': 500, 'cgOCLFCol': '#000000'
    ,'cgChatWid': 500 ,'cgChatHei': 500 ,'cgChatX': 500 ,'cgChatY': 500 ,'cgChatCol': '#f57a00', 'cgChatFCol': '#000000'
    ,'cgClockWid': 500 ,'cgClockHei': 500 ,'cgClockX': 500 ,'cgClockY': 500 ,'cgClockCol': '#ffdead', 'cgClockFCol': '#000000'
    ,'cgTBWid': 500 ,'cgTBHei': 500 ,'cgTBX': 500 ,'cgTBY': 500 ,'cgTBCol': '#ffdead', 'cgTBFCol': '#000000'
    ,'cgHisWid': 500 ,'cgHisHei': 500 ,'cgHisX': 500 ,'cgHisY': 500 ,'cgHisCol': '#ffdead', 'cgHisFCol': '#000000'
    ,'cgDeysWid': 500 ,'cgDeysHei': 500 ,'cgDeysX': 500 ,'cgDeysY': 500 ,'cgDeysCol': '#ffdead', 'cgDeysFCol': '#000000'
    ,'cgRotWid': 500 ,'cgRotHei': 500 ,'cgRotX': 500 ,'cgRotY': 500 ,'cgRotCol': '#ffdead', 'cgRotFCol': '#000000'
    ,'cgLocWid': 500 ,'cgLocHei': 500 ,'cgLocX': 500 ,'cgLocY': 500 ,'cgLocCol': '#ffffff', 'cgLocFCol': '#000000'
    ,'cgRSWid': 500 ,'cgRSHei': 500 ,'cgRSX': 500 ,'cgRSY': 500 ,'cgRSCol': '#ffdead', 'cgRSFCol': '#000000'
    ,'cgParAlertWid': 'h' ,'cgParAlertHei': 'u' ,'cgParAlertCol': 'i' ,'cgParAlertX': 500 ,'cgParAlertY': 500 ,'cgParAlertFCol': '#000000'
    ,'cgInfoH2DelMargins': true
    ,'cgInfoH2FontSize': 22
    ,'cgDelRSH2': false
    ,'cgDelHisH2': false
    ,'cgDelParH2': false
    ,'cgSeparateLocation': true
    ,'cgLocFW': 17 // фонт вейт локации
    ,'cgFontSize': 14 // Фонт вейт всего нахуй
    ,'cgBorders': true
    ,'cgTbBorder': true
    ,'cgSmallFW': 14 // Смалл фонт вейт
    ,'cgYouBG': ''  // Фон упомянания
    ,'cgYouFC': '' // Цвет упомянания
    ,'cgInputCol': '#ffffff'
    ,'cgInputFCol': '#000000'
    ,'cgInputBorders': true
    ,'cgIsTBBorderRad': true
    ,'cgIsLocBorderRad': true
    ,'cgDeleteScrolls': true
    ,'cgChatSliderCol': '#fece2f'
    ,'cgChatSliderBorderCol': '#d19405'

 //                                         БИБЛИОТЕКА КОСТЮМОВ
    ,'costumeLibrary': true //               Включить библиотеку костюмов
     ,'clLakeUniverse': true //              Озёрная Вселенная
     ,'clSeaUniverse': false //              Морская Вселенная
     ,'clCreatorUniverse': false //          Вселенная Творцов
     ,'watermarkCostumes': false //          Наш значок у костюмов из библиотеки
     ,'clMemeCostumes': true //              Показывать ли мемные костюмы
     ,'clRemoveAllTongues': false //        Спрятать все языки.. (К.. Куда?.. 😲)
     ,'clRemoveAllCostumes': false //       Убрать все костюмы
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

function removeSettings(key) {
  let setting = 'cs_n_' + key;
  window.localStorage.removeItem(setting);
}

function resetSettings(settingsToReset) {
    for (var i = 0; i < settingsToReset.length; i++) {
      let key = settingsToReset[i];
      removeSettings(key);
    }
    for (i = 0; i < settingsToReset.length; i++) {
      let key = settingsToReset[i];
      globals[key] = csDefaults[key];
    }
    $('.cs-set').each(function() {
      let key = this.id;
      if (settingsToReset.includes(key)) {
        let val = csDefaults[key];
        if (this.type === 'checkbox') {
          this.checked = val;
        }
        else {
          this.value = val;
        }
      }
    });
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

function nightLagsWarning() {
  function showWarning() {
    let now = new Date();
    now.setHours(now.getUTCHours() + 3);
    let hours = now.getHours();
    let minutes = now.getMinutes();
    if ((hours === 2 && minutes >= 50) || (hours === 3) || (hours === 4 && minutes <= 10)) {
      if ($('#warning').length === 0) {
        let warningHtml = `<div id="warning" style="background: white; font-weight: bold; text-align: justify; padding: 2px 10px; position: fixed; z-index: 1;">
                          Настоятельно рекомендуем Вам покинуть локации для лазания и ныряния в промежутке с 03:00 до 04:00 по МСК. В случае продолжения нахождения на них не используйте горячие клавиши при перемещении между локациями, а также не нажимайте на переходы по несколько раз. Некоторый контент может находиться под данным уведомлением. <a id="hideWarning" href="#">Скрыть</a>
                          </div>`;
        $('body').prepend(warningHtml);
        $('#hideWarning').click(function() {
          $('#warning').remove();
        });
      }
    }
    else {
      $('#warning').remove();
    }
  }
  showWarning();
}


function hexToRGBA(hexCode, opacity) {
  if (!/^#[0-9A-Fa-f]{6}$/.test(hexCode)) {
    console.error("Неверный HEX-код:", hexCode);
    return;
  }
  let r = parseInt(hexCode.substring(1, 3), 16);
  let g = parseInt(hexCode.substring(3, 5), 16);
  let b = parseInt(hexCode.substring(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
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
const isSite = !(/^https:\/\/\w?\.?catwar.su\/cw3(\/kns|\/jagd)?.*/.test(pageurl));
const isDM = (/^https:\/\/\w?\.?catwar.su\/ls/.test(pageurl));
const isSett = (/^https:\/\/\w?\.?catwar.su\/settings/.test(pageurl));
const isMyCat = (/^https:\/\/\w?\.?catwar.su\/$/.test(pageurl));
const isAll = (/^https:\/\/\w?\.?catwar.su\/.*/.test(pageurl));
const isFae = (/^https:\/\/\w?\.?catwar.su\/fae/.test(pageurl));
const isBlogs = (/^https:\/\/\w?\.?catwar.su\/(blogs|sniff)/.test(pageurl));
const isChat = (/^https:\/\/\w?\.?catwar.su\/chat/.test(pageurl));
const isCustom = (/^https:\/\/\w?\.?catwar.su\/scriptcustomcw3/.test(pageurl));

try {
  if (isCW3) cw3();
  if (isDM) dm();
  if (isSite) site();
  if (isSett) sett();
  if (isMyCat) myCat();
  if (isAll) all();
  if (isFae) fae();
  if (isBlogs) blogs();
  if (isChat) chat();
  if (isCustom) custom();
}
catch (error) {
  console.error("An error occurred: ", error);
}

// ...
// ...
// ...

function sett() {
  let cssForSett = `
   <style>
    td#tableContent::-webkit-scrollbar {
    width: 10px; }

    td#tableContent::-webkit-scrollbar-track {
    background: var(--cwsc-scrl-1) !important;
    border-radius: 3px; }

    td#tableContent::-webkit-scrollbar-thumb {
    background: var(--cwsc-scrl-2) !important;
    border-radius: 3px; }

    table#tableCWScSet {
    font-family: Montserrat;
    outline: 5px solid var(--cwsc-brdr-1);
    margin: 10px;
    border-radius: 15px !important;
    color: var(--cwsc-txt-1);
    width: 98%; }

    td#tableHeader {
    vertical-align: top !important;
    background-color: var(--cwsc-bckg-1);
    color: var(--cwsc-txt-2);
    border-radius: 10px 0px 0px 10px !important;
    border: 4px solid var(--cwsc-brdr-2);
    border-top: none;
    border-bottom: none;
    border-left: none;
    width: 30%; }

    td#tableHeader>table {
    width: 100%; }

    tr#cwsSetHeader {
    border: 4px solid var(--cwsc-brdr-2);
    border-top: none;
    border-left: none;
    border-right: none; }

    div#cwsSet>b {
    display: flex !important;
    justify-content: center;
    text-transform: uppercase;
    color: var(--cwsc-txt-2);
    font-size: 28px;
    letter-spacing: 20px;
    padding: 15px 0px;
    margin-left: 20px; }

    div#headerButtons {
    position: relative;
    width: 100%;
    padding: 15px 0px;
    padding-top: 15px; }

    div#headerButtons>a:not([id="info"])::before{
    content: "✦ "; }

    div#headerButtons>a {
    display: inline-block;
    margin: 10px 20px; }

    div#headerButtons>a.active {
    transition: 0.5s;
    text-decoration: none;
    font-weight: bold;
    letter-spacing: 2px;
    color: var(--cwsc-txt-3) !important; }

    div#headerButtons>a.active:hover {
    transition: 0.5s;
    text-decoration: none;
    filter: brightness(140%); }

    div#headerButtons>a.passive {
    transition: 0.5s;
    text-decoration: none;
    letter-spacing: 2px;
    color: var(--cwsc-txt-2) !important; }

    div#headerButtons>a.passive:hover {
    transition: 0.5s;
    text-decoration: none;
    filter: brightness(140%); }

    a#info {
    display: flex !important;
    justify-content: center;
    position: relative;
    top: 395px;
    letter-spacing: 10px !important; }

    div#headerButtons>a#info::before {
    content: "✦ "; }

    div#headerButtons>a#info::after {
    content: " ✦"; }

    div.contacts {
    display: flex;
    justify-content: center;
    position: relative;
    top: 355px; }

    div.contacts>div {
    background-color: var(--cwsc-bckg-5);
    border-radius: 10px;
    margin: 15px;
    padding: 2px 3px 0px 3px; }

    div.contacts>div:hover {
    background-color: var(--cwsc-bckg-4); }

    a#vk {
    filter: var(--cwsc-fltr-vk); }

    a#vk:hover {
    filter: none; }

    a#tg {
    filter: var(--cwsc-fltr-tg); }

    a#tg:hover {
    filter: none; }

    a#bs {
    filter: var(--cwsc-fltr-bs); }

    a#bs:hover {
    filter: none; }


    td#tableContent {
    display: block;
    overflow: auto;
    background-color: var(--cwsc-bckg-2);
    border-radius: 0px 10px 10px 0px !important;
    min-height: 700px !important;
    max-height: 700px !important;
    padding-left: 10px;
    padding-bottom: 10px; }

    div#search  {
    display: block !important;
    width: 95% !important;
    background-color: var(--cwsc-bckg-4);
    border-radius: 10px;
    font-size: 25px;
    margin: 10px;
    padding: 10px; }

      table#defectTable tr td {
        border: #000 2px solid;
        width: 100px;
        height: 20px;
        text-align: center;
      }
      table#defectTable tr td input[type=color]  {
        width: 50px !important;
      }
      table#defectTable tr td input[type=checkbox]  {
        margin: 7px;
        margin-top: 4px;
        margin-bottom: 4px;
      }
   </style>`
  $('head').append(cssForSett);

  const html = `<br><br><table id="tableCWScSet"><tbody><tr><td id="tableHeader"><table><tbody><tr id="cwsSetHeader"><td>
    <div id="cwsSet"><b>Настройки</b></div></td></tr><tr id="cwsSetMods"><td>
    <div class="header" div id="headerButtons">
      <a href="#" class="active" data-target="1">CatWar Script</a><br>
      <a href="#" class="passive" data-target="2">Варомод</a><br>
      <a href="#" class="passive" data-target="3">CW:Shed</a><br>
      <a href="#" id="info" class="passive" data-target="4">О нас</a>
    </div><br></td></tr></tbody></table>
     <div class="contacts">
       <div><a id="vk">
         <svg viewBox="0 0 48 48" width="48px" height="48px" version="1.1" id="svg1" sodipodi:docname="icons8-vk-circled.svg" inkscape:version="1.3.2 (091e20e, 2023-11-25, custom)" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><defs id="defs1" /><sodipodi:namedview id="namedview1" pagecolor="#ffffff" bordercolor="#000000" borderopacity="0.25" inkscape:showpageshadow="2" inkscape:pageopacity="0.0" inkscape:pagecheckerboard="0" inkscape:deskcolor="#d1d1d1" showgrid="false" inkscape:zoom="15.604167" inkscape:cx="24" inkscape:cy="24" inkscape:window-width="1680" inkscape:window-height="987" inkscape:window-x="1672" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="layer1" /><g inkscape:groupmode="layer" id="layer1" inkscape:label="Layer 1"><path id="circle1" style="display:inline;fill:#1976d2" d="M 24,4 A 20,20 0 0 0 4,24 20,20 0 0 0 24,44 20,20 0 0 0 44,24 20,20 0 0 0 24,4 Z M 12.890625,17 h 2.642578 c 0.660999,0 0.913969,0.29436 1.167969,1.068359 C 17.874171,22.000355 19.627579,25 20.517578,25 20.847578,25 21,24.840937 21,23.960938 V 20.337891 C 20.898,18.468892 20,18.307624 20,17.640625 20,17.319625 20.212141,17 20.619141,17 h 4.648437 C 25.826578,17 26,17.319673 26,18.013672 v 5.185547 C 26,23.786218 26.446047,24 26.623047,24 c 0.33,0 0.64,0.016 1.25,-0.625 1.880998,-2.214998 3.513672,-5.574219 3.513672,-5.574219 C 31.564719,17.399782 31.870251,17 32.53125,17 h 2.617188 c 0.585999,0 0.834609,0.263 0.849609,0.625 0.006,0.125 -0.01455,0.265016 -0.06055,0.416016 -0.33,1.600998 -3.715453,6.351562 -3.689453,6.351562 C 32.104047,24.638578 32.009,24.815 32,25 c -0.009,0.176 0.06105,0.360094 0.248047,0.621094 0.279,0.399999 0.886954,1.135907 1.501953,1.878906 1.109999,1.341999 1.99936,2.750172 2.193359,3.326172 C 35.984359,30.983172 36.003,31.124 36,31.25 35.986,31.745 35.637296,32 35.029297,32 h -2.619141 c -0.991999,0 -1.305158,-0.982002 -3.035156,-3 -1.499999,-1.749998 -2.277204,-2 -2.658203,-2 -0.534,0 -0.71775,0.132595 -0.71875,0.933594 V 30.90625 C 25.998047,31.573249 25.826436,32 24.148438,32 21.37844,32 18.249998,30.124997 15.875,26.875 12.600003,22.393004 12,18.494437 12,17.773438 12,17.373438 12.127626,17 12.890625,17 Z" /></g></svg>
       </a></div>
       <div><a id="tg">
         <svg viewBox="0 0 48 48" width="48px" height="48px" version="1.1" id="svg3" sodipodi:docname="icons8-telegram-app.svg" inkscape:version="1.3.2 (091e20e, 2023-11-25, custom)" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><defs id="defs3" /><sodipodi:namedview id="namedview3" pagecolor="#ffffff" bordercolor="#000000" borderopacity="0.25" inkscape:showpageshadow="2" inkscape:pageopacity="0.0" inkscape:pagecheckerboard="0" inkscape:deskcolor="#d1d1d1" inkscape:zoom="15.604167" inkscape:cx="24" inkscape:cy="24" inkscape:window-width="1680" inkscape:window-height="987" inkscape:window-x="1672" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="layer2" /><g inkscape:groupmode="layer" id="layer2" inkscape:label="Layer 1"><path id="circle1" style="fill:#29b6f6" d="M 24 4 A 20 20 0 0 0 4 24 A 20 20 0 0 0 24 44 A 20 20 0 0 0 44 24 A 20 20 0 0 0 24 4 z M 33.375 14 C 33.667 14 34 14.125 34 14.5 C 34 14.75 33.949219 15 33.949219 15 L 30.203125 34.126953 C 30.203125 34.126953 30.042982 35 28.958984 35 C 28.382986 35 28.085937 34.726562 28.085938 34.726562 L 23 30.505859 L 19.574219 33.878906 C 19.574219 33.878906 19.425562 33.993047 19.226562 33.998047 C 19.157564 34.000047 19.083812 33.989078 19.007812 33.955078 L 19.007812 33.957031 C 19.007812 33.957031 18.749734 33.933107 18.427734 32.912109 C 18.106736 31.892111 16 26 16 26 L 16.007812 25.996094 L 16.001953 25.992188 L 10.90625 24.636719 C 10.90625 24.636719 10 24.374998 10 23.625 C 10 23.000002 10.933594 22.701172 10.933594 22.701172 L 32.248047 14.234375 C 32.247047 14.233375 32.9 13.999 33.375 14 z " /></g></svg>
       </a></div>
       <div><a id="bs">
         <svg width="48" height="48" viewBox="0 0 48 47" version="1.1" id="svg4" sodipodi:docname="logoLetterB.4ec8e (1).svg" inkscape:version="1.3.2 (091e20e, 2023-11-25, custom)" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><sodipodi:namedview id="namedview4" pagecolor="#ffffff" bordercolor="#000000" borderopacity="0.25" inkscape:showpageshadow="2" inkscape:pageopacity="0.0" inkscape:pagecheckerboard="0" inkscape:deskcolor="#d1d1d1" inkscape:zoom="8.9571167" inkscape:cx="19.481716" inkscape:cy="24.059081" inkscape:window-width="1680" inkscape:window-height="987" inkscape:window-x="1672" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="svg4" /><defs id="defs4"><linearGradient id="linear0" gradientUnits="userSpaceOnUse" x1="6.4215002" y1="-6.46875" x2="-34.537899" y2="88.152298" gradientTransform="scale(0.557143,0.546512)"><stop offset="0" style="stop-color:rgb(93.72549%,47.058824%,16.078431%);stop-opacity:1;" id="stop1" /><stop offset="0.28" style="stop-color:rgb(94.117647%,41.176471%,16.470588%);stop-opacity:1;" id="stop2" /><stop offset="0.63" style="stop-color:rgb(94.509804%,36.862745%,17.254902%);stop-opacity:1;" id="stop3" /><stop offset="1" style="stop-color:rgb(94.509804%,35.294118%,17.254902%);stop-opacity:1;" id="stop4" /></linearGradient></defs><g id="surface1" transform="translate(4.5004891,0.0390625)"><path style="fill:url(#linear0);fill-rule:evenodd;stroke:none" d="M 9.34375,0 1.242188,28.027344 0.949219,29.011719 c -2.789063,9.636719 0.398437,17.785156 11.769531,17.910156 1.457031,-3.65625 3.46875,-8.699219 6.042969,-15.132813 H 12.601562 L 19.203125,8.847656 C 19.21875,8.792969 19.242188,8.738281 19.269531,8.6875 L 21.78125,0 Z M 27.753906,25.339844 12.761719,46.921875 h 0.234375 c 11.074218,0 22.453125,-8.191406 25.261718,-17.914063 2.621094,-9.03125 -1.832031,-16.503906 -11.332031,-17.496093 l -5.53125,13.828125 z m 0,0" id="path4" /></g></svg>
       </a></div>
     </div></td><td id="tableContent"><div id="search">CatWar Script</div><table><tbody><tr><td>
     <div class="content">
     <div class="active" id="div1">

      <div id="sbTemplates" class="setHMid">
       <div id="cwsSetList"><div><input class="cs-set" id="textTemplates" type="checkbox"${globals.textTemplates?' checked':''}><label for="textTemplates">Блок с шаблонами в личных сообщениях</label></div>
       <div><input class="cs-set" id="toggleTT" type="checkbox"${globals.toggleTT?' checked':''}><label for="toggleTT">Изначально сворачивать блок с шаблонами</label></div>
       <div><input class="cs-set" id="ttReplaceTheme" type="checkbox"${globals.ttReplaceTheme?' checked':''}><label for="ttReplaceTheme">Вставлять название шаблона в тему сообщения</label></div>
       <div><input class="cs-set" id="ttChat" type="checkbox"${globals.ttChat?' checked':''}><label for="ttChat">Отображать шаблоны в чатах</label></div>
       <div><input class="cs-set" id="toggleTTChat" type="checkbox"${globals.toggleTTChat?' checked':''}><label for="toggleTTChat">Сворачивать шаблоны чатов изначально</label></div>
       <div><input class="cs-set" id="bloglentTextTemplates" type="checkbox"${globals.bloglentTextTemplates?' checked':''}><label for="bloglentTextTemplates">Отображать шаблоны для БЛОГОЛЕНТЫ</label></div>
       <div><input class="cs-set" id="toggleTTBlog" type="checkbox"${globals.toggleTTBlog?' checked':''}><label for="toggleTTBlog">Сворачивать шаблоны БЛОГОЛЕНТЫ изначально</label></div>
       <div><input class="cs-set" id="ttReplaceThemeB" type="checkbox"${globals.ttReplaceThemeB?' checked':''}><label for="ttReplaceThemeB">Вставлять название шаблона как название поста</label></div><hr>
      </div>

      <div id="sbClock" class="setHMid">
       <div><input class="cs-set" id="inGameClock" type="checkbox"${globals.inGameClock?' checked':''}><label for="inGameClock">Часы в игровой</label></div>
       <div><input class="cs-set" id="showDate" type="checkbox"${globals.isDateShow?' checked':''}><label for="showDate">Показывать дату</label></div>
       <div><input class="cs-set" id="movableClocks" type="checkbox"${globals.movableClocks?' checked':''}><label for="movableClocks">Перетаскиваемый блок часов (на телефонах перетаскивание пока не работает)</label></div>
       <table><tr><td><div><input class="cs-set" id="deviceTime" type="radio" name="timeSource"${!globals.isClockMoscow?' checked':''}><label for="deviceTime">Время с устройства</label></div></td>
       <td><div><input class="cs-set" id="moscowTime" type="radio" name="timeSource"${globals.isClockMoscow?' checked':''}><label for="moscowTime">Московское время</label></div></td></tr></table>
       <div><input class="cs-set" id="clockFontWeight" type="number"${globals.clockFontWeight?' checked':''} style="width: 55px;"> <label for="clockFontWeight">Размер шрифта часов</label></div>
      </div>

       <div><input class="cs-set" id="phoneFightPanel" type="checkbox"${globals.phoneFightPanel?' checked':''}><label for="phoneFightPanel">Переместить кнопочки окошка БР для телефонщиков</label></div><hr>
       <div><input class="cs-set" id="friendlyCatWar" type="checkbox"${globals.friendlyCatWar?' checked':''}><label for="friendlyCatWar">Убрать кнопки входа в опасные боережимы</label></div><hr>

       <div><input class="cs-set" id="nightLagsWarning" type="checkbox"${globals.nightLagsWarning?' checked':''}><label for="nightLagsWarning">Предупреждение об осторожности на водах/лазательных локациях в период с 03:00 по 04:00 по МСК</label></div><hr>

        <div id="dontRdnLS"><input class="cs-set" id="dontReadenLS" type="checkbox"${globals.dontReadenLS?' checked':''}><label for="dontReadenLS">“Непрочитанное ЛС” только для себя</label></div>
       <button type="button" id="clearDontReadButton">Нажми меня!</button><label for="clearDontReadButton">Кнопка, чтобы починить (обнулить) счётчик непрочитанных ЛС</label><br><hr>
       <div><input class="cs-set" id="timerForLS" type="checkbox"${globals.timerForLS?' checked':''}><label for="timerForLS">Выделение сообщений в ЛС, которые скоро удалятся (выделяет непрочитанные ЛС, которые были получены/отправлены от 6 до 14 дней назад)</label></div><hr>

        <div><input class="cs-set" id="hideWoundWarning" type="checkbox"${globals.hideWoundWarning?' checked':''}><label for="hideWoundWarning">Убрать предупреждение "Вы ранены" со всех страниц сайта</label></div><hr>
       <div><input class="cs-set" id="brightGameField" type="checkbox"${globals.brightGameField?' checked':''}><label for="brightGameField">Не затемнять окошко игровой</label></div><hr>
       <div><input class="cs-set" id="showButterflyBots" type="checkbox"${globals.showButterflyBots?' checked':''}><label for="showButterflyBots">Выделять бота-бабочку для прокачки БУ в Игровой</label></div><hr>
       <div><input class="cs-set" id="darkCatTooltip" type="checkbox"${globals.darkCatTooltip?' checked':''}><label for="darkCatTooltip">Тёмное окошко информации о персонажах в Игровой</label></div><hr>

      <div id="sbBoneCorrect" class="setHMid">
       <div><input class="cs-set" id="boneCorrectTimer" type="checkbox"${globals.boneCorrectTimer?' checked':''}><label for="boneCorrectTimer">Таймер снятия костоправов</label></div>
       <div><input class="cs-set" id="toggleBoneTimer" type="checkbox"${globals.toggleBoneTimer?' checked':''}><label for="toggleBoneTimer">Изначально сворачивать блок таймера костоправов</label></div><hr>
      </div>

       <div><input class="cs-set" id="deleteFPTitles" type="checkbox"${globals.deleteFPTitles?' checked':''}><label for="deleteFPTitles">Убрать подписи к кнопкам боережима <small>(Только для телефонов)</small></label></div><hr>



      <div id="sbCostumes" class="setHMid"> <span id="lastUpdateDate">k</span>
       <div><input class="cs-set" id="costumeLibrary" type="checkbox"${globals.costumeLibrary?' checked':''}><label for="costumeLibrary">Библиотека костюмов</label></div>
       <div><input class="cs-set" id="watermarkCostumes" type="checkbox"${globals.watermarkCostumes?' checked':''}><label for="watermarkCostumes">Наш значок у костюмов, добавленных библиотекой</label></div><br><br>
       <div><input class="cs-set" id="clRemoveAllTongues" type="checkbox"${globals.clRemoveAllTongues?' checked':''}><label for="clRemoveAllTongues">Убрать все языки</label></div>
       <div><input class="cs-set" id="clRemoveAllCostumes" type="checkbox"${globals.clRemoveAllCostumes?' checked':''}><label for="clRemoveAllCostumes">Убрать все костюмы</label></div>
      </div>

       <div><input class="cs-set" id="cwscriptDarkTheme" type="checkbox"${globals.cwscriptDarkTheme?' checked':''}><label for="cwscriptDarkTheme">Тёмная тема для функций из CWScript</label></div><hr>
       <div><input class="cs-set" id="cageGrid" type="checkbox"${globals.cageGrid?' checked':''}><label for="cageGrid">Сетка ячеек локации</label></div>
       <div><input class="cs-set" id="cgColor" type="color"${globals.cgColor?' checked':''} style="width: 35px;"><label for="cgColor">Цвет сетки ячеек локации</label></div>
       <div><input class="cs-set" id="cgOpacity" type="number"${globals.cgOpacity?' checked':''} style="width: 55px;" step="0.01" max="1" min="0"><label for="cgOpacity">Прозрачность сетки ячеек локации</label></div>
       <div><input class="cs-set" id="cageGridV" type="checkbox"${globals.cageGridV?' checked':''}><label for="cageGridV">Сетка как в варомоде</label></div>
        <div><input class="cs-set" id="playerCustom" type="checkbox"${globals.playerCustom?' checked':''}><label for="playerCustom">Игровая из конструктора игровой</label></div>

      <div id="sbSiren" class="setHMid">
       <div><input class="cs-set" id="diverSiren" type="checkbox"${globals.diverSiren?' checked':''}><label for="diverSiren">ЧТООООО СИРЕНА ДЛЯ НЫРЯЮЩИХ ОГО ВАУ</label></div>
       <div><input class="cs-set" id="diverSirenVol" type="number"${globals.diverSirenVol?' checked':''} style="width: 55px;" step="0.1" max="1" min="0"> <label for="diverSirenVol">Громкость сирены ныряющих</label></div>
       <div><input class="cs-set" id="diverSirenMinutes" type="number"${globals.diverSirenMinutes?' checked':''} style="width: 40px;" step="5" max="40" min="5"> <label for="diverSirenMinutes">Во сколько минут начинает срабатывать сирена</label></div>

       <input class="cs-set" id="dsX" type="number"${globals.dsX?' checked':''} style="width: 55px;" step="5"> <input class="cs-set" id="dsY" type="number"${globals.dsY?' checked':''} style="width: 55px;" step="5"><button id="testSiren">Тест</button>
       <div><input class="cs-set" id="diverSirenHref" type="text"${globals.diverSirenHref?' checked':''} style="width: 350px;" step="5"> <label for="diverSirenHref">Ссылка на звук сирены</label></div>
      </div>


       <div><input class="cs-set" id="cdSDivers" type="checkbox"${globals.cdSDivers?' checked':''}><label for="cdSDivers">Выделять ныряющих в Игровой</label></div><hr>
       <div><input class="cs-set" id="cdSPodstilki" type="checkbox"${globals.cdSPodstilki?' checked':''}></div><hr>
      <div id="sbTrees" class="setHMid">
       <div><input class="cs-set" id="treeMap" type="checkbox"${globals.treeMap?' checked':''}><label for="treeMap">Редактор карт в игровой</label></div>
       <div><input class="cs-set" id="tmFolded" type="checkbox"${globals.tmFolded?' checked':''}><label for="tmFolded">Изначально сворачивать окошко</label></div>
       <div><input class="cs-set" id="tmShowVolume" type="checkbox"${globals.tmShowVolume?' checked':''}><label for="tmShowVolume">Громкость в чате от ботов (веток)</label></div>
       <div><input class="cs-set" id="tmResetNote" type="checkbox"${globals.tmResetNote?' checked':''}><label for="tmResetNote">Звуковое уведомление при смене карты</label></div>
       <select class="cs-set" id="tmVariant">
       <option value="0">Классический</option>
       <option value="1">Компактный</option>
       <option value="2">Горизонтальный</option>
       </select><label for="tmVariant"> Вариант визуала редактора карт</label><br><br>
      </div>

      <div id="sbDefects" class="setHMid">
       <table id="defectTable">
         <tr>
           <td>Раны</td>
           <td>Отравление</td>
           <td>Ушибы</td>
           <td>Переломы</td>
           <td>Кашель</td>
           <td>Грязь</td>
         </tr>
         <tr>
           <td><input class="cs-set" id="cdCRani" type="color"${globals.cdCRani?' checked':''} style="width: 35px;"></td>
           <td><input class="cs-set" id="cdCPoison" type="color"${globals.cdCPoison?' checked':''} style="width: 35px;"></td>
           <td><input class="cs-set" id="cdCTrauma" type="color"${globals.cdCTrauma?' checked':''} style="width: 35px;"></td>
           <td><input class="cs-set" id="cdCDrown" type="color"${globals.cdCDrown?' checked':''} style="width: 35px;"></td>
           <td><input class="cs-set" id="cdCCough" type="color"${globals.cdCCough?' checked':''} style="width: 35px;"></td>
           <td><input class="cs-set" id="cdCGryaz" type="color"${globals.cdCGryaz?' checked':''} style="width: 35px;"></td>
         </tr>
         <tr>
           <td><input class="cs-set" id="cdSRani1" type="checkbox"${globals.cdSRani1?' checked':''}><input class="cs-set" type="checkbox" disabled checked="true"></td>
           <td><input class="cs-set" id="cdSPoison1" type="checkbox"${globals.cdSPoison1?' checked':''}><input class="cs-set" type="checkbox" disabled checked="true"></td>
           <td><input class="cs-set" id="cdSTrauma1" type="checkbox"${globals.cdSTrauma1?' checked':''}><input class="cs-set" type="checkbox" disabled checked="true"></td>
           <td><input class="cs-set" id="cdSDrown1" type="checkbox"${globals.cdSDrown1?' checked':''}><input class="cs-set" type="checkbox" disabled checked="true"></td>
           <td><input class="cs-set" id="cdSCough" type="checkbox"${globals.cdSCough?' checked':''}><input class="cs-set" type="checkbox" disabled checked="true"></td>
           <td><input class="cs-set" id="cdSGryaz1" type="checkbox"${globals.cdSGryaz1?' checked':''}><input class="cs-set" type="checkbox" disabled checked="true"></td>
         </tr>
         <tr>
           <td><input class="cs-set" id="cdSRani2" type="checkbox"${globals.cdSRani2?' checked':''}><input class="cs-set" type="checkbox" disabled checked="true"></td>
           <td><input class="cs-set" id="cdSPoison2" type="checkbox"${globals.cdSPoison2?' checked':''}><input class="cs-set" type="checkbox" disabled checked="true"></td>
           <td><input class="cs-set" id="cdSTrauma2" type="checkbox"${globals.cdSTrauma2?' checked':''}><input class="cs-set" type="checkbox" disabled checked="true"></td>
           <td><input class="cs-set" id="cdSDrown2" type="checkbox"${globals.cdSDrown2?' checked':''}><input class="cs-set" type="checkbox" disabled checked="true"></td>
           <td>Подстилки</td>
           <td><input class="cs-set" id="cdSGryaz2" type="checkbox"${globals.cdSGryaz2?' checked':''}><input class="cs-set" type="checkbox" disabled checked="true"></td>
         </tr>
         <tr>
           <td><input class="cs-set" id="cdSRani3" type="checkbox"${globals.cdSRani3?' checked':''}><input class="cs-set" id="cdSRani3B" type="checkbox"${globals.cdSRani3B?' checked':''}></td>
           <td><input class="cs-set" id="cdSPoison3" type="checkbox"${globals.cdSPoison3?' checked':''}><input class="cs-set" id="cdSPoison3B" type="checkbox"${globals.cdSPoison3B?' checked':''}></td>
           <td><input class="cs-set" id="cdSTrauma3" type="checkbox"${globals.cdSTrauma3?' checked':''}><input class="cs-set" id="cdSTrauma3B" type="checkbox"${globals.cdSTrauma3B?' checked':''}></td>
           <td><input class="cs-set" id="cdSDrown3" type="checkbox"${globals.cdSDrown3?' checked':''}><input class="cs-set" id="cdSDrown3B" type="checkbox"${globals.cdSDrown3B?' checked':''}></td>
           <td><input class="cs-set" id="cdCPodstilki" type="color"${globals.cdCPodstilki?' checked':''} style="width: 35px;"></td>
           <td><input class="cs-set" id="cdSGryaz3" type="checkbox"${globals.cdSGryaz3?' checked':''}><input class="cs-set" id="cdSGryaz3B" type="checkbox"${globals.cdSGryaz3B?' checked':''}></td>
         </tr>
         <tr>
           <td><input class="cs-set" id="cdSRani4" type="checkbox"${globals.cdSRani4?' checked':''}><input class="cs-set" id="cdSRani4B" type="checkbox"${globals.cdSRani4B?' checked':''}></td>
           <td><input class="cs-set" id="cdSPoison4" type="checkbox"${globals.cdSPoison4?' checked':''}><input class="cs-set" id="cdSPoison4B" type="checkbox"${globals.cdSPoison4B?' checked':''}></td>
           <td><input class="cs-set" id="cdSTrauma4" type="checkbox"${globals.cdSTrauma4?' checked':''}><input class="cs-set" id="cdSTrauma4B" type="checkbox"${globals.cdSTrauma4B?' checked':''}></td>
           <td><input class="cs-set" id="cdSDrown4" type="checkbox"${globals.cdSDrown4?' checked':''}><input class="cs-set" id="cdSDrown4B" type="checkbox"${globals.cdSDrown4B?' checked':''}></td>
           <td><input class="cs-set" id="cdSPodstilki" type="checkbox"${globals.cdSPodstilki?' checked':''}></td>
           <td><input class="cs-set" id="cdSGryaz4" type="checkbox"${globals.cdSGryaz4?' checked':''}><input class="cs-set" id="cdSGryaz4B" type="checkbox"${globals.cdSGryaz4B?' checked':''}></td>
         </tr>
       </table>
       <div><input class="cs-set" id="customDefects" type="checkbox"${globals.customDefects?' checked':''}><label for="customDefects">Кастом дефектс</label></div>
       <div><input class="cs-set" id="cdSColors" type="checkbox"${globals.cdSColors?' checked':''}><label for="cdSColors">Выделять цветную клеточку</label></div>
       <table><tr><td><div><input class="cs-set" id="cdSRamkiFalse" type="radio" name="iscdsramki"${!globals.cdSRamki?' checked':''} value="false"><label for="cdSRamkiFalse">Выделять всю клетку</label></div></td>
       <td><div><input class="cs-set" id="cdSRamkiTrue" type="radio" name="iscdsramki"${globals.cdSRamki?' checked':''} value="true"><label for="cdSRamkiTrue">Выделять рамку</label></div></td></tr></table>
       <div><input class="cs-set" id="cdSIcon" type="checkbox"${globals.cdSIcon?' checked':''}><label for="cdSIcon">Показывать иконки дефектов</label></div>
        <div><input class="cs-set" id="cdOpacity" type="number"${globals.cdOpacity?' checked':''} style="width: 45px;" step="0.05" max="1" min="0"> <label for="cdOpacity">Прозрачность рамки/выделенной клетки</label></div>
      </div>
      <div id="sbItems" class="setHMid">
      <table id="defectTable">
         <tr>
           <td>Травы</td>
           <td>Мох</td>
           <td>Паутина</td>
           <td>Ветки</td>
           <td>Пыль</td>
           <td>Мусор</td>
         </tr>
         <tr>
           <td><input class="cs-set" id="ciCHerb" type="color"${globals.ciCHerb?' checked':''} style="width: 35px;"></td>
           <td><input class="cs-set" id="ciCMoss" type="color"${globals.ciCMoss?' checked':''} style="width: 35px;"></td>
           <td><input class="cs-set" id="ciCWeb" type="color"${globals.ciCWeb?' checked':''} style="width: 35px;"></td>
           <td><input class="cs-set" id="ciCStick" type="color"${globals.ciCStick?' checked':''} style="width: 35px;"></td>
           <td><input class="cs-set" id="ciCDust" type="color"${globals.ciCDust?' checked':''} style="width: 35px;"></td>
           <td><input class="cs-set" id="ciCMusor" type="color"${globals.ciCMusor?' checked':''} style="width: 35px;"></td>
         </tr>
         <tr>
           <td><input class="cs-set" id="ciSHerb" type="checkbox"${globals.ciSHerb?' checked':''}>
           <td><input class="cs-set" id="ciSMoss" type="checkbox"${globals.ciSMoss?' checked':''}>
           <td><input class="cs-set" id="ciSWeb" type="checkbox"${globals.ciSWeb?' checked':''}>
           <td><input class="cs-set" id="ciSStick" type="checkbox"${globals.ciSStick?' checked':''}>
           <td><input class="cs-set" id="ciSDust" type="checkbox"${globals.ciSDust?' checked':''}>
           <td><input class="cs-set" id="ciSMusor" type="checkbox"${globals.ciSMusor?' checked':''}>
         </tr>
       </table>
        <div><input class="cs-set" id="ciOpacity" type="number"${globals.ciOpacity?' checked':''} style="width: 45px;" step="0.05" max="1" min="0"> <label for="ciOpacity">Прозрачность выделения травки</label></div>
      </div>

       <div><select id="selectInGame"><option>CWScript светлая</option><option>CWScript тёмная</option><option>CatWar светлая</option><option>Стандартная тёмная</option><option>Стандартная светлая</option></select></div><label for="selectInGame">Тема функций CWScript</label><br>
      </div>
     </div>
     <div id="div2">
     </div>
     <div id="div3">
     </div>
    </div>
        </div><br></div><br></div><br>
        </div></div></div>
        </td></tr></tbody></table></td></tr></tbody></table>`

console.log(globals.clockFontWeight)
console.log(globals.cstmDfctWounds)

$(document).ready(function() {
  $('#clockFontWeight').val(globals.clockFontWeight);
  $('#cstmDfctWounds').val(globals.cstmDfctWounds);
  $('#diverSirenVol').val(globals.diverSirenVol);
  $('#diverSirenMinutes').val(globals.diverSirenMinutes);
  $('#diverSirenHref').val(globals.diverSirenHref);
  $('#cdCRani').val(globals.cdCRani);
  $('#cdCPoison').val(globals.cdCPoison);
  $('#cdCTrauma').val(globals.cdCTrauma);
  $('#cdCDrown').val(globals.cdCDrown);
  $('#cdCCough').val(globals.cdCCough);
  $('#cdCGryaz').val(globals.cdCGryaz);
  $('#cdOpacity').val(globals.cdOpacity);
  $('#ciCHerb').val(globals.ciCHerb);
  $('#ciCMoss').val(globals.ciCMoss);
  $('#ciCWeb').val(globals.ciCWeb);
  $('#ciCStick').val(globals.ciCStick);
  $('#ciCDust').val(globals.ciCDust);
  $('#ciCMusor').val(globals.ciCMusor);
  $('#ciOpacity').val(globals.ciOpacity);
  $('#cdCPodstilki').val(globals.cdCPodstilki);
  $('#cgOpacity').val(globals.cgOpacity);
  $('#cgColor').val(globals.cgColor);
  $('#dsX').val(globals.dsX);
  $('#dsY').val(globals.dsY);
  if (globals.tmVariant !== null) {
    $('#tmVariant').val(globals.tmVariant);
  }
});

    function peredvinutBloki(importFrom, exportTo) {
      const sourceDivSelector = importFrom; // Двигаемое
      const targetDivSelector = exportTo; // Куда вставляем
      const sourceDiv = $(sourceDivSelector);
      const targetDiv = $(targetDivSelector);
      if (sourceDiv.length > 0 && targetDiv.length > 0) {
        const sourceDivHtml = sourceDiv.html();
        sourceDiv.remove();
        targetDiv.append(sourceDivHtml);
      }
    }

    $(document).ready(function(){
     $('.content > div:not(:first)').hide();
      $('.header a').click(function(e){
      e.preventDefault();
      var target = $(this).data('target');
       $('.content > div').hide();
       $('#div' + target).show();
       $('.header a').removeClass('active').addClass('passive');
       $(this).removeClass('passive').addClass('active');
      });
    });
$(document).ready(function() { let clickCount = 0; $("#clRemoveAllTongues").click(function(e) {clickCount++;if (clickCount >= 3) {clickCount = 0; $("label[for*='clRemoveAllTongues']").after('<img src="https://voz.vn/attachments/1657775494064-png.1264140/" width="99%">'); } }); });
    $(document).ready(function() {
     peredvinutBloki("div#cwmod-settings", "#div2")
     peredvinutBloki("div#cwa_sett", "#div3")
    });

    $(document).ready(function() {
     const deleteLinks = $('a[href="del"]:contains("Удалить персонажа")');
      $('#cwsSet hr, #cwsSet div hr, #cwsSet div div hr').addClass('legit');
       deleteLinks.each(function() {
        const previousHR = $(this).prevAll('hr');
        previousHR.addClass('legit');
       });
      $('hr:not(.legit)').remove();
    });

  appendToElementOrFallback('#branch', 'a[href="del"]', html);

  $('.cs-set').on('change', function() {
    let key = this.id;
    let val = this.type === 'checkbox' ? this.checked : this.value;
    if (this.tagName === 'SELECT') {
      val = $(this).prop('selectedIndex');
    }
    setSettings(key, val);
    console.log(key, ': ', val, '.')
  });
      $('input[name="timeSource"]').on('change', function() {
      setSettings('isClockMoscow', this.id === 'moscowTime');
    });
$('input[name="iscdsramki"]').on('change', function() {
  setSettings('cdSRamki', this.value === 'true');
});

  let sirenPlaying = false;
  let sirenSound = null;
  let previousWidth = 0;
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
  $('body').on('click', 'button#testSiren', function() {
    playSiren();
  });

  let settingsToResetDfct = [ 'customDefectDelay', 'cstmDfctWounds', 'cstmDfctBruise', 'cstmDfctFractures', 'cstmDfctPoison', 'cstmDfctCough', 'cstmDfctDirt', 'cstmDfctOpacity', 'cstmDfctShowColors', 'cstmDfctShowNum', 'cstmDfctShowHighDirt', 'cstmDfctShowLowDirt', 'cstmDfctShow34WoundBetter', 'cstmDfctShowAllBetter' ];
  let settingsToResetItm = [ 'customItemsDelay', 'cstmItmHerbDelay', 'cstmItmHerbClr', 'cstmItmMossDelay', 'cstmItmMossClr', 'cstmItmWebDelay', 'cstmItmWebClr', 'cstmItmStickDelay', 'cstmItmStickClr', 'cstmItmDustDelay', 'cstmItmDustClr', 'cstmItmOpacity', 'cstmItmMusorDelay', 'cstmItmMusorClr' ];
  $('#resetDefectSettings').on('click', function() { resetSettings(settingsToResetDfct); });
  $('#resetItemSettings').on('click', function() { resetSettings(settingsToResetItm); });

  $(document).ready(function() {
    function toggleCustomDefectDelay() { $('#cstmDfctWounds, #cstmDfctBruise, #cstmDfctShowRamki, #cstmDfctFractures, #cstmDfctPoison, #cstmDfctCough, #cstmDfctDirt, #cstmDfctOpacity, #cstmDfctShowColors, #cstmDfctShowNum, #cstmDfctShowHighDirt, #cstmDfctShowLowDirt, #cstmDfctShow34WoundBetter, #cstmDfctShowAllBetter').prop('disabled', !$('#customDefectDelay').is(':checked')); }
    $('#customDefectDelay').change(toggleCustomDefectDelay);
    toggleCustomDefectDelay();

    function toggleCustomItemsDelay() { $('#cstmItmHerbDelay, #cstmItmHerbClr, #cstmItmMossDelay, #cstmItmMossClr, #cstmItmWebDelay, #cstmItmWebClr, #cstmItmStickDelay, #cstmItmStickClr, #cstmItmDustDelay, #cstmItmDustClr, #cstmItmOpacity, #cstmItmMusorDelay, #cstmItmMusorClr').prop('disabled', !$('#customItemsDelay').is(':checked')); }
    $('#customItemsDelay').change(toggleCustomItemsDelay);
    toggleCustomItemsDelay();

    function toggleTimeBlock() { $('#deviceTime, #moscowTime, #showDate, #movableClocks').prop('disabled', !$('#inGameClock').is(':checked')); }
    $('#inGameClock').change(toggleTimeBlock);
    toggleTimeBlock();

    function toggleCustomDefectColor() { $('#cdSRamkiFalse, #cdSRamkiTrue').prop('disabled', !$('#cdSColors').is(':checked')); }
    $('#cdSColors').change(toggleCustomDefectColor);
    toggleCustomDefectColor();
  });

  $('#nightLagsWarning').on('change', function() {
    if (!this.checked) {
      let userConfirmation = confirm("Вы уверены, что хотите отключить предупреждение о ночных лагах?");
      if (!userConfirmation) {
        this.checked = true;
      }
    }
  });
      (function() { // ДАТА ОБНОВЛЕНИЯ БИБЛИОТЕКИ КОСТЮМОВ
        const githubUrl = 'https://raw.githubusercontent.com/CatWarScript/costumes/main/DATE/last-update-date.html?raw=true';
        $.ajax({
            url: githubUrl,
            dataType: 'text',
            success: function(data) {
                $('span#lastUpdateDate').empty().append(data);
            }});})();
  $(document).ready(function() { let clickCount = 0; const videoUrls = ['https://www.youtube-nocookie.com/embed/1rd4P7uMvvQ?si=TkZTp3GZbxxvcYqV&controls=0', 'https://www.youtube-nocookie.com/embed/elaSoKe1gFw?si=Q5JWB-t06mRZDLra&controls=0', 'https://www.youtube-nocookie.com/embed/8Jk_5Yry_SE?si=cGZXfc39MZl9W9_I&controls=0' ]; $("a.active[data-target='1']").click(function(e) {e.preventDefault(); clickCount++;if (clickCount >= 5) {clickCount = 0; const randomIndex = Math.floor(Math.random() * videoUrls.length); const randomVideoUrl = videoUrls[randomIndex]; const iframe = document.createElement('iframe'); iframe.width = '99%'; iframe.height = '530px'; iframe.src = randomVideoUrl; iframe.title = 'YouTube video player'; iframe.frameborder = '0'; iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'; iframe.allowfullscreen = true; iframe.referrerpolicy = 'strict-origin-when-cross-origin'; $("#tableContent").empty().append(iframe); } }); });
}

// ...
// ...
// ...

function dm() {
  if (globals['dontReadenLS']) {
    function updateDontReadCounter() {
      let count = 0;
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key.startsWith('message')) {
          count++;
        }
      }
      localStorage.setItem('dontReadenCount', count);
      $('#dontReadCounter').text(count > 0 ? '(' + count + ')' : '');
    }

    function updateDontReadenMessages() {
      $('#messList tr').each(function() {
        if (!$(this).hasClass('msg_notRead') && !$(this).find('.dontReadButton').length) {
          $(this).append('<td><button class="dontReadButton">Н</button></td>');
          let messageId = $(this).find('a.msg_open').data('id');
          if (localStorage.getItem('message' + messageId)) {
            $(this).addClass('dontReaden');
          }
        }
      });
    }

    $(document).on('click', '.dontReadButton', function() {
      let row = $(this).closest('tr');
      let messageId = row.find('a.msg_open').data('id');
      if (row.hasClass('dontReaden')) {
        row.removeClass('dontReaden');
        localStorage.removeItem('message' + messageId);
      }
      else {
        row.addClass('dontReaden');
        localStorage.setItem('message' + messageId, true);
      }
      updateDontReadCounter();
    });

    $(document).on('click', '.msg_open', function() {
      let row = $(this).closest('tr');
      if (row.hasClass('dontReaden')) {
        let messageId = row.find('a.msg_open').data('id');
        row.removeClass('dontReaden');
        localStorage.removeItem('message' + messageId);
        updateDontReadCounter();
      }
    });

    setInterval(function() {
      updateDontReadenMessages();
      updateDontReadCounter();
    }, 1000);

    let dontreadencss = `
     <style>.dontReaden {
     background-color: var(--cwsc-bckg-6); }
     </style>`
    $('head').append(dontreadencss);
  }

  // Чипсеки

  if (globals['textTemplates']) {
    function checkForForm() {
      let form = document.querySelector('#write_form');
      if (form && !form.classList.contains('templates-added')) {
        add_templates();
        form.classList.add('templates-added');
      }
    }
    checkForForm();
    let observer = new MutationObserver((mutationsList, observer) => {
      for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
          checkForForm();
        }
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    function add_templates() {
      if (window.location.href.includes("https://catwar.su/ls?new")) {
        $(document).ready(function() {
          setTimeout(function() {
            initScript();
          }, 70);
        });

        function initScript() {
          let templates = localStorage.getItem('templates') ? JSON.parse(localStorage.getItem('templates')) : [];

          function renderTemplates() {
            let list = $('.patternlist');
            list.empty();
            templates.forEach(function(template, index) {
              let templateText = '<div class="patternline"><a href="#" class="name" data-index="' + index + '">' + template.name + '</a> <div id="del-edit"><a href="#" class="delete" data-index="' + index + '">[X]</a> <a href="#" class="edit" data-index="' + index + '">[✍]</a></div><hr>';
              list.append(templateText);
            });
          }
          let writeForm = $('form#write_form');
          if (writeForm.length === 0) {
            return;
          }
          writeForm.find('.patternblock').remove();
          writeForm.prepend('<div class="patternblock"><b>Шаблоны</b><div class="patternlist"></div></div>');
          let patternBlock = writeForm.find('.patternblock');
          let createButton = $('<a href="#" id="createButton">Создать новый шаблон</a>').click(function(e) {
            e.preventDefault();
            $(this).hide();
            let inputField = $('<input type="text" id="templateName" placeholder="Введите название шаблона"></input>');
            let okButton = $('<button type="button" id="templateBtnOK" class="templateBtns">OK</button>').click(function() {
              let templateName = inputField.val();
              if (templateName) {
                let currentContent = $('#text').val();
                let newTemplate = {
                  name: templateName,
                  content: currentContent
                };
                templates.push(newTemplate);
                localStorage.setItem('templates', JSON.stringify(templates));
                renderTemplates();
                inputField.remove();
                okButton.remove();
                cancelButton.remove();
                createButton.show();
              }
            });
            let cancelButton = $('<button id="templateBtnUndo" class="templateBtns">Отмена</button>').click(function() {
              inputField.remove();
              okButton.remove();
              cancelButton.remove();
              createButton.show();
            });
            $(this).after(inputField, okButton, '  ', cancelButton);
          });
          patternBlock.append(createButton);
          writeForm.off('click', '.delete').on('click', '.delete', function(e) {
            e.preventDefault();
            let templateIndex = $(this).data('index');
            let templateName = templates[templateIndex].name;
            if (confirm('Точно ли вы хотите удалить шаблон "' + templateName + '"?')) {
              templates.splice(templateIndex, 1);
              localStorage.setItem('templates', JSON.stringify(templates));
              renderTemplates();
            }
          });
          writeForm.off('click', '.edit').on('click', '.edit', function(e) {
            $('#templateBtnSaveChanges').show();
            e.preventDefault();
            let templateIndex = $(this).data('index');
            let template = templates[templateIndex];
            if (template) {
              let templateContent = template.content;
              $('#text').val(templateContent);
              let saveButton = $('#templateBtnSaveChanges');
              if (saveButton.length === 0) {
                saveButton = $('<button id="templateBtnSaveChanges">Сохранить шаблон</button><br><br>');
                writeForm.append(saveButton);

              }
              saveButton.off('click').click(function(e) {
                e.preventDefault();
                let editedContent = $('#text').val();
                templates[templateIndex].content = editedContent;
                localStorage.setItem('templates', JSON.stringify(templates));
                renderTemplates();
                $('#text').val('');
                $('#templateBtnSaveChanges').hide();
              });
            }
          });
          writeForm.on('click', '.name', function(e) {
            e.preventDefault();
            let templateIndex = $(this).data('index');
            let template = templates[templateIndex];
            if (template) {
              $('#text').val(template.content);
              if (globals['ttReplaceTheme']) {
                $('#subject').val(template.name);
              }
            }
          });
          renderTemplates();

          function togglePatternBlock() {
            $('.patternblock').slideToggle();
          }
          let toggleButton = $('<button id="togglePatternBlockButton" type="button">Ш</button>').click(togglePatternBlock);
          $('button[data-code="b"]').before(toggleButton);
          if (globals['toggleTT']) {
            $('.patternblock').hide();
          }
        }
      }
    }
    let css = `
        <style>
          div.patternlist::-webkit-scrollbar {
          width: 8px; }
          div.patternlist::-webkit-scrollbar-track {
          background: var(--cwsc-scrl-1) !important;
          border-radius: 3px; }
          div.patternlist::-webkit-scrollbar-thumb {
          background: var(--cwsc-scrl-2) !important;
          border-radius: 3px; }
          div.patternblock {
          font-family: Montserrat;
          outline: 5px solid var(--cwsc-brdr-1);
          background-color: var(--cwsc-bckg-1);
          color: var(--cwsc-txt-1);
          border-radius: 10px !important;
          margin: 15px 5px; }
          div.patternblock>b {
          display: flex !important;
          justify-content: center;
          text-transform: uppercase;
          color: var(--cwsc-txt-2);
          border-bottom: 4px solid var(--cwsc-brdr-2);
          font-size: 25px;
          letter-spacing: 25px;
          padding: 10px 0px; }
          div.patternlist {
          max-height: 170px;
          overflow: auto;
          background-color: var(--cwsc-bckg-2);
          border-radius: 0px 0px 10px 10px;
          padding: 6px 0px 0px 0px}
          div.patternline>hr {
          border: 0.5px solid var(--cwsc-brdr-4);
          margin: 6px 0px 0px 0px; }
          div.patternline:hover {
          background: var(--cwsc-brdr-4) !important;
          transition: 0.8s; }
          div.patternline {
          transition: 0.8s;
          padding-top: 6px; }
          div.patternline a {
          color: var(--cwsc-txt-1); }
          div.patternline a:hover {
          color: var(--cwsc-txt-4); }
          .patternline>a.name {
          display: block;
          margin: 0px 0px 0px 10px; }
          div#del-edit {
          display: flex;
          justify-content: flex-end;
          margin: -15px 0px 0px 0px;
          height: 18px; }
          div#del-edit>a {
          margin: 0px 3px; }
          div#del-edit>a.edit {
          position: relative;
          bottom: 1px; }
          input#templateName {
          background-color: var(--cwsc-inpt-2);
          color: var(--cwsc-txt-4);
          border: 1px solid var(--cwsc-brdr-3);
          border-radius: 3px !important;
          width: 200px !important;
          margin: 6px 10px 4px 10px; }
          button#templateBtnOK, button#templateBtnUndo, button#templateBtnSaveChanges {
          background-color: var(--cwsc-inpt-2);
          color: var(--cwsc-txt-4);
          border: 2px solid var(--cwsc-brdr-3);
          border-radius: 3px !important;
          padding: 1px 15px;
          margin: 0px 5px; }
          button#templateBtnOK:hover, button#templateBtnUndo:hover, button#templateBtnSaveChanges:hover {
          border: 1px solid var(--cwsc-brdr-2); }
          a#createButton {
          display: inline-block;
          color: var(--cwsc-txt-4);
          padding: 6px; }
          button#togglePatternBlockButton {
          background-color: var(--cwdf-bckg-1);
          color: var(--cwdf-txt-1);
          border: none;
          margin-right: 5px; }
          button#togglePatternBlockButton:hover {
          outline: 1px solid var(--cwdf-brdr-2); }
        </style>`
    $('head').append(css);
  }
}

// ...
// ...
// ...

function cw3() {
  if (globals['inGameClock']) {
    if (globals['movableClocks']) {
      (function() {
        function injectDateTime() {
          let htmlClock = `
        <div id="clockContainer">
        <div id="clock"></div>
        <div id="date"></div>
        </div>`
          $("body").append(htmlClock);
          let cssClock = `<style>
          div#clockContainer {
          position: absolute;
          z-index: 9999;
          cursor: move;
          font-family: Montserrat;
          background-color: var(--cwsc-bckg-5);
          border: 3px solid var(--cwsc-brdr-4);
          border-radius: 5px;
          color: var(--cwsc-txt-5);
          padding: 6px 10px;
          font-weight: bold;
          font-size: ${globals.clockFontWeight}px !important; }
        </style>`
          $('head').append(cssClock);

          var dateTimeContainer = document.getElementById('clockContainer');
          var savedPosition = JSON.parse(localStorage.getItem('dateTimePosition'));
          if (savedPosition) {
            dateTimeContainer.style.left = savedPosition.left;
            dateTimeContainer.style.top = savedPosition.top;
          }
          else {
            dateTimeContainer.style.left = '0px';
            dateTimeContainer.style.top = '0px';
          }
          let isDragging = false;
          let initialX = 0;
          let initialY = 0;
          dateTimeContainer.addEventListener('mousedown', function(e) {
            isDragging = true;
            initialX = e.pageX - parseInt(dateTimeContainer.style.left);
            initialY = e.pageY - parseInt(dateTimeContainer.style.top);
          });
          document.addEventListener('mousemove', function(e) {
            if (isDragging) {
              e.preventDefault();
              dateTimeContainer.style.right = 'unset';
              dateTimeContainer.style.left = (e.pageX - initialX) + 'px';
              dateTimeContainer.style.top = (e.pageY - initialY) + 'px';
            }
          });
          document.addEventListener('mouseup', function() {
            isDragging = false;
            if (dateTimeContainer) {
              var currentPosition = {
                left: dateTimeContainer.style.left,
                top: dateTimeContainer.style.top
              };
              localStorage.setItem('dateTimePosition', JSON.stringify(currentPosition));
            }
          });
        }
        window.addEventListener('load', injectDateTime);
      })();
    }
    if (!globals['movableClocks']) {
      let clockHtml = `
         <div id="clockContainer">
         <div id="clock"></div>
         <div id="date"></div>
         </div>
         <style>
          div#clockContainer {
          font-family: Montserrat;
          background-color: var(--cwsc-bckg-5);
          border: 3px solid var(--cwsc-brdr-4);
          color: var(--cwsc-txt-5);
          font-weight: bold;
          font-size: ${globals.clockFontWeight}px !important; }
         </style>`
      if (!globals.playerCustom) {
           let clockHtml1 = `<style>div#clockContainer {padding: 6px 10px;}</style>`
           $('head').append(clockHtml1);
      }
      $('#tr_actions').after(clockHtml);
    }
  }

  // Сухареки

  if (globals.showEnemy) {
    $('head').append('<style id="enemyList"></style>');
    $(document).ready(function() {
      globals.enemyList.forEach(enemyId => {
        const selector = `div.cage_items:has(span span span.cat_tooltip u a[href*="${enemyId}"])`;
        $('#enemyList').append(`
          ${selector} {
            outline: 5px solid ${globals.enemyColor};
            outline-offset: -5px;
            padding-bottom: 16px; }

        `);
      });
    });
  }

  if (globals.autoHidingBlocks) {
    $(document).ready(function() {
    if (globals.ahbHistory) {
      $('div#history_block').hide();
    }
    if (globals.ahbParameter) {
      $('div#parameters_block').hide();
    }
    if (globals.ahbRelatives) {
      $('div#relatives_block').hide();
    }
    });
  }

  if (globals.cageGrid) {
    let variable = "";
    let color = globals.cgColor;
    let opacity = globals.cgOpacity;
    variable = hexToRGBA(color, opacity);
    if (globals.cageGridV) {
      let css = `<style>.cage {box-shadow: inset 1px 1px 1px rgba(0, 0, 0, ${globals.cgOpacity}), inset -1px -1px 1px ${variable};}</style>`
    $('head').append(css);
    } else {
      let css = `<style>.cage {box-shadow: inset 0px ${globals.cgOpacity}px 0px ${globals.cgOpacity}px ${globals.cgColor};}</style>`
    $('head').append(css);
    }
  }

  if (globals.customDefects) {
    $('head').append(`<style id="customDefectStyle">
            #tr_field [style*='defects'] {
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            }</style>`); // Добавляем стуле для кастомных дефектов
    // РАНЫ
      if (globals.cdSRani1) { // РАНЫ 1 СТАДИЯ
        if (globals.cdSIcon) { // КОД ИКОНОК
          if (globals.cdSRamki) { // ИКОНКИ С РАМКАМИ
            let css = `#tr_field [style*='wound/1'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/БолезниР/Раны%201Р.png) !important;}
            `
            $('style#customDefectStyle').append(css);
          }
          if (!globals.cdSRamki) {// ИКОНКИИ БЕЗ РАМОК
            let css = `#tr_field [style*='wound/1'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/Болезни/Раны%201.png) !important;}
            `
            $('style#customDefectStyle').append(css);
          }
        }

        if (globals.cdSColors) { // КОД ЦВЕТНЫХ КЛЕТОК
          let variable = "";
          let color = globals.cdCRani;
          let opacity = globals.cdOpacity;
          variable = hexToRGBA(color, opacity);
          if (globals.cdSRamki) { // КОД РАМОК
            let css = `#tr_field [style*='wound/1'] {
            outline: 5px solid ${variable};
            outline-offset: -5px;
            padding-top: 16px; }`
            $('style#customDefectStyle').append(css);
          }
          if (!globals.cdSRamki) {// КОД БЕЗ РАМОК
            let css = `#tr_field [style*='wound/1'] {
            background-color: ${variable} !important;
            padding-top: 16px; }`
            $('style#customDefectStyle').append(css);
          }
        }
      }
      if (globals.cdSRani2) { // РАНЫ 1 СТАДИЯ
        if (globals.cdSIcon) { // КОД ИКОНОК
          if (globals.cdSRamki) { // ИКОНКИ С РАМКАМИ
            let css = `#tr_field [style*='wound/2'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/БолезниР/Раны%202Р.png) !important;}
            `
            $('style#customDefectStyle').append(css);
          }
          if (!globals.cdSRamki) {// ИКОНКИИ БЕЗ РАМОК
            let css = `#tr_field [style*='wound/2'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/Болезни/Раны%202.png) !important;}
            `
            $('style#customDefectStyle').append(css);
          }
        }

        if (globals.cdSColors) { // КОД ЦВЕТНЫХ КЛЕТОК
          let variable = "";
          let color = globals.cdCRani;
          let opacity = globals.cdOpacity;
          variable = hexToRGBA(color, opacity);
          if (globals.cdSRamki) { // КОД РАМОК
            let css = `#tr_field [style*='wound/2'] {
            outline: 5px solid ${variable};
            outline-offset: -5px;
            padding-top: 16px; }`
            $('style#customDefectStyle').append(css);
          }
          if (!globals.cdSRamki) {// КОД БЕЗ РАМОК
            let css = `#tr_field [style*='wound/2'] {
            background-color: ${variable} !important;
            padding-top: 16px; }`
            $('style#customDefectStyle').append(css);
          }
        }
      }
      if (globals.cdSRani3) { // РАНЫ 3 СТАДИЯ
        if (globals.cdSIcon) { // КОД ИКОНОК
          if (globals.cdSRamki) { // ИКОНКИ С РАМКАМИ
            if (globals.cdSRani3B) {
              let css = `#tr_field [style*='wound/3'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/БолезниР/Раны%203!Р.png) !important;}
              `
              $('style#customDefectStyle').append(css);
            } else {
              let css = `#tr_field [style*='wound/3'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/БолезниР/Раны%203Р.png) !important;}
              `
              $('style#customDefectStyle').append(css);
            }
          }
          if (!globals.cdSRamki) {// ИКОНКИИ БЕЗ РАМОК
            if (globals.cdSRani3B) {
              let css = `#tr_field [style*='wound/3'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/Болезни/Rany_3_33.png) !important;}
              `
              $('style#customDefectStyle').append(css);
            } else {
              let css = `#tr_field [style*='wound/3'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/Болезни/Раны%203.png) !important;}
              `
              $('style#customDefectStyle').append(css);
            }
          }
        }

        if (globals.cdSColors) { // КОД ЦВЕТНЫХ КЛЕТОК
          let variable = "";
          let color = globals.cdCRani;
          let opacity = globals.cdOpacity;
          variable = hexToRGBA(color, opacity);
          if (globals.cdSRamki) { // КОД РАМОК
            let css = `#tr_field [style*='wound/3'] {
            outline: 5px solid ${variable};
            outline-offset: -5px;
            padding-top: 16px; }`
            $('style#customDefectStyle').append(css);
          }
          if (!globals.cdSRamki) {// КОД БЕЗ РАМОК
            let css = `#tr_field [style*='wound/3'] {
            background-color: ${variable} !important;
            padding-top: 16px; }`
            $('style#customDefectStyle').append(css);
          }
        }
      }
      if (globals.cdSRani4) { // РАНЫ 4 СТАДИЯ
        if (globals.cdSIcon) { // КОД ИКОНОК
          if (globals.cdSRamki) { // ИКОНКИ С РАМКАМИ
            if (globals.cdSRani4B) {
              let css = `#tr_field [style*='wound/4'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/БолезниР/Раны%204!!!Р.png) !important;}
              `
              $('style#customDefectStyle').append(css);
            } else {
              let css = `#tr_field [style*='wound/4'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/БолезниР/Раны%204Р.png) !important;}
              `
              $('style#customDefectStyle').append(css);
            }
          }
          if (!globals.cdSRamki) {// ИКОНКИИ БЕЗ РАМОК
            if (globals.cdSRani4B) {
              let css = `#tr_field [style*='wound/4'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/Болезни/Rany_4_33__33__33.png) !important;}
              `
              $('style#customDefectStyle').append(css);
            } else {
              let css = `#tr_field [style*='wound/4'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/Болезни/Раны%204.png) !important;}
              `
              $('style#customDefectStyle').append(css);
            }
          }
        }

        if (globals.cdSColors) { // КОД ЦВЕТНЫХ КЛЕТОК
          let variable = "";
          let color = globals.cdCRani;
          let opacity = globals.cdOpacity;
          variable = hexToRGBA(color, opacity);
          if (globals.cdSRamki) { // КОД РАМОК
            let css = `#tr_field [style*='wound/4'] {
            outline: 5px solid ${variable};
            outline-offset: -5px;
            padding-top: 16px; }`
            $('style#customDefectStyle').append(css);
          }
          if (!globals.cdSRamki) {// КОД БЕЗ РАМОК
            let css = `#tr_field [style*='wound/4'] {
            background-color: ${variable} !important;
            padding-top: 16px; }`
            $('style#customDefectStyle').append(css);
          }
        }
      }

    // ОТРАВЛЕНИЕ
    if (globals.cdSPoison1) { // ОТРАВЛЕНИЕ 1 СТАДИЯ
      if (globals.cdSIcon) { // КОД ИКОНОК
        if (globals.cdSRamki) { // ИКОНКИ С РАМКАМИ
          let css = `#tr_field [style*='poisoning/1'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/БолезниР/Отравление%201Р.png) !important;}
          `
          $('style#customDefectStyle').append(css);
        }
        if (!globals.cdSRamki) {// ИКОНКИИ БЕЗ РАМОК
          let css = `#tr_field [style*='poisoning/1'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/Болезни/Отравление%201.png) !important;}
          `
          $('style#customDefectStyle').append(css);
        }
      }

      if (globals.cdSColors) { // КОД ЦВЕТНЫХ КЛЕТОК
        let variable = "";
        let color = globals.cdCPoison;
        let opacity = globals.cdOpacity;
        variable = hexToRGBA(color, opacity);
        if (globals.cdSRamki) { // КОД РАМОК
          let css = `#tr_field [style*='poisoning/1'] {
          outline: 5px solid ${variable};
          outline-offset: -5px;
          padding-top: 16px; }`
          $('style#customDefectStyle').append(css);
        }
        if (!globals.cdSRamki) {// КОД БЕЗ РАМОК
          let css = `#tr_field [style*='poisoning/1'] {
          background-color: ${variable} !important;
          padding-top: 16px; }`
          $('style#customDefectStyle').append(css);
        }
      }
    }
    if (globals.cdSPoison2) { // ОТРАВЛЕНИЕ 2 СТАДИЯ
      if (globals.cdSIcon) { // КОД ИКОНОК
        if (globals.cdSRamki) { // ИКОНКИ С РАМКАМИ
          let css = `#tr_field [style*='poisoning/2'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/БолезниР/Отравление%202Р.png) !important;}
          `
          $('style#customDefectStyle').append(css);
        }
        if (!globals.cdSRamki) {// ИКОНКИИ БЕЗ РАМОК
          let css = `#tr_field [style*='poisoning/2'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/Болезни/Отравление%202.png) !important;}
          `
          $('style#customDefectStyle').append(css);
        }
      }

      if (globals.cdSColors) { // КОД ЦВЕТНЫХ КЛЕТОК
        let variable = "";
        let color = globals.cdCPoison;
        let opacity = globals.cdOpacity;
        variable = hexToRGBA(color, opacity);
        if (globals.cdSRamki) { // КОД РАМОК
          let css = `#tr_field [style*='poisoning/2'] {
          outline: 5px solid ${variable};
          outline-offset: -5px;
          padding-top: 16px; }`
          $('style#customDefectStyle').append(css);
        }
        if (!globals.cdSRamki) {// КОД БЕЗ РАМОК
          let css = `#tr_field [style*='poisoning/2'] {
          background-color: ${variable} !important;
          padding-top: 16px; }`
          $('style#customDefectStyle').append(css);
        }
      }
    }
    if (globals.cdSPoison3) { // ОТРАВЛЕНИЕ 3 СТАДИЯ
      if (globals.cdSIcon) { // КОД ИКОНОК
        if (globals.cdSRamki) { // ИКОНКИ С РАМКАМИ
          if (globals.cdSPoison3B) {
            let css = `#tr_field [style*='poisoning/3'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/БолезниР/Отравление%203!Р.png) !important;}
            `
            $('style#customDefectStyle').append(css);
          } else {
            let css = `#tr_field [style*='poisoning/3'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/БолезниР/Отравление%203Р.png) !important;}
            `
            $('style#customDefectStyle').append(css);
          }
        }
        if (!globals.cdSRamki) {// ИКОНКИИ БЕЗ РАМОК
          if (globals.cdSPoison3B) {
            let css = `#tr_field [style*='poisoning/3'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/Болезни/Otravlenie_3_33.png) !important;}
            `
            $('style#customDefectStyle').append(css);
          } else {
            let css = `#tr_field [style*='poisoning/3'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/Болезни/Отравление%203.png) !important;}
            `
            $('style#customDefectStyle').append(css);
          }
        }
      }

      if (globals.cdSColors) { // КОД ЦВЕТНЫХ КЛЕТОК
        let variable = "";
        let color = globals.cdCPoison;
        let opacity = globals.cdOpacity;
        variable = hexToRGBA(color, opacity);
        if (globals.cdSRamki) { // КОД РАМОК
          let css = `#tr_field [style*='poisoning/3'] {
          outline: 5px solid ${variable};
          outline-offset: -5px;
          padding-top: 16px; }`
          $('style#customDefectStyle').append(css);
        }
        if (!globals.cdSRamki) {// КОД БЕЗ РАМОК
          let css = `#tr_field [style*='poisoning/3'] {
          background-color: ${variable} !important;
          padding-top: 16px; }`
          $('style#customDefectStyle').append(css);
        }
      }
    }
    if (globals.cdSPoison4) { // ОТРАВЛЕНИЕ 4 СТАДИЯ
      if (globals.cdSIcon) { // КОД ИКОНОК
        if (globals.cdSRamki) { // ИКОНКИ С РАМКАМИ
          if (globals.cdSPoison4B) {
            let css = `#tr_field [style*='poisoning/4'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/БолезниР/Отравление%204!!!Р.png) !important;}
            `
            $('style#customDefectStyle').append(css);
          } else {
            let css = `#tr_field [style*='poisoning/4'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/БолезниР/Отравление%204Р.png) !important;}
            `
            $('style#customDefectStyle').append(css);
          }
        }
        if (!globals.cdSRamki) {// ИКОНКИИ БЕЗ РАМОК
          if (globals.cdSPoison4B) {
            let css = `#tr_field [style*='poisoning/4'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/Болезни/Otravlenie_4_33__33__33.png) !important;}
            `
            $('style#customDefectStyle').append(css);
          } else {
            let css = `#tr_field [style*='poisoning/4'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/Болезни/Отравление%204.png) !important;}
            `
            $('style#customDefectStyle').append(css);
          }
        }
      }

      if (globals.cdSColors) { // КОД ЦВЕТНЫХ КЛЕТОК
        let variable = "";
        let color = globals.cdCPoison;
        let opacity = globals.cdOpacity;
        variable = hexToRGBA(color, opacity);
        if (globals.cdSRamki) { // КОД РАМОК
          let css = `#tr_field [style*='poisoning/4'] {
          outline: 5px solid ${variable};
          outline-offset: -5px;
          padding-top: 16px; }`
          $('style#customDefectStyle').append(css);
        }
        if (!globals.cdSRamki) {// КОД БЕЗ РАМОК
          let css = `#tr_field [style*='poisoning/4'] {
          background-color: ${variable} !important;
          padding-top: 16px; }`
          $('style#customDefectStyle').append(css);
        }
      }
    }

    // УШИБЫ
    if (globals.cdSTrauma1) { // УШИБЫ 1 СТАДИЯ
      if (globals.cdSIcon) { // КОД ИКОНОК
        if (globals.cdSRamki) { // ИКОНКИ С РАМКАМИ
          let css = `#tr_field [style*='trauma/1'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/БолезниР/Ушибы%201Р.png) !important;}
          `
          $('style#customDefectStyle').append(css);
        }
        if (!globals.cdSRamki) {// ИКОНКИИ БЕЗ РАМОК
          let css = `#tr_field [style*='trauma/1'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/Болезни/Ушибы%201.png) !important; }
          `
          $('style#customDefectStyle').append(css);
        }
      }

      if (globals.cdSColors) { // КОД ЦВЕТНЫХ КЛЕТОК
        let variable = "";
        let color = globals.cdCTrauma;
        let opacity = globals.cdOpacity;
        variable = hexToRGBA(color, opacity);
        if (globals.cdSRamki) { // КОД РАМОК
          let css = `#tr_field [style*='trauma/1'] {
          outline: 5px solid ${variable};
          outline-offset: -5px;
          padding-top: 16px; }`
          $('style#customDefectStyle').append(css);
        }
        if (!globals.cdSRamki) {// КОД БЕЗ РАМОК
          let css = `#tr_field [style*='trauma/1'] {
          background-color: ${variable} !important;
          padding-top: 16px; }`
          $('style#customDefectStyle').append(css);
        }
      }
    }
    if (globals.cdSTrauma2) { // УШИБЫ 2 СТАДИЯ
      if (globals.cdSIcon) { // КОД ИКОНОК
        if (globals.cdSRamki) { // ИКОНКИ С РАМКАМИ
          let css = `#tr_field [style*='trauma/2'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/БолезниР/Ушибы%202Р.png) !important;}
          `
          $('style#customDefectStyle').append(css);
        }
        if (!globals.cdSRamki) {// ИКОНКИИ БЕЗ РАМОК
          let css = `#tr_field [style*='trauma/2'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/Болезни/Ушибы%202.png) !important;}
          `
          $('style#customDefectStyle').append(css);
        }
      }

      if (globals.cdSColors) { // КОД ЦВЕТНЫХ КЛЕТОК
        let variable = "";
        let color = globals.cdCTrauma;
        let opacity = globals.cdOpacity;
        variable = hexToRGBA(color, opacity);
        if (globals.cdSRamki) { // КОД РАМОК
          let css = `#tr_field [style*='trauma/2'] {
          outline: 5px solid ${variable};
          outline-offset: -5px;
          padding-top: 16px; }`
          $('style#customDefectStyle').append(css);
        }
        if (!globals.cdSRamki) {// КОД БЕЗ РАМОК
          let css = `#tr_field [style*='trauma/2'] {
          background-color: ${variable} !important;
          padding-top: 16px; }`
          $('style#customDefectStyle').append(css);
        }
      }
    }
    if (globals.cdSTrauma3) { // УШИБЫ 3 СТАДИЯ
      if (globals.cdSIcon) { // КОД ИКОНОК
        if (globals.cdSRamki) { // ИКОНКИ С РАМКАМИ
          if (globals.cdSTrauma3B) {
            let css = `#tr_field [style*='trauma/3'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/БолезниР/Ушибы%203!Р.png) !important;}
            `
            $('style#customDefectStyle').append(css);
          } else {
            let css = `#tr_field [style*='trauma/3'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/БолезниР/Ушибы%203Р.png) !important;}
            `
            $('style#customDefectStyle').append(css);
          }
        }
        if (!globals.cdSRamki) {// ИКОНКИИ БЕЗ РАМОК
          if (globals.cdSTrauma3B) {
            let css = `#tr_field [style*='trauma/3'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/Болезни/Ushiby_3_33.png) !important;}
            `
            $('style#customDefectStyle').append(css);
          } else {
            let css = `#tr_field [style*='trauma/3'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/Болезни/Ушибы%203.png) !important;}
            `
            $('style#customDefectStyle').append(css);
          }
        }
      }

      if (globals.cdSColors) { // КОД ЦВЕТНЫХ КЛЕТОК
        let variable = "";
        let color = globals.cdCTrauma;
        let opacity = globals.cdOpacity;
        variable = hexToRGBA(color, opacity);
        if (globals.cdSRamki) { // КОД РАМОК
          let css = `#tr_field [style*='trauma/3'] {
          outline: 5px solid ${variable};
          outline-offset: -5px;
          padding-top: 16px; }`
          $('style#customDefectStyle').append(css);
        }
        if (!globals.cdSRamki) {// КОД БЕЗ РАМОК
          let css = `#tr_field [style*='trauma/3'] {
          background-color: ${variable} !important;
          padding-top: 16px; }`
          $('style#customDefectStyle').append(css);
        }
      }
    }
    if (globals.cdSTrauma4) { // УШИБЫ 4 СТАДИЯ
      if (globals.cdSIcon) { // КОД ИКОНОК
        if (globals.cdSRamki) { // ИКОНКИ С РАМКАМИ
          if (globals.cdSTrauma4B) {
            let css = `#tr_field [style*='trauma/4'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/БолезниР/Ушибы%204!!!Р.png) !important;}
            `
            $('style#customDefectStyle').append(css);
          } else {
            let css = `#tr_field [style*='trauma/4'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/БолезниР/Ушибы%204Р.png) !important;}
            `
            $('style#customDefectStyle').append(css);
          }
        }
        if (!globals.cdSRamki) {// ИКОНКИИ БЕЗ РАМОК
          if (globals.cdSTrauma4B) {
            let css = `#tr_field [style*='trauma/4'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/Болезни/Ushiby_4_33__33__33.png) !important;}
            `
            $('style#customDefectStyle').append(css);
          } else {
            let css = `#tr_field [style*='trauma/4'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/Болезни/Ушибы%204.png) !important;}
            `
            $('style#customDefectStyle').append(css);
          }
        }
      }

      if (globals.cdSColors) { // КОД ЦВЕТНЫХ КЛЕТОК
        let variable = "";
        let color = globals.cdCTrauma;
        let opacity = globals.cdOpacity;
        variable = hexToRGBA(color, opacity);
        if (globals.cdSRamki) { // КОД РАМОК
          let css = `#tr_field [style*='trauma/4'] {
          outline: 5px solid ${variable};
          outline-offset: -5px;
          padding-top: 16px; }`
          $('style#customDefectStyle').append(css);
        }
        if (!globals.cdSRamki) {// КОД БЕЗ РАМОК
          let css = `#tr_field [style*='trauma/4'] {
          background-color: ${variable} !important;
          padding-top: 16px; }`
          $('style#customDefectStyle').append(css);
        }
      }
    }

    // ПЕРЕЛОМЫ
    if (globals.cdSDrown1) { // ПЕРЕЛОМЫ 1 СТАДИЯ
      if (globals.cdSIcon) { // КОД ИКОНОК
        if (globals.cdSRamki) { // ИКОНКИ С РАМКАМИ
          let css = `#tr_field [style*='drown/1'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/БолезниР/Переломы%201Р.png) !important;}
          `
          $('style#customDefectStyle').append(css);
        }
        if (!globals.cdSRamki) {// ИКОНКИИ БЕЗ РАМОК
          let css = `#tr_field [style*='drown/1'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/Болезни/Переломы%201.png) !important; }
          `
          $('style#customDefectStyle').append(css);
        }
      }

      if (globals.cdSColors) { // КОД ЦВЕТНЫХ КЛЕТОК
        let variable = "";
        let color = globals.cdCDrown;
        let opacity = globals.cdOpacity;
        variable = hexToRGBA(color, opacity);
        if (globals.cdSRamki) { // КОД РАМОК
          let css = `#tr_field [style*='drown/1'] {
          outline: 5px solid ${variable};
          outline-offset: -5px;
          padding-top: 16px; }`
          $('style#customDefectStyle').append(css);
        }
        if (!globals.cdSRamki) {// КОД БЕЗ РАМОК
          let css = `#tr_field [style*='drown/1'] {
          background-color: ${variable} !important;
          padding-top: 16px; }`
          $('style#customDefectStyle').append(css);
        }
      }
    }
    if (globals.cdSDrown2) { // ПЕРЕЛОМЫ 2 СТАДИЯ
      if (globals.cdSIcon) { // КОД ИКОНОК
        if (globals.cdSRamki) { // ИКОНКИ С РАМКАМИ
          let css = `#tr_field [style*='drown/2'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/БолезниР/Переломы%202Р.png) !important;}
          `
          $('style#customDefectStyle').append(css);
        }
        if (!globals.cdSRamki) {// ИКОНКИИ БЕЗ РАМОК
          let css = `#tr_field [style*='drown/2'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/Болезни/Переломы%202.png) !important;}
          `
          $('style#customDefectStyle').append(css);
        }
      }

      if (globals.cdSColors) { // КОД ЦВЕТНЫХ КЛЕТОК
        let variable = "";
        let color = globals.cdCDrown;
        let opacity = globals.cdOpacity;
        variable = hexToRGBA(color, opacity);
        if (globals.cdSRamki) { // КОД РАМОК
          let css = `#tr_field [style*='drown/2'] {
          outline: 5px solid ${variable};
          outline-offset: -5px;
          padding-top: 16px; }`
          $('style#customDefectStyle').append(css);
        }
        if (!globals.cdSRamki) {// КОД БЕЗ РАМОК
          let css = `#tr_field [style*='drown/2'] {
          background-color: ${variable} !important;
          padding-top: 16px; }`
          $('style#customDefectStyle').append(css);
        }
      }
    }
    if (globals.cdSDrown3) { // ПЕРЕЛОМЫ 3 СТАДИЯ
      if (globals.cdSIcon) { // КОД ИКОНОК
        if (globals.cdSRamki) { // ИКОНКИ С РАМКАМИ
          if (globals.cdSDrown3B) {
            let css = `#tr_field [style*='drown/3'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/БолезниР/Переломы%203!Р.png) !important;}
            `
            $('style#customDefectStyle').append(css);
          } else {
            let css = `#tr_field [style*='drown/3'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/БолезниР/Переломы%203Р.png) !important;}
            `
            $('style#customDefectStyle').append(css);
          }
        }
        if (!globals.cdSRamki) {// ИКОНКИИ БЕЗ РАМОК
          if (globals.cdSDrown3B) {
            let css = `#tr_field [style*='drown/3'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/Болезни/Perelomy_3_33.png) !important;}
            `
            $('style#customDefectStyle').append(css);
          } else {
            let css = `#tr_field [style*='drown/3'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/Болезни/Переломы%203.png) !important;}
            `
            $('style#customDefectStyle').append(css);
          }
        }
      }

      if (globals.cdSColors) { // КОД ЦВЕТНЫХ КЛЕТОК
        let variable = "";
        let color = globals.cdCDrown;
        let opacity = globals.cdOpacity;
        variable = hexToRGBA(color, opacity);
        if (globals.cdSRamki) { // КОД РАМОК
          let css = `#tr_field [style*='drown/3'] {
          outline: 5px solid ${variable};
          outline-offset: -5px;
          padding-top: 16px; }`
          $('style#customDefectStyle').append(css);
        }
        if (!globals.cdSRamki) {// КОД БЕЗ РАМОК
          let css = `#tr_field [style*='drown/3'] {
          background-color: ${variable} !important;
          padding-top: 16px; }`
          $('style#customDefectStyle').append(css);
        }
      }
    }
    if (globals.cdSDrown4) { // ПЕРЕЛОМЫ 4 СТАДИЯ
      if (globals.cdSIcon) { // КОД ИКОНОК
        if (globals.cdSRamki) { // ИКОНКИ С РАМКАМИ
          if (globals.cdSDrown4B) {
            let css = `#tr_field [style*='drown/4'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/БолезниР/Переломы%204!!!Р.png) !important;}
            `
            $('style#customDefectStyle').append(css);
          } else {
            let css = `#tr_field [style*='drown/4'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/БолезниР/Переломы%204Р.png) !important;}
            `
            $('style#customDefectStyle').append(css);
          }
        }
        if (!globals.cdSRamki) {// ИКОНКИИ БЕЗ РАМОК
          if (globals.cdSDrown4B) {
            let css = `#tr_field [style*='drown/4'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/Болезни/Perelomy_4_33__33__33.png) !important;}
            `
            $('style#customDefectStyle').append(css);
          } else {
            let css = `#tr_field [style*='drown/4'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/Болезни/Переломы%204.png) !important;}
            `
            $('style#customDefectStyle').append(css);
          }
        }
      }

      if (globals.cdSColors) { // КОД ЦВЕТНЫХ КЛЕТОК
        let variable = "";
        let color = globals.cdCDrown;
        let opacity = globals.cdOpacity;
        variable = hexToRGBA(color, opacity);
        if (globals.cdSRamki) { // КОД РАМОК
          let css = `#tr_field [style*='drown/4'] {
          outline: 5px solid ${variable};
          outline-offset: -5px;
          padding-top: 16px; }`
          $('style#customDefectStyle').append(css);
        }
        if (!globals.cdSRamki) {// КОД БЕЗ РАМОК
          let css = `#tr_field [style*='drown/4'] {
          background-color: ${variable} !important;
          padding-top: 16px; }`
          $('style#customDefectStyle').append(css);
        }
      }
    }
    // ГРЯЗЬ
    if (globals.cdSGryaz1) { // ГРЯЗЬ 1 СТАДИЯ
      if (globals.cdSIcon) { // КОД ИКОНОК
        if (globals.cdSRamki) { // ИКОНКИ С РАМКАМИ
          let css = `#tr_field [style*='dirt/base/1/1'], #tr_field [style*='dirt/base/2/1'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/БолезниР/Грязь%201Р.png) !important;}
          `
          $('style#customDefectStyle').append(css);
        }
        if (!globals.cdSRamki) {// ИКОНКИИ БЕЗ РАМОК
          let css = `#tr_field [style*='dirt/base/1/1'], #tr_field [style*='dirt/base/2/1'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/Болезни/Грязь%201.png) !important;}
          `
          $('style#customDefectStyle').append(css);
        }
      }

      if (globals.cdSColors) { // КОД ЦВЕТНЫХ КЛЕТОК
        let variable = "";
        let color = globals.cdCGryaz;
        let opacity = globals.cdOpacity;
        variable = hexToRGBA(color, opacity);
        if (globals.cdSRamki) { // КОД РАМОК
          let css = `#tr_field [style*='dirt/base/1/1'], #tr_field [style*='dirt/base/2/1'] {
          outline: 5px solid ${variable};
          outline-offset: -5px;
          padding-top: 16px; }`
          $('style#customDefectStyle').append(css);
        }
        if (!globals.cdSRamki) {// КОД БЕЗ РАМОК
          let css = `#tr_field [style*='dirt/base/1/1'], #tr_field [style*='dirt/base/2/1'] {
          background-color: ${variable} !important;
          padding-top: 16px; }`
          $('style#customDefectStyle').append(css);
        }
      }
    }
    if (globals.cdSGryaz2) { // ГРЯЗЬ 2 СТАДИЯ
      if (globals.cdSIcon) { // КОД ИКОНОК
        if (globals.cdSRamki) { // ИКОНКИ С РАМКАМИ
          let css = `#tr_field [style*='dirt/base/1/2'], #tr_field [style*='dirt/base/2/2'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/БолезниР/Грязь%202Р.png) !important;}
          `
          $('style#customDefectStyle').append(css);
        }
        if (!globals.cdSRamki) {// ИКОНКИИ БЕЗ РАМОК
          let css = `#tr_field [style*='dirt/base/1/2'], #tr_field [style*='dirt/base/2/2'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/Болезни/Грязь%202.png) !important;}
          `
          $('style#customDefectStyle').append(css);
        }
      }

      if (globals.cdSColors) { // КОД ЦВЕТНЫХ КЛЕТОК
        let variable = "";
        let color = globals.cdCGryaz;
        let opacity = globals.cdOpacity;
        variable = hexToRGBA(color, opacity);
        if (globals.cdSRamki) { // КОД РАМОК
          let css = `#tr_field [style*='dirt/base/1/2'], #tr_field [style*='dirt/base/2/2'] {
          outline: 5px solid ${variable};
          outline-offset: -5px;
          padding-top: 16px; }`
          $('style#customDefectStyle').append(css);
        }
        if (!globals.cdSRamki) {// КОД БЕЗ РАМОК
          let css = `#tr_field [style*='dirt/base/1/2'], #tr_field [style*='dirt/base/2/2'] {
          background-color: ${variable} !important;
          padding-top: 16px; }`
          $('style#customDefectStyle').append(css);
        }
      }
    }
    if (globals.cdSGryaz3) { // ГРЯЗЬ 3 СТАДИЯ
      if (globals.cdSIcon) { // КОД ИКОНОК
        if (globals.cdSRamki) { // ИКОНКИ С РАМКАМИ
          if (globals.cdSGryaz3B) {
            let css = `#tr_field [style*='/dirt/base/1/3.png'], #tr_field [style*='dirt/base/2/3'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/БолезниР/Грязь%203!Р.png) !important;}
            `
            $('style#customDefectStyle').append(css);
          } else {
            let css = `#tr_field [style*='/dirt/base/1/3.png'], #tr_field [style*='dirt/base/2/3'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/БолезниР/Грязь%203Р.png) !important;}
            `
            $('style#customDefectStyle').append(css);
          }
        }
        if (!globals.cdSRamki) {// ИКОНКИИ БЕЗ РАМОК
          if (globals.cdSGryaz3B) {
            let css = `#tr_field [style*='/dirt/base/1/3.png'], #tr_field [style*='dirt/base/2/3'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/Болезни/Gryaz_3_33.png) !important;}
            `
            $('style#customDefectStyle').append(css);
          } else {
            let css = `#tr_field [style*='/dirt/base/1/3.png'], #tr_field [style*='dirt/base/2/3'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/Болезни/Грязь%203.png) !important;}
            `
            $('style#customDefectStyle').append(css);
          }
        }
      }
      if (globals.cdSColors) { // КОД ЦВЕТНЫХ КЛЕТОК
        let variable = "";
        let color = globals.cdCGryaz;
        let opacity = globals.cdOpacity;
        variable = hexToRGBA(color, opacity);
        if (globals.cdSRamki) { // КОД РАМОК
          let css = `#tr_field [style*='dirt/base/1/3'], #tr_field [style*='dirt/base/2/3'] {
          outline: 5px solid ${variable};
          outline-offset: -5px;
          padding-top: 16px; }`
          $('style#customDefectStyle').append(css);
        }
        if (!globals.cdSRamki) {// КОД БЕЗ РАМОК
          let css = `#tr_field [style*='dirt/base/1/3'], #tr_field [style*='dirt/base/2/3'] {
          background-color: ${variable} !important;
          padding-top: 16px; }`
          $('style#customDefectStyle').append(css);
        }
      }
    }
    if (globals.cdSGryaz4) { // ГРЯЗЬ 4 СТАДИЯ
      if (globals.cdSIcon) { // КОД ИКОНОК
        if (globals.cdSRamki) { // ИКОНКИ С РАМКАМИ
          if (globals.cdSGryaz4B) {
            let css = `#tr_field [style*='/dirt/base/1/4.png'], #tr_field [style*='dirt/base/2/4'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/БолезниР/Грязь%204!!!Р.png) !important;}
            `
            $('style#customDefectStyle').append(css);
          } else {
            let css = `#tr_field [style*='/dirt/base/1/4.png'], #tr_field [style*='dirt/base/2/4'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/БолезниР/Грязь%204Р.png) !important;}
            `
            $('style#customDefectStyle').append(css);
          }
        }
        if (!globals.cdSRamki) {// ИКОНКИИ БЕЗ РАМОК
          if (globals.cdSGryaz4B) {
            let css = `#tr_field [style*='/dirt/base/1/4.png'], #tr_field [style*='dirt/base/2/4'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/Болезни/Gryaz_4_33__33__33.png) !important;}
            `
            $('style#customDefectStyle').append(css);
          } else {
            let css = `#tr_field [style*='/dirt/base/1/4.png'], #tr_field [style*='dirt/base/2/4'] {content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/Болезни/Грязь%204.png) !important;}
            `
            $('style#customDefectStyle').append(css);
          }
        }
      }
      if (globals.cdSColors) { // КОД ЦВЕТНЫХ КЛЕТОК
        let variable = "";
        let color = globals.cdCGryaz;
        let opacity = globals.cdOpacity;
        variable = hexToRGBA(color, opacity);
        if (globals.cdSRamki) { // КОД РАМОК
          let css = `#tr_field [style*='dirt/base/1/4'], #tr_field [style*='dirt/base/2/4'] {
          outline: 5px solid ${variable};
          outline-offset: -5px;
          padding-top: 16px; }`
          $('style#customDefectStyle').append(css);
        }
        if (!globals.cdSRamki) {// КОД БЕЗ РАМОК
          let css = `#tr_field [style*='dirt/base/1/4'], #tr_field [style*='dirt/base/2/4'] {
          background-color: ${variable} !important;
          padding-top: 16px; }`
          $('style#customDefectStyle').append(css);
        }
      }
    }

    // КАШЕЛЬ
    if (globals.cdSCough) {
      if (globals.cdSIcon) { // КОД ИКОНОК
        if (globals.cdSRamki) { // ИКОНКИ С РАМКАМИ
            let css = `#tr_field [style*='disease/1']{content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/БолезниР/Кашель%201Р.png) !important;}
            `
            $('style#customDefectStyle').append(css);
        }
        if (!globals.cdSRamki) {// ИКОНКИИ БЕЗ РАМОК
            let css = `#tr_field [style*='disease/1']{content: url(https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/Болезни/Кашель%201.png) !important;}
            `
            $('style#customDefectStyle').append(css);
        }
      }

      if (globals.cdSColors) { // КОД ЦВЕТНЫХ КЛЕТОК
        let variable = "";
        let color = globals.cdCCough;
        let opacity = globals.cdOpacity;
        variable = hexToRGBA(color, opacity);
        if (globals.cdSRamki) { // КОД РАМОК
          let css = `#tr_field [style*='disease/1']{
          outline: 5px solid ${variable};
          outline-offset: -5px;
          padding-top: 16px; }`
          $('style#customDefectStyle').append(css);
        }
        if (!globals.cdSRamki) {// КОД БЕЗ РАМОК
          let css = `#tr_field [style*='disease/1']{
          background-color: ${variable} !important;
          padding-top: 16px; }`
          $('style#customDefectStyle').append(css);
        }
      }
    }
  }

  if (globals['cdSDivers']) {
    let cstmDfctDivers = `
        <style id="dfctDivers">
        #tr_field [style*='/cw3/cats/0/costume/7.png'], [style*='/cw3/cats/-1/costume/7.png'] {
        content: url(https://i.ibb.co/dG6mhTj/image.png) !important;
        padding-top: 16px !important;
        padding-left: 1.5px !important;}
        </style>`
    $('head').append(cstmDfctDivers);
  }
  if (globals['cdSPodstilki']) {
        let variable = "";
        let color = globals.cdCPodstilki;
        let opacity = globals.cdOpacity;
        variable = hexToRGBA(color, opacity);
        if (globals.cdSRamki) {
          let css = `#tr_field [style*='/cw3/cats/0/costume/295.png'], [style*='/cw3/cats/-1/costume/295.png'], [style*='/cw3/cats/1/costume/295.png'] {
          outline: 5px solid ${variable};
          outline-offset: -5px;
          padding-top: 16px; }`
          $('style#customDefectStyle').append(css);
        }
        if (!globals.cdSRamki) {
          let css = `#tr_field [style*='/cw3/cats/0/costume/295.png'], [style*='/cw3/cats/-1/costume/295.png'], [style*='/cw3/cats/1/costume/295.png'] {
          background-color: ${variable} !important;
          padding-top: 16px; }`
          $('style#customDefectStyle').append(css);
        }
  }

  // Кыр сосичка
  if (globals['customItems']) {
    let cstmItmStyle = `<style id='cstmItmStyle'></style>`
    $('head').append(cstmItmStyle);

    if (globals['ciSHerb']) {
        let variable = "";
        let color = globals.ciCHerb;
        let opacity = globals.ciOpacity;
        variable = hexToRGBA(color, opacity);
      let cstmItmHerbs = `
        .cage_items[style*='things/13.png'],.cage_items[style*='things/15.png'], .cage_items[style*='things/17.png'], .cage_items[style*='things/19.png'], .cage_items[style*='things/21.png'], .cage_items[style*='things/23.png'], .cage_items[style*='things/25.png'], .cage_items[style*='things/26.png'], .cage_items[style*='things/106.png'], .cage_items[style*='things/108.png'], .cage_items[style*='things/109.png'], .cage_items[style*='things/110.png'], .cage_items[style*='things/111.png'], .cage_items[style*='things/112.png'], .cage_items[style*='things/115.png'], .cage_items[style*='things/116.png'], .cage_items[style*='things/119.png'], .cage_items[style*='things/655.png'] {
        background-color: ${variable} !important;}`
      $('#cstmItmStyle').append(cstmItmHerbs);
    }
    if (globals['ciSMoss']) {
        let variable = "";
        let color = globals.ciCMoss;
        let opacity = globals.ciOpacity;
      let cstmItmMoss = `
        .cage_items[style*='things/75.png'], .cage_items[style*='things/78.png'], .cage_items[style*='things/95.png'] {
        background-color: ${variable} !important;}`
      $('#cstmItmStyle').append(cstmItmMoss);
    }
    if (globals['ciSWeb']) {
        let variable = "";
        let color = globals.ciCWeb;
        let opacity = globals.ciOpacity;
      let cstmItmWeb = `
        .cage_items[style*='things/20.png'] {
        background-color: ${variable} !important;}`
      $('#cstmItmStyle').append(cstmItmWeb);
    }
    if (globals['ciSStick']) {
        let variable = "";
        let color = globals.ciCStick;
        let opacity = globals.ciOpacity;
      let cstmItmSticks = `
        .cage_items[style*='things/565.png'], .cage_items[style*='things/566.png'], .cage_items[style*='things/562.png'], .cage_items[style*='things/563.png'], .cage_items[style*='things/3993.png'] {
        background-color: ${variable} !important;}`
      $('#cstmItmStyle').append(cstmItmSticks);
    }
    if (globals['ciSDust']) { // Отображение Звёздной Пыли
        let variable = "";
        let color = globals.ciCDust;
        let opacity = globals.ciOpacity;
      let cstmItmDust = `
        .cage_items[style*='things/94.png'], .cage_items[style*='things/385.png'], .cage_items[style*='things/386.png'], .cage_items[style*='things/387.png'], .cage_items[style*='things/388.png'], .cage_items[style*='things/389.png'], .cage_items[style*='things/390.png'], .cage_items[style*='things/391.png'], .cage_items[style*='things/392.png'] {
        background-color: ${variable} !important;}`
      $('#cstmItmStyle').append(cstmItmDust);
    }
    if (globals['ciSMusor']) {
        let variable = "";
        let color = globals.ciCMusor;
        let opacity = globals.ciOpacity;
      let cstmItmMusor = `
        .cage_items[style*='things/985.png'], .cage_items[style*='things/986.png'], .cage_items[style*='things/987.png'], .cage_items[style*='things/988.png'], .cage_items[style*='things/989.png'] {
        background-color: ${variable} !important;}
        .cage_items[style*='things/44.png'], .cage_items[style*='things/180.png'] {
        background-color: ${variable} !important;}
        .cage_items[style*='things/77.png'] {
        background-color: ${variable} !important;}
        .cage_items[style*='things/7801.png'], .cage_items[style*='things/7802.png'], .cage_items[style*='things/7803.png'], .cage_items[style*='things/7804.png'], .cage_items[style*='things/7805.png'], .cage_items[style*='things/7806.png'] {
        background-color: ${variable} !important;}`
      $('#cstmItmStyle').append(cstmItmMusor);
    }
  }

  // Луковые колечьки


  if (globals.playerCustom) {
    let itemlistwid = globals.cgRotWid;
    itemlistwid = itemlistwid - 12;
    console.log(itemlistwid, ' itemlistwid')
      let css = `
        <style>`
        css += `
          body {
  background-color: ${globals.cgBodyCol};
    font-size: ${globals.cgFontSize}px !important;
  }
      #main_table {
        background: 0 !important;
        }
      #parameter {
        position: absolute;
        top: ${globals.cgParY}px;
        left: ${globals.cgParX}px;
        width: ${globals.cgParWid}px;
        height: ${globals.cgParHei}px;
        background: ${globals.cgParCol} !important;
        color: ${globals.cgParFCol} !important;}
      td#history {
        position: absolute;
        top: ${globals.cgHisY}px;
        left: ${globals.cgHisX}px;
        width: ${globals.cgHisWid}px;
        height: ${globals.cgHisHei}px;
        background: ${globals.cgHisCol} !important;
        color: ${globals.cgHisFCol} !important;
        padding: 6px;
        overflow: auto;}
      td#history a {
        color: ${globals.cgHisFCol} !important;}
      .ui-icon-gripsmall-diagonal-se {
        position: absolute;
        top: 1px;
        left: 1px;}
      div#clockContainer {
        position: absolute;
        top: ${globals.cgClockY}px;
        left: ${globals.cgClockX}px;
        width: ${globals.cgClockWid}px;
        height: ${globals.cgClockHei}px;
        font-size: ${globals.clockFontWeight}px !important;
        background-color: ${globals.cgClockCol} !important;
        color:${globals.cgClockFCol} !important;
        font-weight: bolder;
        font-family: Montserrat;
        display: grid;
        align-content: center;}
      div#clockContainer div#clock, div#clockContainer div#date {
        margin-left: 4px;}

      #tr_chat {
        position: absolute;
        top: ${globals.cgChatY}px;
        left: ${globals.cgChatX}px;
        width: ${globals.cgChatWid}px;
        height: ${globals.cgChatHei}px;
        background: ${globals.cgChatCol} !important;
        color: ${globals.cgChatFCol} !important;}
      #chat_form {
        margin: 5px;
        padding: 0;
        width: 100%;}
      span.chat_text {
        width: 300px !important;}
      #volume {
        margin: 2px;
        margin-top: 4px;}
      #chat_msg {
        position: relative;
        width: 100%;}
      #cws_chat_msg {
        position: relative;
        width: 100%;}
      .ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header {
        background: ${globals.cgChatSliderCol} !important;
        border: ${globals.cgChatSliderBorderCol} 1px solid;}
      #volume{
        background-color: var(--BBO) !important;
        border: var(--BRDR) solid 2px !important;
        color: var(--TXT) !important;}
      .ui-widget-content {
        background-color: var(--BBO) !important;
        border: var(--BRDR) solid 2px !important;
        color: var(--TXT) !important;}

        #msg_send, #mit, #mitok, input#text {
        background-color: ${globals.cgInputCol}!important;
        color: ${globals.cgInputFCol}!important;
        }
      #sky {
        position: absolute;
        top: ${globals.cgSkyY}px;
        left: ${globals.cgSkyX}px; /*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
        width: ${globals.cgSkyWid}px;
        height: ${globals.cgSkyHei}px;}

      #tr_tos {
        display: block;
        position: absolute;
        top: ${globals.cgTOSY}px;
        left: ${globals.cgTOSX}px;
        width: ${globals.cgTOSWid}px;
        height: ${globals.cgTOSHei}px;
        background: ${globals.cgTOSCol} !important;
        text-align: center;}

      #tr_actions {
        position: absolute;
        top: ${globals.cgDeysY}px;
        left: ${globals.cgDeysX}px;
        width: ${globals.cgDeysWid}px;
        height: ${globals.cgDeysHei}px;
        background: ${globals.cgDeysCol} !important;
        padding: 6px !important;
        overflow: auto;
        color: ${globals.cgDeysFCol} !important;}
      #tr_actions a {
        color: ${globals.cgDeysFCol} !important;}
      #block_mess {
        position: absolute;
        width: 490px;
        padding: 0px;
        text-align: center !important;}
      #dein {
        width: 300px;
        height: 155px;
        overflow: auto;}
      #akten {
        width: 300px;
        height: 155px;}
      #mit {
        background-color: var(--BBO);
        color: var(--TXT);}
      #mitok {
        background-color: var(--BBO);
        color: var(--TXT);}

      #family {
        position: absolute;
        top: ${globals.cgRSY}px;
        left: ${globals.cgRSX}px;
        width: ${globals.cgRSWid}px;
        height: ${globals.cgRSHei}px;
        background:${globals.cgRSCol} !important;
        padding: 6px;
        color: ${globals.cgRSFCol} !important;}
      #family a {
        color: ${globals.cgRSFCol} !important;}

      .small {
        display: block;
        position: absolute;
        top: ${globals.cgSmallY}px;
        left: ${globals.cgSmallX}px;
        width: ${globals.cgSmallWid}px;
        height: ${globals.cgSmallHei}px;
        background: ${globals.cgSmallCol} !important;
        font-size: ${globals.cgSmallFW}px;
        text-align: center;
        font-weight: bold;
        color: ${globals.cgSmallFCol} !important;}
      .small a {
        color: ${globals.cgSmallFCol} !important;}
      span.small ~ br, span.other_cats_list ~ br {
        display: none;}

      span.other_cats_list {
        position: absolute;
        top: ${globals.cgOCLY}px;
        left: ${globals.cgOCLX}px;
        color: var(--TXT)}

      #tr_mouth {
        position: absolute;
        top: ${globals.cgRotY}px;
        left: ${globals.cgRotX}px;
        width: ${globals.cgRotWid}px;
        height: ${globals.cgRotHei}px;
        background: ${globals.cgRotCol} !important;
        padding: 6px !important;
        overflow: auto;
        color: ${globals.cgRotFCol} !important;}
      #tr_mouth a {
        color: ${globals.cgRotFCol} !important;}

      #itemList {
        width: ${itemlistwid}px;
        }

      #app>p:not([id])::before {
        content: 'Тёмные баллы: ';
        font-weight: bold;
      }

      #app>p:not([id]) {
        display: block;
        position: absolute;
        top: ${globals.cgTBY}px;
        left: ${globals.cgTBX}px;
        width: ${globals.cgTBWid}px;
        height: ${globals.cgTBHei}px;
        background: ${globals.cgTBCol} !important;
        text-align: center;
        color: ${globals.cgTBFCol} !important;}
      #cages_div {
      opacity: 1 !important;
      }
      #app p:not([id])>b {
        display: none;
      }
      a#parameters-alert {
      position: absolute;
      top: ${globals.cgParAlertY}px;
      left: ${globals.cgParAlertX}px;
      color: ${globals.cgParAlertFCol}
      }

      `
      if (globals.cgBorders) {
        css+= `td#parameter, tr#tr_tos, #sky, div#clockContainer, td#history, td#family, span.small, tr#tr_chat, tr#tr_actions, tr#tr_mouth, #location {
       border: ${globals.cgBorderWid}px ${globals.cgBorderType} ${globals.cgBorderCol} !important;}`
      }
      if (globals.cgTbBorder) {
        css+= `#app>p:not([id]) {
        border: ${globals.cgBorderWid}px ${globals.cgBorderType} ${globals.cgBorderCol} !important;}`
      }
      if (globals.cgIsBorderRad) {
        css+= `td#parameter, tr#tr_tos, #sky, div#clockContainer, td#history, td#family, span.small, tr#tr_chat, tr#tr_actions, tr#tr_mouth {
        border-radius: ${globals.cgBorderRad}px;}`
      }
      if (globals.cgIsTBBorderRad) {
        css+= `#app>p:not([id]) {
        border-radius: ${globals.cgBorderRad}px;}`
      }
      if (globals.cgIsLocBorderRad) {
        css+= `#location {
        border-radius: ${globals.cgBorderRad}px;}`
      }
      if (globals.cgInputBorders) {
        css+= `#msg_send, #mit, #mitok, input#text {
        border: ${globals.cgBorderWid}px ${globals.cgBorderType} ${globals.cgBorderCol} !important;}`
      }
      if (globals.cgInfoH2DelMargins) {
        css+= `tr#tr_info td table#info_main tbody tr td h2 {
        margin: 0;
        }`
      }
      if (globals.cgDelRSH2) {
        css+= `table#info_main tbody tr td#family h2 {display: none;}`
      }
      if (globals.cgDelHisH2) {
        css+= `table#info_main tbody tr td#history h2 {display: none;}`
      }
      if (globals.cgDelParH2) {
    css+= `table#info_main tbody tr td#parameter h2 a:first-of-type {display: none;}`
      }
      if (1 == 1) {
        css+= `tr#tr_info td table#info_main tbody tr td h2 {font-size: ${globals.cgInfoH2FontSize}px;}`
      }
      if (globals.cgSeparateLocation) {
        css+= `
      #location {
        display: block;
        position: fixed;
        top: ${globals.cgLocY}px;
        left: ${globals.cgLocX}px;
        width: ${globals.cgLocWid}px;
        height: ${globals.cgLocHei}px;
        background: ${globals.cgLocCol} !important;
        font-size: ${globals.cgLocFW}px;
        text-align: center;
        font-weight: bold;
        color: ${globals.cgLocFCol} !important;}

      #history_block div {
        font-size: 0;
        background-color: transparent !important;}`
      }
  if (globals.cgDeleteScrolls) {
  css+= `  ::-webkit-scrollbar {
    width: 18px;
}

::-webkit-scrollbar-track {
    background: transparent !important;
}

::-webkit-scrollbar-thumb {
    background: transparent !important;
}

::-webkit-scrollbar-corner {
    background: transparent !important;
}`
  }
      if (globals.cgIsFieldFix) {
    css+= `tr#tr_field {
    position: absolute;
    top: ${globals.cgFieldY}px;
    left: ${globals.cgFieldX}px;}
    `
  }

      css+= `</style>`
      $('head').append(css);
  }

  if (globals['phoneFightPanel']) { // Панелька боережима для телефонщиков
    let dangerModes = $('input[value="T+1"], input[value="T+2"], input[value="T+3"]').clone();
    $('input[value="T+1"], input[value="T+2"], input[value="T+3"]').remove();
    $('#fightLog').after(dangerModes);
    if ($('#fteams-wrap').length === 0) { // Проверка на наличие модифицированного БР
      // Если элемента нет, меняем стиль окна бр
      $('#fightPanel').css('height', 'auto');
    }
    let fightPanelStyle = `
        <style id="fightPanelStyle">
        [value="T+1"] {
        position: relative;
        bottom: 0px;
        left: 0px;
        width: 65px !important;}
        [value="T+2"] {
        position: relative;
        bottom: 0px;
        left: 31px;
        width: 65px !important;}
        [value="T+3"] {
        position: relative;
        bottom: 0px;
        left: 62px;
        width: 65px !important;}
       .hotkey {
        margin-left: 15px;
        width: 40px;
        border-radius: 2px;}
        img#block {
        transform: scale(105%);
        position: relative;
        left: 5px;
        top: 1.8px;}
        </style>`
    $('head').append(fightPanelStyle);
  }

  // Френдли кетвар лучшая функция
  if (globals['friendlyCatWar']) {
    $('#fightPanel input[value="T+1"]').remove();
    $('#fightPanel input[value="T+2"]').remove();
    $('#fightPanel input[value="T+3"]').remove();
  }

  // Чупачупсеки

  if (globals['darkCatTooltip']) {
    let darkCss = `
        <style>
        span.cat_tooltip, span.cat_tooltip>a, span.cat_tooltip>u>a {
        color: #a2abb5c7 !important; }

        span.cat_tooltip {
        background: #1a1d22ed !important;
        border: #4f4f59 0.5px solid !important;
        filter: brightness(105%); }

        span.cat_tooltip>[src*="odoroj"] {
        filter: brightness(70%) contrast(90%); }

        span.cat_tooltip>span.online {
        filter: brightness(190%) contrast(50%) opacity(95%); }
        </style>`
    $('head').append(darkCss);
  }

  // Газеровочька

  if (globals['showButterflyBots']) {
    let butterflyCss = `
        <style>
          img[src*='things/990.png'] {
          border: 15px solid rgba(255, 170, 0, .6); }
          ol.mouth>li>img[src*='things/990.png'] {
          border: none; }
          div#itemList>div>img[src*='things/990.png'] {
          border: none; }

          img[src*='things/991.png'] {
          border: 15px solid rgba(255, 170, 0, .6); }
          ol.mouth>li>img[src*='things/991.png'] {
          border: none; }
          div#itemList>div>img[src*='things/991.png'] {
          border: none; }

          img[src*='things/992.png'] {
          border: 15px solid rgba(255, 170, 0, .6); }
          ol.mouth>li>img[src*='things/992.png'] {
          border: none; }/
          div#itemList>div>img[src*='things/992.png'] {
          border: none; }
        </style>`
    $('head').append(butterflyCss);
  }

  // Лимонадек

  if (globals['brightGameField']) {
    let brightCss = `
        <style>
          div#cages_div {
          opacity: 1 !important; }
        </style>`
    $('head').append(brightCss);
  }

  // Чокопайчеки

  if (globals['deleteFPTitles']) {
    let fptitlesCss = `
        <style>
        div#fightPanel input.hotkey:hover {
        pointer-events: none;
        }
        </style>`
    $('head').append(fptitlesCss);
  }

  if (globals["costumeLibrary"]) {
    (function() {
  const githubUrl = 'https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/COSTUMES/catwarScript_Costumes.css?raw=true';
  $.ajax({
    url: githubUrl,
    dataType: 'text',
    success: function(data) {
      $('head').append('<style>' + data + '</style>');
    }});})();
    if (globals["watermarkCostumes"]) {
        (function() {
  const githubUrl = 'https://raw.githubusercontent.com/CatWarScript/CatWarScript/main/COSTUMES/catwarScript_CostumesW.css?raw=true';
  $.ajax({
    url: githubUrl,
    dataType: 'text',
    success: function(data) {
      $('head').append('<style>' + data + '</style>');
    }});})();}

    if (globals["clLakeUniverse"]) {
        (function() { // ОБЫЧНЫЕ КОСТЮМЫ ОЗЁРКА
            const githubUrl = 'https://raw.githubusercontent.com/CatWarScript/costumes/main/OV/costumes.css?raw=true';
            $.ajax({
                url: githubUrl,
                dataType: 'text',
                success: function(data) {
                    $('head').append('<style>' + data + '</style>');
                }});})();
        if (globals["clMemeCostumes"]) {
            (function() { // МЕМНЫЕ КОСТЮМЫ ОЗЁРКА
                const githubUrl = 'https://raw.githubusercontent.com/CatWarScript/costumes/main/OV/costumesMEME.css?raw=true';
                $.ajax({
                    url: githubUrl,
                    dataType: 'text',
                    success: function(data) {
                        $('head').append('<style>' + data + '</style>');
                    }});})();
            if (globals["watermarkCostumes"]) {
                (function() { // ВАТЕРМАРКИ ДЛЯ МЕМНЫХ КОСТЮМОВ ОЗЁРКА
                    const githubUrl = 'https://raw.githubusercontent.com/CatWarScript/costumes/main/OV/watermarkMEME.css?raw=true';
                    $.ajax({
                        url: githubUrl,
                        dataType: 'text',
                        success: function(data) {
                            $('head').append('<style>' + data + '</style>');
                        }});})();
            }
        }
        if (globals["watermarkCostumes"]) {
            (function() { // ВАТЕРМАРКИ ДЛЯ КОСТЮМОВ ОЗЁРКА
                const githubUrl = 'https://raw.githubusercontent.com/CatWarScript/costumes/main/OV/watermark.css?raw=true';
                $.ajax({
                    url: githubUrl,
                    dataType: 'text',
                    success: function(data) {
                        $('head').append('<style>' + data + '</style>');
                    }});})();
        }
    }
    if (globals["clSeaUniverse"]) {
        (function() { // ОБЫЧНЫЕ КОСТЮМЫ МОРСКАЯ
            const githubUrl = 'https://raw.githubusercontent.com/CatWarScript/costumes/main/MV/costumes.css?raw=true';
            $.ajax({
                url: githubUrl,
                dataType: 'text',
                success: function(data) {
                    $('head').append('<style>' + data + '</style>');
                }});})();
        if (globals["clMemeCostumes"]) {
            (function() { // МЕМНЫЕ КОСТЮМЫ МОРСКАЯ
                const githubUrl = 'https://raw.githubusercontent.com/CatWarScript/costumes/main/MV/costumesMEME.css?raw=true';
                $.ajax({
                    url: githubUrl,
                    dataType: 'text',
                    success: function(data) {
                        $('head').append('<style>' + data + '</style>');
                    }});})();
            if (globals["watermarkCostumes"]) {
                (function() { // ВАТЕРМАРКИ ДЛЯ МЕМНЫХ КОСТЮМОВ МОРСКАЯ
                    const githubUrl = 'https://raw.githubusercontent.com/CatWarScript/costumes/main/MV/watermarkMEME.css?raw=true';
                    $.ajax({
                        url: githubUrl,
                        dataType: 'text',
                        success: function(data) {
                            $('head').append('<style>' + data + '</style>');
                        }});})();
            }
        }
        if (globals["watermarkCostumes"]) {
            (function() { // ВАТЕРМАРКИ ДЛЯ КОСТЮМОВ МОРСКАЯ
                const githubUrl = 'https://raw.githubusercontent.com/CatWarScript/costumes/main/MV/watermark.css?raw=true';
                $.ajax({
                    url: githubUrl,
                    dataType: 'text',
                    success: function(data) {
                        $('head').append('<style>' + data + '</style>');
                    }});})();
        }
    }
    if (globals["clCreatorUniverse"]) {
        (function() { // ОБЫЧНЫЕ КОСТЮМЫ ТВОРЦЫ
            const githubUrl = 'https://raw.githubusercontent.com/CatWarScript/costumes/main/VT/costumes.css?raw=true';
            $.ajax({
                url: githubUrl,
                dataType: 'text',
                success: function(data) {
                    $('head').append('<style>' + data + '</style>');
                }});})();
        if (globals["clMemeCostumes"]) {
            (function() { // МЕМНЫЕ КОСТЮМЫ ТВОРЦЫ
                const githubUrl = 'https://raw.githubusercontent.com/CatWarScript/costumes/main/VT/costumesMEME.css?raw=true';
                $.ajax({
                    url: githubUrl,
                    dataType: 'text',
                    success: function(data) {
                        $('head').append('<style>' + data + '</style>');
                    }});})();
            if (globals["watermarkCostumes"]) {
                (function() { // ВАТЕРМАРКИ ДЛЯ МЕМНЫХ КОСТЮМОВ ТВОРЦЫ
                    const githubUrl = 'https://raw.githubusercontent.com/CatWarScript/costumes/main/VT/watermarkMEME.css?raw=true';
                    $.ajax({
                        url: githubUrl,
                        dataType: 'text',
                        success: function(data) {
                            $('head').append('<style>' + data + '</style>');
                        }});})();
            }
        }
        if (globals["watermarkCostumes"]) {
            (function() { // ВАТЕРМАРКИ ДЛЯ КОСТЮМОВ ТВОРЦЫ
                const githubUrl = 'https://raw.githubusercontent.com/CatWarScript/costumes/main/VT/watermark.css?raw=true';
                $.ajax({
                    url: githubUrl,
                    dataType: 'text',
                    success: function(data) {
                        $('head').append('<style>' + data + '</style>');
                    }});})();
        }
    }
  }

    (function() {
        const githubUrl = 'https://raw.githubusercontent.com/CatWarScript/costumes/main/MERO/costumes.css?raw=true';
        $.ajax({
            url: githubUrl,
            dataType: 'text',
            success: function(data) {
                $('head').append('<style>' + data + '</style>');
            }});})();

  if (globals.clRemoveAllTongues) {
    $('head').append(`<style>div[style*=tongue]{display: none;}</style>`)
  }
  if (globals.clRemoveAllCostumes) {
    $('head').append(`<style>div[style*=costume]{display: none;}</style>`)
  }

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
        <div id="tmHeader"><table><tbody><tr><td><p>Минное поле V2</p></td><td><span id="tmHeaderPlusMinus">${tmSvgPlus}${tmSvgMinus}</span></td></tr></tbody></table></div>
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
      height: 620px;
      z-index: 500;}

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
      padding: 0px 9px;
      margin: 5px 0px; }

      label.tmFolderLabel {
      background-color: var(--cwsc-inpt-1);
      color: var(--cwsc-txt-4);
      border: 2px solid var(--cwsc-brdr-3);
      border-radius: 3px !important;
      padding: 0px 24px;
      margin: 5px 0px; }

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
      height: 510px;
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
      padding: 0px 9px;
      margin: 5px 0px; }

      label.tmFolderLabel {
      background-color: var(--cwsc-inpt-1);
      color: var(--cwsc-txt-4);
      border: 2px solid var(--cwsc-brdr-3);
      border-radius: 3px !important;
      padding: 0px 24px;
      margin: 5px 0px; }

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
      z-index: 500;}

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
      padding: 0px 9px;
      margin: 5px 0px; }

      label.tmFolderLabel {
      background-color: var(--cwsc-inpt-1);
      color: var(--cwsc-txt-4);
      border: 2px solid var(--cwsc-brdr-3);
      border-radius: 3px !important;
      padding: 0px 24px;
      margin: 5px 0px; }

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

// ...
// ...
// ...

function myCat() {
function getBackgroundColorHex() {
    let backgroundColor = $('#site_table').css('background-color');
    let bodyColor = $('body').css('color');
    let bodyBg = $('body').css('background-image');
    let rgb = backgroundColor.match(/rgba?\(([^)]+)\)/)[1].split(',').map(Number);
    let rgb2 = bodyColor.match(/rgba?\(([^)]+)\)/)[1].split(',').map(Number);
    let hex = rgb.reduce((acc, val) => {
        let hexVal = val.toString(16).padStart(2, '0');
        return acc + hexVal;
    }, '#');
    let hex2 = rgb2.reduce((acc, val) => {
        let hexVal = val.toString(16).padStart(2, '0');
        return acc + hexVal;
    }, '#');
    hex = hex.slice(0, 7);
    hex2 = hex2.slice(0, 7);
    let dsghnImg = bodyBg.match(/url\((['"])(.*?)\1\)/)[2];
    globals['dsghnClr'] = hex;
    globals['dsghnClr2'] = hex2;
    globals['dsghnImg'] = dsghnImg;
    setSettings('dsghnClr', hex);
    setSettings('dsghnClr2', hex2);
    setSettings('dsghnImg', dsghnImg);
}

getBackgroundColorHex();
console.log(globals['dsghnClr']);
console.log(globals['dsghnClr2']);
console.log(globals['dsghnImg']);

  if (globals['boneCorrectTimer']) {
    let boneCorrectDiv = `
        <br><br><div id="timer">
        <b>Костоправы</b><div id="timerMain">
        <input type="number" id="days" min="0" value='0' class="templateInputs">
        <label for="days">Введите дни</label><br>
        <input type="number" id="hours" min="0" value='0' max="23" class="templateInputs">
        <label for="hours">Введите часы</label><br>
        <input type="number" id="minutes" min="0" value='0' max="59" class="templateInputs">
        <label for="minutes">Введите минуты</label><br>
        <div id="buttons"><button id="start" class="boneCorrectBtns">Запустить таймер</button> <button id="reset" class="boneCorrectBtns">Отменить таймер</button></div></div>
        <span id="message"></span>
        </div><br>`

    function toggleBoneTimer() {
      $('#timer').slideToggle();
    }
    let toggleButton = $('<br><button id="toggleBoneCorrectButton" type="button">Калькулятор костоправов</button>').click(toggleBoneTimer);
    appendToElementOrPrependFallback('#pr', '#education-show', toggleButton);
    appendToElementOrPrependFallback('#pr', '#education-show', boneCorrectDiv);
    let cssBoneCorrect = `
        <style>
          div#timer {
          font-family: Montserrat;
          outline: 5px solid var(--cwsc-brdr-1);
          background-color: var(--cwsc-bckg-1);
          color: var(--cwsc-txt-1);
          border-radius: 10px !important;
          margin: 5px 5px; }

          div#timerMain {
          background-color: var(--cwsc-bckg-2);
          border-radius: 0px 0px 10px 10px;
          padding: 7px; }

          div#timerMain label {
          font-weight: bold;
          color: var(--cwsc-txt-1); }

          div#timer>b {
          display: flex !important;
          justify-content: flex-end;
          text-transform: uppercase;
          color: var(--cwsc-txt-2);
          border-bottom: 4px solid var(--cwsc-brdr-2);
          font-size: 25px;
          letter-spacing: 18px;
          padding: 10px 0px; }

          input.templateInputs {
          background-color: var(--cwsc-inpt-1);
          color: var(--cwsc-txt-4);
          border: 1px solid var(--cwsc-brdr-3);
          border-radius: 3px !important;
          width: 65px;
          height: 28px;
          margin: 0px 5px 5px 10px; }

          div#buttons {
          display: flex !important;
          justify-content: center;
          margin: 10px 0px 3px 0px; }

          button.boneCorrectBtns {
          background-color: var(--cwsc-inpt-1);
          color: var(--cwsc-txt-4);
          border: 2px solid var(--cwsc-brdr-3);
          border-radius: 3px !important;
          padding: 3px 10px;
          margin: 0px 10px; }

          button.boneCorrectBtns:hover {
          border: 2px solid var(--cwsc-brdr-2); }

          span#message {
          display: inline-block;
          text-align: center;
          color: var(--cwsc-txt-4);
          margin: 5px 0px; }


          button#toggleBoneCorrectButton {
          background-color: var(--cwdf-bckg-1);
          color: var(--cwdf-txt-1);
          border: 1px solid var(--cwdf-brdr-1);
          font-family: Verdana;
          font-size: .9em; }

          button#toggleBoneCorrectButton:hover {
          border: 1px solid var(--cwdf-brdr-2); }
        </style>`
    $('head').append(cssBoneCorrect);
    if (globals['toggleBoneTimer']) {
      $('#timer').hide();
    }
  }
}

// ...
// ...
// ...

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

  // Wenomechainasama
  // Tumajarbisaun

  if (globals['dontReadenLS']) {
    function updateDontReadCounter() {
      let count = localStorage.getItem('dontReadenCount');
      if (count > 0) {
        if ($('#newls').length) {
          if ($('#dontReadCounter').length) {
            $('#dontReadCounter').text('(' + count + ')');
          }
          else {
            let counter = $('<span id="dontReadCounter">(' + count + ')</span>');
            $('#newls').after(counter);
          }
        }
        else if ($('div.kn6').length) {
          if ($('#dontReadCounter').length) {
            $('#dontReadCounter').text('(' + count + ')');
          }
          else {
            let counter = $('<span id="dontReadCounter">(' + count + ')</span>');
            $('div.kn6').after(counter);
          }
        }
      }
      else {
        $('#dontReadCounter').remove();
      }
      $(document).ready(function() {
        $('#dontReadCounter').click(function(e) {
          e.preventDefault();
        });
        $('#dontReadCounter').click();
      });
    }

    setInterval(updateDontReadCounter, 1000);

    let cssDontReadLS = `
        <style>
          .dontReadButton:hover {
          border: 1px solid var(--cwdf-brdr-2); }

          .dontReadButton {
          background-color: var(--cwdf-bckg-1);
          color: var(--cwdf-txt-1);
          border: 1px solid var(--cwdf-brdr-1);
          font-family: Verdana;
          font-size: .9em; }

          #dontReadCounter {
          background-color: var(--cwsc-bckg-6);
          font-weight: 700;
          color: var(--cwdf-txt-2);
          text-decoration: none !important; }
        </style>`
    $('head').append(cssDontReadLS);
  }

  // Wifenlooof

  function updateClock() {
    setInterval(() => {
      const now = new Date();
      let time;
      if (globals['isClockMoscow']) {
        time = now.toLocaleTimeString('ru-RU', {
          timeZone: 'Europe/Moscow',
          hour12: false
        });
      }
      else {
        time = now.toLocaleTimeString('ru-RU', {
          hour12: false
        });
      }
      $('#clock').text(time);

      if (globals['isDateShow']) {
        updateDate(now);
      }
      else {
        $('#date').text('');
      }
    }, 1000);
  }

  function updateDate(now) {
    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const monthsOfYear = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const date = daysOfWeek[now.getDay()] + ', ' + now.getDate() + ' ' + monthsOfYear[now.getMonth()];
    $('#date').text(date);
  }

  $(document).ready(function() {
    $('#inGameClock').prop('checked', globals['inGameClock']);
    $('#deviceTime').prop('checked', !globals['isClockMoscow']);
    $('#moscowTime').prop('checked', globals['isClockMoscow']);
    $('#showDate').prop('checked', globals['isDateShow']);
    $('#inGameClock').on('change', function() {
      setSettings('inGameClock', this.checked);
      updateClock();
    });
    $('#showDate').on('change', function() {
      setSettings('isDateShow', this.checked);
    });
    $('.cs-chapter').on('click', function() {
      updateClock();
    });
    updateClock();
  });

  // Eselifterbraun
  if (globals['boneCorrectTimer']) {
    let timerId;
    function updateTimerMessage() {
      let timerStart = localStorage.getItem('timerStart');
      let timerDuration = localStorage.getItem('timerDuration');
      if (timerStart && timerDuration) {
        let timeLeft = timerDuration - (Date.now() - timerStart);
        if (timeLeft > 0) {
          let secondsLeft = Math.floor(timeLeft / 1000);
          let minutesLeft = Math.floor(secondsLeft / 60);
          let hoursLeft = Math.floor(minutesLeft / 60);
          let daysLeft = Math.floor(hoursLeft / 24);
          secondsLeft %= 60;
          minutesLeft %= 60;
          hoursLeft %= 24;
          $('#message').text(`До окончания таймера осталось: ${daysLeft} дней, ${hoursLeft} часов, ${minutesLeft} минут, ${secondsLeft} секунд`);
        }
        else {
          $('#message').text('Таймер истёк, Вы можете снять костоправ!');
          localStorage.removeItem('timerStart');
          localStorage.removeItem('timerDuration');
        }
      }
      else {
        $('#message').text('');
      }
    }
    $('#start').click(function() {
      if (timerId) {
        clearTimeout(timerId);
      }
      let days = parseInt($('#days').val()) || 0;
      let hours = parseInt($('#hours').val()) || 0;
      let minutes = parseInt($('#minutes').val()) || 0;
      let time = ((days * 24 + hours) * 60 + minutes) * 60 * 1000;
      timerId = setTimeout(function() {
        alert('Таймер истёк, Вы можете снять костоправ!');
        localStorage.removeItem('timerStart');
        localStorage.removeItem('timerDuration');
        $('#message').text('Таймер истёк, Вы можете снять костоправ!');
      }, time);
      localStorage.setItem('timerStart', Date.now());
      localStorage.setItem('timerDuration', time);
      updateTimerMessage();
    });
    $('#reset').click(function() {
      clearTimeout(timerId);
      timerId = null;
      $('#days').val('');
      $('#hours').val('');
      $('#minutes').val('');
      localStorage.removeItem('timerStart');
      localStorage.removeItem('timerDuration');
      $('#message').text('');
    });
    setInterval(updateTimerMessage, 1000);
    let timerStart = localStorage.getItem('timerStart');
    let timerDuration = localStorage.getItem('timerDuration');
    if (timerStart && timerDuration) {
      let timeLeft = timerDuration - (Date.now() - timerStart);
      if (timeLeft > 0) {
        timerId = setTimeout(function() {
          alert('Таймер истёк, Вы можете снять костоправ!');
          localStorage.removeItem('timerStart');
          localStorage.removeItem('timerDuration');
          $('#message').text('Таймер истёк, Вы можете снять костоправ!');
        }, timeLeft);
      }
      else {
        alert('Таймер истёк, Вы можете снять костоправ!');
        localStorage.removeItem('timerStart');
        localStorage.removeItem('timerDuration');
      }
    }
    updateTimerMessage();
  }

  // Anweculbetugtbaby

  if (globals['hideWoundWarning']) {
    setTimeout(function() {
      $('#warningAboutWound').remove
    }, 1000);
  };

  // Aslonskysrblu

  if (globals['nightLagsWarning']) {
    nightLagsWarning();
  }

  // Yuaksoinocenow

  $('#clearDontReadButton').on('click', function() {
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if (key.startsWith('message')) {
        localStorage.removeItem(key);
      }
    }
    updateDontReadCounter();
    $('#messList tr').removeClass('dontReaden');
  });

    $(document).ready(function() {
  const $trChat = $('#tr_chat');
  const backgroundColor = $trChat.css('background-color');
  const rgbColor = backgroundColor.match(/rgb\((\d+), (\d+), (\d+)\)/);
  const r = parseInt(rgbColor[1]);
  const g = parseInt(rgbColor[2]);
  const b = parseInt(rgbColor[3]);
  const brightnessFactor = 1.2; // Коэффициент яркости
  const newR = Math.round(r * brightnessFactor);
  const newG = Math.round(g * brightnessFactor);
  const newB = Math.round(b * brightnessFactor);
  $trChat.css('background-color', `rgb(${newR}, ${newG}, ${newB})`);
});
}

// ...
// ...
// ...

function fae () {
  $('p:has(input#blogs_blacklist)').after(`<input class="cs-set" id="showEnemy" type="checkbox"${globals.showEnemy?' checked':''}><label for="showEnemy"> Отображать котов из списка врагов в Игровой</label>`);
  $(document).ready(function() {
    setTimeout(function() {
      var enemyLinks = $("#enemyList .remove");
      var enemyIds = [];
      enemyLinks.each(function() {
        var id = $(this).data("id");
        enemyIds.push(id);
      });
      console.log("Список ID врагов:", enemyIds);
      setSettings('enemyList', JSON.stringify(enemyIds));
    }, 1500);
  });

  $('.cs-set').on('change', function() {
    let key = this.id;
    let val = this.type === 'checkbox' ? this.checked : this.value;
    if (this.tagName === 'SELECT') {
      val = $(this).prop('selectedIndex');
    }
    setSettings(key, val);
    console.log(key, ': ', val, '.')
  });
}

function site() {
  if (globals['hideWoundWarning']) {
    $('#warningAboutWound').remove();
  };
}


function blogs() {
  if (globals['ttBlog']) {
    function checkForForm() {
      let form = document.querySelector('#creation_form:first-of-type');
      if (form && !form.classList.contains('templates-added')) {
        add_templates();
        form.classList.add('templates-added');
      }
    }
    checkForForm();
    let observer = new MutationObserver((mutationsList, observer) => {
      for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
          checkForForm();
        }
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    function add_templates() {
      if (window.location.href.includes("https://catwar.su/blogs?creation") || window.location.href.includes("https://catwar.su/sniff?creation")) {
        $(document).ready(function() {
          setTimeout(function() {
            initScript();
          }, 70);
        });

        function initScript() {
          let templatesB = localStorage.getItem('templatesB') ? JSON.parse(localStorage.getItem('templatesB')) : [];

          function renderTemplates() {
            let list = $('.patternlist');
            list.empty();
            templatesB.forEach(function(templateB, index) {
              let templateText = '<div class="patternline"><a href="#" class="name" data-index="' + index + '">' + templateB.name + '</a> <div id="del-edit"><a href="#" class="delete" data-index="' + index + '">[X]</a> <a href="#" class="edit" data-index="' + index + '">[✍]</a></div><hr>';
              list.append(templateText);
            });
          }
          let writeForm = $('#creation_form:first-of-type');
          if (writeForm.length === 0) {
            return;
          }
          writeForm.find('.patternblock').remove();
          writeForm.prepend('<div class="patternblock"><b>Шаблоны</b><div class="patternlist"></div></div>');
          let patternBlock = writeForm.find('.patternblock');
          let createButton = $('<a href="#" id="createButton">Создать новый шаблон</a>').click(function(e) {
            e.preventDefault();
            $(this).hide();
            let inputField = $('<input type="text" id="templateName" placeholder="Введите название шаблона"></input>');
            let okButton = $('<button type="button" id="templateBtnOK" class="templateBtns">OK</button>').click(function() {
              let templateName = inputField.val();
              if (templateName) {
                let currentContent = $('#creation-text').val();
                let newTemplate = {
                  name: templateName,
                  content: currentContent
                };
                templatesB.push(newTemplate);
                localStorage.setItem('templatesB', JSON.stringify(templatesB));
                renderTemplates();
                inputField.remove();
                okButton.remove();
                cancelButton.remove();
                createButton.show();
              }
            });
            let cancelButton = $('<button id="templateBtnUndo" class="templateBtns">Отмена</button>').click(function() {
              inputField.remove();
              okButton.remove();
              cancelButton.remove();
              createButton.show();
            });
            $(this).after(inputField, okButton, '  ', cancelButton);
          });
          patternBlock.append(createButton);
          writeForm.off('click', '.delete').on('click', '.delete', function(e) {
            e.preventDefault();
            let templateIndex = $(this).data('index');
            let templateName = templatesB[templateIndex].name;
            if (confirm('Точно ли вы хотите удалить шаблон "' + templateName + '"?')) {
              templatesB.splice(templateIndex, 1);
              localStorage.setItem('templatesB', JSON.stringify(templatesB));
              renderTemplates();
            }
          });
          writeForm.off('click', '.edit').on('click', '.edit', function(e) {
            $('#templateBtnSaveChanges').show();
            e.preventDefault();
            let templateIndex = $(this).data('index');
            let templateB = templatesB[templateIndex];
            if (templateB) {
              let templateContent = templateB.content;
              $('#creation-text').val(templateContent);
              let saveButton = $('#templateBtnSaveChanges');
              if (saveButton.length === 0) {
                saveButton = $('<button id="templateBtnSaveChanges">Сохранить шаблон</button><br><br>');
                writeForm.append(saveButton);

              }
              saveButton.off('click').click(function(e) {
                e.preventDefault();
                let editedContent = $('#creation-text').val();
                templatesB[templateIndex].content = editedContent;
                localStorage.setItem('templatesB', JSON.stringify(templatesB));
                renderTemplates();
                $('#creation-text').val('');
                $('#templateBtnSaveChanges').hide();
              });
            }
          });
          writeForm.on('click', '.name', function(e) {
            e.preventDefault();
            let templateIndex = $(this).data('index');
            let templateB = templatesB[templateIndex];
            if (templateB) {
              $('#creation-text').val(templateB.content);
              if (globals['ttReplaceThemeB']) {
                $('#creation-title').val(templateB.name);
              }
            }
          });
          renderTemplates();

          function togglePatternBlock() {
            $('.patternblock').slideToggle();
          }
          let toggleButton = $('<button id="togglePatternBlockButton" type="button">Ш</button>').click(togglePatternBlock);
          $('button[data-code="b"]').before(toggleButton);
          if (globals['toggleTTBlog']) {
            $('.patternblock').hide();
          }
        }
      }
    }
    let css = `
        <style>
          div.patternlist::-webkit-scrollbar {
          width: 8px; }

          div.patternlist::-webkit-scrollbar-track {
          background: var(--cwsc-scrl-1) !important;
          border-radius: 3px; }

          div.patternlist::-webkit-scrollbar-thumb {
          background: var(--cwsc-scrl-2) !important;
          border-radius: 3px; }

          div.patternblock {
          font-family: Montserrat;
          outline: 5px solid var(--cwsc-brdr-1);
          background-color: var(--cwsc-bckg-1);
          color: var(--cwsc-txt-1);
          border-radius: 10px !important;
          margin: 15px 5px; }

          div.patternblock>b {
          display: flex !important;
          justify-content: center;
          text-transform: uppercase;
          color: var(--cwsc-txt-2);
          border-bottom: 4px solid var(--cwsc-brdr-2);
          font-size: 25px;
          letter-spacing: 25px;
          padding: 10px 0px; }

          div.patternlist {
          max-height: 170px;
          overflow: auto;
          background-color: var(--cwsc-bckg-2);
          border-radius: 0px 0px 10px 10px;
          padding: 6px 0px 0px 0px}

          div.patternline>hr {
          border: 0.5px solid var(--cwsc-brdr-4);
          margin: 6px 0px 0px 0px; }

          div.patternline:hover {
          background: var(--cwsc-brdr-4) !important;
          transition: 0.8s; }

          div.patternline {
          transition: 0.8s;
          padding-top: 6px; }

          div.patternline a {
          color: var(--cwsc-txt-1); }

          div.patternline a:hover {
          color: var(--cwsc-txt-4); }

          .patternline>a.name {
          display: block;
          margin: 0px 0px 0px 10px; }

          div#del-edit {
          display: flex;
          justify-content: flex-end;
          margin: -15px 0px 0px 0px;
          height: 18px; }

          div#del-edit>a {
          margin: 0px 3px; }

          div#del-edit>a.edit {
          position: relative;
          bottom: 1px; }

          input#templateName {
          background-color: var(--cwsc-inpt-2);
          color: var(--cwsc-txt-4);
          border: 1px solid var(--cwsc-brdr-3);
          border-radius: 3px !important;
          width: 200px !important;
          margin: 6px 10px 4px 10px; }

          button#templateBtnOK, button#templateBtnUndo, button#templateBtnSaveChanges {
          background-color: var(--cwsc-inpt-2);
          color: var(--cwsc-txt-4);
          border: 2px solid var(--cwsc-brdr-3);
          border-radius: 3px !important;
          padding: 1px 15px;
          margin: 0px 5px; }

          button#templateBtnOK:hover, button#templateBtnUndo:hover, button#templateBtnSaveChanges:hover {
          border: 1px solid var(--cwsc-brdr-2); }

          a#createButton {
          display: inline-block;
          color: var(--cwsc-txt-4);
          padding: 6px; }

          button#togglePatternBlockButton {
          background-color: var(--cwdf-bckg-1);
          color: var(--cwdf-txt-1);
          border: none;
          margin-right: 5px; }

          button#togglePatternBlockButton:hover {
          outline: 1px solid var(--cwdf-brdr-2); }
        </style>`
    $('head').append(css);
  }
}

function chat() {
    if (globals['ttChat']) {
    function checkForForm() {
      let form = document.querySelector('#mess_form');
      if (form && !form.classList.contains('templates-added')) {
        add_templates();
        form.classList.add('templates-added');
      }
    }
    checkForForm();
    let observer = new MutationObserver((mutationsList, observer) => {
      for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
          checkForForm();
        }
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    function add_templates() {
      if (window.location.href.includes("https://catwar.su/chat")) {
        $(document).ready(function() {
          setTimeout(function() {
            initScript();
          }, 70);
        });

        function initScript() {
          let templatesC = localStorage.getItem('templatesC') ? JSON.parse(localStorage.getItem('templatesC')) : [];

          function renderTemplates() {
            let list = $('.patternlist');
            list.empty();
            templatesC.forEach(function(template, index) {
              let templateText = '<div class="patternline"><a href="#" class="name" data-index="' + index + '">' + template.name + '</a> <div id="del-edit"><a href="#" class="delete" data-index="' + index + '">[X]</a> <a href="#" class="edit" data-index="' + index + '">[✍]</a></div><hr>';
              list.append(templateText);
            });
          }
          let writeForm = $('form#mess_form');
          if (writeForm.length === 0) {
            return;
          }
          writeForm.find('.patternblock').remove();
          writeForm.prepend('<div class="patternblock"><b>Шаблоны</b><div class="patternlist"></div></div>');
          let patternBlock = writeForm.find('.patternblock');
          let createButton = $('<a href="#" id="createButton">Создать новый шаблон</a>').click(function(e) {
            e.preventDefault();
            $(this).hide();
            let inputField = $('<input type="text" id="templateName" placeholder="Введите название шаблона"></input>');
            let okButton = $('<button type="button" id="templateBtnOK" class="templateBtns">OK</button>').click(function() {
              let templateName = inputField.val();
              if (templateName) {
                let currentContent = $('#mess').html(); // Изменяем на получение содержимого #mess
                let newTemplate = {
                  name: templateName,
                  content: currentContent
                };
                templatesC.push(newTemplate);
                localStorage.setItem('templatesC', JSON.stringify(templatesC));
                renderTemplates();
                inputField.remove();
                okButton.remove();
                cancelButton.remove();
                createButton.show();
              }
            });
            let cancelButton = $('<button id="templateBtnUndo" class="templateBtns">Отмена</button>').click(function() {
              inputField.remove();
              okButton.remove();
              cancelButton.remove();
              createButton.show();
            });
            $(this).after(inputField, okButton, '  ', cancelButton);
          });
          patternBlock.append(createButton);
          writeForm.off('click', '.delete').on('click', '.delete', function(e) {
            e.preventDefault();
            let templateIndex = $(this).data('index');
            let templateName = templatesC[templateIndex].name;
            if (confirm('Точно ли вы хотите удалить шаблон "' + templateName + '"?')) {
              templatesC.splice(templateIndex, 1);
              localStorage.setItem('templatesC', JSON.stringify(templatesC));
              renderTemplates();
            }
          });
          writeForm.off('click', '.edit').on('click', '.edit', function(e) {
            $('#templateBtnSaveChanges').show();
            e.preventDefault();
            let templateIndex = $(this).data('index');
            let templateC = templatesC[templateIndex];
            if (templateC) {
              let templateContent = templateC.content;
              $('#mess').html(templateContent); // Устанавливаем содержимое #mess
              let saveButton = $('#templateBtnSaveChanges');
              if (saveButton.length === 0) {
                saveButton = $('<button id="templateBtnSaveChanges">Сохранить шаблон</button><br><br>');
                writeForm.append(saveButton);
              }
              saveButton.off('click').click(function(e) {
                e.preventDefault();
                let editedContent = $('#mess').html(); // Получаем содержимое #mess
                templatesC[templateIndex].content = editedContent;
                localStorage.setItem('templatesC', JSON.stringify(templatesC));
                renderTemplates();
                $('#mess').html(''); // Очищаем #mess
                $('#templateBtnSaveChanges').hide();
              });
            }
          });
          writeForm.on('click', '.name', function(e) {
            e.preventDefault();
            let templateIndex = $(this).data('index');
            let templateC = templatesC[templateIndex];
            if (templateC) {
              $('#mess').html(templateC.content); // Устанавливаем содержимое #mess
            }
          });
          renderTemplates();

          function togglePatternBlock() {
            $('.patternblock').slideToggle();
          }
          let toggleButton = $('<button id="togglePatternBlockButton" type="button">Ш</button>').click(togglePatternBlock);
          $('button[data-code="b"]').before(toggleButton);
          if (globals['toggleTTChat']) {
            $('.patternblock').hide();
          }
        }
      }
    }
    let css = `
        <style>
          div.patternlist::-webkit-scrollbar {
          width: 8px; }

          div.patternlist::-webkit-scrollbar-track {
          background: var(--cwsc-scrl-1) !important;
          border-radius: 3px; }

          div.patternlist::-webkit-scrollbar-thumb {
          background: var(--cwsc-scrl-2) !important;
          border-radius: 3px; }

          div.patternblock {
          font-family: Montserrat;
          outline: 5px solid var(--cwsc-brdr-1);
          background-color: var(--cwsc-bckg-1);
          color: var(--cwsc-txt-1);
          border-radius: 10px !important;
          width: 98.2%;
          margin: 15px 5px; }

          div.patternblock>b {
          display: flex !important;
          justify-content: center;
          text-transform: uppercase;
          color: var(--cwsc-txt-2);
          border-bottom: 4px solid var(--cwsc-brdr-2);
          font-size: 25px;
          letter-spacing: 25px;
          padding: 10px 0px; }

          div.patternlist {
          max-height: 170px;
          overflow: auto;
          background-color: var(--cwsc-bckg-2);
          border-radius: 0px 0px 10px 10px;
          padding: 6px 0px 0px 0px}

          div.patternline>hr {
          border: 0.5px solid var(--cwsc-brdr-4);
          margin: 6px 0px 0px 0px; }

          div.patternline:hover {
          background: var(--cwsc-brdr-4) !important;
          transition: 0.8s; }

          div.patternline {
          transition: 0.8s;
          padding-top: 6px; }

          div.patternline a {
          color: var(--cwsc-txt-1); }

          div.patternline a:hover {
          color: var(--cwsc-txt-4); }ы

          .patternline>a.name {
          display: block;
          margin: 0px 0px 0px 10px; }

          div#del-edit {
          display: flex;
          justify-content: flex-end;
          margin: -15px 0px 0px 0px;
          height: 18px; }

          div#del-edit>a {
          margin: 0px 3px; }

          div#del-edit>a.edit {
          position: relative;
          bottom: 1px; }

          input#templateName {
          background-color: var(--cwsc-inpt-2);
          color: var(--cwsc-txt-4);
          border: 1px solid var(--cwsc-brdr-3);
          border-radius: 3px !important;
          width: 200px !important;
          margin: 6px 10px 4px 10px; }

          button#templateBtnOK, button#templateBtnUndo, button#templateBtnSaveChanges {
          background-color: var(--cwsc-inpt-2);
          color: var(--cwsc-txt-4);
          border: 2px solid var(--cwsc-brdr-3);
          border-radius: 3px !important;
          padding: 1px 15px;
          margin: 0px 5px; }

          button#templateBtnOK:hover, button#templateBtnUndo:hover, button#templateBtnSaveChanges:hover {
          border: 1px solid var(--cwsc-brdr-2); }

          a#createButton {
          display: inline-block;
          color: var(--cwsc-txt-4);
          padding: 6px; }

          button#togglePatternBlockButton {
          background-color: var(--cwdf-bckg-1);
          color: var(--cwdf-txt-1);
          border: none;
          margin-right: 5px; }

          button#togglePatternBlockButton:hover {
          outline: 1px solid var(--cwdf-brdr-2); }
        </style>`
    $('head').append(css);
  }
}

function custom() {
  $('body').empty();
  document.title = 'Макет Игровой | CW Script';
  let html = `
<div id="app" data-mobile="0" data-time="1722258742" style="display: block;"><span class="other_cats_list"><a href="#">Дурное Сновидение</a></span><br> <p id="error"></p> <div id="achievement" class=""><div id="achievement_img"><img src="/achievement/0.png"></div> <div id="achievement_container"><div id="achievement_top">Получено достижение!</div> <div id="achievement_name"></div> <div id="achievement_text"></div></div> <div id="close_achievement" class="no-select">×</div></div> <div id="timer"></div> <div id="fightPanel" style="display: none; width: 320px;"><img src="symbole/unlock.png" id="block"> <input type="button" value="I" class="hotkey"><input type="button" value="O" class="hotkey"><input type="button" value="L" class="hotkey"><input type="button" value="J" class="hotkey"><input type="button" value="K" class="hotkey"><input type="button" value="T+1" class="hotkey"><input type="button" value="T+2" class="hotkey"><input type="button" value="T+3" class="hotkey"> <div id="fightLog" style="height: 70px;"></div></div> <span class="small"><a href="/">Мой кот</a> |
<a href="/chat">Чат</a> <span id="newchat"></span> |
<a href="/ls">ЛС</a> <span id="newls"></span></span><br> <table id="main_table" style="border-spacing: 2px;"><tbody><tr id="tr_chat"><td><form id="chat_form"><span id="txt"><input maxlength="255" size="50" id="text" autocomplete="off"> <!----> <!----></span> <input type="submit" id="msg_send" value="OK"> <!----> <span><span id="volume" class="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"><span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style="left: 50%;"></span></span> <b>(правее — громче)</b></span></form> <div id="chat_msg"> <hr> </div></td></tr> <tr id="tr_actions"><td><span class="title">Действия</span> <div id="block_deys"><table style="width: 100%;"><tbody><tr><td style="width: 70%;"><div id="akten"><!----> <a href="#" data-id="13" class="dey"><img src="https://catwar.su/cw3/actions/13.png" loading="lazy" title="Принюхаться"></a><a href="#" data-id="17" class="dey"><img src="https://catwar.su/cw3/actions/17.png" loading="lazy" title="Копать землю"></a><a href="#" data-id="27" class="dey"><img src="https://catwar.su/cw3/actions/27.png" loading="lazy" title="Встать в боевую стойку"></a> <a href="#" data-id="flowers" class="specialAct" style="display: none;"><img src="https://catwar.su/cw3/actions/flowers.png" loading="lazy"></a> </div> <div id="dein"><!----> <a href="#" data-id="6" class="dey"><img src="https://catwar.su/cw3/actions/6.png" loading="lazy" title="Поднять"></a><a href="#" data-id="9" class="dey"><img src="https://catwar.su/cw3/actions/9.png" loading="lazy" title="Потереться носом о нос"></a><a href="#" data-id="12" class="dey"><img src="https://catwar.su/cw3/actions/12.png" loading="lazy" title="Помурлыкать вместе"></a><a href="#" data-id="14" class="dey"><img src="https://catwar.su/cw3/actions/14.png" loading="lazy" title="Обнюхать"></a><a href="#" data-id="19" class="dey"><img src="https://catwar.su/cw3/actions/19.png" loading="lazy" title="Вылизать"></a><a href="#" data-id="51" class="dey"><img src="https://catwar.su/cw3/actions/51.png" loading="lazy" title="Потереться щекой о щёку"></a><a href="#" data-id="52" class="dey"><img src="https://catwar.su/cw3/actions/52.png" loading="lazy" title="Переплести хвосты"></a><a href="#" data-id="53" class="dey"><img src="https://catwar.su/cw3/actions/53.png" loading="lazy" title="Повалять по земле"></a><a href="#" data-id="88" class="dey"><img src="https://catwar.su/cw3/actions/88.png" loading="lazy" title="Вслушаться в шум ракушки"></a> <a href="#" id="dialog"><img src="https://catwar.su/cw3/actions/talk.png" loading="lazy"></a>  <a href="#" data-id="exchange" class="specialAct" style=""><img src="https://catwar.su/cw3/actions/exchange.png" loading="lazy"></a></div></td> <td>
Действия с каким-либо котом в соседней клетке:<br> <select id="mit"><option value="0">Действия с собой</option><option value="1292731">Ломушка</option></select><br> <input type="button" id="mitok" value="Показать"></td></tr></tbody></table></div> <div id="block_mess"></div></td></tr><div id="clockContainer"><div id="clock">18:52:15</div><div id="date">Понедельник, 29 июля</div></div><tr id="tr_tos"><td><table><tbody><tr><td><!----> <!----></td> <td><div id="tos" style="background: #6593B6;background: -moz-linear-gradient(0deg, #90B9D0, #3B6C9B);background: -webkit-linear-gradient(0deg, #90B9D0, #3B6C9B);background: -o-linear-gradient(0deg, #90B9D0, #3B6C9B);background: -ms-linear-gradient(0deg, #90B9D0, #3B6C9B);background: linear-gradient(90deg, #90B9D0, #3B6C9B);"></div></td> <td><a href="/time" target="_blank" id="hour"><img src="https://catwar.su/cw3/symbole/hours/15.png"></a></td> <td><a href="/time" target="_blank"><img src="https://catwar.su/cw3/symbole/season0.png"></a></td> <!----></tr></tbody></table></td></tr> <tr id="tr_sky"><td><div id="sky" style="background-image: url(//e.catwar.su/cw3/sky/5.png);"></div></td></tr> <tr id="tr_field"><td id="act"><div id="cages_overflow"><div id="cages_div" style="opacity: 1; background-image: url(https://catwar.su/cw3/spacoj/73033.jpg);"><table id="cages"><tbody><tr><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><span class="catWithArrow"><!----> <span class="cat"><div data-v-59afe5e8="" class="d"><div data-v-59afe5e8="" class="first" style="background-size: 78%; background-image: url(&quot;/cw3/composited/558bcd92715b8c88.png); position: absolute;"></div></div> <!----> <!----> <span class="cat_tooltip"><u><a href="/cat1292731">Ломушка</a></u><br> <!----> <div><small><i>Будущая стражница</i></small></div>
У неё во рту:
<ol class="mouth"><li><img src="https://catwar.su/cw3/things/180.png"></li> </ol>
Её запах:<br> <img src="odoroj/11.png"><br> <span class="online">[ <font color="#A52A2A">Спит</font> ]</span></span> <!----></span></span> <!----></div></td><td class="cage"><div class="cage_items"><span class="catWithArrow"><!----> <span class="cat"><div data-v-59afe5e8="" class="d"><div data-v-59afe5e8="" class="first" style="background-size: 86%; background-image: url(https://raw.githubusercontent.com/CatWarScript/myFiles/main/zapal.png); position: absolute;"></div><div data-v-59afe5e8="" class="" style="background-size: 86%; background-image: url(https://catwar.su/cw3/cats/0/costume/143.png); position: absolute;"></div></div> <!----> <!----> <span class="cat_tooltip"><u><a href="/cat1562064">Звёздный Запал</a></u><br> <!----> <div><small><i>Предводитель</i></small></div>
У него во рту:
<ol class="mouth"><li><img src="https://catwar.su/cw3/things/2896.png"></li> </ol>
Его запах:<br> <img src="odoroj/3.png"><br> <span class="online">[ <font color="#006400">В игре</font> ]</span></span> <!----></span></span> <!----></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage" style="background: url(&quot;weather/puddle_1.png) 0px 0px;"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><!----> <span class="move_parent"><img src="https://catwar.su/cw3/moves/73000.png" class="move_img"> <span class="move_name">Камышовая поляна</span></span></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><!----> <span class="move_parent"><img src="https://catwar.su/cw3/moves/73000.png" class="move_img"> <span class="move_name">Мшистая полянка</span></span></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td></tr><tr><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td></tr><tr><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><span class="catWithArrow"><!----> <span class="cat"><div data-v-59afe5e8="" class="d"><div data-v-59afe5e8="" class="first" style="background-size: 73%; background-image: url(&quot;/cw3/composited/b0e10b7f6a836277.png); position: absolute;"></div><div data-v-59afe5e8="" class="" style="background-size: 73%; background-image: url(&quot;/cw3/cats/0/defects/dirt/base/1/1.png); position: absolute;"></div><div data-v-59afe5e8="" class="" style="background-size: 73%; background-image: url(&quot;/cw3/cats/0/defects/dirt/base/1/tail/6/1.png); position: absolute;"></div></div> <!----> <!----> <span class="cat_tooltip"><u><a href="/cat1601347">Выдролап</a></u><br> <!----> <div><small><i>Оруженосец</i></small></div> <!---->
Его запах:<br> <img src="odoroj/3.png"><br> <span class="online">[ <font color="#A52A2A">Спит</font> ]</span></span> <!----></span></span> <!----></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><span class="catWithArrow"><!----> <span class="cat"><div data-v-59afe5e8="" class="d"><div data-v-59afe5e8="" class="first" style="background-size: 82%; background-image: url(&quot;/cw3/composited/5cb240656bc1a2e5.png); position: absolute;"></div><div data-v-59afe5e8="" class="" style="background-size: 82%; background-image: url(&quot;/cw3/cats/0/costume/797.png); position: absolute;"></div><div data-v-59afe5e8="" class="" style="background-size: 82%; background-image: url(&quot;/cw3/cats/0/defects/trauma/1.png); position: absolute;"></div></div> <!----> <!----> <span class="cat_tooltip"><u><a href="/cat1567977">Шутовка</a></u><br> <!----> <div><small><i>Королева</i></small></div>
У неё во рту:
<ol class="mouth"><li><img src="https://catwar.su/cw3/things/560.png"></li> </ol>
Её запах:<br> <img src="odoroj/3.png"><br> <span class="online">[ <font color="#333333">Недавно ушла</font> ]</span></span> <!----></span></span> <!----></div></td></tr><tr><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td></tr><tr><td class="cage"><div class="cage_items"><!----> <span class="move_parent"><img src="https://catwar.su/cw3/moves/9000.png" class="move_img"> <span class="move_name">Галечный берег</span></span></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td></tr><tr><td class="cage"><div class="cage_items" style="background: url(https://catwar.su/cw3/things/2076.png) 100% 100% no-repeat, url(https://catwar.su/cw3/things/8308.png) 0% 100% no-repeat, url(https://catwar.su/cw3/things/2076.png) 100% 0% no-repeat, url(https://catwar.su/cw3/things/418.png) 0% 0% no-repeat;"><!----> <!----></div></td><td class="cage"><div class="cage_items" style="background: url(https://catwar.su/cw3/things/1035.png) 0% 100% no-repeat, url(https://catwar.su/cw3/things/1035.png) 100% 0% no-repeat, url(https://catwar.su/cw3/things/1035.png) 0% 0% no-repeat;"><!----> <!----></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td><td class="cage"><div class="cage_items"><!----> <span class="move_parent"><img src="https://catwar.su/cw3/moves/9000.png" class="move_img"> <span class="move_name">Шелестящий тростник</span></span></div></td><td class="cage"><div class="cage_items"><!----> <!----></div></td></tr></tbody></table> <!----> <!----></div></div></td></tr> <tr id="tr_mouth"><td><span class="title">Во рту</span> <div id="itemList"><div id="37911598" class="itemInMouth"><img src="https://catwar.su/cw3/things/2896.png"></div> </div> <a href="#">Смешивать</a> <!----><br><br> <div id="thdey" style="display: none;"><ul style="margin: 0px; padding: 0px 0px 0px 1.4em;"><li><a href="#" id="eat"></a></li> <li><a href="#" id="put">Положить на землю</a></li> <li>Осмотреть (<a href="#">поверхностно</a> или
<a href="#">тщательно</a>)
</li> <!----> <!----> <li><a href="#">Закопать</a></li> <li><a href="#">Закрепить</a></li> <!----> <li>Уникальный ID: </li></ul> <br> <div id="layer" class="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"><span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style="left: 0%;"></span></div> <br>
Чем правее, тем глубже будет закопан предмет. <a href="/about?id=12" target="_blank">[?]</a><br><br></div> <div id="ctdey" style="display: none;"><ul style="margin: 0px; padding: 0px 0px 0px 1.4em;"><li><a href="#" id="put2">Положить на землю</a></li> <li><a href="/cat0" target="_blank">Перейти в профиль</a></li></ul></div></td></tr> <tr id="tr_info"><td><table id="info_main"><tbody><tr><td id="family" class="infos"><h2><a href="#" id="relatives" class="toggle">Родственные связи</a></h2> <div id="relatives_block"><div id="family_block"><b>Мама</b>: <a href="/cat920769">Линь</a><br><b>Папа</b>: <a href="/cat1454689">Омуль</a><br><b>Братья и сёстры</b>: <a href="/cat1252965">Неугодненький</a>, <i><a href="/cat1394475">Шутливая Проказница</a></i>, <i><a href="/cat1535768">Крик Галки</a></i>, <i><a href="/cat1541622">Душевная Боль</a></i>, <i><a href="/cat1569026">Крик</a></i>, <a href="/cat1572997">Мурчишка</a>, <i><a href="/cat1608702">Дятлушенька</a></i><br><b>Котята</b>: <i><a href="/cat1579700">Высокомерие</a></i>, <i><a href="/cat1597691">Солнцещёкая</a></i><br><br><i>Курсивом</i> выделены приёмные родственники.</div> <a href="/relatives">Генеалогический кустик</a> <div id="pairs"><img src="/img/loading.gif" id="pairs-loading" style="margin-top: 5px; display: none;"> <p>
Вы стали парой с кошкой по имени <a href="/cat936551">Задорница</a> на <span data-who="936551" class="pair">65.3</span>%.
<a href="#" title="Разлюбить" class="pair-delete"><img src="https://catwar.su/cw3/symbole/pair_delete.png"></a> <a href="#" title="Усыновить/удочерить кого-либо" class="adopt"><img src="https://catwar.su/cw3/symbole/pair_adopt.png"></a> <!----></p></div></div></td> <td id="history" class="infos"><h2><a href="#" id="history" class="toggle">История</a></h2> <div id="history_block"><span id="ist">История очищена. Вылизался. Вылизался. Принюхался. Принюхался. Пошёл в локацию «Мель». Пошёл в локацию «Глубина». Пошёл в локацию «Дно реки». Нырнул. Не нашёл ничего интересного. Нырнул. Обнаружил мох. Нырнул. Не нашёл ничего интересного. Пошёл в локацию «Глубина». Отменил действие. Пошёл в локацию «Глубина». Пошёл в локацию «Мель». Положил на землю чёрный ошейник. Поднял с земли камень. Положил на землю мох. Положил на землю камень. Поднял с земли чёрный ошейник. Пошёл в локацию «Галечный берег». Поспал. Поспал. Принюхался. Принюхался. Принюхался. Поспал. Поспал. Вылизался. Пошёл в локацию «Камышовые заросли».</span><br> <a href="#" id="history_clean">Очистить историю</a> <div style="background-color: white;">
Моё местонахождение: <span id="location">Камышовые заросли</span></div></div></td> <td id="parameter" class="infos"><h2><a href="#" id="parameters" class="toggle">Параметры и навыки</a><a id="parameters-alert" href="#">+</a></h2> <div id="parameters_block"><table id="dream_table"><tbody><tr><td><div class="symbole" style="background-position: 0px -30px"></div></td><td><span id="dream"><table class="parameter"><tbody><tr><td style="width: 150px; background-color: green;"></td><td style="background-color: red; width: 0px;"></td></tr></tbody></table></span></td></tr></tbody></table><table id="hunger_table"><tbody><tr><td><div class="symbole" style="background-position: 0px -60px"></div></td><td><span id="hunger"><table class="parameter"><tbody><tr><td style="width: 109px; background-color: green;"></td><td style="background-color: red; width: 41px;"></td></tr></tbody></table></span></td></tr></tbody></table><table id="thirst_table"><tbody><tr><td><div class="symbole" style="background-position: 0px -15px"></div></td><td><span id="thirst"><table class="parameter"><tbody><tr><td style="width: 87px; background-color: green;"></td><td style="background-color: red; width: 63px;"></td></tr></tbody></table></span></td></tr></tbody></table><table id="need_table"><tbody><tr><td><div class="symbole" style="background-position: 0px -45px"></div></td><td><span id="need"><table class="parameter"><tbody><tr><td style="width: 0px; background-color: green;"></td><td style="background-color: red; width: 150px;"></td></tr></tbody></table></span></td></tr></tbody></table><table id="health_table"><tbody><tr><td><div class="symbole" id="vundo_icon" style="background-position: 0px -90px"></div></td><td><span id="health"><table class="parameter"><tbody><tr><td style="width: 150px; background-color: green;"></td><td style="background-color: red; width: 0px;"></td></tr></tbody></table></span></td></tr></tbody></table><table id="clean_table"><tbody><tr><td><div class="symbole" style="background-position: 0px -120px"></div></td><td><span id="clean"><table class="parameter"><tbody><tr><td style="width: 150px; background-color: green;"></td><td style="background-color: red; width: 0px;"></td></tr></tbody></table></span></td></tr></tbody></table><hr><table id="smell_table"><tbody><tr><td><div class="symbole" id="smell_icon" style="background-position: 0px 0px"></div></td><td><span id="smell"><table cellspacing="0" cellpadding="0"><tbody><tr><td><table class="parameter"><tbody><tr><td style="width:17px;background-color:green"></td><td style="background-color:#ccc;width:133px"></td></tr></tbody></table></td><td>&nbsp;<b>7</b></td></tr></tbody></table></span></td></tr></tbody></table><table id="dig_table"><tbody><tr><td><div class="symbole" style="background-position: 0px -105px"></div></td><td><span id="dig"><table cellspacing="0" cellpadding="0"><tbody><tr><td><table class="parameter"><tbody><tr><td style="width:94px;background-color:green"></td><td style="background-color:#ccc;width:56px"></td></tr></tbody></table></td><td>&nbsp;<b>4</b></td></tr></tbody></table></span></td></tr></tbody></table><table id="swim_table"><tbody><tr><td><div class="symbole" style="background-position: 0px -135px"></div></td><td><span id="swim"><table cellspacing="0" cellpadding="0"><tbody><tr><td><table class="parameter"><tbody><tr><td style="width:11px;background-color:green"></td><td style="background-color:#ccc;width:139px"></td></tr></tbody></table></td><td>&nbsp;<b>8</b></td></tr></tbody></table></span></td></tr></tbody></table><table id="might_table"><tbody><tr><td><div class="symbole" style="background-position: 0px -150px"></div></td><td><span id="might"><table cellspacing="0" cellpadding="0"><tbody><tr><td><table class="parameter"><tbody><tr><td style="width:150px;background-color:green"></td><td style="background-color:#ccc;width:0px"></td></tr></tbody></table></td><td>&nbsp;<b>9</b></td></tr></tbody></table></span></td></tr></tbody></table><table id="tree_table"><tbody><tr><td><div class="symbole" style="background-position: 0px -195px"></div></td><td><span id="tree"><table cellspacing="0" cellpadding="0"><tbody><tr><td><table class="parameter"><tbody><tr><td style="width:150px;background-color:green"></td><td style="background-color:#ccc;width:0px"></td></tr></tbody></table></td><td>&nbsp;<b>9</b></td></tr></tbody></table></span></td></tr></tbody></table><table id="observ_table"><tbody><tr><td><div class="symbole" style="background-position: 0px -210px"></div></td><td><span id="observ"><table cellspacing="0" cellpadding="0"><tbody><tr><td><table class="parameter"><tbody><tr><td style="width:93px;background-color:green"></td><td style="background-color:#ccc;width:57px"></td></tr></tbody></table></td><td>&nbsp;<b>6</b></td></tr></tbody></table></span></td></tr></tbody></table><!----><input class="cs-set" id="turnOnLightCatWar" type="checkbox" checked="" style="display: none;"><label class="cs-set" for="turnOnLightCatWar" style="display: none;">Облегчалочка</label></div></td></tr></tbody></table></td></tr></tbody></table> <p><b>Тёмные баллы (шанс попасть в Сумрачный лес после смерти):</b> <span id="black">0</span></p></div>
  `;
  $('body').append(html);
  let prikol = `
  <div id="compactTool">
    <span id="ctHeader">Настройка компактной игровой</span>
    <div id="ctInputs">
      <table>
        <tr>
          <td>
            Блок
          </td>
          <td>
            Фоновый цвет
          </td>
          <td>
            Позиция (гор)
          </td>
          <td>
            Позиция (вер)
          </td>
          <td>
            Ширина
          </td>
          <td>
            Высота
          </td>
          <td>
            Цвет текста
          </td>
        </tr>
        <tr>
          <td>
            История
          </td>
          <td>
          <input class="cs-set" id="cgHisCol" type="color"${globals.cgHisCol?' checked':''} style="width: 35px;">
          </td>
          <td>
          <input class="cs-set" id="cgHisX" type="number"${globals.cgHisX?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
          <input class="cs-set" id="cgHisY" type="number"${globals.cgHisY?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
          <input class="cs-set" id="cgHisWid" type="number"${globals.cgHisWid?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
          <input class="cs-set" id="cgHisHei" type="number"${globals.cgHisHei?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
            <input class="cs-set" id="cgHisFCol" type="color"${globals.cgHisFCol?' checked':''} style="width: 35px;">
          </td>
        </tr>
        <tr>
          <td>
            Параметры
          </td>
          <td>
          <input class="cs-set" id="cgParCol" type="color"${globals.cgParCol?' checked':''} style="width: 35px;">
          </td>
          <td>
          <input class="cs-set" id="cgParX" type="number"${globals.cgParX?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
          <input class="cs-set" id="cgParY" type="number"${globals.cgParY?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
          <input class="cs-set" id="cgParWid" type="number"${globals.cgParWid?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
          <input class="cs-set" id="cgParHei" type="number"${globals.cgParHei?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
          <input class="cs-set" id="cgParFCol" type="color"${globals.cgParFCol?' checked':''} style="width: 35px;">
          </td>
        </tr>
        <tr>
          <td>
            Чат
          </td>
          <td>
          <input class="cs-set" id="cgChatCol" type="color"${globals.cgChatCol?' checked':''} style="width: 35px;">
          </td>
          <td>
          <input class="cs-set" id="cgChatX" type="number"${globals.cgChatX?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
          <input class="cs-set" id="cgChatY" type="number"${globals.cgChatY?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
          <input class="cs-set" id="cgChatWid" type="number"${globals.cgChatWid?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
          <input class="cs-set" id="cgChatHei" type="number"${globals.cgChatHei?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
          <input class="cs-set" id="cgChatFCol" type="color"${globals.cgChatFCol?' checked':''} style="width: 35px;">
          </td>
        </tr>
        <tr>
          <td>
            Действия
          </td>
          <td>
          <input class="cs-set" id="cgDeysCol" type="color"${globals.cgDeysCol?' checked':''} style="width: 35px;">
          </td>
          <td>
          <input class="cs-set" id="cgDeysX" type="number"${globals.cgDeysX?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
          <input class="cs-set" id="cgDeysY" type="number"${globals.cgDeysY?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
          <input class="cs-set" id="cgDeysWid" type="number"${globals.cgDeysWid?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
          <input class="cs-set" id="cgDeysHei" type="number"${globals.cgDeysHei?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
          <input class="cs-set" id="cgDeysFCol" type="color"${globals.cgDeysFCol?' checked':''} style="width: 35px;">
          </td>
        </tr>
        <tr>
          <td>
            РС
          </td>
          <td>
          <input class="cs-set" id="cgRSCol" type="color"${globals.cgRSCol?' checked':''} style="width: 35px;">
          </td>
          <td>
          <input class="cs-set" id="cgRSX" type="number"${globals.cgRSX?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
          <input class="cs-set" id="cgRSY" type="number"${globals.cgRSY?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
          <input class="cs-set" id="cgRSWid" type="number"${globals.cgRSWid?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
          <input class="cs-set" id="cgRSHei" type="number"${globals.cgRSHei?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
          <input class="cs-set" id="cgRSFCol" type="color"${globals.cgRSFCol?' checked':''} style="width: 35px;">
          </td>
        </tr>
        <tr>
          <td>
            Во рту
          </td>
          <td>
          <input class="cs-set" id="cgRotCol" type="color"${globals.cgRotCol?' checked':''} style="width: 35px;">
          </td>
          <td>
          <input class="cs-set" id="cgRotX" type="number"${globals.cgRotX?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
          <input class="cs-set" id="cgRotY" type="number"${globals.cgRotY?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
          <input class="cs-set" id="cgRotWid" type="number"${globals.cgRotWid?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
          <input class="cs-set" id="cgRotHei" type="number"${globals.cgRotHei?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
          <input class="cs-set" id="cgRotFCol" type="color"${globals.cgRotFCol?' checked':''} style="width: 35px;">
          </td>
        </tr>
        <tr>
          <td>
            Душевые
          </td>
          <td>
          <input class="cs-set" id="cgOCLCol" type="color"${globals.cgOCLCol?' checked':''} style="width: 35px;">
          </td>
          <td>
          <input class="cs-set" id="cgOCLX" type="number"${globals.cgOCLX?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
          <input class="cs-set" id="cgOCLY" type="number"${globals.cgOCLY?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
          <input class="cs-set" id="cgOCLWid" type="number"${globals.cgOCLWid?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
          <input class="cs-set" id="cgOCLHei" type="number"${globals.cgOCLHei?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
          <input class="cs-set" id="cgOCLFCol" type="color"${globals.cgOCLFCol?' checked':''} style="width: 35px;">
          </td>
        </tr>
        <tr>
          <td>
            Мой кот | Чат
          </td>
          <td>
          <input class="cs-set" id="cgSmallCol" type="color"${globals.cgSmallCol?' checked':''} style="width: 35px;">
          </td>
          <td>
          <input class="cs-set" id="cgSmallX" type="number"${globals.cgSmallX?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
          <input class="cs-set" id="cgSmallY" type="number"${globals.cgSmallY?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
          <input class="cs-set" id="cgSmallWid" type="number"${globals.cgSmallWid?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
          <input class="cs-set" id="cgSmallHei" type="number"${globals.cgSmallHei?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
          <input class="cs-set" id="cgSmallFCol" type="color"${globals.cgSmallFCol?' checked':''} style="width: 35px;">
          </td>
        </tr>
        <tr>
          <td>
            Тёмные баллы
          </td>
          <td>
          <input class="cs-set" id="cgTBCol" type="color"${globals.cgTBCol?' checked':''} style="width: 35px;">
          </td>
          <td>
          <input class="cs-set" id="cgTBX" type="number"${globals.cgTBX?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
          <input class="cs-set" id="cgTBY" type="number"${globals.cgTBY?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
          <input class="cs-set" id="cgTBWid" type="number"${globals.cgTBWid?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
          <input class="cs-set" id="cgTBHei" type="number"${globals.cgTBHei?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
          <input class="cs-set" id="cgTBFCol" type="color"${globals.cgTBFCol?' checked':''} style="width: 35px;">
          </td>
        </tr>
        <tr>
          <td>
            Часы
          </td>
          <td>
          <input class="cs-set" id="cgClockCol" type="color"${globals.cgClockCol?' checked':''} style="width: 35px;">
          </td>
          <td>
          <input class="cs-set" id="cgClockX" type="number"${globals.cgClockX?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
          <input class="cs-set" id="cgClockY" type="number"${globals.cgClockY?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
          <input class="cs-set" id="cgClockWid" type="number"${globals.cgClockWid?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
          <input class="cs-set" id="cgClockHei" type="number"${globals.cgClockHei?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
          <input class="cs-set" id="cgClockFCol" type="color"${globals.cgClockFCol?' checked':''} style="width: 35px;">
          </td>
        </tr>
        <tr>
          <td>
            Локация
          </td>
          <td>
          <input class="cs-set" id="cgLocCol" type="color"${globals.cgLocCol?' checked':''} style="width: 35px;">
          </td>
          <td>
          <input class="cs-set" id="cgLocX" type="number"${globals.cgLocX?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
          <input class="cs-set" id="cgLocY" type="number"${globals.cgLocY?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
          <input class="cs-set" id="cgLocWid" type="number"${globals.cgLocWid?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
          <input class="cs-set" id="cgLocHei" type="number"${globals.cgLocHei?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
          <input class="cs-set" id="cgLocFCol" type="color"${globals.cgLocFCol?' checked':''} style="width: 35px;">
          </td>
        </tr>
        <tr>
          <td>
            Вся страница
          </td>
          <td>
          <input class="cs-set" id="cgBodyCol" type="color"${globals.cgBodyCol?' checked':''} style="width: 35px;">
          </td>
          <td>
            Размер шрифта >
          </td>
          <td>
            <input class="cs-set" id="cgFontSize" type="number"${globals.cgFontSize?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
            Шрифт у "Мой кот" >
          </td>
          <td>
            <input class="cs-set" id="cgSmallFW" type="number"${globals.cgSmallFW?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
            😨
          </td>
        </tr>
        <tr>
          <td>
            Плюсик параметров
          </td>
          <td>
            ь
          </td>
          <td>
            <input class="cs-set" id="cgParAlertX" type="number"${globals.cgParAlertX?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
            <input class="cs-set" id="cgParAlertY" type="number"${globals.cgParAlertY?' checked':''} style="width: 45px;" step="1" max="15000" min="0">
          </td>
          <td>
            Цвет плюсика >
          </td>
          <td>
            <input class="cs-set" id="cgParAlertFCol" type="color"${globals.cgParAlertFCol?' checked':''} style="width: 35px;">
          </td>
          <td>
            ъ
          </td>
        </tr>
        <tr>
          <td>
            Обводка блоков
          </td>
          <td>
            Ширина
          </td>
          <td>
            Цвет
          </td>
          <td>
            Тип
          </td>
          <td>
            Обводка у ТБ
          </td>
          <td>
            Фон упом.
          </td>
          <td>
            Текст упом.
          </td>
        </tr>
        <tr>
          <td>
            <input class="cs-set" id="cgBorders" type="checkbox"${globals.cgBorders?' checked':''}>
          </td>
          <td>
            <input class="cs-set" id="cgBorderWid" type="number"${globals.cgBorderWid?' checked':''} style="width: 45px;" step="0.5" max="15" min="0">
          </td>
          <td>
            <input class="cs-set" id="cgBorderCol" type="color"${globals.cgBorderCol?' checked':''} style="width: 35px;">
          </td>
          <td>
            <input class="cs-set" id="cgBorderType" type="text"${globals.cgBorderType?' checked':''} style="width: 45px;" step="0.5" max="15" min="0">
          </td>
          <td>
            <input class="cs-set" id="cgTbBorder" type="checkbox"${globals.cgTbBorder?' checked':''}>
          </td>
          <td>
            <input class="cs-set" id="cgYouBG" type="color"${globals.cgYouBG?' checked':''} style="width: 35px;">
          </td>
          <td>
            <input class="cs-set" id="cgYouFC" type="color"${globals.cgYouFC?' checked':''} style="width: 35px;">
          </td>
        </tr>
        <tr>
          <td>
            Цвет input'ов  >
          </td>
          <td>
            <input class="cs-set" id="cgInputCol" type="color"${globals.cgInputCol?' checked':''} style="width: 35px;">
          </td>
          <td>
            Текст input'ов >
          </td>
          <td>
            <input class="cs-set" id="cgInputFCol" type="color"${globals.cgInputFCol?' checked':''} style="width: 35px;">
          </td>
          <td>
            Скруглённый радиус
          </td>
          <td>
            У локации
          </td>
          <td>
            У ТБ
          </td>
        </tr>
        <tr>
          <td>
            Радиус >
          </td>
          <td>
            <input class="cs-set" id="cgBorderRad" type="number"${globals.cgBorderRad?' checked':''} style="width: 45px;" step="0.5" max="150" min="0">
          </td>
          <td>
            Перетаскивать поле? >
          </td>
          <td>
            <input class="cs-set" id="cgIsFieldFix" type="checkbox"${globals.cgIsFieldFix?' checked':''}>
          </td>
          <td>
            <input class="cs-set" id="cgIsBorderRad" type="checkbox"${globals.cgIsBorderRad?' checked':''}>
          </td>
          <td>
            <input class="cs-set" id="cgIsLocBorderRad" type="checkbox"${globals.cgIsLocBorderRad?' checked':''}>
          </td>
          <td>
            <input class="cs-set" id="cgIsTBBorderRad" type="checkbox"${globals.cgIsTBBorderRad?' checked':''}>
          </td>
        </tr>
                <tr>
          <td>
            Поменять скроллы >
          </td>
          <td>
            <input class="cs-set" id="cgDeleteScrolls" type="checkbox"${globals.cgDeleteScrolls?' checked':''}>
          </td>
          <td>
            Ползунок чата
          </td>
          <td>
            <input class="cs-set" id="cgChatSliderCol" type="color"${globals.cgChatSliderCol?' checked':''} style="width: 35px;">
          </td>
          <td>
            Бордер ползунка
          </td>
          <td>
            <input class="cs-set" id="cgChatSliderBorderCol" type="color"${globals.cgChatSliderBorderCol?' checked':''} style="width: 35px;">
          </td>
          <td>
            15.08
          </td>
        </tr>
      </table>
      <input class="cs-set" id="cgDelParH2" type="checkbox"${globals.cgDelParH2?' checked':''}><label for="cgDelParH2">Убрать h2 у параметров</label><br>
      <input class="cs-set" id="cgDelHisH2" type="checkbox"${globals.cgDelHisH2?' checked':''}><label for="cgDelHisH2">Убрать h2 у истории</label><br>
      <input class="cs-set" id="cgDelRSH2" type="checkbox"${globals.cgDelRSH2?' checked':''}><label for="cgDelRSH2">Убрать h2 у РС</label><br>
      <input class="cs-set" id="cgInfoH2DelMargins" type="checkbox"${globals.cgInfoH2DelMargins?' checked':''}><label for="cgInfoH2DelMargins">Убрать отступы сверху/снизу у h2 блоков информации</label><br>
      <input class="cs-set" id="cgInfoH2FontSize" type="number"${globals.cgInfoH2FontSize?' checked':''} style="width: 45px;" step="1" max="150" min="0"><label for="cgInfoH2FontSize">Размер шрифта заголовков</label><br>
      <input class="cs-set" id="cgSeparateLocation" type="checkbox"${globals.cgSeparateLocation?' checked':''}><label for="cgSeparateLocation">Отоброжать блок с локацией отдельно</label><br>

      <label for="inputImport">Импорт настроек </label><input type="text" id="inputImport"><br>
      <button id="inputExport">Экспорт настроек</button>
      <input id="outputExport">
        </div>
  </div>`
    $('body').append(prikol);
  $(document).ready(function() {
  $('#cgHisCol').val(globals.cgHisCol);
  $('#cgHisFCol').val(globals.cgHisFCol);
  $('#cgHisX').val(globals.cgHisX);
  $('#cgHisY').val(globals.cgHisY);
  $('#cgHisWid').val(globals.cgHisWid);
  $('#cgHisHei').val(globals.cgHisHei);
  $('#cgParCol').val(globals.cgParCol);
  $('#cgParFCol').val(globals.cgParFCol);
  $('#cgParX').val(globals.cgParX);
  $('#cgParY').val(globals.cgParY);
  $('#cgParWid').val(globals.cgParWid);
  $('#cgParHei').val(globals.cgParHei);
  $('#cgChatCol').val(globals.cgChatCol);
  $('#cgChatFCol').val(globals.cgChatFCol);
  $('#cgChatX').val(globals.cgChatX);
  $('#cgChatY').val(globals.cgChatY);
  $('#cgChatWid').val(globals.cgChatWid);
  $('#cgChatHei').val(globals.cgChatHei);
  $('#cgDeysCol').val(globals.cgDeysCol);
  $('#cgDeysFCol').val(globals.cgDeysFCol);
  $('#cgDeysX').val(globals.cgDeysX);
  $('#cgDeysY').val(globals.cgDeysY);
  $('#cgDeysWid').val(globals.cgDeysWid);
  $('#cgDeysHei').val(globals.cgDeysHei);
  $('#cgRSCol').val(globals.cgRSCol);
  $('#cgRSFCol').val(globals.cgRSFCol);
  $('#cgRSX').val(globals.cgRSX);
  $('#cgRSY').val(globals.cgRSY);
  $('#cgRSWid').val(globals.cgRSWid);
  $('#cgRSHei').val(globals.cgRSHei);
  $('#cgRotCol').val(globals.cgRotCol);
  $('#cgRotFCol').val(globals.cgRotFCol);
  $('#cgRotX').val(globals.cgRotX);
  $('#cgRotY').val(globals.cgRotY);
  $('#cgRotWid').val(globals.cgRotWid);
  $('#cgRotHei').val(globals.cgRotHei);
  $('#cgOCLCol').val(globals.cgOCLCol);
  $('#cgOCLFCol').val(globals.cgOCLFCol);
  $('#cgOCLX').val(globals.cgOCLX);
  $('#cgOCLY').val(globals.cgOCLY);
  $('#cgOCLWid').val(globals.cgOCLWid);
  $('#cgOCLHei').val(globals.cgOCLHei);
  $('#cgTBCol').val(globals.cgTBCol);
  $('#cgTBFCol').val(globals.cgTBFCol);
  $('#cgTBX').val(globals.cgTBX);
  $('#cgTBY').val(globals.cgTBY);
  $('#cgTBWid').val(globals.cgTBWid);
  $('#cgTBHei').val(globals.cgTBHei);
  $('#cgClockCol').val(globals.cgClockCol);
  $('#cgClockFCol').val(globals.cgClockFCol);
  $('#cgClockX').val(globals.cgClockX);
  $('#cgClockY').val(globals.cgClockY);
  $('#cgClockWid').val(globals.cgClockWid);
  $('#cgClockHei').val(globals.cgClockHei);
  $('#cgLocCol').val(globals.cgLocCol);
  $('#cgLocFCol').val(globals.cgLocFCol);
  $('#cgLocX').val(globals.cgLocX);
  $('#cgLocY').val(globals.cgLocY);
  $('#cgLocWid').val(globals.cgLocWid);
  $('#cgLocHei').val(globals.cgLocHei);
  $('#cgSmallCol').val(globals.cgSmallCol);
  $('#cgSmallFCol').val(globals.cgSmallFCol);
  $('#cgSmallX').val(globals.cgSmallX);
  $('#cgSmallY').val(globals.cgSmallY);
  $('#cgSmallWid').val(globals.cgSmallWid);
  $('#cgSmallHei').val(globals.cgSmallHei);
  $('#cgBodyCol').val(globals.cgBodyCol);
  $('#cgFontSize').val(globals.cgFontSize);
  $('#cgBorderWid').val(globals.cgBorderWid);
  $('#cgBorderType').val(globals.cgBorderType);
  $('#cgBorderCol').val(globals.cgBorderCol);
  $('#cgSmallFW').val(globals.cgSmallFW);
  $('#cgYouBG').val(globals.cgYouBG);
  $('#cgYouFC').val(globals.cgYouFC);
  $('#cgInputCol').val(globals.cgInputCol);
  $('#cgInputFCol').val(globals.cgInputFCol);
  $('#cgBorderRad').val(globals.cgBorderRad);
  $('#cgParAlertX').val(globals.cgParAlertX);
  $('#cgParAlertY').val(globals.cgParAlertY);
  $('#cgParAlertFCol').val(globals.cgParAlertFCol);
  $('#cgChatSliderCol').val(globals.cgChatSliderCol);
  $('#cgChatSliderBorderCol').val(globals.cgChatSliderBorderCol);
  $('#cgInfoH2FontSize').val(globals.cgInfoH2FontSize);
  });




  let css = `
  <style>
  div#compactTool table tr td {
    border: 1px solid black;
    height: 22px;
    width: 66px;
        text-align: center;
  }
    div#compactTool table tr td input[type="number"] {
    width: 66px !important;
    height: 20px;
    margin-top: 1px;
    margin-bottom: 1px;
  }


  span#ctHeader {
    background-color: #ffffff;
    height: 25px;
    display: grid;
    justify-content: center;
    align-content: center;
  }

  body {
  background-color: ${globals.cgBodyCol};
    font-size: ${globals.cgFontSize}px !important;
  }
  div#compactTool {
    position: absolute;
    top: ${globals.ctTecPosY}px;
    left: ${globals.ctTecPosX}px;
    width: 570px;
    height: 813px;
    font-size: 14px !important;
    background-color: rgba(255, 255, 255, .5);
    font-family: montserrat;
  }
  #mainTable {

  }
  #worklist{background-color:RGBA(255,255,255,.6);display:inline-block;padding:5px;margin-top:5px;color:#000}#worklist a{color:inherit}#tasks{background-color:RGBA(0,0,0,.8);color:#ff4d57;display:inline-block;padding:5px;margin-top:5px;border-radius:5px;font-weight:700}input,select,textarea{box-sizing:border-box}.other_cats_list{background:#fff}.other_cats_list>a{color:#0000cd}
  body{font-size:14px;font-family:Verdana}a{outline:none;color:#000;text-decoration:underline}a:hover{text-decoration:none;color:#06f}input{background:#ffe}table{border-collapse:collapse}td{vertical-align:top}.d,.e,.f,.d div,.e div,.f div{background-color:transparent;background-repeat:no-repeat;border:none;padding:0;margin:0;position:relative}.e,.e div{width:32px;height:32px}.f,.f div{width:70px;height:70px}#error{cursor:pointer;display:none;width:170px;min-height:50px;border-radius:10px;padding:5px;font-weight:700;background-color:RGBA(241,90,90,.9);color:#000;position:fixed;top:50%;left:.5%;z-index:9999}
  .ui-helper-hidden-accessible{position:absolute!important;clip:rect(1px,1px,1px,1px)}.ui-helper-reset{border:0;outline:0;line-height:1.3;text-decoration:none;font-size:100%;list-style:none;margin:0;padding:0}.ui-helper-clearfix:after{content:".";display:block;height:0;clear:both;visibility:hidden}.ui-helper-clearfix{display:block}* html .ui-helper-clearfix{height:1%}.ui-helper-zfix{width:100%;height:100%;top:0;left:0;position:absolute;opacity:0;filter:Alpha(Opacity=0)}.ui-state-disabled{cursor:default!important}.ui-icon{display:block;text-indent:-99999px;overflow:hidden;background-repeat:no-repeat;width:16px;height:16px;background-image:url(/cw3/images/ui-icons_d19405_256x240.png)}.ui-widget-overlay{position:absolute;top:0;left:0;width:100%;height:100%;background:#5c5c5c url(/cw3/images/ui-bg_flat_50_5c5c5c_40x100.png) 50% 50% repeat-x;opacity:.8;filter:Alpha(Opacity=80)}.ui-widget{font-family:Segoe UI,Arial,sans-serif;font-size:1.1em}.ui-widget .ui-widget{font-size:1em}.ui-widget input,.ui-widget select,.ui-widget textarea,.ui-widget button{font-family:Segoe UI,Arial,sans-serif;font-size:1em}.ui-widget-content{border:1px solid #8e846b;background:#feeebd url(/cw3/images/ui-bg_highlight-soft_100_feeebd_1x100.png) 50% top repeat-x;color:#383838}.ui-widget-content a{color:#383838}.ui-widget-header{border:1px solid #494437;background:#817865 url(/cw3/images/ui-bg_gloss-wave_45_817865_500x100.png) 50% 50% repeat-x;color:#fff;font-weight:700}.ui-state-default,.ui-widget-content .ui-state-default,.ui-widget-header .ui-state-default{border:1px solid #d19405;background:#fece2f url(/cw3/images/ui-bg_gloss-wave_60_fece2f_500x100.png) 50% 50% repeat-x;font-weight:700;color:#4c3000}.ui-state-default a,.ui-state-default a:link,.ui-state-default a:visited{color:#4c3000;text-decoration:none}.ui-state-hover,.ui-widget-content .ui-state-hover,.ui-widget-header .ui-state-hover,.ui-state-focus,.ui-widget-content .ui-state-focus,.ui-widget-header .ui-state-focus{border:1px solid #a45b13;background:#ffdd57 url(/cw3/images/ui-bg_gloss-wave_70_ffdd57_500x100.png) 50% 50% repeat-x;font-weight:700;color:#381f00}.ui-state-hover a,.ui-state-hover a:hover{color:#381f00;text-decoration:none}.ui-state-active,.ui-widget-content .ui-state-active,.ui-widget-header .ui-state-active{border:1px solid #655e4e;background:#fff url(/cw3/images/ui-bg_inset-soft_30_ffffff_1x100.png) 50% 50% repeat-x;font-weight:700;color:#0074c7}.ui-state-active a,.ui-state-active a:link,.ui-state-active a:visited{color:#0074c7;text-decoration:none}.ui-widget:active{outline:none}.ui-state-highlight,.ui-widget-content .ui-state-highlight,.ui-widget-header .ui-state-highlight{border:1px solid #eeb420;background:#fff9e5 url(/cw3/images/ui-bg_gloss-wave_90_fff9e5_500x100.png) 50% top repeat-x;color:#1f1f1f}.ui-state-highlight a,.ui-widget-content .ui-state-highlight a,.ui-widget-header .ui-state-highlight a{color:#1f1f1f}.ui-state-error,.ui-widget-content .ui-state-error,.ui-widget-header .ui-state-error{border:1px solid #ffb73d;background:#d34d17 url(/cw3/images/ui-bg_diagonals-medium_20_d34d17_40x40.png) 50% 50% repeat;color:#fff}.ui-priority-primary,.ui-widget-content .ui-priority-primary,.ui-widget-header .ui-priority-primary{font-weight:700}.ui-priority-secondary,.ui-widget-content .ui-priority-secondary,.ui-widget-header .ui-priority-secondary{opacity:.7;filter:Alpha(Opacity=70);font-weight:400}.ui-state-disabled,.ui-widget-content .ui-state-disabled,.ui-widget-header .ui-state-disabled{opacity:.35;filter:Alpha(Opacity=35);background-image:none}.ui-widget-content .ui-icon{background-image:url(/cw3/images/ui-icons_d19405_256x240.png)}.ui-widget-header .ui-icon{background-image:url(/cw3/images/ui-icons_fadc7a_256x240.png)}.ui-state-default .ui-icon{background-image:url(/cw3/images/ui-icons_3d3d3d_256x240.png)}.ui-state-hover .ui-icon,.ui-state-focus .ui-icon{background-image:url(/cw3/images/ui-icons_bd7b00_256x240.png)}.ui-state-active .ui-icon{background-image:url(/cw3/images/ui-icons_eb990f_256x240.png)}.ui-state-highlight .ui-icon{background-image:url(/cw3/images/ui-icons_ed9f26_256x240.png)}.ui-state-error .ui-icon,.ui-state-error-text .ui-icon{background-image:url(/cw3/images/ui-icons_ffe180_256x240.png)}.ui-icon-carat-1-n{background-position:0 0}.ui-icon-carat-1-ne{background-position:-16px 0}.ui-icon-carat-1-e{background-position:-32px 0}.ui-icon-carat-1-se{background-position:-48px 0}.ui-icon-carat-1-s{background-position:-64px 0}.ui-icon-carat-1-sw{background-position:-80px 0}.ui-icon-carat-1-w{background-position:-96px 0}.ui-icon-carat-1-nw{background-position:-112px 0}.ui-icon-carat-2-n-s{background-position:-128px 0}.ui-icon-carat-2-e-w{background-position:-144px 0}.ui-icon-triangle-1-n{background-position:0 -16px}.ui-icon-triangle-1-ne{background-position:-16px -16px}.ui-icon-triangle-1-e{background-position:-32px -16px}.ui-icon-triangle-1-se{background-position:-48px -16px}.ui-icon-triangle-1-s{background-position:-64px -16px}.ui-icon-triangle-1-sw{background-position:-80px -16px}.ui-icon-triangle-1-w{background-position:-96px -16px}.ui-icon-triangle-1-nw{background-position:-112px -16px}.ui-icon-triangle-2-n-s{background-position:-128px -16px}.ui-icon-triangle-2-e-w{background-position:-144px -16px}.ui-icon-arrow-1-n{background-position:0 -32px}.ui-icon-arrow-1-ne{background-position:-16px -32px}.ui-icon-arrow-1-e{background-position:-32px -32px}.ui-icon-arrow-1-se{background-position:-48px -32px}.ui-icon-arrow-1-s{background-position:-64px -32px}.ui-icon-arrow-1-sw{background-position:-80px -32px}.ui-icon-arrow-1-w{background-position:-96px -32px}.ui-icon-arrow-1-nw{background-position:-112px -32px}.ui-icon-arrow-2-n-s{background-position:-128px -32px}.ui-icon-arrow-2-ne-sw{background-position:-144px -32px}.ui-icon-arrow-2-e-w{background-position:-160px -32px}.ui-icon-arrow-2-se-nw{background-position:-176px -32px}.ui-icon-arrowstop-1-n{background-position:-192px -32px}.ui-icon-arrowstop-1-e{background-position:-208px -32px}.ui-icon-arrowstop-1-s{background-position:-224px -32px}.ui-icon-arrowstop-1-w{background-position:-240px -32px}.ui-icon-arrowthick-1-n{background-position:0 -48px}.ui-icon-arrowthick-1-ne{background-position:-16px -48px}.ui-icon-arrowthick-1-e{background-position:-32px -48px}.ui-icon-arrowthick-1-se{background-position:-48px -48px}.ui-icon-arrowthick-1-s{background-position:-64px -48px}.ui-icon-arrowthick-1-sw{background-position:-80px -48px}.ui-icon-arrowthick-1-w{background-position:-96px -48px}.ui-icon-arrowthick-1-nw{background-position:-112px -48px}.ui-icon-arrowthick-2-n-s{background-position:-128px -48px}.ui-icon-arrowthick-2-ne-sw{background-position:-144px -48px}.ui-icon-arrowthick-2-e-w{background-position:-160px -48px}.ui-icon-arrowthick-2-se-nw{background-position:-176px -48px}.ui-icon-arrowthickstop-1-n{background-position:-192px -48px}.ui-icon-arrowthickstop-1-e{background-position:-208px -48px}.ui-icon-arrowthickstop-1-s{background-position:-224px -48px}.ui-icon-arrowthickstop-1-w{background-position:-240px -48px}.ui-icon-arrowreturnthick-1-w{background-position:0 -64px}.ui-icon-arrowreturnthick-1-n{background-position:-16px -64px}.ui-icon-arrowreturnthick-1-e{background-position:-32px -64px}.ui-icon-arrowreturnthick-1-s{background-position:-48px -64px}.ui-icon-arrowreturn-1-w{background-position:-64px -64px}.ui-icon-arrowreturn-1-n{background-position:-80px -64px}.ui-icon-arrowreturn-1-e{background-position:-96px -64px}.ui-icon-arrowreturn-1-s{background-position:-112px -64px}.ui-icon-arrowrefresh-1-w{background-position:-128px -64px}.ui-icon-arrowrefresh-1-n{background-position:-144px -64px}.ui-icon-arrowrefresh-1-e{background-position:-160px -64px}.ui-icon-arrowrefresh-1-s{background-position:-176px -64px}.ui-icon-arrow-4{background-position:0 -80px}.ui-icon-arrow-4-diag{background-position:-16px -80px}.ui-icon-extlink{background-position:-32px -80px}.ui-icon-newwin{background-position:-48px -80px}.ui-icon-refresh{background-position:-64px -80px}.ui-icon-shuffle{background-position:-80px -80px}.ui-icon-transfer-e-w{background-position:-96px -80px}.ui-icon-transferthick-e-w{background-position:-112px -80px}.ui-icon-folder-collapsed{background-position:0 -96px}.ui-icon-folder-open{background-position:-16px -96px}.ui-icon-document{background-position:-32px -96px}.ui-icon-document-b{background-position:-48px -96px}.ui-icon-note{background-position:-64px -96px}.ui-icon-mail-closed{background-position:-80px -96px}.ui-icon-mail-open{background-position:-96px -96px}.ui-icon-suitcase{background-position:-112px -96px}.ui-icon-comment{background-position:-128px -96px}.ui-icon-person{background-position:-144px -96px}.ui-icon-print{background-position:-160px -96px}.ui-icon-trash{background-position:-176px -96px}.ui-icon-locked{background-position:-192px -96px}.ui-icon-unlocked{background-position:-208px -96px}.ui-icon-bookmark{background-position:-224px -96px}.ui-icon-tag{background-position:-240px -96px}.ui-icon-home{background-position:0 -112px}.ui-icon-flag{background-position:-16px -112px}.ui-icon-calendar{background-position:-32px -112px}.ui-icon-cart{background-position:-48px -112px}.ui-icon-pencil{background-position:-64px -112px}.ui-icon-clock{background-position:-80px -112px}.ui-icon-disk{background-position:-96px -112px}.ui-icon-calculator{background-position:-112px -112px}.ui-icon-zoomin{background-position:-128px -112px}.ui-icon-zoomout{background-position:-144px -112px}.ui-icon-search{background-position:-160px -112px}.ui-icon-wrench{background-position:-176px -112px}.ui-icon-gear{background-position:-192px -112px}.ui-icon-heart{background-position:-208px -112px}.ui-icon-star{background-position:-224px -112px}.ui-icon-link{background-position:-240px -112px}.ui-icon-cancel{background-position:0 -128px}.ui-icon-plus{background-position:-16px -128px}.ui-icon-plusthick{background-position:-32px -128px}.ui-icon-minus{background-position:-48px -128px}.ui-icon-minusthick{background-position:-64px -128px}.ui-icon-close{background-position:-80px -128px}.ui-icon-closethick{background-position:-96px -128px}.ui-icon-key{background-position:-112px -128px}.ui-icon-lightbulb{background-position:-128px -128px}.ui-icon-scissors{background-position:-144px -128px}.ui-icon-clipboard{background-position:-160px -128px}.ui-icon-copy{background-position:-176px -128px}.ui-icon-contact{background-position:-192px -128px}.ui-icon-image{background-position:-208px -128px}.ui-icon-video{background-position:-224px -128px}.ui-icon-script{background-position:-240px -128px}.ui-icon-alert{background-position:0 -144px}.ui-icon-info{background-position:-16px -144px}.ui-icon-notice{background-position:-32px -144px}.ui-icon-help{background-position:-48px -144px}.ui-icon-check{background-position:-64px -144px}.ui-icon-bullet{background-position:-80px -144px}.ui-icon-radio-off{background-position:-96px -144px}.ui-icon-radio-on{background-position:-112px -144px}.ui-icon-pin-w{background-position:-128px -144px}.ui-icon-pin-s{background-position:-144px -144px}.ui-icon-play{background-position:0 -160px}.ui-icon-pause{background-position:-16px -160px}.ui-icon-seek-next{background-position:-32px -160px}.ui-icon-seek-prev{background-position:-48px -160px}.ui-icon-seek-end{background-position:-64px -160px}.ui-icon-stop{background-position:-96px -160px}.ui-icon-eject{background-position:-112px -160px}.ui-icon-volume-off{background-position:-128px -160px}.ui-icon-volume-on{background-position:-144px -160px}.ui-icon-power{background-position:0 -176px}.ui-icon-signal-diag{background-position:-16px -176px}.ui-icon-signal{background-position:-32px -176px}.ui-icon-battery-0{background-position:-48px -176px}.ui-icon-battery-1{background-position:-64px -176px}.ui-icon-battery-2{background-position:-80px -176px}.ui-icon-battery-3{background-position:-96px -176px}.ui-icon-circle-plus{background-position:0 -192px}.ui-icon-circle-minus{background-position:-16px -192px}.ui-icon-circle-close{background-position:-32px -192px}.ui-icon-circle-triangle-e{background-position:-48px -192px}.ui-icon-circle-triangle-s{background-position:-64px -192px}.ui-icon-circle-triangle-w{background-position:-80px -192px}.ui-icon-circle-triangle-n{background-position:-96px -192px}.ui-icon-circle-arrow-e{background-position:-112px -192px}.ui-icon-circle-arrow-s{background-position:-128px -192px}.ui-icon-circle-arrow-w{background-position:-144px -192px}.ui-icon-circle-arrow-n{background-position:-160px -192px}.ui-icon-circle-zoomin{background-position:-176px -192px}.ui-icon-circle-zoomout{background-position:-192px -192px}.ui-icon-circle-check{background-position:-208px -192px}.ui-icon-circlesmall-plus{background-position:0 -208px}.ui-icon-circlesmall-minus{background-position:-16px -208px}.ui-icon-circlesmall-close{background-position:-32px -208px}.ui-icon-squaresmall-plus{background-position:-48px -208px}.ui-icon-squaresmall-minus{background-position:-64px -208px}.ui-icon-squaresmall-close{background-position:-80px -208px}.ui-icon-grip-dotted-vertical{background-position:0 -224px}.ui-icon-grip-dotted-horizontal{background-position:-16px -224px}.ui-icon-grip-solid-vertical{background-position:-32px -224px}.ui-icon-grip-solid-horizontal{background-position:-48px -224px}.ui-icon-gripsmall-diagonal-se{background-position:-64px -224px}.ui-icon-grip-diagonal-se{background-position:-80px -224px}.ui-corner-all,.ui-corner-top,.ui-corner-left,.ui-corner-tl{-moz-border-radius-topleft:8px;-webkit-border-top-left-radius:8px;-khtml-border-top-left-radius:8px;border-top-left-radius:8px}.ui-corner-all,.ui-corner-top,.ui-corner-right,.ui-corner-tr{-moz-border-radius-topright:8px;-webkit-border-top-right-radius:8px;-khtml-border-top-right-radius:8px;border-top-right-radius:8px}.ui-corner-all,.ui-corner-bottom,.ui-corner-left,.ui-corner-bl{-moz-border-radius-bottomleft:8px;-webkit-border-bottom-left-radius:8px;-khtml-border-bottom-left-radius:8px;border-bottom-left-radius:8px}.ui-corner-all,.ui-corner-bottom,.ui-corner-right,.ui-corner-br{-moz-border-radius-bottomright:8px;-webkit-border-bottom-right-radius:8px;-khtml-border-bottom-right-radius:8px;border-bottom-right-radius:8px}.ui-widget-shadow{background:#ccc url(/cw3/images/ui-bg_flat_30_cccccc_40x100.png) 50% 50% repeat-x;opacity:.6;filter:Alpha(Opacity=60);-moz-border-radius:8px;-khtml-border-radius:8px;-webkit-border-radius:8px;border-radius:8px;margin:-7px 0 0 -7px;padding:7px}.ui-slider{position:relative;text-align:left}.ui-slider .ui-slider-handle{position:absolute;z-index:2;width:1.2em;height:1.2em;cursor:default}.ui-slider .ui-slider-range{position:absolute;z-index:1;font-size:.7em;display:block;border:0;background-position:0 0}.ui-slider-horizontal{height:.8em}.ui-slider-horizontal .ui-slider-handle{top:-.3em;margin-left:-.6em}.ui-slider-horizontal .ui-slider-range{top:0;height:100%}.ui-slider-horizontal .ui-slider-range-min{left:0}.ui-slider-horizontal .ui-slider-range-max{right:0}.ui-slider-vertical{width:.8em;height:100px}.ui-slider-vertical .ui-slider-handle{left:-.3em;margin-left:0;margin-bottom:-.6em}.ui-slider-vertical .ui-slider-range{left:0;width:100%}.ui-slider-vertical .ui-slider-range-min{bottom:0}.ui-slider-vertical .ui-slider-range-max{top:0}span.tt span,.ui-helper-hidden{display:none}.ui-widget-header a,.ui-state-error a,.ui-widget-content .ui-state-error a,.ui-widget-header .ui-state-error a,.ui-state-error-text,.ui-widget-content .ui-state-error-text,.ui-widget-header .ui-state-error-text{color:#fff}.ui-icon-seek-start,.ui-icon-seek-first{background-position:-80px -160px}.reveal-modal-bg{position:fixed;height:100%;width:100%;background:rgba(0,0,0,.8);z-index:100;display:none;top:0;left:0}.reveal-modal{width:400px;max-width:100%;padding:30px 40px 34px;box-sizing:border-box;visibility:hidden;top:100px;left:0;right:0;margin:auto;background:#eee url(/cw3/images/modal-gloss.png) no-repeat -200px -80px;position:absolute;z-index:101;-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px;-moz-box-shadow:0 0 10px rgba(0,0,0,.4);-webkit-box-shadow:0 0 10px rgba(0,0,0,.4);box-shadow:0 0 10px rgba(0,0,0,.4)}.reveal-modal.small{width:200px;margin-left:-140px}.reveal-modal.medium{width:400px;margin-left:-240px}.reveal-modal.large{width:600px;margin-left:-340px}.reveal-modal.xlarge{width:800px;margin-left:-440px}.reveal-modal .close-reveal-modal{font-size:22px;line-height:.5;position:absolute;top:8px;right:11px;color:#aaa;text-shadow:0 -1px 1px rbga(0,0,0,.6);font-weight:700;cursor:pointer}#tiptip_holder{display:none;position:absolute;top:0;left:0;z-index:99999}#tiptip_holder.tip_top{padding-bottom:5px}#tiptip_holder.tip_bottom{padding-top:5px}#tiptip_holder.tip_right{padding-left:5px}#tiptip_holder.tip_left{padding-right:5px}#tiptip_content{font-size:11px;color:#fff;text-shadow:0 0 2px #000;border:1px solid rgba(255,255,255,.25);background-color:rgba(25,25,25,.92);background-image:0;border-radius:3px;-webkit-border-radius:3px;-moz-border-radius:3px;box-shadow:0 0 3px #555;-webkit-box-shadow:0 0 3px #555;-moz-box-shadow:0 0 3px #555;padding:4px 8px}#tiptip_arrow,#tiptip_arrow_inner{position:absolute;height:0;width:0;border-color:transparent;border-style:solid;border-width:6px}#tiptip_holder.tip_top #tiptip_arrow{border-top-color:rgba(255,255,255,.35)}#tiptip_holder.tip_bottom #tiptip_arrow{border-bottom-color:rgba(255,255,255,.35)}#tiptip_holder.tip_right #tiptip_arrow{border-right-color:rgba(255,255,255,.35)}#tiptip_holder.tip_left #tiptip_arrow{border-left-color:rgba(255,255,255,.35)}#tiptip_holder.tip_top #tiptip_arrow_inner{margin-top:-7px;margin-left:-6px;border-top-color:rgba(25,25,25,.92)}#tiptip_holder.tip_bottom #tiptip_arrow_inner{margin-top:-5px;margin-left:-6px;border-bottom-color:rgba(25,25,25,.92)}#tiptip_holder.tip_right #tiptip_arrow_inner{margin-top:-6px;margin-left:-5px;border-right-color:rgba(25,25,25,.92)}#tiptip_holder.tip_left #tiptip_arrow_inner{margin-top:-6px;margin-left:-7px;border-left-color:rgba(25,25,25,.92)}


  html, body {
  margin: 0;
  padding: 0; }

#app {
  width: 1000px;
  margin: auto; }

#newchat, #newls {
  background-color: white;
  font-weight: bold; }

.small {
  font-size: 12px; }

.title {
  display: block;
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 8px; }

#main_table {
  border-collapse: separate;
  border: none;
  width: 100%;
  max-width: 1000px;
  border-spacing: 0;
  margin: 0;
  padding: 0;
  margin-top: 7px;
  background: black; }

#main_table > tr, #main_table > tr > td, #main_table > tbody > tr, #main_table > tbody > tr > td {
  margin: 0;
  padding: 0; }

.infos {
  vertical-align: top;
  width: 33%; }

#info_main {
  border: none;
  width: 100%;
  background: #FFDEAD; }

.other_cats_list {
  background: initial;
  border: 1px solid rgba(0, 0, 0, 0.4); }

.other_cats_list > a {
  color: inherit; }

#achievement {
  top: -1000px;
  transition: top 0.5s ease;
  display: flex;
  flex-direction: row;
  position: fixed;
  left: 0;
  right: 0;
  max-width: 720px;
  min-width: 320px;
  margin: auto;
  background-color: #ffffee;
  border-radius: 5px;
  padding: 10px 15px 10px;
  z-index: 101;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  background-size: contain; }
  #achievement #achievement_img > img {
    display: block;
    height: 120px;
    width: 120px;
    border-radius: 0.5em; }
  #achievement #achievement_img {
    display: flex;
    padding: 4px 15px 4px 4px;
    align-items: center; }
  #achievement #achievement_container {
    padding: 4px;
    width: 100%; }
  #achievement #close_achievement {
    position: absolute;
    right: 0;
    top: 0;
    padding: 2px 7px;
    color: black;
    font-size: 1.7em;
    cursor: pointer; }
  #achievement #achievement_name {
    font-weight: bold;
    font-size: 1.4em;
    padding-bottom: 2px; }
  #achievement #achievement_top {
    font-weight: bold;
    font-size: 1.2em;
    text-align: center;
    padding: 0 25px 5px 25px; }
  #achievement #achievement_text {
    font-style: italic; }
  #achievement .no-select {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none; }

#achievement.mobile {
  width: 100%;
  padding: 10px 0 10px;
  border-radius: 0 0 5px 5px; }
  #achievement.mobile #close_achievement {
    font-size: 2.0em; }
  #achievement.mobile #achievement_img {
    padding: 4px; }

#achievement.mobile.show {
  top: 0; }

#achievement.show {
  top: 15px; }

#timer {
  display: none;
  position: fixed;
  z-index: 9999;
  background-color: RGBA(204, 204, 204, 0.5);
  min-width: 50px;
  max-width: 100px;
  height: 20px;
  top: 60px;
  right: 10px;
  border-radius: 10px;
  text-align: center;
  padding: 1px; }

#tr_actions {
  background-color: #FFDEAD; }

#dein {
  display: none; }

#block_mess {
  margin: 8px 0; }

#tr_chat {
  background-color: #C60; }

#chat_form {
  margin: 15px; }

input#text {
  width: 95%;
  max-width: 500px; }

#volume {
  width: 200px;
  display: inline-block;
  margin-left: 5px; }

#chat_msg {
  width: 1000px;
  overflow: auto;
  height: 275px; }

.chat_text {
  display: inline-block;
  word-wrap: break-word; }

.pair-delete, .adopt, .love {
  width: 16px;
  height: 16px; }

#tr_field, #act, #cages {
  padding: 0;
  margin: 0;
  border-spacing: 0; }

#cages_overflow, #cages_div {
  width: 1000px;
  min-height: 1000px; }

#cages_div {
  background-repeat: no-repeat; }

#cages {
  width: 1000px;
  min-height: 1000px;
  background-repeat: no-repeat; }

.cage, .cage_items {
  width: 100px;
  height: 150px;
  border: none;
  margin: 0;
  padding: 0; }

.cage {
  padding-bottom: 16px; }

#cages table td {
  width: 160px;
  height: 32px;
  text-align: left; }

#cages table td div, #cages div[id^=thd] {
  background-color: transparent; }

#cages table td img {
  width: 32px;
  height: 32px;
  text-align: left; }

.move_parent {
  display: block;
  position: relative;
  padding: 0;
  margin: 0; }

.move_img {
  display: block;
  width: 100px;
  height: 150px;
  border: 0;
  margin: 0;
  padding: 0; }

.move_parent .move_name {
  display: block;
  position: absolute;
  font-size: 11px;
  bottom: 43px;
  left: 4px;
  width: 92px;
  text-align: center;
  background-color: RGBA(255, 255, 255, 0.5);
  border-radius: 10px;
  padding: 0 3px 1px 3px;
  margin: 0;
  word-break: break-word;
  box-sizing: border-box; }

.move_parent .owned {
  border-color: #C60; }

.move_parent .not_owned {
  border-color: #7e97ec; }

.move_parent .owned, .move_parent .not_owned {
  background-color: #ffffffc9;
  margin: -2px;
  border-width: 2px;
  border-style: solid; }

.cat {
  position: relative; }

.huntEl {
  position: absolute; }

.cat_tooltip {
  display: none; }

.cat:hover .cat_tooltip {
  display: block;
  position: absolute;
  z-index: 9999;
  padding: 10px;
  min-width: 160px;
  background: RGBA(255, 255, 255, 0.9);
  border: 2px solid gray;
  border-radius: 12px;
  color: #930;
  font-weight: bold;
  text-align: center; }

.cat:hover .cat_tooltip a {
  color: #930; }

.mouth {
  width: 100%;
  padding: 0;
  margin: 0; }
  .mouth ol {
    list-style-type: none; }
  .mouth li {
    display: inline-block; }
  .mouth img {
    width: 32px; }

.online {
  color: black; }

.smell_move {
  border: 2px solid white;
  width: 96px;
  height: 96px; }

.arrow-paws {
  background: url("/cw3/symbole/arrow_paws.png") 0 0 no-repeat; }

.arrow-claws {
  background: url("/cw3/symbole/arrow_claws.png") 0 0 no-repeat; }

.arrow-teeth {
  background: url("/cw3/symbole/arrow_teeth.png") 0 0 no-repeat; }

.arrow {
  height: 8px;
  position: absolute;
  margin: 0;
  padding: 3px 0 0 11px;
  z-index: 2; }

.arrow table, .arrow td {
  height: 5px !important;
  padding: 0;
  margin: 0; }

.arrow_red {
  background: #CD4141; }

.arrow_green {
  background: #41CD70; }

#fightPanel {
  position: fixed;
  z-index: 9999;
  background-color: RGBA(204, 204, 204, 0.9);
  height: 100px;
  top: 20px;
  right: 10px;
  border-radius: 10px;
  text-align: left;
  padding: 3px; }

.hotkey {
  background: white;
  width: 32px;
  padding: 1px;
  outline: none; }

#fightLog {
  overflow-y: scroll;
  margin-top: 4px;
  margin-left: 4px; }

.log_claws {
  background: RGBA(212, 141, 118, 0.7); }

.log_teeth {
  background: RGBA(255, 255, 255, 0.7); }

#itemList {
  display: grid;
  grid-template-columns: repeat(auto-fill, 73px);
  margin: 0 2px 0 2px; }

.itemInMouth, .catrot {
  cursor: pointer;
  margin: 0 1px 1px 0; }
  .itemInMouth img, .catrot img {
    padding: 1px;
    display: block; }

.active_thing {
  box-shadow: 0 0 0 1px #1874e5 inset;
  border-radius: 4px; }

.active_thing.is_locked {
  position: relative; }

.active_thing.is_locked:before {
  content: "";
  background-image: url("/cw3/symbole/item_lock.svg");
  background-size: 15px 16px;
  background-repeat: no-repeat;
  top: 3px;
  right: 3px;
  width: 15px;
  height: 16px;
  position: absolute; }

#layer {
  width: 200px; }

#tr_mouth {
  background-color: #FFDEAD; }

.symbole {
  width: 15px;
  height: 15px;
  background: url("/cw3/symbole/icons.png") no-repeat;
  padding: 0;
  margin: 0; }

.parameter {
  border: 1px solid black;
  width: 150px;
  height: 15px; }

.parameter, .parameter td {
  margin: 0;
  padding: 0;
  border-spacing: 0; }
  #sky {
    background-repeat: no-repeat; }
  `
  css += ``
    let itemlistwid = globals.cgRotWid;
    itemlistwid = itemlistwid - 12;
    console.log(itemlistwid, ' itemlistwid')
  css += `
  #main_table {
    background: 0 !important;
    }
  #parameter {
    position: absolute;
    top: ${globals.cgParY}px;
    left: ${globals.cgParX}px;
    width: ${globals.cgParWid}px;
    height: ${globals.cgParHei}px;
    background: ${globals.cgParCol} !important;
    color: ${globals.cgParFCol} !important;}
  td#history {
    position: absolute;
    top: ${globals.cgHisY}px;
    left: ${globals.cgHisX}px;
    width: ${globals.cgHisWid}px;
    height: ${globals.cgHisHei}px;
    background: ${globals.cgHisCol} !important;
    color: ${globals.cgHisFCol} !important;
    padding: 6px;
    overflow: auto;}
  td#history a {
    color: ${globals.cgHisFCol} !important;}
  .ui-icon-gripsmall-diagonal-se {
    position: absolute;
    top: 1px;
    left: 1px;}
  div#clockContainer {
    position: absolute;
    top: ${globals.cgClockY}px;
    left: ${globals.cgClockX}px;
    width: ${globals.cgClockWid}px;
    height: ${globals.cgClockHei}px;
    font-size: ${globals.clockFontWeight}px !important;
    background-color: ${globals.cgClockCol} !important;
    color:${globals.cgClockFCol} !important;
    font-weight: bolder;
    font-family: Montserrat;
    display: grid;
    align-content: center;}
  div#clockContainer div#clock, div#clockContainer div#date {
    margin-left: 4px;}

  #tr_chat {
    position: absolute;
    top: ${globals.cgChatY}px;
    left: ${globals.cgChatX}px;
    width: ${globals.cgChatWid}px;
    height: ${globals.cgChatHei}px;
    background: ${globals.cgChatCol} !important;
    color: ${globals.cgChatFCol} !important;}
  #chat_form {
    margin: 5px;
    padding: 0;
    width: 100%;}
  span.chat_text {
    width: 300px !important;}
  #volume {
    margin: 2px;
    margin-top: 4px;}
  #chat_msg {
    position: relative;
    top: -10px;
    left: -2px;
    width: 99.6%;}
  .ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header {
    background: ${globals.cgChatSliderCol} !important;
    border: ${globals.cgChatSliderBorderCol} 1px solid;}
  #volume{
    background-color: var(--BBO) !important;
    border: var(--BRDR) solid 2px !important;
    color: var(--TXT) !important;}
  .ui-widget-content {
    background-color: var(--BBO) !important;
    border: var(--BRDR) solid 2px !important;
    color: var(--TXT) !important;}

    #msg_send, #mit, #mitok, input#text {
    background-color: ${globals.cgInputCol}!important;
    color: ${globals.cgInputFCol}!important;
    }
  #sky {
    position: absolute;
    top: ${globals.cgSkyY}px;
    left: ${globals.cgSkyX}px;
    width: ${globals.cgSkyWid}px;
    height: ${globals.cgSkyHei}px;}

  #tr_tos {
    display: block;
    position: absolute;
    top: ${globals.cgTOSY}px;
    left: ${globals.cgTOSX}px;
    width: ${globals.cgTOSWid}px;
    height: ${globals.cgTOSHei}px;
    background: ${globals.cgTOSCol} !important;
    text-align: center;}

  #tr_actions {
    position: absolute;
    top: ${globals.cgDeysY}px;
    left: ${globals.cgDeysX}px;
    width: ${globals.cgDeysWid}px;
    height: ${globals.cgDeysHei}px;
    background: ${globals.cgDeysCol} !important;
    padding: 6px !important;
    overflow: auto;
    color: ${globals.cgDeysFCol} !important;}
  #tr_actions a {
    color: ${globals.cgDeysFCol} !important;}
  #block_mess {
    position: absolute;
    width: 490px;
    padding: 0px;
    text-align: center !important;}
  #dein {
    width: 300px;
    height: 155px;
    overflow: auto;}
  #akten {
    width: 300px;
    height: 155px;}
  #mit {
    background-color: var(--BBO);
    color: var(--TXT);}
  #mitok {
    background-color: var(--BBO);
    color: var(--TXT);}

  #family {
    position: absolute;
    top: ${globals.cgRSY}px;
    left: ${globals.cgRSX}px;
    width: ${globals.cgRSWid}px;
    height: ${globals.cgRSHei}px;
    background:${globals.cgRSCol} !important;
    padding: 6px;
    color: ${globals.cgRSFCol} !important;}
  #family a {
    color: ${globals.cgRSFCol} !important;}

  .small {
    display: block;
    position: absolute;
    top: ${globals.cgSmallY}px;
    left: ${globals.cgSmallX}px;
    width: ${globals.cgSmallWid}px;
    height: ${globals.cgSmallHei}px;
    background: ${globals.cgSmallCol} !important;
    font-size: ${globals.cgSmallFW}px;
    text-align: center;
    font-weight: bold;
    color: ${globals.cgSmallFCol} !important;}
  .small a {
    color: ${globals.cgSmallFCol} !important;}
  span.small ~ br, span.other_cats_list ~ br {
    display: none;}

  span.other_cats_list {
    position: absolute;
    top: ${globals.cgOCLY}px;
    left: ${globals.cgOCLX}px;
    color: var(--TXT)}

  #tr_mouth {
    position: absolute;
    top: ${globals.cgRotY}px;
    left: ${globals.cgRotX}px;
    width: ${globals.cgRotWid}px;
    height: ${globals.cgRotHei}px;
    background: ${globals.cgRotCol} !important;
    padding: 6px !important;
    overflow: auto;
    color: ${globals.cgRotFCol} !important;}
  #tr_mouth a {
    color: ${globals.cgRotFCol} !important;}
      #itemList {
        width: ${itemlistwid}px;
        }

  #app>p:not([id])::before {
    content: 'Тёмные баллы: ';
    font-weight: bold;
}

#app>p:not([id]) {
    display: block;
    position: absolute;
    top: ${globals.cgTBY}px;
    left: ${globals.cgTBX}px;
    width: ${globals.cgTBWid}px;
    height: ${globals.cgTBHei}px;
    background: ${globals.cgTBCol} !important;
    text-align: center;
    color: ${globals.cgTBFCol} !important;}

#app p:not([id])>b {
    display: none;

}
a#parameters-alert {
position: absolute;
top: ${globals.cgParAlertY}px;
left: ${globals.cgParAlertX}px;
color: ${globals.cgParAlertFCol}
}
  `
  if (globals.cgBorders) {
    css+= `td#parameter, tr#tr_tos, #sky, div#clockContainer, td#history, td#family, span.small, tr#tr_chat, tr#tr_actions, tr#tr_mouth, #location, #tr_field {
   border: ${globals.cgBorderWid}px ${globals.cgBorderType} ${globals.cgBorderCol} !important;}`
  }
  if (globals.cgTbBorder) {
    css+= `#app>p:not([id]) {
    border: ${globals.cgBorderWid}px ${globals.cgBorderType} ${globals.cgBorderCol} !important;}`
  }
  if (globals.cgIsBorderRad) {
    css+= `td#parameter, tr#tr_tos, #sky, div#clockContainer, td#history, td#family, span.small, tr#tr_chat, tr#tr_actions, tr#tr_mouth, #tr_field {
    border-radius: ${globals.cgBorderRad}px !important;}`
  }
  if (globals.cgIsTBBorderRad) {
    css+= `#app>p:not([id]) {
    border-radius: ${globals.cgBorderRad}px;}`
  }
  if (globals.cgIsLocBorderRad) {
    css+= `#location {
    border-radius: ${globals.cgBorderRad}px;}`
  }
  if (globals.cgInputBorders) {
    css+= `#msg_send, #mit, #mitok, input#text {
    border: ${globals.cgBorderWid}px ${globals.cgBorderType} ${globals.cgBorderCol} !important;}`
  }
  if (globals.cgInfoH2DelMargins) {
    css+= `tr#tr_info td table#info_main tbody tr td h2 {
    margin: 0;
    }`
  }
  if (globals.cgDelRSH2) {
    css+= `table#info_main tbody tr td#family h2 {display: none;}`
  }
  if (globals.cgDelHisH2) {
    css+= `table#info_main tbody tr td#history h2 {display: none;}`
  }
  if (globals.cgDelParH2) {
    css+= `table#info_main tbody tr td#parameter h2 a:first-of-type {display: none;}`
  }
  if (1 == 1) {
    css+= `tr#tr_info td table#info_main tbody tr td h2 {font-size: ${globals.cgInfoH2FontSize}px;}`
  }
  if (globals.cgSeparateLocation) {
    css+= `
  #location {
    display: block;
    position: fixed;
    top: ${globals.cgLocY}px;
    left: ${globals.cgLocX}px;
    width: ${globals.cgLocWid}px;
    height: ${globals.cgLocHei}px;
    background: ${globals.cgLocCol} !important;
    font-size: ${globals.cgLocFW}px;
    text-align: center;
    font-weight: bold;
    color: ${globals.cgLocFCol} !important;}

  #history_block div {
    font-size: 0;
    background-color: transparent !important;}`
  }
  if (globals.cgIsFieldFix) {
    css+= `tr#tr_field {
    position: absolute;
    top: ${globals.cgFieldY}px;
    left: ${globals.cgFieldX}px;}
    `
  }
  if (globals.cgDeleteScrolls) {
  css+= `  ::-webkit-scrollbar {
    width: 18px;
}

::-webkit-scrollbar-track {
    background: transparent !important;
}

::-webkit-scrollbar-thumb {
    background: transparent !important;
}

::-webkit-scrollbar-corner {
    background: transparent !important;
}`
  }

  css+= `</style>`
  $('head').append(css);
  function configureBlock(blockId, widthVar, heightVar, xPosVar, yPosVar) {
  const block = $(`${blockId}`);
  const dragButton = $('<span class="drag-button" style="display: block; position: absolute; left: 20px; top: 3px; cursor: move; width: 20px; height: 20px; background-color: white;"></span>');
  block.prepend(dragButton);
  block.resizable({
    handles: 'all',
    resize: function (event, ui) {
      const newWidth = ui.size.width;
      const newHeight = ui.size.height;
      setSettings(`${widthVar}`, newWidth);
      setSettings(`${heightVar}`, newHeight);
    }
  });
  block.draggable({
    containment: "document",
    handle: dragButton,
    drag: function (event, ui) {
      const newXPos = ui.offset.left;
      const newYPos = ui.offset.top;
      setSettings(`${xPosVar}`, newXPos);
      setSettings(`${yPosVar}`, newYPos);
    }
  });
}
//
  $('.cs-set').on('change', function() {
    let key = this.id;
    let val = this.type === 'checkbox' ? this.checked : this.value;
    if (this.tagName === 'SELECT') {
      val = $(this).prop('selectedIndex');
    }
    setSettings(key, val);
    console.log(key, ': ', val, '.')
  });
$(document).ready(function(){
  setTimeout(function(){
    configureBlock('#sky', 'cgSkyWid', 'cgSkyHei', 'cgSkyX', 'cgSkyY');
    configureBlock('td#history', 'cgHisWid', 'cgHisHei', 'cgHisX', 'cgHisY');
    configureBlock('#parameter', 'cgParWid', 'cgParHei', 'cgParX', 'cgParY');
    configureBlock('tr#tr_chat', 'cgChatWid', 'cgChatHei', 'cgChatX', 'cgChatY');
    configureBlock('tr#tr_actions', 'cgDeysWid', 'cgDeysHei', 'cgDeysX', 'cgDeysY');
    configureBlock('td#family', 'cgRSWid', 'cgRSHei', 'cgRSX', 'cgRSY');
    configureBlock('span.small', 'cgSmallWid', 'cgSmallHei', 'cgSmallX', 'cgSmallY');
    configureBlock('tr#tr_mouth', 'cgRotWid', 'cgRotHei', 'cgRotX', 'cgRotY');
    configureBlock('span.other_cats_list', 'cgOCLWid', 'cgOCLHei', 'cgOCLX', 'cgOCLY');
    configureBlock('#tr_tos', 'cgTOSWid', 'cgTOSHei', 'cgTOSX', 'cgTOSY');
    configureBlock('#app>p:not([id])', 'cgTBWid', 'cgTBHei', 'cgTBX', 'cgTBY');
    configureBlock('div#clockContainer', 'cgClockWid', 'cgClockHei', 'cgClockX', 'cgClockY');
    configureBlock('a#parameters-alert', 'cgParAlertWid', 'cgParAlertHei', 'cgParAlertX', 'cgParAlertY');
    if (globals.cgSeparateLocation) {
      configureBlock('#location', 'cgLocWid', 'cgLocHei', 'cgLocX', 'cgLocY');
    }
    if (globals.cgIsFieldFix) {
      configureBlock('tr#tr_field', 'cgFieldWid', 'cgFieldHei', 'cgFieldX', 'cgFieldY');
    }
    }, 500)
})


const inputImport = document.getElementById('inputImport');
const inputExport = document.getElementById('inputExport');

function importSettings() {
  try {
    const importedSettings = JSON.parse(inputImport.value);
    Object.keys(importedSettings).forEach(key => {
      // Добавляем префикс к ключам
      const localStorageKey = 'cs_n_' + key;
      if (typeof importedSettings[key] === 'string' && !isNaN(parseFloat(importedSettings[key]))) {
        globals[key] = parseFloat(importedSettings[key]);
        window.localStorage.setItem(localStorageKey, parseFloat(importedSettings[key]));
      } else {
        globals[key] = importedSettings[key];
        window.localStorage.setItem(localStorageKey, importedSettings[key]);
      }
    });

    alert('Настройки импортированы успешно');
  } catch (error) {
    alert('Ошибка при импорте настроек');
  }
}

function exportSettings() {
  const settingsToExport = {};
  ['cgBorderWid', 'cgBorderType', 'cgBorderCol', 'cgBorderRad', 'cgIsBorderRad', 'cgBodyCol', 'cgFieldWid', 'cgFieldHei', 'cgFieldX', 'cgFieldY', 'cgIsFieldFix', 'cgParWid', 'cgParHei', 'cgParX', 'cgParY', 'cgParCol', 'cgParFCol', 'cgTOSWid', 'cgTOSHei', 'cgTOSX', 'cgTOSY', 'cgTOSCol', 'cgSkyWid', 'cgSkyHei', 'cgSkyX', 'cgSkyY', 'cgSmallWid', 'cgSmallHei', 'cgSmallX', 'cgSmallY', 'cgSmallCol', 'cgSmallFCol', 'cgOCLWid', 'cgOCLHei', 'cgOCLX', 'cgOCLY', 'cgOCLFCol', 'cgChatWid', 'cgChatHei', 'cgChatX', 'cgChatY', 'cgChatCol', 'cgChatFCol', 'cgClockWid', 'cgClockHei', 'cgClockX', 'cgClockY', 'cgClockCol', 'cgClockFCol', 'cgTBWid', 'cgTBHei', 'cgTBX', 'cgTBY', 'cgTBCol', 'cgTBFCol', 'cgHisWid', 'cgHisHei', 'cgHisX', 'cgHisY', 'cgHisCol', 'cgHisFCol', 'cgDeysWid', 'cgDeysHei', 'cgDeysX', 'cgDeysY', 'cgDeysCol', 'cgDeysFCol', 'cgRotWid', 'cgRotHei', 'cgRotX', 'cgRotY', 'cgRotCol', 'cgRotFCol', 'cgLocWid', 'cgLocHei', 'cgLocX', 'cgLocY', 'cgLocCol', 'cgLocFCol', 'cgRSWid', 'cgRSHei', 'cgRSX', 'cgRSY', 'cgRSCol', 'cgRSFCol', 'cgInfoH2DelMargins', 'cgInfoH2FontSize', 'cgDelRSH2', 'cgDelHisH2', 'cgDelParH2', 'cgSeparateLocation', 'cgLocFW', 'cgFontSize', 'cgBorders', 'cgTbBorder', 'cgSmallFW', 'cgYouBG', 'cgYouFC', 'cgInputCol', 'cgInputFCol', 'cgInputBorders', 'cgIsTBBorderRad', 'cgIsLocBorderRad', 'cgDeleteScrolls', 'cgChatSliderCol', 'cgChatSliderBorderCol'].forEach(key => {
    settingsToExport[key] = globals[key];
  });
  inputExport.value = JSON.stringify(settingsToExport, null, 2);
  document.getElementById('outputExport').value = JSON.stringify(settingsToExport, null, 2);

}
inputImport.addEventListener('change', importSettings);
inputExport.addEventListener('click', exportSettings);
        $("#compactTool").draggable({
        containment: "document",
        handle: "#ctHeader",
        drag: function () {
          let offset = $(this).offset();
          let xPos = offset.left;
          let yPos = offset.top;
            setSettings('ctTecPosX', offset.left);
            setSettings('ctTecPosY', offset.top);
        }
      });

}
