import { Route, Routes } from 'react-router-dom';
import './App.css';
import Projects from './Components/Projects';
import Home from './Components/Home';
import NavBar from './NavBar/NavBar';
import Contact from './Components/Contact';
import Resume from './Components/Resume';

function App() {
	return (
		<div className='App'>
			<div className='App-child-container'>
				<NavBar />
				<main className='Main'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/Projects' element={<Projects />} />
						<Route path='/Contact' element={<Contact />} />
						<Route path='/Resume' element={<Resume />} />
					</Routes>
				</main>
			</div>
		</div>
	);
}

export default App;
