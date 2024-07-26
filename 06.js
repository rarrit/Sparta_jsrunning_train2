// 주어진 학생 객체 배열에서 각 학생의 평균 점수를 계산한 후, 
// 평균이 80점 이상인 학생의 이름만 필터링하여 출력해주세요. 가능하다면 메소드 체이닝으로 풀어주세요

const students = [
  { name: "이재상", scores: [80, 90] },
  { name: "김준현", scores: [90, 95] },
  { name: "정윤오", scores: [75, 70] },
];

const chain = students
  .map(item => ({
    // 1. map으로 기존 배열 복사 후 어떻게 filter메서드에 값을 넘겨줄건가 
    // 도저히 모르겠어서 검색 후 적용
    name: item.name,
    scores: item.scores.reduce((a, b) => a + b, 0) / item.scores.length
  }))
  // 2. filter 메서드를 사용해 반환 받은 name,scores 중 score 점수를 비교해서 평균을 가려냄
  .filter(item => item.scores >= 80)
  // 3. 이름만 반환함 
  .map(item => item.name);


console.log(chain);



// 여기에 코드를 작성해주세요
// 예상 출력: ["이재상", "김준현"]


const numbers = [5, 10, 15, 20, 25];
// 요소에 2를 곱하고, 30 이하인 것들만 반환받아 출력해주세요
const num = numbers.map(item => item * 2).filter(item => item <= 30);
console.log(num);
// 출력값 : [10, 20, 30]