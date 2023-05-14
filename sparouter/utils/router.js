//Exportamos un initcontent, que gestionará las rutas dentro del dashboard
import { printTemplate as Dashboard} from '../pages/Dashboard/Dashboard';
import { printTemplate as Login } from '../pages/Login/Login';
import { printTemplate as Pokemon } from '../pages/Pokemon/Pokemon';
import { printTemplate as Memory } from '../pages/Memory/Memory';
import { printTemplate as TresEnRaya} from '../pages/TresEnRaya/tresEnRaya';
import { printTemplate as Quiz} from '../pages/Quiz/Quiz';
import { dataApp } from './dataGlobal';



// Esta función se encarga de controlar que partes de la aplicación se renderizán. 
export const initControler = async (route) => {
//Con esta linea ayudamos a la performance de la pokeApi, junto con la funcion de la linea 39
  const { pokemonData } = await dataApp();
  console.log(pokemonData)
    switch (route) {
      //En este case accederemos al localstorage para comprar si hay un user en la base de datos. Si lo hay, entonces nos pinta la dashboard. Sino, no continua. Esto sería la primera pagina, login.
      case undefined:
        localStorage.getItem("user") ? Dashboard() : Login()
        break;
      case "Pokemon":
        Pokemon(pokemonData);
        break;
      case "Memory":
        Memory();
        break;
      case "TresEnRaya":
        TresEnRaya();
        break;
      case "Quiz":
        Quiz();
        break;
      case "Login":
          Login();
          break;  
      case "Dashboard":
          Dashboard();
          break;
    
    }

  }; 

