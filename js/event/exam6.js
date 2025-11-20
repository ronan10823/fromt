const products = [
  { id: 0, price: 77000, title: "Blosson Dress" },
  { id: 1, price: 55000, title: "SpringField Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];

// 배열
const fruits = ["Apple", "StraBerry", "Banana", "Orange"];
// 객체
const person = { name: "Hong", job: "Student" };
const person1 = { name: "Song", jog: "Student" };

// 객체 배열 선언
// const persons = [person, person1];
const persons = [
    { name: "Hong", job: "Student" },
    { name: "Song", job: "Student" },
];

// 배열에 접근하는 방법 = index 사용
// console.log(fruits[0]); // Apple 개별 요소에 접근할 수 있다.
// 배열 -> 무엇을 확인하기 위함?
fruits.forEach((item) => {
  console.log(item);
});
// 객체에 접근하는 방법
console.log(person.name); // Hong 객체에 접근할 수 있다.
// 합해서 접근해야 한다면?
// console.log(persons[0].name); // Hong 배열의 객체에 접근할 수 있다.


// 객체 배열 -> foreach 돌릴 수 있다.
persons.forEach((p) => {
  console.log(`${p.name}:${p.job}`);
});

// products도 동일하게 접근할 수 있다.
products.forEach((item) => {
  console.log(`${item.id}, ${item.title}, ${item.price}`);
});

// price와 product를 이제 html에서 찾아야 한다. 왜? html 안에 내용을 밀어넣고 싶으니까.
// card라는 3개의 항목을  selectAll 로 찾아오자.

// 진짜 하고 싶은건 이거니까!
// card-title : 제품 title
// card-text : 제품 price
// 우선 영역부터 찾자.
// 1) 영역 찾기
const cards = document.querySelectorAll(".card");
// 2) h5, cardtext를 찾아서 뭔가를 해야햔다. 배열이기 에 for-each로 무언가를 하자.
cards.forEach((card, idx) => {
  // 이 카드를 다 찾아왔기 때문에, 그 중에서 필요한 title과 text 요소(h5, p tag)만 찾아오면 된다.
  // 2-1) .card-title 요소 찾기
  const title = card.querySelector(".card-title");
  // 2-2) .card-text 요소 찾기
  // title의 next element로 card-text를 찾자.
  const price = title.nextElementSibling;
  // 질문. 왜 얘는 또 다른 애들과 다르게 ()가 안 붙을까

  title.textContent = products[idx].title;
  price.textContent = products[idx].price;
  // 문제는 두 번째 루프가 돌았을 때 생긴다. 루프가 돌면, 배열 [] 안의 수가 0에서 1로, 1에서 2로 바뀌어야 한다. 그래야 첫 번째, 두 번째, 세 번째 card의 정보를 가져올 수 있다.
  // 그러면  index를 쓰면 된다. (card) => (card, idx)
});
