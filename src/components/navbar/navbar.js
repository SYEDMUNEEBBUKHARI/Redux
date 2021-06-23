import React from "react";
import './navbar.css'
import Sia from "../../assets/sia.png";
import Profile from "../../assets/profile.jpeg";
import {FiSearch} from "react-icons/fi"
import {AiOutlineStar} from "react-icons/ai";
import {FcGraduationCap}  from "react-icons/fc";
 function Navbar()
{
    return(
    <>
  
<header>
    <nav className="make-nav">
        <div className="makeflex">
          <div>  <img src={Sia} className="sia" /></div>

            <div className="switch-button">
<input id="toggle-on" class="toggle toggle-left" name="toggle" value="false" type="radio" checked />
<label for="toggle-on" class="btn text-size">Training Mode</label>
<input id="toggle-off" class="toggle toggle-right" name="toggle" value="true" type="radio" />
<label for="toggle-off" class="btn text-size">Live Mode</label>
</div>
        </div>


<div className="btns-cat">
<button className="btn-op">Show All</button>
<button className="btn-wh">Crypto</button>
<button className="btn-op">Commodities</button>
<button className="btn-wh">Stock</button>
<button className="btn-op">Index</button>
<button className="btn-op">Currency</button>
</div>

<div className="categories">
   <div><FiSearch className="icons" /></div> 
   <div><AiOutlineStar className="icons" /></div> 
   <div><FcGraduationCap className="icons" /></div> 
   <div><img src={Profile}  className="profile-pic" /></div> 
</div>

    </nav>
</header>
    </>
    );
}
export default Navbar;