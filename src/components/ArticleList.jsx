import React, { Component } from 'react';
import Article from './Article';
import { connect } from 'react-redux';
import { fetchArticles } from '../redux/actions/articleActions';

const stateMap = store => {
	return {
		articles: store.articles.articles,
	};
};

class ArticleList extends Component {
	componentWillMount() {
		this.props.dispatch(fetchArticles());
	}

	onSourceClick(params) {
		console.log(params.target.id);
		let source = params.target.id;
		// this.props.dispatch(fetchArticles(source));
	}

	render() {
		if (Object.getOwnPropertyNames(this.props.articles).length === 0) {
			return <div />;
		}
		var articleNodes = this.props.articles.map(function(article) {
			return (
				<Article
					key={article.title}
					author={article.author}
					title={article.title}
					description={article.description}
					publishedAt={article.publishedAt}
					source={article.source}
					url={article.url}
					urlToImage={article.urlToImage}
				/>
			);
		});

		const articleNodes2 = articleNodes.splice(
			0,
			Math.ceil(articleNodes.length / 2),
		);
		return (
			<div>
				<div className="w3-content" style={{ maxWidth: 1600 + 'px' }}>
					<header className="w3-container w3-center w3-padding-48 w3-white">
						<h1 className="w3-xxxlarge">
							<b>News Buzz</b>
						</h1>
						<h6>
							Latest News from around the{' '}
							<span className="w3-tag">world</span>
						</h6>
					</header>
				</div>
				<div className="w3-row w3-padding w3-border">
					<div className="w3-col l4 s12">{articleNodes}</div>
					<div className="w3-col l4 s12">{articleNodes2}</div>
					<div className="w3-col l4">
						<div className="w3-white w3-margin">
							<div className="w3-container w3-padding w3-black">
								<h4>Sources</h4>
							</div>
							<div className="w3-container w3-white">
								<p>
									<button
										className="w3-tag w3-black w3-margin-right w3-margin-bottm"
										id="all"
										onClick={this.onSourceClick}
									>
										All
									</button>
									<button
										className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom"
										id="cnn"
										onClick={this.onSourceClick}
									>
										CNN
									</button>
									<button
										className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom"
										id="usa-today"
										onClick={this.onSourceClick}
									>
										USA Today
									</button>
									<button
										className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom"
										id="abc-news"
										onClick={this.onSourceClick}
									>
										ABC News
									</button>
									<button
										className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom"
										id="bloomberg"
										onClick={this.onSourceClick}
									>
										Bloomberg
									</button>
									<button
										className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom"
										id="business-insider"
										onClick={this.onSourceClick}
									>
										Business Insider
									</button>
									<button
										className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom"
										id="buzzfeed"
										onClick={this.onSourceClick}
									>
										Buzzfeed
									</button>
									<button
										className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom"
										id="engadget"
										onClick={this.onSourceClick}
									>
										Engadget
									</button>
									<button
										className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom"
										id="espn"
										onClick={this.onSourceClick}
									>
										ESPN
									</button>
									<button
										className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom"
										id="entertainment-weekly"
										onClick={this.onSourceClick}
									>
										Entertainment Weekly
									</button>
									<button
										className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom"
										id="hacker-news"
										onClick={this.onSourceClick}
									>
										Hacker News
									</button>
									<button
										className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom"
										id="nbc-news"
										onClick={this.onSourceClick}
									>
										NBC News
									</button>
									<button
										className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom"
										id="new-york-magazine"
										onClick={this.onSourceClick}
									>
										New York Magazine
									</button>
									<button
										className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom"
										id="reddit"
										onClick={this.onSourceClick}
									>
										Reddit
									</button>
									<button
										className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom"
										id="reuters"
										onClick={this.onSourceClick}
									>
										Reuters
									</button>
									<button
										className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom"
										id="the-new-york-times"
										onClick={this.onSourceClick}
									>
										New York Times
									</button>
									<button
										className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom"
										id="the-wall-street-journal"
										onClick={this.onSourceClick}
									>
										Wall Street Journal
									</button>
									<button
										className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom"
										id="tech-crunch"
										onClick={this.onSourceClick}
									>
										Tech Crunch
									</button>
									<button
										className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom"
										id="the-huffington-post"
										onClick={this.onSourceClick}
									>
										The Huffington Post
									</button>
									<button
										className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom"
										id="the-washington-post"
										onClick={this.onSourceClick}
									>
										The Washington Post
									</button>
									<button
										className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom"
										id="time"
										onClick={this.onSourceClick}
									>
										Time
									</button>
									<button
										className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom"
										id="the-verge"
										onClick={this.onSourceClick}
									>
										The Verge
									</button>
									<button
										className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom"
										id="more"
										onClick={this.onSourceClick}
									>
										More...
									</button>
								</p>
							</div>
						</div>
						<div className="w3-white w3-margin">
							<div className="w3-container w3-padding w3-black">
								<h4>Category</h4>
							</div>
							<div className="w3-container w3-white">
								<p>
									<button className="w3-tag w3-black w3-margin-right w3-margin-bottom">
										All
									</button>
									<button className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										Business
									</button>
									<button className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										Entertaintment
									</button>
									<button className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										Gaming
									</button>
									<button className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										Norway
									</button>
									<button className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										General
									</button>
									<button className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										Health and Medical
									</button>
									<button className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										Music
									</button>
									<button className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										Politics
									</button>
									<button className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										Science and Nature
									</button>
									<button className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										Sport
									</button>
									<button className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										Technology
									</button>
								</p>
							</div>
						</div>
						<hr />
						<div className="w3-white w3-margin">
							<div className="w3-container w3-padding w3-black">
								<h4>Follow Me</h4>
							</div>
							<div className="w3-container w3-xlarge w3-padding">
								<i className="fa fa-facebook-official w3-hover-opacity" />
								<i className="fa fa-instagram w3-hover-opacity" />
								<i className="fa fa-snapchat w3-hover-opacity" />
								<i className="fa fa-pinterest-p w3-hover-opacity" />
								<i className="fa fa-twitter w3-hover-opacity" />
								<i className="fa fa-linkedin w3-hover-opacity" />
							</div>
						</div>
						<hr />
						<div className="w3-white w3-margin">
							<div className="w3-container w3-padding w3-black">
								<h4>Subscribe</h4>
							</div>
							<div className="w3-container w3-white">
								<p>
									Enter your e-mail below and get notified on
									the latest news.
								</p>
								<p>
									<input
										className="w3-input w3-border"
										type="text"
										placeholder="Enter e-mail"
										style={{ width: 100 + '%' }}
									/>
								</p>
								<p>
									<button
										type="button"
										className="w3-button w3-block w3-red"
									>
										Subscribe
									</button>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(stateMap)(ArticleList);
