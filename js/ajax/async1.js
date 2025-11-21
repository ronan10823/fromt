//async

// async (params) => {};

// async function name(params) {}

async function logName(params) {
  return fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) => response.json());
}

const todo = await logName();
console.log(todo);

