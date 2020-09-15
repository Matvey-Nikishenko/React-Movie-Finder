

export default class MovieDBService {
    apiKey = 'ceac8e1a93723717540c5f8331cb270e';
    
    getTrendingMovies = async () => {
      const response = await  fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${this.apiKey}`);
      if (!response.ok) {
        throw new Error(`Could not fetch ` +
          `, received ${response.status}`)
      };
      const data = await response.json();
      return data.results;
    };

    getMoviesWithQuery = async (query) => {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=ceac8e1a93723717540c5f8331cb270e&language=en-US&query=${query}&page=1&include_adult=false`);
        if(!response.ok) {
            throw new Error(`Could not fetch ` +
          `, received ${response.status}`);
        };
        const data = await response.json();
        return data.results;
    };

    getMovieWithId = async (id) => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ceac8e1a93723717540c5f8331cb270e&language=en-US`);
        if(!response.ok) {
            throw new Error(`Could not fetch ` +
          `, received ${response.status}`);
        };
        const data = await response.json();
        return data;
    };
    
    getMovieCast = async(id) => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=ceac8e1a93723717540c5f8331cb270e`);
        if(!response.ok) {
            throw new Error(`Could not fetch ` +
          `, received ${response.status}`);
        };
        const data = await response.json();
        return data.cast;
    };

    getMovieReviews = async(id) => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=ceac8e1a93723717540c5f8331cb270e`);
        if(!response.ok) {
            throw new Error(`Could not fetch ` +
          `, received ${response.status}`);
        };
        const data = await response.json();
        return data.results;
    }

};

