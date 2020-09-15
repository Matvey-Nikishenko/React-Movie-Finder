import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MovieDBService from './services/moviedb-service';

export default class MoviesPage extends Component {
    movieService = new MovieDBService();

    state = {
        movieQuery: '',
        moviesData: []
    };


    HandleInputChange = (e) => {
       const value = e.target.value;
        this.setState({
            movieQuery: value
        })
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.movieService.getMoviesWithQuery(this.state.movieQuery)
            .then(moviesData => this.setState({moviesData})
            )
            .catch(error => console.error(error));

        this.props.history.push({
            pathname: this.props.location.pathname,
            search: `query=${this.state.movieQuery}`,
            }); 
           
    }

    render() {
        const {moviesData, movieQuery} = this.state;
        const elements = moviesData.map((film) => {
            return(
            <li key={film.id}>
                <Link to={{
                   pathname: `/movies/${film.id}`,
                   state: {from: this.props.location}}}>
                            {film.title}
                </Link>
            </li>)
        });

        return(
            <>
                <form className="SearchForm" onSubmit={this.handleFormSubmit}>
                    <input
                    onChange={this.HandleInputChange}
                    className="SearchForm-input"
                    value={movieQuery}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies"
                    />

                    <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                    </button>
                </form>
                <ul className='movies-list'>
                    {elements}
                </ul>
            </>    
        )
        
    }
}