import firebase from './firestore';

const db = firebase.firestore();

db.settings({
  timestampsInSnapshots: true
});

export default {
  getTodos(){
    return db.collection("todos").get()
      .then( querySnapshot => {
        return querySnapshot.docs.map(doc => {return {...doc.data(), id: doc.id}})
      })
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
  },
  createTodo(todo){
    db.collection("todos").add(todo)
      .then((docRef) => console.log("Document written wih ID: ", docRef.id))
      .catch((error) => console.error("Error adding document: ", error))
  },
  updateTodo(todo){
    db.collection("todos").doc(todo.id).set(todo)
      .then(() => console.log("Doc updated successfully"))
      .catch((error) => console.error("Error adding doc: ", error))
  }
}
