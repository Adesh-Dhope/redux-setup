import { Provider } from "react-redux";
import store from "./redux/store";
import UserList from "./Context/userList";
import CommentsList from "./Context/commentsList";
import TodoList from "./Context/TodoList";
import PostList from "./Context/postList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";



function App() {
  return (
   <Provider store={store}>
      <Router> 
      <Navbar />   
         <Routes>
             <Route path='/comments' element={<CommentsList />}></Route>
             <Route path='/post' element={<PostList />}></Route>
             <Route path='/todos' element={<TodoList />}></Route>
             <Route path='/user' element={<UserList />}></Route>
         </Routes>
         </Router>
   </Provider>
  );
}

export default App;
