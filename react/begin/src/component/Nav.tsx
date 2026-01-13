import type { Topic } from '../types/topic';

type NavProps = {
  topics: Topic[];
};

//  <a href={"/read"}>title</a>
function Nav({ topics }: NavProps) {
  return (
    <nav>
      <ol>
        {topics.map((topic) => (
          <li>
            <a href={`/read/${topic.id}`}>{topic.title}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Nav;
