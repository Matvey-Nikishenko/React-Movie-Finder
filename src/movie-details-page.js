import React, {Component} from 'react';
import MovieDBService from './services/moviedb-service';
import { Link} from 'react-router-dom';


export default class MovieDetailsPage extends Component {

    movieService = new MovieDBService();

    state = {
        movieData: [],
        filmGenres: [],
    }

    componentDidMount() {

        this.movieService.getMovieWithId(this.props.movieId)
            .then(movieData => this.setState({movieData, filmGenres: movieData.genres}))
            .catch(error => console.error(error));

    
         
    };

    componentupdate(prevProps) {
        if(prevProps.movieId === this.props.movieId){
            return
        }
        this.movieService.getMovieWithId(this.props.movieId)
            .then(movieData => this.setState({movieData, filmGenres: movieData.genres}))
            .catch(error => console.error(error));    
    };

    handleGoBack = () => {
        this.props.history.push(this.props.history.location.state.from);
         
      
       
        
        

    }

    render() {
        const {movieData, filmGenres} = this.state;
        const genres = filmGenres.map((genre) => {
                                return <span key={genre.id} className="genre"> {genre.name}</span>
                            });
                        
        
       
        return(
            <> 
                <div className='film-details'>
                    <button className="btn" onClick={this.handleGoBack}>Go back</button>
                    <div className="film-description">
                        <img src={`https://image.tmdb.org/t/p/w300${movieData.poster_path}`} className="film-poster" alt="film-poster"/>
                        <div className='film'>
                            <h3 className='film-title'>{movieData.title} { movieData.release_date}</h3>
                            <span className='film-score'> user score: {Math.floor(movieData.vote_average * 10)}%</span>
                            <span className='film-about bold'>Description:</span>
                            <p className='film-overview'>{movieData.overview}</p>
                            <p className='film-genres bold'>
                                Genres:
                                {genres}
                            </p>     
                        </div>
                    </div>
                    <div className="movie-details-link bold" >
                        Additional Information  
                        <Link to={`/movies/${this.props.movieId}/cast`} className="link-info">Cast</Link>
                        <Link to={`/movies/${this.props.movieId}/reviews`} className="link-info">Reviews</Link>
                    </div>
                    
                    
                </div>

            </>        

        )
    }
}