import { CircleFadeLoader } from 'react-loaders-kit';
import './Loading.css';

const Loading = () => {


    const loaderProps = {
        loading: true,
        size: 100,
        duration: 1,
    };

    return (
        <div className="loading-container">
            <CircleFadeLoader {...loaderProps} />
            <h2>Inicia db.json por favor</h2> 
            <p style={{color: 'white', backgroundColor:'#191919'}}>
                "json-server --watch db.json"
                </p>
                <a href='https://github.com/BorisAntunez/Alura-Flix/tree/main'>Ingresa aqui y 
                obten el repositorio para poder iniciar</a>
        </div>
     
        
    );
};

export default Loading;
