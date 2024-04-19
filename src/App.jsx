import Header from './components/Header';
import ToDoList from './components/ToDoList';
import ButtonGradient from './assets/svg/ButtonGradient';

const App = () => {
	return (
		<>
			<div className="pt-[4.75em] lg:pt-[5.25rem] overflow-hidden">
				<Header />
				<ToDoList />
			</div>
			<ButtonGradient />
		</>
	);
};

export default App;
