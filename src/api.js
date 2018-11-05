export default {
  getTodos(){
    return fetch("https://codelouisville-20029.firebaseio.com/todos.json")
      .then(res => res.json());
  },
  addTodo(todo){
    return fetch("https://codelouisville-20029.firebaseio.com/todos.json", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(res => res.json());
  },
  saveTodo(id, todos){
    return fetch(`https://codelouisville-20029.firebaseio.com/todos/${id}.json`, {
      method: "PUT",
      body: JSON.stringify(todos.find(todo => todo.id === id)),
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(res => res.json());
  }
}
