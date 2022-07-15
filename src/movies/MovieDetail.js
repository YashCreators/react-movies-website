import React, { useEffect , useState}  from 'react'
import { useParams } from 'react-router-dom'

const BASE_URL = 'https://api.themoviedb.org/3/movie/'
const API_KEY = '?api_key=915b2933b30eb4148058e22fd78a597e'
const IMG_URL = 'https://image.tmdb.org/t/p/'
// const CAST_URL = 'credits?api_key=915b2933b30eb4148058e22fd78a597e&language=en-US'
// const Poster_size = 'original'
const backdrop_size = 'original'

export function MoviesDetail(){
    const {id} = useParams();
    const [movie , setMovie] = useState({});
    const [actor , setActor] = useState({});

    const GetMovie = async ()=> {
        try{
            const res = await fetch(BASE_URL + id + API_KEY)
            const newMovie = await res.json()
            setMovie(newMovie)
            // console.log('newMovie', newMovie )
            // console.log('res',res)
        }catch (e) {
            console.error(e)
        }
    }
    const GetCast = async ()=> {
        try{
            const res = await fetch(`${BASE_URL}${id}/credits${API_KEY}`)
            const newActor = await res.json()
            setActor(newActor)
            console.log('Cast', newActor )
            // console.log('res',res)
        }catch (e) {
            console.error(e)
        }
    }


    useEffect(()=>{
        GetMovie();
        GetCast();
    }, [id])
if (!movie.title) return null

    return(
        <div className='detail-container'>
        <img className='backdrop' 
        src={ IMG_URL + backdrop_size + movie.backdrop_path}
        alt={ movie.title + "  backdrop"}
        /> 

        <div className='poster-container'>

        <img className='detail_poster' 
        src={ IMG_URL + "w342" + movie.poster_path}
        alt={ movie.title + "  poster"}
        /> 
        <div className='text-details'>
            <h1>{movie.title}</h1>
            <h5>"{movie.tagline}"</h5>
            <br></br>
            <p> Overview : {movie.overview}</p>
            <ul> {movie.genres.map((genre) => (
                <li key={movie.id} >{genre.name}</li>
            ))}</ul>
            </div>
        </div>
                    <h1 className='cast'>Cast</h1>
        <div className='cast-list'>
        {actor.cast !== undefined &&
                  actor.cast.map((data) => 
                  <div>
                  <div className='cast-card'>
                  <h1></h1>
                  <img 
                        src={ IMG_URL + 'w185' + data.profile_path}
                        alt={ data.original_name + " Photo"}
                    />
                  <li>{data.original_name}</li>
                  <li>{data.character}</li>
                  </div>
                  </div>
                  )}
        </div>
        </div>
    )
}