import React , {useState , useEffect} from "react";
import { Movie } from './Movie'
import { Filter } from "../Filter";
import './Movies.css'

const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=915b2933b30eb4148058e22fd78a597e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'
const CONFIG_URL = 'https://api.themoviedb.org/3/configuration?api_key=915b2933b30eb4148058e22fd78a597e'

export default function MoviesList(){
    const [filter , setFilter ] = useState("");
    const [movies , setMovies] = useState([]);
    const [config , setConfig] = useState({});

const GetMovies = async ()=> {
    try{
        const res = await fetch(API_URL)
        const movies = await res.json()
        setMovies(movies.results)
        // console.log('movies', movies )
        // console.log('res',res)
    }catch (e) {
        console.error(e)
    }
}

const GetConfig = async ()=> {
    try{
        const res = await fetch(CONFIG_URL)
        const config = await res.json()
        setConfig(config)
    }catch (e) {
        console.error(e)
    }
}

    useEffect(() => {
        GetConfig()
        GetMovies()
    }, [])
   
    return(
        <div>
         <Filter filter={filter} setFilter={setFilter}/>
    <ul className="movies-list">
       {
           movies.filter((movie) => {
               return movie.title.includes(filter)
           }).map((movie) =>  
            <Movie key={movie.id} config={config} movie = {movie}/>
 
           )
       }
    </ul>
    </div>
   
    )
}