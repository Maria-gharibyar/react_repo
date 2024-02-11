import axios from "axios";
import { useEffect,useState } from "react";

const GetPokemon=()=>{
    const[Response,setResponse]=useState([])
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=837&offset=0')
        .then(repo=>{setResponse(repo.data.results)})
    },[])
        const Pokemon=()=>{
           
        }
        return(
            <>
            {
                Response.map((poke,index)=>{
                    return <p key={index}>{poke.name}</p>
                })
            }
            
            </>
        )
}
export default GetPokemon