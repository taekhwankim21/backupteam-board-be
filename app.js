const express = require("express");

const app = express();

// 기본적으로 get으로 받아야함
app.get("/", (req, res) => {
  res.send("/ 요청했음");
});

app.get("/host", (req, res) => {
  res.send("/host get 요청했음");
});

app.post("/host", (req, res) => {
  res.send("/host post 요청했음");
});

app.listen(3000, () => {
  console.log("웹 서버가 3000번 포트에서 실행되었습니다.");
});
