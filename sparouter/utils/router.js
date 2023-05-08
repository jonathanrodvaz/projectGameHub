//Exportamos un initcontent, que gestionará las rutas dentro del dashboard
import { printTemplate as Dashboard} from '../pages/Dashboard/Dashboard';
import { printTemplate as Login } from '../pages/Login/Login';
import { printTemplate as Pokemon } from '../pages/Pokemon/Pokemon';
import { printTemplate as Anime} from '../pages/Anime/Anime';
import { printTemplate as Memory } from '../pages/Memory/Memory';


// Esta función se encarga de controlar que partes de la aplicación se renderizán. 
export const initControler = (route) => {
    switch (route) {
      //En este case accederemos al localstorage para comprar si hay un user en la base de datos. Si lo hay, entonces nos pinta la dashboard. Sino, no continua. Esto sería la primera pagina, login.
      case undefined:
        localStorage.getItem("user") ? Dashboard() : Login()
        break;
      case "Pokemon":
        Pokemon();
        break;
      case "Memory":
        Memory();
        break;
      case "Anime":
        Anime();
        break;
      case "Login":
          Login();
          break;  
      case "Dashboard":
          Dashboard();
          break;
    
    }
  }; 