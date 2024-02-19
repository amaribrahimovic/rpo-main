import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ResetPass from './pages/ResetPass';
import Privacy from './pages/Privacy';
import Download from './pages/Download';
import Help from './pages/Help';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Map from './pages/Map';
import Contact from './pages/Contact';
import Users from './pages/Users';
import Admins from './pages/Admins';
import Groups from './pages/Groups';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route index path='/' element={<Home />} />
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
					<Route path="resetpass" element={<ResetPass />} />
					<Route path='home' element={<Home />} />
					<Route path='privacy' element={<Privacy />} />
					<Route path='download' element={<Download />} />
					<Route path='pricing' element={<Pricing />} />
					<Route path='about' element={<About />} />
					<Route path='help' element={<Help />} />
					<Route path='map' element={<Map />} />
					<Route path='contact' element={<Contact />} />
					<Route path='users' element={<Users/>} />
					<Route path='admins' element={<Admins/>} />
					<Route path='groups' element={<Groups/>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
