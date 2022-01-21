import './App.css';
import { useState, useEffect } from 'react'

// Import Components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
	const [inputText, setInputText] = useState('')
	const [todos, setTodos] = useState([])
	const [status, setStatus] = useState('all')
	const [filteredTodos, setfilteredTodos] = useState([])

	const filterHandler = () => {
		switch (status) {
			case 'completed':
				setfilteredTodos(todos.filter(el => el.completed == true))
				break
			case 'uncompleted':
				setfilteredTodos(todos.filter(el => el.completed == false))
				break
			default:
				setfilteredTodos(todos)
				break
		}
	}

	useEffect(() => {
		filterHandler()
	}, [todos, status])

	return (
		<div className="App">
			<header>
				<h1>Sandipan's Todo List</h1>
			</header>
			<Form
				inputText={inputText}
				todos={todos}
				setTodos={setTodos}
				setInputText={setInputText}
				setStatus={setStatus}
			/>
			<TodoList  setTodos={setTodos} todos={todos} filteredTodos={filteredTodos} />
		</div >
	);
}

export default App;
