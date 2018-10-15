export default {
  getTodos(){
    return fetch("https://crudapi.codelouisville.org/users/jmudd-demo/todos")
      .then(res => res.json());
  },
  saveTodos(todos){
    const data = {
      name: "todos",
      documents: todos,
    };
    return fetch("https://crudapi.codelouisville.org/users/jmudd-demo/todos", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
    });
  }
}
