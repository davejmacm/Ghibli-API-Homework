const PubSub = require('../helpers/pub_sub.js');
const FilmDetails = require('./film_details.js');

const OutputView = function (container) {
  this.container = container;
}

OutputView.prototype.bindEvents = function () {
  PubSub.subscribe('Film:films-data-ready', (evt) => {
    this.data = evt.detail;
    this.render();
  });
};

OutputView.prototype.render = function () {
  console.log(this.data);
  this.data.forEach((film) => {
    const filmDetails = new FilmDetails(this.data, film);
    filmDetails.render();
  });
};



module.exports = OutputView;
