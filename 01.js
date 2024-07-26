// 1. 얕은 복사
// 해당 문제를 출력해 보고 출력 값을 설명해주세요
const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2[0] = 10;
console.log(arr1); // [10, 2, 3] 출력된다. 
console.log(arr1 === arr2); // true : arr2는 arr1의 주소를 바라보고 있기에 값이 동일하다.



const obj1 = { a: 1, b: 2, c: 3 };
// obj1을 얕은 복사하는 코드로 작성해주세요
/* obj2에 d를 추가하는 코드를 작성해주세요. d는 4의 값을 가집니다. */
const obj2 = function (target) {
  let result = {}; // 담아줄 객체를 생성함
  for (let prop in obj1) {
    result[prop] = obj1[prop]; // result 에 obj1 객체를 담아줌
  }
  obj2.d = 4; // d추가 및 4의 값을 추가
  return result; // result 반환
}
const copyObj1 = obj2(obj1);
/* 해당값 obj1, obj2의 값을 출력해주세요 */
console.log('obj1 =>', obj1, 'obj2 =>', copyObj1);
console.log(copyObj1)