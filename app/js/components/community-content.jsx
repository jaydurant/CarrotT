import React from 'react';

function CommunityContent(props){
	return (
		<div className="community-section">
			<div>
				<i className="fa fa-stethoscope"></i>
			</div>
			<div>
				<h4>Your Community</h4>
				<p>
					Be apart of a community of like minded women.
					Ask your health questions, and get them answered free
					by real practicioners.
				</p>
				<div className="community-button-container">
					<button type="button" className="community-button">Browse the forum</button>
				</div>
			</div>
		</div>
		);
}

export default CommunityContent;