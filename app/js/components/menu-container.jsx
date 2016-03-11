import React from 'react';
import MenuItem from './menu-item';

function MenuContainer(props) {
	const toggleClass = props.toggle ? 'navigation-toggle-open' : 'navigation-toggle-close';

	const menuList = [
		{ text: 'My Profile', url: '/myprofile', icon: 'fa-user' },
		{ text: 'Share', url: '/share', icon: 'fa-bullhorn' },
		{ text: 'Appointment', url: 'appointment', icon: 'fa-calendar' },
		{ text: 'Payment', url: '/payment', icon: 'fa-credit-card' },
	];
	const menuElements = menuList.map((val) =>
		<MenuItem text={val.text} url={val.url} key={val.text} icon={val.icon} />);
	return (
		<nav >
			<div className={`navigation-content ${toggleClass}`}>

				<div className="navigation-image">
					<div className="navigation-toggle" onClick={props.clickToggle}>
					</div>
					<img className="one-quarter-m" src="assets/Carrot_logo_rgb.png" width="200" height="50" alt="carrot logo" />
				</div>
				<ul className="menu-list">
					{menuElements}
				</ul>
			</div>
		</nav>
		);
}

MenuContainer.propTypes = { toggle: React.propType.boolean, clickToggle: React.propType.function };

export default MenuContainer;
