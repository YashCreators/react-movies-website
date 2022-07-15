import React , {useState} from "react";
var movies = [{name : "spiderman"},
{name : "batman"},
{name : "superman"},
];

export function MoviesList(){
    const [filter , setFilter ] = useState("");
    return(
        <div>
        <input onChange={(e) => setFilter(e.target.value)} value={filter}/>
    <ul>
       {
           movies.filter((movie) =>
             movie.name.includes(filter)
               ).map((movie) =>  {
               return(
                <li key={movie.name}>
                    {movie.name}
                </li>
               )
           })
       }
    </ul>
    </div>
    )
}