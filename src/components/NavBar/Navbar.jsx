import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget.jsx';

const Navbar = () => {
	return (
		<>
			<header>
				<h1>TIENDA</h1>
				<nav>
					<ul>
						<li>Paraguas</li>
						<li>Guantes</li>
						<li>Botas de goma</li>
					</ul>
				</nav>
				<CartWidget />
			</header>
			<hr />
		</>
	);
};

export default Navbar;
