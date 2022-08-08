import { useParams } from 'react-router-dom';
import  data  from './data';

const Description = () => {
    let {idd} = useParams();

    let movieDescription = data.filter(element => element.id === idd );
    return (
        <div className='trailers' >
   
         {movieDescription && movieDescription.map(element => <div>
            <h1 className='titre'> {element.title} </h1>
            <h3 > description:<br />
            <h4 >{element.description}</h4></h3>
            <h3 > trailer</h3>
            <iframe  src={element.trailer} title="Trailer" frameBorder="0" allowFullScreen style={{height:"350px",width:"875px"}} ></iframe>
            </div>)} 
        </div>    
        
    )
}

export default Description;