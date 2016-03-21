import React from 'react';
import MenuContainer from './menu-container';
import DoctorContent from './doctor-content';
import CommunityContent from './community-content';
import ChatThread from './chat-thread';
import appStore from '../stores/appstore';
import appActions from '../actions/appactions';

/*
App container contains the view logic for the application which will also request and add data to and from the store
*/

class AppContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			chatArray: [],
			doctor: appStore.getDoctorInfo(),
			menuToggle: false,
		};
	}
	//on mounting the component data will be requested and xhr requests will be made
	componentDidMount() {
		appStore.addChangeListener(this._storeUpdate.bind(this));
		appActions.getDoctor();
		appActions.getSection('1');
	}
	//upon component updating the scroll height of the chat thread will update
	componentDidUpdate() {
		document.querySelector('.chat-callresponse').scrollTop = document.querySelector('.chat-callresponse').scrollHeight;
	}
	//onUserChoiceClick the users choice will be assesesed and the store will then access the 
	onUserChoiceClick(event) {
		const userChoiceText = event.target.textContent;
		const userChoiceNumber = event.target.getAttribute('data-next');
		const userChoiceObj = { message: [userChoiceText], type: 'user' };
		appActions.addUserSection(userChoiceObj);
		appActions.getSection(userChoiceNumber);
	}

	//will detect each store update and change the data contained in the view
	_storeUpdate() {
		this.setState({
			chatArray: appStore.getSection(),
			doctor: appStore.getDoctorInfo(),
		});
	}
	//menu toggle will detect the state of the menu toggle icon and change the icon as ordered
	menuToggle() {
		if (this.state.menuToggle) {
			this.setState({ menuToggle: false });
		} else {
			this.setState({ menuToggle: true });
		}
	}

	render() {
		return (
				<div className="container app-container">
					<MenuContainer ref={ (comp) => this._Menu = comp} toggle={this.state.menuToggle} clickToggle={this.menuToggle.bind(this)} />
					<div className="app-content">
						<section className="one-half-m doctor-container">
							<CommunityContent />
							<DoctorContent doctor={this.state.doctor} />
						</section>
						<section className="one-half-m chat-container">
							<ChatThread chat={this.state.chatArray} onchoice={this.onUserChoiceClick.bind(this)} />
						</section>
					</div>
				</div>
			);
	}
}

export default AppContainer;
