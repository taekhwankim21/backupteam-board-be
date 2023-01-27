const movies = require("../models/movies")

function getMovies(page)
  const cloneMovies = [...movies] 
  const lastPage = Math.ceil(movies.length / 10) //페이지의 갯수(바구니)
  const startIndex = (page - 1) * 10
  const paginationMovies = cloneMovies.splice(startIndex, 10)

  const moviesList = paginationMovies.map((movie) => ({
    ...movie,
    name: users.find(user => user.id === movie.user_id).name,
  }))

  return{
    lastPage : lastPage,
    movies : moviesList.sort((a, b) => {
    const preTimestamp = new Date(a.created_at).getTime()
    const curTimestamp = new Date(b.created_at).getTime()
    return curTimestamp - preTimestamp
  })}


module.exprots = getMovies