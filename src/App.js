import './App.css';
import { useState } from 'react'

// Import Components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
	const [inputText, setInputText] = useState('')

	return (
		<div className="App">
			<header>
				<h1>Sandipan's Todo List</h1>
			</header>
			<Form setInputText={setInputText} />
			<TodoList />
			<p>{inputText}</p>
		</div >
	);
}

export default App;
