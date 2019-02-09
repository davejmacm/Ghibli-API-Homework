const FilmDetails = function (container, film) {
  this.filmContainer = container;
  this.data = film;
};

FilmDetails.prototype.render = function () {
  const filmContainer = document.createElement('div');
  filmContainer.classList.add('film-details');

  const title = this.createContinentHeading();
  filmContainer.appendChild(title);

  const description = this.createFilmDesc();
  filmContainer.appendChild(description);

  const releaseDate = this.createFilmDate();
  filmContainer.appendChild(releaseDate);

};

FilmDetails.prototype.createContinentHeading = function () {
  const title = document.createElement('h2');
  title.classList.add('title');
  console.log("render this.data",this.data);
  if (!this.data.title) {
    title.textContent = "Misc";
  } else {
    title.textContent = this.data.title;
  }
  return title;
};

FilmDetails.prototype.createFilmDesc = function () {
  const filmDesc = document.createElement('p');
  filmDesc.classList.add('description');
  filmDesc.textContent = this.data.description;
  return filmDesc;
};

FilmDetails.prototype.createFilmDate = function () {
  const filmDate = document.createElement('p');
  filmDate.classList.add('date');
  filmDate.textContent = this.data.date;
  return filmDate;
};
