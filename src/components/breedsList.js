import React from 'react';
import { Link } from 'react-router-dom';
import {Links}  from '../ui/Link';

const Breedlist = (props) =>{
    return (
        <div>
            <ul>
                {props.dogBreed.breedList && props.dogBreed.breedList.length > 0 ?
                props.dogBreed.breedList.map( item => (
                    <li key={item}>
                            <Links as={Link} to={`/breed/${item}`}>
                                {item}
                            </Links>
                        </li>
                )): null
                }
            </ul>
        </div>
    )
}

export default Breedlist;