import { dataPokemon } from "./dataPokemon";

export const dataApp = async () =>{
    const getDataPokemon = await dataPokemon();
    
    //Dentro de este return puedo llamar a cualquier seccion de la SPA para que se ejecute al entrar en dashboard, para que luego vaya mas rapido. Para ello primero debería ir a la linea de arriba y declarar la variable tal que asi: const getDataAnime = await dataAnime();
    return {
        pokemonData: await getDataPokemon
    }
    }