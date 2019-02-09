const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Film = function(){
  this.data = null;
};

Film.prototype.getData = function () {
const url = `https://ghibliapi.herokuapp.com/films/`;
  const request = new Request(url);
  request.get()
    .then((film)=> {
      this.data = film;
      PubSub.publish('Film:films-data-ready', this.data);
      console.log("film: film data ready:", this.data);
    })
    .catch((err) => {
      PubSub.publish('Film:error', err);
    });
};


module.exports = Film;
