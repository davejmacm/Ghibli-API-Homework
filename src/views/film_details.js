const FilmDetails = function (container, continent) {
  this.continentsContainer = container;
  this.continent = continent;
};

FilmDetails.prototype.render = function () {
  const filmContainer = document.createElement('div');
  continentContainer.classList.add('film-details');

  const name = this.createContinentHeading();
  continentContainer.appendChild(title);
