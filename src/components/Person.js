import React, { useState, useEffect } from 'react';
import { data } from '../data';
import { Link, useParams } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGithub} from "@fortawesome/free-brands-svg-icons"


const Person = () => {
  const [name,setName] = useState('default name')
  const [img,setImg] = useState('default name')
  const {id} = useParams()

  useEffect(()=>{
    const newPerson = data.find((person)=>person.id === parseInt(id))
    setName(newPerson.name)
    setImg(newPerson.img)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className='about'>
      <img src={img} alt={img} style={{height:300,width:300,margin:20}}/>
      <div className='info'>
      <h4>{name}</h4>
      <a href="https://github.com/MateaLukiccc" target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={faGithub} className='icon'/>
      </a>
      </div>
      <div className='bottom'>
        <button className='btn'><Link to='/Contact' className='normal-text'>Back to Contact Page</Link></button>
      
      </div>
    </div>
  );
};




export default Person;

