const student = {
  name: "yuno",
  age: "30",
  skill: ["javascript"],
  address: {
    city: "seoul"
  }
};

// 얕은 복사를 수행하여 shallowCopy를 만들어주세요.
const shallowCopy =

// 깊은 복사를 수행하여 deepCopy를 만들어주세요.
const deepCopy =

  // 얕은 복사 객체와 원본 객체를 비교하여 출력해주세요
  console.log("1. 원본 객체(student)와 얕은 복사 객체가 같을까요?",);

// 얕은 복사 객체의 address와 원본 객체의 address를 비교하여 출력해주세요.
console.log("2. 원본 객체의 address와 얕은 복사 객체의 address가 같을까요?",);

// 깊은 복사 객체와 원본 객체를 비교하여 출력해주세요.
console.log("3. 원본 객체(student)와 깊은 복사 객체가 같을까요?",);

// 깊은 복사 객체의 address와 원본 객체의 address를 비교하여 출력해주세요.
console.log("4. 원본 객체의 address와 깊은 복사 객체의 address가 같을까요?",);



2.
// 동일한 student로 진행합니다. 

// 얕은 복사한 객체에 배열요소 변경 javascript -> js으로 변경해주세요 

// 깊은 복사 객체의 주소 속성을 변경하세요 (예: city를 "busan"으로 변경)

// 결과 확인 
console.log("5. 원본 객체(student):",);
console.log("6. 얕은 복사된 객체(shallowCopy):",);
console.log("7. 깊은 복사된 객체(deepCopy):",);

/* 1~7번까지 출력값을 출력해보고 적어주세요
예 ) 1. true 
  ... 
     5. {
    name : ... ,
          agae : ... , 
    skill : ...,
    ....
        }
*/