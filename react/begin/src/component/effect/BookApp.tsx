import axios from 'axios';
import { useEffect, useState } from 'react';

type Book = {
  id: number;
  title: string;
  author: string;
};
function BookApp() {
  const [books, setBooks] = useState<Book[]>([]);

  // fetch() : 브라우저 함수(설치 필요 없음)
  // axios(): node.js 환경에서는 설치/ <script src'=""> </script/>
  // fettcg(경로, {headers, data}).then(데이터 도착 여부/도착 데이터만 원하는/)

  // fetch나 axios 쓸 때 반드시 useEffect를 써야 한다.
  //   useEffect(() => {
  //     const fetchBooks = async () => {
  //       try {
  //         const res = await fetch('/data/books.jason');
  //         if (!res.ok) {
  //           throw new Error('네트워크 or 서버 확인');
  //         }

  //         const data = await res.json();
  //         setBooks(data);
  //       } catch (error) {
  //         console.error('Failed', error);
  //       }
  //     };
  //     fetchBooks();
  //   }, []);

  // axios
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get('/data/books.json');
        // axios는 자동으로 json 파싱
        setBooks(res.data);
      } catch (error) {
        console.error('Failed', error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => {
          <li key={book.id}>
            {book.title} by {book.author}
          </li>;
        })}
      </ul>
    </>
  );
}

export default BookApp;
