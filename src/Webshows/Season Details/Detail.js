import React from "react";
// import { useParams } from "react-router-dom";
import './Detail.css'

export default function Detail(props) {
    const detailedData = props.location.state;
  //   const { params } = useParams();
  const IMG_URL = "https://image.tmdb.org/t/p/";
  // console.log(props.location.state);
  return (
    <div>
    {detailedData.map((data) => 

        <div className="season-detail">

        <div className="Wrapper">
        <img
              className="detail_poster"
              src={IMG_URL + "w342" + data.poster_path}
              alt={data.name + "  poster"}
        />
        <div className="textdetail">
        <h3>
            Season {data.season_number}
        </h3>
        <h1>
           Total Episodes : {data.episode_count}
        </h1>
        <h4>
            Release Date : {data.air_date}
        </h4>
       <p>
       Overview : 
       <br></br>
        {data.overview}
       </p>
       </div>
        </div>
        </div>
      )
    }
    </div>
  );
}
