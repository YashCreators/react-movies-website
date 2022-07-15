import React from "react";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";


export function Movie({ movie , config }){
    // console.log('config', config)
    // console.log('movie', movie)
    
    return(
        <li className="movies-li"> 
        <Link to={`/movie/${movie.id}`}> 
                <img 
                src= {config.images.base_url+ "w342" + movie.poster_path} 
                alt={ movie.title + "Poster" } 
                />
        <h3>{movie.title}</h3>
        </Link>
            </li> 
    );
    
}
Movie.propTypes = {
    movie : PropTypes.shape({
        id: PropTypes.number.isRequired,
        title : PropTypes.string.isRequired,
        poster_path : PropTypes.string.isRequired
    }).isRequired  ,
    config : PropTypes.shape({
        images: PropTypes.shape({
            base_url: PropTypes.string,
        })
    })
}