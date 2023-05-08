import { axiosUtil } from "../utils/axios";

//Con esta función ataco la api de pokeapi. 
export const getPokemon = async (id) => {
    const optionsRequest = {
        method: "GET",
        url: `https://pokeapi.co/api/v2/pokemon/${id}`
        
    };
    return await axiosUtil(optionsRequest);
}