import "./funct.css";
// import axios from "../axios"
import axios from "axios";
import { useEffect, useState } from "react";


const Functionality = () => {


    const [professions, setProfessions] = useState("");

    const getProfessions = () => {
        axios.get("https://weak-lime-squid-fez.cyclic.app/profession")
            .then((response) => {
                console.log(response.data);
                setProfessions(response.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getProfessions()
    }, [])

    return (
        <div className="functionality">
            <h4>First GET Call</h4>
            {professions.map((prf)=>(
               <p>Profesioni: {prf.category} | Kategoria: {prf.categoryID} </p> 
            ))}
        </div>
    );
}


export default Functionality;