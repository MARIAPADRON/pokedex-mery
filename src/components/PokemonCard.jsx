import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const PokemonCard = ({url})=>{
    
    const[detail, setDetail] = useState({})

    useEffect(()=>{
        axios
            .get(url)
            .then(resp=>setDetail(resp.data))

    }, [url]);
    
    return( 
        <Link className="links" to={`/pokedex/${detail?.id}`}> 
            <div className= "all-pokemons" >   
                <div className={ `pokemon-card = ${detail?.types?.[0]?.type?.name}`}>
                    <h4>{`${detail?.name}`}</h4>
                    <img src={detail?.sprites?.front_default === null ? "/mega-bola.png" : detail?.sprites?.front_default} alt="" />
                    <h2>{detail?.types?.type}</h2>
                    <h2><span>{`${detail?.stats?.[0]?.stat.name}:`}</span>
                    <span>{detail?.stats?.[0].base_stat}</span></h2>
                    <h2><span>{`${detail?.stats?.[1]?.stat.name}:`}</span>
                    <span>{detail?.stats?.[1].base_stat}</span></h2>
                    <h2><span>{`${detail?.stats?.[2]?.stat.name}:`}</span>
                    <span>{detail?.stats?.[2].base_stat}</span></h2>
                    <h2><span>{`${detail?.stats?.[5]?.stat.name}:`}</span>
                    <span>{detail?.stats?.[5].base_stat}</span></h2>
                </div>
            </div>
        </Link>   
    )
}
export default PokemonCard