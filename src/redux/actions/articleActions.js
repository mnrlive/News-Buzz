import axios from 'axios';

export function fetchArticles() {
	return function(dispatch) {
		const url =
			'https://newsapi.org/v2/top-headlines?' +
			'country=us&' +
			'sources=cnn,espn,the-wall-street-journal,the-washington-post,the-new-york-times,the-next-web,the-verge&' +
			'apiKey=213327409d384371851777e7c7f78dfe';
		axios
			.get(url)
			.then(response => {
				dispatch({
					type: 'FETCH_ARTICLES_FULFILLED',
					payload: response.data.articles,
				});
			})
			.catch(error => {
				dispatch({ type: 'FETCH_ARTICLES_REJECTED', payload: error });
			});
	};
}
