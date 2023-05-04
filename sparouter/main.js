import { printTemplate as Pokemon } from './pages/Pokemon/Pokemon';
import { printTemplate as Anime} from './pages/Anime/Anime';
import { printTemplate as Manga } from './pages/Manga/Manga';
import { printTemplate as Login } from './pages/Login/Login';
import { printTemplate as Dashboard} from './pages/Dashboard/Dashboard';
import './style.css';

//Exportamos un initcontent, que gestionará las rutas dentro del dashboard
export const initContent = (route) => {
  switch (key) {
    //En este case accederemos al localstorage para comprar si hay un user en la base de datos. Si lo hay, entonces nos pinta la dashboard. Sino, no continua. Esto sería la primera pagina, login.
    case undefined:
      localStorage.getItem("user") ? Dashboard() : Login()
      break;
    case "Pokemon":
      Pokemon();
      break;
    case "Manga":
      Manga();
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
} 

initContent();