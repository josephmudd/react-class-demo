export default {
  getTodos(){
    return fetch("https://crudapi.codelouisville.org/users/jmudd-demo/todos")
      .then(res => res.json());
  }
}
