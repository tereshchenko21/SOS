
const dropdownButton = document.getElementById('dropdown-main-button')
const dropdown = document.getElementById('dropdown')
const burger = document.getElementById('burger')
const menuList = document.getElementById('menu')
const ruLangButton = document.getElementById('drop-rus')
const enLangButton = document.getElementById('drop-eng')

const translations = {
    en: {
        title: 'SURVIVE AT ALL COSTS',
        subtitle: 'Experience new social battle royale game',
        story: 'The story',
        menuMain: 'main',
        menuAbout: 'about',
        menuFeatures: 'game features',
        menuSystem: 'system requirements',
        menuQuotes: 'quotes',
    }, 
    ru: {
        title: 'ВЫЖИТЬ ЛЮБОЙ ЦЕНОЙ',
        subtitle: 'Испытайте новую социальную игру battle royale',
        story: 'История',
        menuMain: 'меню',
        menuAbout: 'о нас',
        menuFeatures: 'особенности игры',
        menuSystem: 'системные требования',
        menuQuotes: 'вопросы',
    }
}

let currentLang = 'en' // текущий язык

dropdownButton.onclick = function() {
    dropdown.classList.toggle('active')
}

burger.onclick = function() {
    burger.classList.toggle('active-burger')
    menuList.classList.toggle('open')
}

dropdown.onclick = function(event) {
    currentLang = event.target.id === 'drop-eng' ? 'en' : 'ru' // выбор текущего языка
    dropdownButton.innerHTML = currentLang === 'en' ? 'eng' : 'rus'
    dropdown.classList.remove('active') // закрывает dropdown после нажатия на кнопку
    translate(currentLang) 
}

function translate(currentLanguage) {
    document.querySelectorAll('[data-translate]').forEach((currentElement) => { //ищем все элементы с дата-атрибутами и сразу перебираем их
        const key = currentElement.getAttribute('data-translate') // потом достаем их атрибут 
        currentElement.textContent = translations[currentLanguage][key] // и меняем значение на нужное из коллекции объектов
    })
}
