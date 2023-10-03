// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((movie) => movie.director);
  console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((movie) => movie.director.includes(director));
  console.log('EXERCISE 2 ->', result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let directorArray = getMoviesFromDirector(array, director);
  let scoreArray = directorArray.map((movie) => movie.score);
  let subtotal = scoreArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  let result = Math.round((subtotal / scoreArray.length) * 1e2 ) / 1e2;
  console.log('EXERCISE 3 ->', result);
  return result;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  let nameArray = array.map((movie) => movie.title);
  let result = nameArray.sort((a, b) => a.localeCompare(b));
  if (result.length > 20) {
    result.splice(20, result.length);
  }
  console.log('EXERCISE 4 ->', result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let result = array.toSorted((a, b) => {
    if (a.year === b.year) {
      return (a.title).localeCompare(b.title);
    }
    return a.year - b.year;
  });
  //let result = arrayByYear.
  console.log("EXERCISE 5 ->", result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let moviesOfCategory = array.filter((movie) => movie.genre.includes(genre));
  let scoreArray = moviesOfCategory.map((movie) => movie.score);
  let subtotal = scoreArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  let result = Math.round((subtotal / scoreArray.length) * 1e2 ) / 1e2;
  console.log('EXERCISE 6 ->', result);
  return result;
}
// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
