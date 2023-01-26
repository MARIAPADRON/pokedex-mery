import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { changeName } from "../store/slices/name.slice"

const Home = () =>{
    const name = useSelector((state)=>state.nameuser)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(changeName(e.target[0].value))
        navigate ("/pokedex")
    }

    return (
        <div className="home">
            <h1>Hello Trainer!!</h1>
            <img src="/pic.png" alt="" />
            <h3> Give me your name to start! </h3>
            <form onSubmit={(e)=>handleSubmit(e)}> 
                <input 
                    type="text"
                    placeholder="Name"
                />
                <button type="submit">
                    <i className="fa-solid fa-play"></i>
                </button>
            </form>     
        </div>
    )
}
 export default Home