const student = {
  name: "yuno",
  age: "30",
  skill: ["javascript"],
  address: {
    city: "seoul"
  }
};

// 얕은 복사를 수행하여 shallowCopy를 만들어주세요.
const shallowCopy = function (target) {
  let result = {};
  for (props in student) {
    result[props] = student[props];
  }
  return result;
}
const shallowCopyObj = shallowCopy(student);

// 깊은 복사를 수행하여 deepCopy를 만들어주세요.
// 깊은 복사 문법은 모르겠어서 복붙했습니다. 문법을 보면 if문으로 타입까지 확인 후 넣어주는걸로 이해했습니다..!
// 다음엔 기억해서 사용할 수 있기를..!
const deepCopy = function (o) {
  var result = {};
  if (typeof o === "object" && o !== null)
    for (i in o) result[i] = deepCopy(o[i]);
  else result = o;
  return result;
}
const deepCopyObj = deepCopy(student);


// 얕은 복사 객체와 원본 객체를 비교하여 출력해주세요
console.log("1. 원본 객체(student)와 얕은 복사 객체가 같을까요?", student === shallowCopyObj);

// 얕은 복사 객체의 address와 원본 객체의 address를 비교하여 출력해주세요.
console.log("2. 원본 객체의 address와 얕은 복사 객체의 address가 같을까요?", student.address === shallowCopyObj.address);

// 깊은 복사 객체와 원본 객체를 비교하여 출력해주세요.
console.log("3. 원본 객체(student)와 깊은 복사 객체가 같을까요?", student === deepCopyObj);

// 깊은 복사 객체의 address와 원본 객체의 address를 비교하여 출력해주세요.
console.log("4. 원본 객체의 address와 깊은 복사 객체의 address가 같을까요?", student.address === deepCopyObj.address);




// 동일한 student로 진행합니다. 

// 얕은 복사한 객체에 배열요소 변경 javascript -> js으로 변경해주세요 
student.skill[0] = 'js';

console.log(student.skill);
// 깊은 복사 객체의 주소 속성을 변경하세요 (예: city를 "busan"으로 변경)

// 결과 확인 
console.log("5. 원본 객체(student):", student);
console.log("6. 얕은 복사된 객체(shallowCopy):", shallowCopyObj);
console.log("7. 깊은 복사된 객체(deepCopy):", deepCopyObj);

/* 1~7번까지 출력값을 출력해보고 적어주세요
1. false
2. true
3. false
4. false
['js']

5. {name: 'yuno', age: '30', skill: Array(1), address: {…}}
address : {city: 'seoul'}
age : "30"
name : "yuno"
skill : ['js']

6. {name: 'yuno', age: '30', skill: Array(1), address: {…}}
address : {city: 'seoul'}
age : "30"
name : "yuno"
skill : ['js']

7. {name: 'yuno', age: '30', skill: {…}, address: {…}}
address : {city: 'seoul'}
age : "30"
name : "yuno"
skill : {0: 'javascript'}
*/
