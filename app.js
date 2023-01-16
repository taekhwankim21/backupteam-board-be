// api QueryString,Path Param,Header,cookie,Body api 받아오기
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.json());
app.use(cookieParser());
// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("환영합네다");
});

// 로그인
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log("email", email);
  console.log("password", password);

  res.send("/login api");
});

//회원가입
app.post("/signup", (req, res) => {
  const { email, password, coment } = req.body;
  console.log("email", email);
  console.log("password", password);
  console.log("coment", coment);

  res.send("/signup api");
});

//회원정보 한명 가져오기
app.get("/finduser/?userid/:id", (req, res) => {
  // const { userId } = req.query;
  const { userId, email, password, coment } = req.body;
  console.log("userId", userId);
  console.log("email", email);
  console.log("password", password);
  console.log("coment", coment);

  res.send("/finduser api");
});

//게시글 리스트  가져오기
app.get("/post", (req, res) => {
  const { nickname, board } = req.body;
  console.log("nickname", nickname);
  console.log("board", board);

  res.send("/boardlist api");
});

//선택 게시글 상세 정보 가져오기
app.get("/post/:id", (req, res) => {
  // const { postId } = req.params;
  const { postId, nickname, title } = req.body;
  console.log("postId", postId);
  console.log("nickname", nickname);
  console.log("title", title);

  res.send("/post/:id");
});

//게시글 작성하기
app.post("/post/create", (req, res) => {
  const { title, coment, nickname } = req.body;
  console.log("title", title);
  console.log("coment", coment);
  console.log("nickname", nickname);

  res.send("/post/create api");
});

//게시글 수정하기
app.patch("/post/edit", (req, res) => {
  // const { postId } = req.params;
  const { postId, title, coment, nickname } = req.body;
  console.log("postId", postId);
  console.log("title", title);
  console.log("coment", coment);
  console.log("nickname", nickname);

  res.send("/post/edit api");
});

//게시글 삭제하기
app.post("/post/delete/:id", (req, res) => {
  // const { postId } = req.params;
  const { postId } = req.body;

  console.log("postId", postId);

  res.send("/post/delete api");
});

app.listen(3000, () => {
  console.log("웹 서버가 3000번 포트에서 실행되었습니다.");
});
