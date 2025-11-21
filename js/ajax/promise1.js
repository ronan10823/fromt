// new Promise((resolve, reject)=>{
//     // 수행
//     // 성공
//     resolve();

//     // 실패
//     reject();
// });

const p1 = new Promise((resolve, reject) => {
  console.log("시작");

  setTimeout(() => {
    const isSuccess = true;
    if (isSuccess) {
      resolve("요청 성공");
    } else {
      reject(new Error("실패"));
    }
  }, 3000);
});

p1.then((result) => {
  console.log("성공적으로 처리됨 ", result);
})
  .catch((error) => {
    console.log("오류 발생 ", error.message);
  })
  .finally(() => {
    console.log("무조건 실행");
  });

// 시작
// 성공적으로 처리됨  요청 성공
// 무조건 실행

const p2 = fetch("https://jsonplaceholder.typicode.com/todos/1");

p2.then((response) => response.json()).then((data) => console.log(data));

// 시작
// { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
// 성공적으로 처리됨  요청 성공
// 무조건 실행

// 더 쉽게 만든게 async / await