import React from "react";
import Button from "../Button/Button";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const PokemonDetails = () => {
    //getting the pokemon id to load it from the back-end
    let { pokemonId } = useParams();
    const pokemonUrl = "http://localhost:8080/api-kruger/pokemon" + "/" + pokemonId;
    const [pokemon, setPokemon] = useState([]);
    const [types, setTypes] = useState([]);
    const [abilities, setAbilities] = useState([]);
    const navigate = useNavigate();

    //load the api data
    useEffect(() => {

        axios.get(pokemonUrl).then((response) => {
            setPokemon(response.data);
            setTypes(response.data["types"])
            setAbilities(response.data["abilities"])

        });
    }, []);

    //get all strings from abilites/types arrays
    const getStrings = (array, key) => {
        let result = "";
        array.forEach(it => {
            result = result + it[key] + ", ";
            console.log(result);
        });

        result = result.slice(0, -2) + '.';

        return result;
    };

    return (
        <div className="details-body">


            <div className="left-side">
                <img className="listImageClass" src={pokemon["photo"]} />
            </div>


            <div className="right-side">

                <h1 className="pokemon-details-name">{pokemon["name"]}</h1>

                {


                    <div className="pokemon-details-details" key={pokemonId}>
                        <div className="pokemon-details-disc"  >Name: <span>{pokemon["name"]}</span></div>
                        <div className="pokemon-details-disc" >Weight: <span >{pokemon["weight"]}</span></div>
                        <div className="pokemon-details-disc" >Height: <span >{pokemon["height"]}</span></div>
                        <div className="pokemon-details-disc">Type: <span>{getStrings(types, "type")}</span></div>
                        <div className="pokemon-details-disc" >Abilities: <span>{getStrings(abilities, "ability")}</span></div>

                    </div>


                }



                <Button title="Back" onClick={() => navigate(-1)} btnHref="#" />
                <Button title="Home" btnColor="#209483" />
            </div>



        </div>
    );

}


export default PokemonDetails;