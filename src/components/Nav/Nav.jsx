import React from 'react'
import "./Nav.css"
import { NavLink } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";

const Nav = ({cartData}) => {
    
  let cartBool=false


  return (
    <div className='nav'>
        <div className="leftBlok">Logo</div>
        <div className="links">
            <NavLink to={"/"} >Home</NavLink >
            <NavLink to={"/products"}>Products</NavLink >
           
        </div>
        <div className="rightBlok">
        <NavLink to={"/cart"} >
           <FaCartShopping />
           {cartData.length>0&&<span className='cartCount'>{cartData.length}</span>}
           </NavLink >

       
        <img src="#" alt="Avatar" />
        </div>
    </div>
  )
}

export default Nav