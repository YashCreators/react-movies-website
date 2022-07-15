import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
const BASE_URL = "https://api.themoviedb.org/3/tv/";
const API_KEY =
  "?api_key=915b2933b30eb4148058e22fd78a597e&language=en-US&page=1";
const IMG_URL = "https://image.tmdb.org/t/p/";
const backdrop_size = "original";
// const CAST_URL = 'credits?api_key=915b2933b30eb4148058e22fd78a597e&language=en-US'

export function WebShowDetail() {
  const { id } = useParams();
  const [tv, setTv] = useState("");
  const [loading, setloading] = useState(false);
  const [actor , setActor] = useState({});
  // console.log(BASE_URL + id + API_KEY);

  const GetTVShow = async () => {
    try {
      setloading(true);
      const res = await fetch(BASE_URL + id + API_KEY);
      const newTv = await res.json();
      setTv(newTv);
      //   console.log("newTv", newTv.genres);
      // console.log("newTv", newTv);
      setloading(false);
    } catch (e) {
      console.error(e);
    }
  };


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
  useEffect(() => {
    GetTVShow();
    GetCast();
  }, [id]);
  return (
    <div>
      {!loading && (
        <>
          <img
            className="backdrop"
            src={IMG_URL + backdrop_size + tv.backdrop_path}
            alt={"No background available"}
          />
          <div className="poster-container">
            <img
              className="detail_poster"
              src={IMG_URL + "w342" + tv.poster_path}
              alt={tv.name + "  poster"}
            />
            <div className="text-details">
              <h1>{tv.name}</h1>
              <h5>"{tv.tagline}"</h5>
              <br></br>
              <p> Overview : {tv.overview}</p>
              <ul>
                {tv.genres !== undefined &&
                  tv.genres.map((data) => <li>{data.name}</li>)}
              </ul>
              <h4>
                Average Ratings : {tv.vote_average}
              </h4>
              <Link to={{ pathname: `/tv/${id}/details`, state: tv.seasons }}>
                <button style={{ width: "200px" }}>Seasons</button>
              </Link>
            </div>
          </div>
        </>
      )}
      <h1 className='cast'>Cast</h1>
      <div className='webcast-list'>
        {actor.cast !== undefined &&
                  actor.cast.map((data) => 
                  <div>
                  <div className='webcast-card'>
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
    
  );
}
