import React from "react";
import PropTypes from "prop-types"

export function Filter({setFilter , filter}){
    return(
        <h2>Search :   
        <input className="search" onChange={(e) => setFilter(e.target.value)} value={filter}/>
        </h2>
    );
}

Filter.propTypes ={
    filter : PropTypes.string.isRequired ,
    setFilter : PropTypes.func.isRequired 
}