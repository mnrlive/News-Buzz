import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<footer
				className="w3-container w3-dark-grey w3-center"
				style={{ padding: 32 + 'px' }}
			>
				{/*<a href="#" className="w3-button w3-black w3-padding-large w3-margin-bottom"><i className="fa fa-arrow-up w3-margin-right"></i>To the top</a>*/}
				<p>
					Powered by{' '}
					<a
						href="https://newsapi.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						News API
					</a>
				</p>
				<p>
					Powered by{' '}
					<a
						href="https://www.w3schools.com/w3css/default.asp"
						target="_blank"
						rel="noopener noreferrer"
					>
						w3.css
					</a>
				</p>
			</footer>
		);
	}
}

export default Footer;
