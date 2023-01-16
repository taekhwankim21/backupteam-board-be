// const express = require("express");

// const app = express();

// // 기본적으로 get으로 받아야함
// app.get("/", (req, res) => {
//   res.send("/ 요청했음");
// });

// app.get("/host", (req, res) => {
//   res.send("/host get 요청했음");
// });

// app.post("/host", (req, res) => {
//   res.send("/host post 요청했음");
// });

// app.listen(3000, () => {
//   console.log("웹 서버가 3000번 포트에서 실행되었습니다.");
// });

// api QueryString,Path Param,Header,cookie,Body api 받아오기
const express = require("express");
const app = express();

// 로그인 
app.post("/login", (req, res) => {
  const {email, password} = req.body
  console.log("email", email)
  console.log("password", password)

  res.send("/login api")
});

//회원가입 
app.post("/signup", (req, res) => {
  const {email, password, coment} = req.body
  console.log("email",email)
  console.log("password",password)
  console.log("coment",coment)

  res.send("/signup api")
});

//회원정보 한명 가져오기
app.get("/finduser", (req, res) => {
  const {email, password, coment} = req.params
  console.log("email",email)
  console.log("password",password)
  console.log("coment",coment)

  res.send("/finduser api")
});

//게시글 리스트  가져오기
app.get("/boardlist", (req, res) => {
  const {nickname, board} =req.body
  console.log("nickname",nickname)
  console.log("board",board)

  res.send("/boardlist api")
});

//선택 게시글 상세 정보 가져오기
app.get("/board/:id", (req, res) => {
  const {nickname, title}=req.params
  console.log("nickname",nickname)
  console.log("title",title)

  res.send("/board api")
});

//게시글 작성하기
app.post("/post", (req, res) => {
  const {title, coment, nickname} = req.body
  console.log("title",title);
  console.log("coment",coment);
  console.log("nickname",nickname);

  res.send("/post api")

});

//게시글 수정하기
app.patch("/edit", (req, res) => {
  const {title, coment, nickname} = req.body
  console.log("title",title);
  console.log("coment",coment);
  console.log("nickname",nickname);

  res.send("/edit api")

});

//게시글 삭제하기
app.post("/delete/:Id", (req, res) => {
  const {postId} = req.params
  console.log("postId",postId)
  console.log(req.);

  res.send("/delete api")

});


app.listen(3000, () => {
  console.log("웹 서버가 3000번 포트에서 실행되었습니다.");
});
