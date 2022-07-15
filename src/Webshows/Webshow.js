import React from "react";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";

export function Webshow({ tvShow , config }){
    // console.log('config', config)
    // console.log('movie', movie)
    
    return(
        <li className="Webshow-li"> 
        <Link to={`/tv/${tvShow.id}`}> 
                <img 
                src= {config.images.base_url+ "w342" + tvShow.poster_path} 
                alt={ tvShow.title + "Poster" } 
                />
        <h3>{tvShow.name}</h3>
        </Link>
            </li> 
    );
    
}

Webshow.propTypes = {
    tvShow : PropTypes.shape({
        id: PropTypes.number.isRequired,
        name : PropTypes.string.isRequired,
        poster_path : PropTypes.string.isRequired
    }).isRequired  ,
    config : PropTypes.shape({
        images: PropTypes.shape({
            base_url: PropTypes.string,
        })
    })
}