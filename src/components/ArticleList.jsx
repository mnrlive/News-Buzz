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

	render() {
		if (Object.getOwnPropertyNames(this.props.articles).length === 0) {
			return <div />;
		}
		var articleNodes = this.props.articles.map(function(article) {
			return (
				<Article
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
									<span className="w3-tag w3-black w3-margin-right w3-margin-bottm">
										All
									</span>
									<span className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										CNN
									</span>
									<span className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										USA Today
									</span>
									<span className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										ABC News
									</span>
									<span className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										Bloomberg
									</span>
									<span className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										Business Insider
									</span>
									<span className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										Buzzfeed
									</span>
									<span className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										Engadget
									</span>
									<span className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										ESPN
									</span>
									<span className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										Entertainment Weekly
									</span>
									<span className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										Hacker News
									</span>
									<span className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										NBC News
									</span>
									<span className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										New York Magazine
									</span>
									<span className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										Reddit
									</span>
									<span className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										Reuters
									</span>
									<span className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										New York Times
									</span>
									<span className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										Wall Street Journal
									</span>
									<span className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										Tech Crunch
									</span>
									<span className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										The Huffington Post
									</span>
									<span className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										The Washington Post
									</span>
									<span className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										Time
									</span>
									<span className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										The Verge
									</span>
									<span className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										More...
									</span>
								</p>
							</div>
						</div>
						<div className="w3-white w3-margin">
							<div className="w3-container w3-padding w3-black">
								<h4>Category</h4>
							</div>
							<div className="w3-container w3-white">
								<p>
									<span className="w3-tag w3-black w3-margin-right w3-margin-bottom">
										All
									</span>
									<span className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										Business
									</span>
									<span className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										Entertaintment
									</span>
									<span className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										Gaming
									</span>
									<span className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										Norway
									</span>
									<span className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										General
									</span>
									<span className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										Health and Medical
									</span>
									<span className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										Music
									</span>
									<span className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										Politics
									</span>
									<span className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										Science and Nature
									</span>
									<span className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										Sport
									</span>
									<span className="w3-tag w3-light-grey w3-small w3-margin-right w3-margin-bottom">
										Technology
									</span>
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
