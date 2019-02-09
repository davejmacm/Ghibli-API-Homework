const Film = require('./models/film.js');
const OutputView = require('./views/output_view.js');


document.addEventListener('DOMContentLoaded', ()=>{
  console.log("DOM loaded - let's go");
  const filmsListContainer = document.querySelector('#film-details');
  const filmsListView = new OutputView(filmsListContainer);
  filmsListView.bindEvents();

  const films = new Film();
  films.getData();
})
