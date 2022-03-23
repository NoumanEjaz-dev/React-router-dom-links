import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


const Navigationbar = () => {
   return(
       <>
        <div style={{background: "black", padding: "10px"}}>
            <ul style={{display: 'flex' , justifyContent: 'space-evenly',}}>
                <li className='link-item'>
                    <Link  className='link' to="/">Home</Link>
                </li>
                <li className='link-item'>
                    <Link className='link' to="/About">About us</Link>
                </li>
                <li className='link-item'>
                    <Link className='link' to="/Services">Servces</Link>
                </li>
                <li className='link-item'>
                    <Link className='link' to="/Contact">Contact</Link>
                </li>
            </ul>

        </div>
       </>
   )
}

export default Navigationbar;