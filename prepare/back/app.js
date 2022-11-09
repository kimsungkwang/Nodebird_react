const express = require("express");
const postRouter = require("./routes/post");
const userRouter = require("./routes/user");
const db = require("./models");
const app = express();

db.sequelize
  .sync()
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch(console.error);

// app.get -> 가져오다
// app.post -> 생성하다
// app.put -> 전체 수정
// app.delete -> 삭제
// app.patch -> 부분 수정
// app.options -> 찔러보기
// app.head -> 헤더만 가져오기(헤더/바디)

app.use(express.json());
app.use(express.urlencoded({ extended: ture }));

app.get("/", (req, res) => {
  res.send("Hello express");
});

app.get("/api", (req, res) => {
  res.send("Hello api");
});

app.get("/api/posts", (req, res) => {
  res.json([
    { id: 1, content: "hello" },
    { id: 2, content: "hello2" },
    { id: 3, content: "hello3" },
  ]);
});

app.use("/post", postRouter);
app.use("/user", userRouter);

app.listen(3065, () => {
  console.log("서버 실행 중 ");
});
