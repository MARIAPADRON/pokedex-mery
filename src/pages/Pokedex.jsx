import { useSelector } from "react-redux"
import { useState, useEffect } from "react"
import axios from "axios"
import PokemonCard from "../components/PokemonCard"
import {useNavigate } from "react-router-dom"


const Pokedex =()=>{
    const name = useSelector((state)=>state.nameuser)
    
    const[type, setType] = useState([true])

    const [pokemons, setPokemons]=useState([])

    const [characterName, setCharacterName] = useState([""])


    useEffect(() => {
        axios
        .get("https://pokeapi.co/api/v2/type/")
        .then((resp) => setType(resp.data.results))
        .catch((error) => console.error(error))

        axios
        .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1279")
        .then(resp => setPokemons(resp?.data?.results))
        .catch(error => console.error(error))

    }, [])

    const selectedTypes =(e)=>{
        const url= e.target.value

        axios
        .get (url)
        .then(resp=>{
            setPokemons(resp.data.pokemon)
            setPage (1)
            })
        .catch(error=>console.error(error))
    }

    const[page, setPage]= useState(1)
    const pokemonsPerPage = 10
    const lastIndex = page * pokemonsPerPage
    const firstIndex = lastIndex - pokemonsPerPage

    const pokemonsPaginated = pokemons?.slice(firstIndex,lastIndex)

    const totalPages = Math.ceil(pokemons.length / pokemonsPerPage)

    const pagesNumbers = []
    for(let i = 1; i <= totalPages; i++){
        pagesNumbers.push(i)
    }

    const [input, setInput] = useState(1)

    const navigate = useNavigate()
    const searchCharacter =()=>{
        navigate(`/pokedex/${characterName.toLocaleLowerCase()}`)
    }
    return (
        <div className="pokedex">  

            <h1>Pokedex</h1>
            <h2>Welcome, {name}. Here you can find your favourite pokemon</h2>
            <select name="" id=""  onChange={selectedTypes}>
                <option disabled selected>Types of Pokemons</option>
                {
                    type?.map(pokemon=>(
                        
                    <option value={pokemon?.url} key={pokemon?.name}>{pokemon?.name}</option>
                    ))
                }
            </select>
            <div className="btn-input">
                <input className="searchs"
                    type="text" 
                    placeholder="Search your Pokemon by name " 
                    value ={characterName}
                    onChange={(e) => setCharacterName(e.target.value)}
                />
                <button className="btn-searchs" onClick={searchCharacter}>
                    <i className="fa-solid fa-magnifying-glass" ></i>
                </button>
            </div>

            <ul className="all-pokemons">
                {
                    pokemonsPaginated.map((item, index)=>(
                        <PokemonCard
                        key={index}
                        url={item.pokemon ? item.pokemon.url : item.url}
                        />
                    ))
                }
            </ul>

            <footer className="pagination">
                <button className="btn"
                    disabled={page===1}
                    onClick={()=>{setPage(page -1), setInput(input - 1)}}>Previous
                </button>

                {/*{
                    pagesNumbers.map(num=>(
                        <button className="btn-number"
                            key={num}
                            onClick={()=>setPage(num)}
                            >
                                {num}
                        </button>
                    ))
                }*/}
                <input className="input-page"
                value={input}
                name= "page"
                
                />
                <p> de  {totalPages}</p>

                <button  className="btn" disabled={page === totalPages}
                    onClick={()=>{setPage(page + 1), setInput(input + 1)}}>Next
                </button>
            </footer>
        </div>
    )
};
export default Pokedex