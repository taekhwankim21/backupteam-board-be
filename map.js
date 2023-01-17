// // 1. score.score 가 40 점 미만이면 true , 이상이면 false 를 반환하는 함수
// const 함수 = (score) => {
//   if (score.score < 40) {
//     return true;
//   } else {
//     return false;
//   }
// };

// // 2. 삼항 연산자로 변환
// const 함수 = (score) => {
//   const result = score.score < 40 ? true : false;
//   return result;
// };

// // 3. 변수 할당 없이 연산을 반환
// const 함수 = (score) => {
//   return score.score < 40 ? true : false;
// };

// // 4. 3항 연산자 무의미 하게 사용하는 것 제거
// const 함수 = (score) => {
//   return score.score < 40;
// };

// // 5. 화살표 함수 return 생략 가능 조건일때 생략
// const 함수 = (score) => score.score < 40;

// // 6. 화살표 함수 인자 하나일때 괄호 생략
// const 함수 = (score) => score.score < 40;

const scores = [
  {
    name: "지영",
    score: 80,
    mbti: "INFP",
    addr: "지구 어딘가 ",
    contact: "010-1234-1234",
  },
  {
    name: "효원",
    score: 50,
    mbti: "INFP",
    addr: "지구 어딘가 ",
    contact: "010-1234-1234",
  },
  {
    name: "정기",
    score: 60,
    mbti: "INFP",
    addr: "지구 어딘가 ",
    contact: "010-1234-1234",
  },
  {
    name: "대신",
    score: 30,
    mbti: "INFP",
    addr: "지구 어딘가 ",
    contact: "010-1234-1234",
  },
  {
    name: "택환",
    score: 94,
    mbti: "INFP",
    addr: "지구 어딘가 ",
    contact: "010-1234-1234",
  },
  {
    name: "호승",
    score: 30,
    mbti: "INFP",
    addr: "지구 어딘가 ",
    contact: "010-1234-1234",
  },
  {
    name: "희선",
    score: 23,
    mbti: "INFP",
    addr: "지구 어딘가 ",
    contact: "010-1234-1234",
  },
  {
    name: "설인",
    score: 56,
    mbti: "INFP",
    addr: "지구 어딘가 ",
    contact: "010-1234-1234",
  },
]

// // 가장 공부를 잘했던 지영의 점수확인
// // for문
// let 지영님score = null;
// for (let i = 0; i < scores.length; i++) {
//   if (scores[i].name === '지영') {
//     지영님score = scores[i].score;
//   }
// }
// console.log('지영님score : ', 지영님score);

// // = find
// const 지영님scoreByFind = scores.find((score) => score.name === '지영');

// // 문제 하나가 잘못되어 모두에게 5점씩 가산점 점수보정하기
// // for
// const 보정scores = [];
// for (let i = 0; i < scores.length; i++) {
//   const newScore = scores[i].score + 5;
//   보정scores.push({
//     ...scores[i],
//     score: newScore,
//   });
// }
// console.log('보정scores', 보정scores);

// = map
const 보정_점수 = scores.map((score) => ({
  ...score,
  score: score.score + 5,
}))
console.log("보정_점수 : ", 보정_점수)
