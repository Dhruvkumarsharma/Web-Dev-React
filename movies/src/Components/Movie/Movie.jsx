import React, { Component } from 'react';
import { IMAGE_URL } from "../../API/secreates";
import "./Movie.css"
class Movie extends Component {
    state = {  }
    render() { 
        let { poster_path , title , vote_average } = this.props.movie;
        let posterpath = IMAGE_URL + poster_path;
        return ( 
            <div className="movie-item">
                <div className="movie-poster">
                    <img src={posterpath} alt="" />
                </div>
                <div className="movie-info">
                    <div className="movie-title">{title}</div>
                    <div className="movie-rating">{vote_average} IMDB</div>
                </div>
            </div>
         );
    }
}
 
export default Movie;