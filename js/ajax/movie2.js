// axios
const txtYear = document.querySelector("#txtYear");
const selMon = document.querySelector("#selMon");
const selDay = document.querySelector("#selDay");

// 페이지가 로드되면
const init = () => {
  // 1. 어제 날짜를 보여주기 (이거부터 해보자. 입력하는 칸에 아예 처음부터 어제 날짜를 알려주자)
  const now = new Date();
  console.group(now); // 2025-11-21T08:11:46.110Z -> 연월일만 필요하다.

  const year = now.getFullYear();
  const month = now.getMonth() + 1; // 월 0부터 시작하기 때문에 11이 나온다. 그래서 +1을 해야한다.
  const day = now.getDate() - 1; // 어제 날짜를 구하기 위해서 -1을 해준다.

  console.log(year, month, day);

  // 2. 구한 어제 날짜를 화면에 보여주기

  // 2-2. 이렇게 2개의 자리로 만들어야 한다.
  txtYear.value = year;
  selMon.value = month < 10 ? "0" + month : month;
  selDay.value = day < 10 ? "0" + day : day;
};

init(); // 한 번 호출해야 한다. 언제 호춣해야 하는 걸 아는거지? 뭐가 호출해야하는 거야?

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  // 사용자가 입력한 날짜 가져오기
  const date = txtYear.value + selMon.value + selDay.value;
  console.log(date);
  const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=eb701c68265eee3e0d3e4bf254de7c77&targetDt=${date}`; // 사용자가 입력한 날짜가 들어간다.
  axios.get(url)
    .then((response) => {
      // movieCd, movieNm, rank, rankInten
      const dailyBoxOfficeList = response.data.boxOfficeResult.dailyBoxOfficeList;

      let contents = "";
      dailyBoxOfficeList.forEach((item) => {
        console.log(item.movieCd, item.movieNm, item.rank, item.rankInten);
        // 1 위키드: 포굿(0)
        // 7 세계의 주인(▲ 1)
        // 9 퍼스트 라이드 (▼ -2)
        contents += `${item.rank} 위 `;
        contents += `<a href=${item.movieCd}>${item.movieNm}</a>`;
        contents += `(`;

        if (item.rankInten > 0) {
          contents += `▲ ${item.rankInten})`;
        } else if (item.rankInten < 0) {
          contents += `▼ ${item.rankInten})`;
        } else {
          contents += `${item.rankInten})`;
        }
        contents += `<br>`;
      });
      document.querySelector("#msg").innerHTML = contents;
    });
});

// 영화 제목 클릭 시,
// 영화 상세 정보 요청
// postman에서 한것처럼,http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=eb701c68265eee3e0d3e4bf254de7c77&movieCd=20255381
// a 링크의 기능을 중지시켜야 한다.(주소이동 X) > 숫자를 가져와야 한다. 20256757 = 영화 제목

// a태그 기능 중지
// movieCd 값 가져오기
document.querySelector("#msg").addEventListener("click", (e) => {
  e.preventDefault();

  // 이벤트 대상 확인
  console.log(e.target);
  console.log(e.target.href);
  console.log(e.target.getAttribute("href"));
  const movieCd = e.target.getAttribute("href");
  const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=eb701c68265eee3e0d3e4bf254de7c77&movieCd=${movieCd}`;

  axios.get(url)
  .then((response) => {
    console.log(response.data);

    const movieInfo = response.data.movieInfoResult.movieInfo;

    let movieDetail = "<ul>";
    // 한글제목 : 위키드 : 포 굿
    movieDetail += `<li>한글제목 : ${movieInfo.movieNm} </li>`;
    // 영어제목 : Wicked: For Good
    movieDetail += `<li>영어제목 : ${movieInfo.movieNmEn} </li>`;
    // 상영시간 : 137분
    movieDetail += `<li>상영시간 : ${movieInfo.showTm} 분 </li>`;

    // 장르: 판타지, 뮤지컬, 어드벤처
    let genres = "";
    movieInfo.genres.forEach((genre) => {
      genres += `${genre.genreNm},`;
    });
    movieDetail += `<li>장르 : ${genres} </li>`;

    // 감독: 존 추
    let directors = "";
    movieInfo.directors.forEach((director) => {
      directors += `${director.peopleNm},`;
    });
    movieDetail += `<li>감독 : ${directors} </li>`;

    // 배우: 신시아 에리보 , =-- for Each
    let actors = "";
    movieInfo.actors.forEach((actor) => {
      actors += `${actor.peopleNm},`;
    });
    movieDetail += `<li>배우 : ${actors} </li>`;

    document.querySelector("#detail").innerHTML = movieDetail;
  });

});
