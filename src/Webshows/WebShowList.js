import React , {useEffect , useState} from 'react'
import { Filter } from '../Filter'
import { Webshow } from './Webshow'
import './WebShow.css'

const API_URL = 'https://api.themoviedb.org/3/tv/popular?api_key=915b2933b30eb4148058e22fd78a597e&language=en-US&page=1'
const CONFIG_URL = 'https://api.themoviedb.org/3/configuration?api_key=915b2933b30eb4148058e22fd78a597e'

export function WebshowList(){
    const [filter , setFilter] = useState("");
    const [tvs , setTvs] = useState([]);
    const [config , setConfig] = useState({});

    const GetTVShows = async () => {
        try{
            const res = await fetch(API_URL)
            const tvs = await res.json()
            setTvs(tvs.results)
            // console.log('tvs', tvs)
            // console.log('res' , res)
        }
        catch (e) {
            console.error(e)
        }
    }
    const GetConfig = async () => {
        try{
            const res = await fetch(CONFIG_URL)
            const config = await res.json()
            setConfig(config)
            // console.log('tvs', tvs)
            // console.log('res' , res)
        }
        catch (e) {
            console.error(e)
        }
    }

    useEffect(() =>{
        GetConfig() 
        GetTVShows()
    },[filter])

    return(
        <div>
            <Filter filter={filter} setFilter={setFilter}/>
            <ul className='Webshow-list'>
                {tvs
                .filter((tv) => 
                    tv.name.toLowerCase().includes(filter.toLowerCase())
                ).map((tv) => (
                    <Webshow key={tv.id} config={config} tvShow={tv} />
                ))
                }
            </ul>
        </div>
    )
}