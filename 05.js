// [1] 문제 ------------------------------------------------------------------------------------------ *
//해당 문제를 forEach로 변경하여 풀어주세요
let arr1 = [10, 20, 30];
let arrAdd1 = []; // 담아줄 배열 생성
// 해당 로직을 작성하세요  

// 결과 값: [100, 200, 300] 출력해주세요 
arr1.forEach(item => arrAdd1.push(item * 10));
console.log('01. 결과 값: [100, 200, 300] 출력 => ', arrAdd1);

// [2] 문제 ------------------------------------------------------------------------------------------ *
let arr2 = [10, 22, 33];
let arrAdd2 = []; // 담아줄 배열 생성
// 5의 배수를 찾아 반환하세요
// 해당 로직 작성해주세요

arr2.forEach(item => {
  if (item % 5 === 0) {
    arrAdd2.push(item)
  }
  return arrAdd2;
})
console.log('5의 배수를 찾아 반환하세요 =>', arrAdd2);
// 결과값 [10]