import React from 'react';
import Links from './Links';

export default function Navbar() {
	return(<div className='navbar-fixed'>
		<nav className='nav-wrapper grey darken-1'>
			<div className='container'>
				<Links />
			</div>
		</nav>
		</div>
	);
};