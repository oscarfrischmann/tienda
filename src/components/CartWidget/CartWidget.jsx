import React from 'react';
import './CartWidget.css';

const CartWidget = () => {
	return (
		<div className='cart'>
			<i class='bi bi-cart'></i>
			<span>0</span>
		</div>
	);
};

export default CartWidget;
