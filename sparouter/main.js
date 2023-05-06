import './style.css';

//Primero inyectamos el template con el header, main y footer.
import { initTemplate } from './utils/initTemplate';
//Utilizo  una función con un switch para controlar que pagina se va a renderizar. 
import { initControler } from './utils/router';



initTemplate();

//Inicializo el controlador de las paginas en el caso undefined. El initControler es una función que se encarga de controlar las diferentes paginas de nuestra aplicacion, gestiona que se renderiza y que no. El primer caso es el caso de autentificación(Login)
initControler();
