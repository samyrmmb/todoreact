import { useState } from 'react';
import TodoForm from './TodoForm';
import { TodoList } from './TodoList';



function App() {

  function pushToItems(e) {
    e.preventDefault()
    setItems([...items, todo])
  }
  
  const [items, setItems] = useState([])
  const [todo, setTodo] = useState()

  return (
    <div className="App">
      <input type='text' name='todo' id='todo' placeholder='Enter todo here' onChange={(e) => setTodo(e.target.value)} />
      <button type='button' onClick={pushToItems}>Create</button>
      <TodoForm />
      <TodoList />
      <hr />
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))
        }
      </ul>
    </div>
  );
}

export default App;
