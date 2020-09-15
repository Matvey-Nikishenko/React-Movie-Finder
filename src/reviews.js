import React,{Component} from 'react';
import MovieDBService from './services/moviedb-service';

export default class Reviews extends Component {
    movieService = new MovieDBService();
    state = {
        reviews: []
    };

    componentDidMount() {
        this.movieService.getMovieReviews(this.props.movieId)
            .then(reviews => this.setState({reviews}))
            .catch(err => console.error(err))
    };

    componentDidUpdate(prevProps) {
        if(prevProps.movieId === this.props.movieId) {
            return;
        }
        this.movieService.getMovieReviews(this.props.movieId)
            .then(reviews => this.setState({reviews}))
            .catch(err => console.error(err))
    }

    render() {

        const {reviews} = this.state;
        const elements = reviews.map((review) => {
            return(
                <li className="review-item" key={review.id}>
                    <span className="author">{review.author}</span>
                    <p className="review-content">{review.content}</p>
                </li>
            )
        })

        return(
            reviews.length > 0 
            ? 
            <ul className="reviews-list">
                {elements}
            </ul>
            : <p>We don`t have any reviews for this movie</p>
        )
    }
}