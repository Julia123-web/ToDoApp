import { useState, useEffect } from 'react';
import Button from './Button';
import { BackgroundCircles } from './design/Hero';
import axios from 'axios';
import configData from '/app.config.json';

function TodoList() {
	const [todos, setTodos] = useState([]);
	const [inputValue, setInputValue] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	function handleChange(e) {
		setInputValue(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();

		axios({
			method: 'post',
			url: configData.apiUrl,
			data: {
				name: inputValue,
			},
		})
			.then((response) => {
				if (response.status === 201) {
					getToDo();
					setInputValue('');
				}
			})
			.catch((e) => {
				if (e.response.status === 400) {
					setErrorMessage(e.response.data);
				}
			});
	}

	function getToDo() {
		axios({
			method: 'get',
			url: configData.apiUrl,
		}).then((response) => {
			if (response.status === 200 && response.data) {
				setTodos(response.data);
				setInputValue('');
			}
		});
	}

	useEffect(() => {
		getToDo();
	}, []);

	return (
		<div className="container relative">
			<div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]">
				<h2 className="text-[2rem] mb-4 md:mb-8 text-center">Add tasks</h2>

				<form className="max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8" onSubmit={handleSubmit}>
					<input
						type="text"
						value={inputValue}
						onChange={handleChange}
						className="border border-gray-300 rounded py-2 px-4 mr-2"
					/>
				</form>

				<Button onClick={handleSubmit}>Add Todo</Button>

				<div className=" mx-auto max-w-[25rem]">
					<h6 className="h6 mt-4 md:mb-8">{errorMessage}</h6>
				</div>
			</div>

			<div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
				<h2 className="text-[2rem] mb-4 md:mb-8 text-center">Show tasks</h2>
				<ul>
					{todos.map((todo, index) => (
						<li key={index} className="border-b border-gray-300 py-2 px-4">
							{todo.name}
						</li>
					))}
				</ul>
				<BackgroundCircles />
			</div>
		</div>
	);
}

export default TodoList;
