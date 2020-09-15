import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './header';
import './index.css';
import HomePage from './home-page';
import MoviesPage from './movies-page';
import MovieDetailsPage from './movie-details-page';
import Cast from './cast';
import Reviews from './reviews';



class App extends Component { 
  

  render() {
    
    return (
     <div className="film-app"> 
      <Router>  
        <Header/>
        <Route path='/' exact component={HomePage} />
        <Route path='/movies' exact component={MoviesPage} />
        <Route path='/movies/:movieId' 
          render={(props) => {
             const id = props.match.params.movieId;
            return <MovieDetailsPage {...props} movieId = {id} />
          }}/>
        <Route  exact path='/movies/:movieId/cast'
          render={({ match }) => {
            const id = match.params.movieId;
           return <Cast movieId = {id} />
         }}/> 
        <Route exact path='/movies/:movieId/reviews'
          render={({ match }) => {
            const id = match.params.movieId;
           return <Reviews movieId = {id} />
         }}/> 
      </Router>
     </div> 
    )
  }


}

ReactDOM.render(
    <App />
  ,
  document.querySelector('#root'),
);

