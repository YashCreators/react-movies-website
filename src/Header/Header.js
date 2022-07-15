import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';

export function Header (){
    return(
        <div className='HeaderBar'>
       <h3 className='HeaderName' > 
                  <Link to='/movie'> MoviesZilla </Link>   
       </h3>
            <ul className='Header-list'>
                <li>
                  <Link to='/movie'> Movie </Link>    
                </li>
                <li> 
                  <Link to='/webshows'> Webshows </Link>    
                </li>
            </ul>
        </div>
    )
}