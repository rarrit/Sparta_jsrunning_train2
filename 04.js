//배열 API map 활용
let arr1 = [10, 20, 30];
// arr의 각 요소에 10을 곱한 새로운 배열을 생성해주세요
// 결과 값: [100, 200, 300]을 출력해주세요
let arrAdd100 = arr1.map(item => item * 10);
console.log('01. 결과 값: [100, 200, 300]을 출력해주세요 =>', arrAdd100); // [100, 200, 300]

// [02] 문제 ------------------------------------------------------------------------------------------ *
//배열 API filter 활용
let arr2 = [10, 22, 33]
// 5의 배수를 찾아 반환해주세요
// 결과값 [10]을 출력해주세요
let arrFilterFive = arr.filter(item => item % 5 === 0);
console.log('02. 결과값 [10]을 출력해주세요 =>', arrFilterFive); // 10

// [03] 문제 ------------------------------------------------------------------------------------------ *
let numbers1 = [5, 10, 15, 20, 25];
// 크기가 15보다 큰 숫자의 값을 반환하여 출력해주세요
// 출력값 [20, 25]
let numbersHigh = numbers1.filter(item => item > 15);
console.log('03. 출력값 [20, 25] => ', numbersHigh); // [20, 25]


// [04] 문제 ------------------------------------------------------------------------------------------ *
let arr3 = ["banana", "kiwi", "mango", "strawberry", "lime", "orange", "plum", "cherry"];
// 문자열 길이가 4 이상인 값을 반환하여 출력해주세요
let arrLengthChk = arr3.filter(item => item.length >= 4);
console.log('04. 문자열 길이가 4 이상인 값을 반환하여 출력해주세요 =>', arrLengthChk); // ['banana', 'kiwi', 'mango', 'strawberry', 'lime', 'orange', 'plum', 'cherry']

// [05] 문제 ------------------------------------------------------------------------------------------ *
let arr4 = ["banana", "kiwi", "mango", "strawberry", "lime", "orange", "plum", "cherry"];
// 요소의 문자열 길이가 홀수인 요소만 반환하여 출력해주세요
let arrLengthOdd = arr4.filter(item => item.length % 2 === 1);
console.log('05. 요소의 문자열 길이가 홀수인 요소만 반환하여 출력해주세요 =>', arrLengthOdd); // mango 

// [06] 문제 ------------------------------------------------------------------------------------------ *
let arr5 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
// 오름차순으로 정렬하여 출력해주세요
let arrSort = arr5.sort((a, b) => a - b);
console.log('06. 오름차순으로 정렬하여 출력해주세요 =>', arrSort); // [1, 1, 2, 3, 3, 4, 5, 5, 6, 9]

// [07] 문제 ------------------------------------------------------------------------------------------ *
let student01 = [
  { name: "이재상", age: 25 },
  { name: "정윤오", age: 30 },
  { name: "김준현", age: 12312 }
];
// age를 이용하여 내림차순으로 정렬하고 출력해주세요
let studentSort01 = student01.sort((a, b) => b.age - a.age);
console.log('07. age를 이용하여 내림차순으로 정렬하고 출력해주세요 => ', studentSort01); // {name: '김준현', age: 12312}, {name: '정윤오', age: 30}, {name: '이재상', age: 25}

// [08] 문제 ------------------------------------------------------------------------------------------ *
let student02 = [
  { id: 1, name: "이재상" },
  { id: 2, name: null },
  { id: 3, name: "김준현" }
];
// 객체 배렬에서 name 속성이 null인 객체가 있는지 판별을 확인하는 코드를 작성하고 반환값을 출력해주세요
let studentNull = student02.filter(item => item.name === null);
console.log('08. 객체 배렬에서 name 속성이 null인 객체 =>', studentNull);

// [09] 문제 ------------------------------------------------------------------------------------------ *
let arr6 = ["banana", "kiwi", "mango", "strawberry", "lime", "orange", "plum", "cherry"];
// 문자열 길이가 5를 초과하는 요소가 있는지 검사하는 코드를 작성하고 반환값을 출력해주세요.
let arrLEngthFiveHigh = arr6.filter(item => item.length > 5);
console.log('09. 문자열 길이가 5를 초과하는 요소 =>', arrLEngthFiveHigh);

// [10] 문제 ------------------------------------------------------------------------------------------ *
let arr7 = ["banana", "kiwi", "mango"];
// kiwi 와 manggo 사이에 새로운 요소를 삽입하는 코드를 작성하고 출력해주세요
arr7.splice(2, 0, 'kimminkyu');
console.log('10. kiwi 와 manggo 사이에 새로운 요소를 삽입하는 코드를 작성 =>', arr7);

// [11] 문제 ------------------------------------------------------------------------------------------ *
let arr8 = [1, 5, -3, 10, 0, 8];
// 배열에 음수가 하나라도 있는지 판별하는 코드를 작성하고 반환값을 출력해주세요
let arrMinusChk = arr8.some(item => item < 0);
console.log(arrMinusChk); // true

// [12] 문제 ------------------------------------------------------------------------------------------ *
let arr9 = [1, 5, -3, 10, 0, 8];
// 모든 숫자가 음수인지 판별하는 코드를 작성하고 반환값을 출력해주세요
let arrChk = arr9.every(item => item < 0);
console.log(arrChk); // false

