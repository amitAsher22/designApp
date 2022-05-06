import React from 'react';
import { NavLink, Link } from 'react-router-dom';


const NavItem = ({ label, link }) => {
	let activeStyle = {
    fontWeight: "bold",
  };

	return (
		<NavLink
			to={link}
			className="nav-link text-white"
			style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
		>
			{label}
		</NavLink>
	);
};

function NavBar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<Link className="navbar-brand" to="/">
				Herolo Weather
			</Link>

			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
				<NavItem label="Home" link="/" />
				<NavItem label="Favorites" link="/favorites" />
		
			</div>
		</nav>
	);
}

export default NavBar;
