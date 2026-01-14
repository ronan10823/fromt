import styles from './Card.module.css';

export interface Card {
  title?: string;
  content: string;
  author?: string;
}

// Props로 한 번에 받아낸다면?
// function InfoCard(props: Card) {
//   return (
//     <>
//       <div className={styles.card}>
//         <h2>{props.title}</h2>
//         <p>{props.content}</p>
//         <p>Author: {props.author}</p>
//       </div>
//     </>
//   );
// }

// 구조 분해 형식
function InfoCard({ title, content, author }: Card) {
  return (
    <>
      <div className={styles.card}>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>Author: {author}</p>
      </div>
    </>
  );
}

export default InfoCard;
