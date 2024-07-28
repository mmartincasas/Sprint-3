// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {

  let result = array.map(movie => movie.director)
  console.log("EXERCISE 1 ->", result);
  return result;

}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {

  let result = array.filter(movie => movie.director == director)
  console.log("EXERCISE 2 ->", result);
  return result;

}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {


  let arrayDirector = getMoviesFromDirector(array, director);

  if (arrayDirector.length === 0) return null

  let sumScores = arrayDirector.reduce((sum, movie) => sum + movie.score, 0)
  let averageScore = (sumScores / arrayDirector.length).toFixed(2)

  console.log("EXERCISE 3 ->", averageScore);
 
  return parseFloat(averageScore);

}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  
  let moviesTitles = 
    array.map(movie => movie.title)
        .sort()
        .slice(0,20)
  
  console.log("EXERCISE 4 ->", moviesTitles);

  return moviesTitles

}

// Exercise 5: Order by year, ascending
function orderByYear(array) {

  let moviesTitlesByYear = 

    array.map (movie => {
               return {
                title: movie.title, 
                year: movie.year}
              })
      
              .sort ((a,b) => {
                  if (a.year === b.year){
                    return a.title.localeCompare(b.title)
                  } else {
                    return a.year - b.year
                  }
              })


  console.log("EXERCISE 5 -->", moviesTitlesByYear)
  return moviesTitlesByYear

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {

  const moviesByGenre = array.filter (movie => movie.genre.includes(genre))

  if (moviesByGenre.length === 0) return null

  let sumScores = moviesByGenre.reduce ((sum, movie) => sum + movie.score, 0)
  let averageScore = (sumScores / moviesByGenre.length).toFixed(2)

  console.log("EXERCISE 6-->", averageScore)

  return parseFloat(averageScore)

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



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
    bestFilmOfYear,
  };
}
