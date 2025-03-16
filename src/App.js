import TodoContext from "./Context/TodoContext";
import Todolist from "./Components/Todolist";
function App() {
  return (
    <div>
  <TodoContext>
<Todolist />
  </TodoContext>
    
    </div>
  );
}

export default App;
