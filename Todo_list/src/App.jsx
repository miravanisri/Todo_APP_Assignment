import { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import Button from "./components/Button";
import Button2 from "./components/Button2";
import Description from "./components/Description";
import Expandable from "./components/Expandable";
import Search from "./components/Search";
import Title from "./components/Title";
import Button3 from "./components/Button3";
import Expandable2 from "./components/Expandable2";

/**
 * Custom hook to get URL query parameters.
 * @returns {URLSearchParams} URLSearchParams object
 */
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function App() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [todos, setTodos] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [completedTodo, setCompletedTodo] = useState([]);
  const [currentEdit, setCurrentEdit] = useState(null);
  const query = useQuery();
  const navigate = useNavigate();

  // Get search query from URL
  const searchQuery = query.get('search') || '';

  /**
   * Add a new todo item to the list and save it to localStorage.
   */
  const handleAddTodo = () => {
    const newTodoItem = {
      Title: title,
      Description: desc
    };
    const updatedTodo = [...todos, newTodoItem];
    setTodos(updatedTodo);
    localStorage.setItem('todolist', JSON.stringify(updatedTodo));
  };

  /**
   * Load saved todos from localStorage when the component mounts.
   */
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todolist'));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  /**
   * Load saved completed todos from localStorage when the component mounts.
   */
  useEffect(() => {
    const savedCompletedTodos = JSON.parse(localStorage.getItem('completedTodo'));
    if (savedCompletedTodos) {
      setCompletedTodo(savedCompletedTodos);
    }
  }, []);

  /**
   * Delete a todo item by its index and update localStorage.
   * @param {number} index - The index of the todo item to delete
   */
  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    localStorage.setItem('todolist', JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  /**
   * Delete a completed todo item by its index and update localStorage.
   * @param {number} index - The index of the completed todo item to delete
   */
  const handleDeleteTodo2 = (index) => {
    const updatedCompletedTodos = [...completedTodo];
    updatedCompletedTodos.splice(index, 1);
    localStorage.setItem('completedTodo', JSON.stringify(updatedCompletedTodos));
    setCompletedTodo(updatedCompletedTodos);
  };

  /**
   * Mark a todo item as completed, move it to completed list, and update localStorage.
   * @param {number} index - The index of the todo item to mark as completed
   */
  const handleComplete = (index) => {
    const date = new Date();
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    
    const completedItem = {
      ...todos[index],
      completedOn: formattedDate
    };
    
    const updatedCompletedTodos = [...completedTodo, completedItem];
    setCompletedTodo(updatedCompletedTodos);
    localStorage.setItem('completedTodo', JSON.stringify(updatedCompletedTodos));
    
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    localStorage.setItem('todolist', JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  /**
   * Save edited todo item and update localStorage.
   * @param {number} index - The index of the todo item to update
   * @param {string} newTitle - The new title of the todo item
   * @param {string} newDesc - The new description of the todo item
   */
  const handleSave = (index, newTitle, newDesc) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = { ...updatedTodos[index], Title: newTitle, Description: newDesc };
    setTodos(updatedTodos);
    setCurrentEdit(null);
    localStorage.setItem('todolist', JSON.stringify(updatedTodos));
  };

  /**
   * Handle search input and update URL with query.
   * @param {string} search - The search query
   */
  const handleSearch = (search) => {
    navigate(`/?search=${search}`);
  };

  // Filter todos and completed todos based on the search query
  const filteredTodos = todos.filter(todo =>
    todo.Title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    todo.Description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCompletedTodos = completedTodo.filter(todo =>
    todo.Title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    todo.Description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-600 w-3/5 m-auto min-h-screen">
      <div>
        <h1 className="text-white font-bold text-4xl text-center">TODO LIST</h1>
        <div className="flex justify-center mt-6">
          <Search onSearch={handleSearch} />
        </div>
        <div className="flex">
          <Title onChange={(e) => setTitle(e.target.value)} />
          <Description onChange={(e) => setDesc(e.target.value)} />
          <Button onClick={handleAddTodo} />
        </div>
        <div className="flex">
          <Button2 onClick={() => setIsComplete(false)} name={"Pending Tasks"} />
          <Button3 onClick={() => setIsComplete(true)} name={"Completed Tasks"} />
        </div>
        <div>
          {isComplete === false && filteredTodos.map((item, index) => (
            <div key={index}>
              <Expandable
                title={item.Title}
                desc={item.Description}
                onClick={() => handleDeleteTodo(index)}
                onClick2={() => handleComplete(index)}
                onSave={handleSave}
                index={index}
              />
            </div>
          ))}
          {isComplete === true && filteredCompletedTodos.map((item, index) => (
            <div key={index}>
              <Expandable2
                title={item.Title}
                desc={item.Description}
                Showdate={item.completedOn}
                onClick={() => handleDeleteTodo2(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
