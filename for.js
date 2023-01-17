// // 1.10000~ 1번 로그 찍히도록
for (let i = 10000; i >= 1; i--) {
  console.log(i);
}
console.log("💛10000~1 종료💛");

// // 2.1~10000이하 숫자중 홀수만 찍도록
for (let i = 1; i <= 10000; i = i + 2) {
  console.log(i);
}
console.log("💛홀수만 종료💛");

// // 3.구구단 for 문으로 만들어오기
for (let i = 1; i <= 9; i++) {
  console.log(i, "단입니다");
  for (let j = 1; j <= 9; j++) {
    console.log(i, "x", j, "=", i * j, "입니다.");
  }
  console.log(i, "단 끝");
}
console.log("구구단을 종료합니다💛");

//이런게 있다.
// let k = 1;
// let k1 = 1;
// console.log(k++);  // 줄을 맞추고 ++?
// console.log(++k1); // ++하고 줄을 맞춤?
