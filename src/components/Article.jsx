import React, { Component } from 'react';

class Article extends Component {
	render() {
		return (
			<div className="w3-container w3-white w3-margin w3-padding-large">
				<div className="w3-center">
					<h3>{this.props.title}</h3>
					<h5>
						{this.props.author},{' '}
						<span className="w3-opacity">
							{this.props.publishedAt}
						</span>
					</h5>
				</div>

				<div className="w3-justify">
					<object
						data={this.props.urlToImage}
						style={{ width: 100 + '%' }}
						className="w3-padding-16"
						type="image/jpg"
					>
						<img
							src="https://s3.amazonaws.com/marquee-test-akiaisur2rgicbmpehea/p0rfWnJqQ2mHFJcLlUGA_EditorNote.jpg"
							aria-hidden
							alt="article image"
							style={{ width: 100 + '%' }}
							className="w3-padding-16"
						/>
					</object>
					<p>{this.props.description}</p>
					<p className="w3-left">
						<button className="w3-button w3-white w3-border">
							<b>
								<i className="fa fa-thumbs-up" /> Like
							</b>
						</button>
					</p>
					<p className="w3-right">
						<button className="w3-button w3-white w3-border">
							<b>
								<a href={this.props.url} target="_blank">
									Read More
								</a>
							</b>
						</button>
					</p>
				</div>
			</div>
		);
	}
}

export default Article;
