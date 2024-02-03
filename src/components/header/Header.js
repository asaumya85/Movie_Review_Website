import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";


const Header = () => {
    
    const navigate=useNavigate();

    
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/" style={{"color":'gold' ,"fontSize":'50px'}}>CinemaSage</Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
                <Button style={{marginLeft:"600px",textDecoration: "none",backgroundColor:"gold",color:"black",padding:"10px"}} onClick={()=> navigate('/Login')}><span>Login</span></Button>
            </div>
        </div>
    )
}

export default Header