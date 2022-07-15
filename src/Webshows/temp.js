import React from 'react'
import { Link } from 'react-router-dom'


export function Webshow(props){

    return(
        
        <li>
        <Link to={`/tv/${props.tvShow.id}`}> 
        <img src={props.config.images.base_url + "w342" + props.tvShow.poster_path} alt={props.tvShow.name +" poster"}/>
       <h3> {props.tvShow.name} </h3>
        </Link>
        </li>
    )
}