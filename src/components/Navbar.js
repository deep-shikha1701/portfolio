import React,{useState,useEffect} from 'react';
import { NavItems } from './NavItems'
import './Navbar.scss';
import logo from './assets/log.png';



function Navbar() {

    const [show, handleShow] = useState(false);
    const [clicked, setClick] = useState(false);


    const handleClick = () =>{
        setClick(!clicked);
    }



    const transitionNavBar = () =>{
        if(window.scrollY > 100){
            handleShow(true);
        }   
        else{
            handleShow(false);
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',transitionNavBar);
        return ()=>{
            window.removeEventListener('scroll',transitionNavBar);
        }
    },[])

    return (
        <div className={`navbar ${show && 'nav__black'} `}>   
            <div className="nav__content">
                <div className="nav__avatar__container">
                    <img className='nav__avatar' src={logo} alt=""/> 
                </div>
                <div className="nav__navigation">
                    <ul className='nav__menu'>
                    {NavItems.map((item, index)=>{ 
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>{item.title}</a>                        
                            </li>
                            )
                    })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
