// ==================================================================================================================================================

const express = require("express")
const cookieParser = require("cookie-parser")
const movies = require("./src/models/movies")
const users = require("./src/models/users")
var cors = require("cors")
const app = express()

app.use(cors())

app.use(express.json())
app.use(cookieParser())

function getMoviesByPage() {}

// 영화제목 리스트
app.get("/movies", (req, res) => {
  const page = req.query.page || 1

  const cloneMovies = [...movies]
  const lastPage = Math.ceil(movies.length / 10)
  const startIndex = (page - 1) * 10
  const paginationMovies = cloneMovies.splice(startIndex, 10)

  const moviesList = paginationMovies.map((movie) => ({
    ...movie,
    name: users.find((user) => user.id === movie.user_id).name,
  }))
  moviesList.sort((a, b) => {
    const preTimestamp = new Date(a.created_at).getTime()
    const curTimestamp = new Date(b.created_at).getTime()
    return curTimestamp - preTimestamp
  })

  res.send({
    pageInfo: {
      lastPage,
    },
    movies: paginationMovies,
    movies: moviesList,
  })
})

// 상세조회(hit_count 올리기)

app.get("/movies/:id", (req, res) => {
  // 1. 사용자가 보내준 id 를 가져온다
  const { id } = req.params
  // 2. id 에 해당하는 movie 를 가져온다
  const thisMovie = movies.find((movie) => movie.id === Number(id))
  // 3. 가져온 movie 에서 hit_count 1을 더한 객체를 만든다
  const movieToReplace = {
    ...thisMovie,
    hit_count: thisMovie.hit_count + 1,
  }
  // // 4. hit_count 1을 더한 객체를 movies 내에서 기존 객체에 치환한다. (findIndex, splice 사용)
  const targetIndex = movies.findIndex((movie) => movie.id === Number(id))
  movies.splice(targetIndex, 1, movieToReplace)

  // 5. hit_count 1을 더한 객체를 반환한다.
  res.send(movieToReplace)
})
// 영화등록
app.post("/movies", (req, res) => {
  const newMovie = req.body
  newMovie.id = movies[movies.length - 1].id + 1
  newMovie.hit_count = 0
  newMovie.created_at = new Date().toISOString()

  movies.push(newMovie)
  res.send(newMovie)
})

app.listen(3000, () => {
  console.log("웹 서버가 3000번 포트에서 실행되었습니다.")
})

//  api를 만들건데 하나를 검색 상세조회를 할거임 id를 받아서
// hit카운트 올라가야함 splice 기능써서
