import React from 'react';
import { Link } from 'react-router-dom';

const Breedlist = (props) =>{

    return (
        <div>
            <ul>
            { props.dogBreed.breedList && props.dogBreed.breedList.length > 0 ?
               props.dogBreed.breedList.map( item => (
                   <li key={item}>
                        <Link to={`/breed/${item}`}>
                            {item}
                        </Link>
                    </li>
               )): null
                }
            </ul>
        </div>
    )
}

export default Breedlist;