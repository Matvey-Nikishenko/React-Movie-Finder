import React, {Component} from 'react';
import MovieDBService from './services/moviedb-service';


export default class Cast extends Component {
    movieService =new MovieDBService()
    state= {
        casts: []
    };

    componentDidMount() {
        this.movieService.getMovieCast(this.props.movieId)
            .then(casts => this.setState({casts}))
            .catch(err => console.error(err))  
    }

    componentupdate(prevProps) {
        if(prevProps.movieId === this.props.movieId){
            return
        }
        this.movieService.getMovieCast(this.props.movieId)
            .then(casts => this.setState({casts}))
            .catch(err => console.error(err))    
    };

    render() {
        const {casts} = this.state;
        const elements = casts.map((cast) => {
            return (
                <li key={cast.id} className="cast-list-item">
                    <img src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`} alt="character poster"/>
                    <span className="cast-row">{cast.name}</span>
                    <span className="cast-row"> Character: {cast.character}</span>
                </li>
            )
        })
        
        return(
            <ul className="cast-list">
                {elements}
            </ul>
        )
    }
}