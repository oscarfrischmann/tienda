import React from 'react';
import Navbar from './components/NavBar/Navbar.jsx';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';

const App = () => {
	let greeting = 'Bienvenido a TIENDA';

	return (
		<>
			<Navbar />
			<ItemListContainer greeting={greeting} />
		</>
	);
};

export default App;
