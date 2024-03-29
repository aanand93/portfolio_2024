import { Route, Routes } from 'react-router-dom';
import './App.css';
import Projects from './Components/Projects/Projects';
import Home from './Components/Home/Home';
import NavBar from './NavBar/NavBar';
import Contact from './Components/Contact/Contact';
import Resume from './Components/Resume/Resume';
import Footer from './Footer/Footer';

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
				<Footer />
			</div>
		</div>
	);
}

export default App;
