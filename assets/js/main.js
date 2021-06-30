const inputSearch = document.querySelector('.header__search-input-wrap');
const historySearch = document.querySelector('.header__search--history');
const modal = document.querySelector('.modal__overlay');

inputSearch.addEventListener('click', () => {
   historySearch.classList.toggle('show__history')
   modal.classList.toggle('open-modal')
})






