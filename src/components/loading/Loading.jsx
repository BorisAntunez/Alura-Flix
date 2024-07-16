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
            <p style={{color: 'white', backgroundColor:'#191919'}}>"json-server --watch db.json"</p>
        </div>
     
        
    );
};

export default Loading;
