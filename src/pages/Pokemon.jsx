import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const Pokemon = () => {
    const[detail, setDetail] = useState({})

    const {id} = useParams()

    useEffect(()=>{

        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(resp=>setDetail(resp.data))
        .catch(error=>console.error(error))

    },[])
    console.log(detail)

 return (
        < div className="pokemon-detail">
   
            <Link to ='/pokedex'><i className ="fa-solid fa-arrow-rotate-left"></i></Link>
            
            <img src={detail?.sprites?.other?.['home']?.front_default} alt="" />

            <div className="principal">
                <div className="sub-principal1">
                    <p>Weight</p>
                    <h3>{detail.weight}</h3>
                </div>
                <div className='sub-name'>
                    <h1>{detail.name}</h1>
                    <p>#{detail.id}</p>
                </div>
                <div className="sub-principal2">
                    <p>Height</p>
                    <h3>{detail.height}</h3>  
                </div>
            </div>
            <div className="id-info">
                <div className="abilities">
                    <p><b>Abilities</b> </p>
                    <p>{detail.abilities?.[0]?.ability.name} <br /> {detail.abilities?.[1]?.ability.name}</p>
                </div>
                <div className= "type">
                    <p><b>Type</b> </p>
                    <p>{detail.types?.[0].type?.name}</p> 
                </div>
            </div>

            <div className='categorys' >
                <h2>HP</h2><span>{detail.stats?.[0].base_stat}</span>
                <h2>Speed</h2><span>{detail.stats?.[5].base_stat}</span>
                <h2>Attack</h2><span>{detail.stats?.[1].base_stat}</span>
                <h2>Defense</h2><span>{detail.stats?.[2].base_stat}</span>
            </div>

            <div className="evolution-container">
                <h2>Evolution</h2>
                <div className="evolution-picture">
                    <img className="uno" src={detail.sprites?.versions['generation-vi']['omegaruby-alphasapphire'].front_default} alt="" style={{width:"200px", heigth:"200px"}}/>
                    <i className="fa-solid fa-arrow-right"></i>
                    <img className="dos" src={detail.sprites?.other['dream_world']?.front_default} alt="" style={{width:"100px", heigth:"100px"}}/>
                </div>
            </div>
            <div className="moves">
                <h3>Movements: </h3>
                <span className="move-pokemon"> {detail?.moves?.[4]?.move?.name}</span>
            </div>
        </div>
    );
};
export default Pokemon