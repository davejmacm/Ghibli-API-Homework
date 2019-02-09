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
  this.data.forEach((continent) => {
    const filmDetails = new FilmDetails(this.data, continent);
    filmDetails.render();
  });
};



module.exports = OutputView;
