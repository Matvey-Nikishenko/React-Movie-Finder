import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MovieDBService from './services/moviedb-service';


export default class HomePage extends Component {
    movieService = new MovieDBService();

    state = {
      trendingFilmsData: []
    };
  
    componentDidMount() {
      this.movieService.getTrendingMovies()
        .then(trendingFilmsData =>  this.setState({trendingFilmsData}))
        .catch(error => console.error(error));
        
    }


    render() {
        const{trendingFilmsData} = this.state;

        const elements = trendingFilmsData.map((film) => {
            return(
            <li key={film.id}>
                <Link to={{
                        pathname: `/movies/${film.id}`,
                        state: {from: this.props.location}}}
                        className="link" >
                            {film.title}
                </Link>
            </li>)
        });
    
        return(
            <>
                <h2>Trending Today</h2>
                <ul className='movies-list'>
                    {elements}
                </ul>
            </>
        )
    }
    
};


    


