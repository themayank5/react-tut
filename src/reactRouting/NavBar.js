import {Link} from 'react-router-dom'

export function NavBar(){
    return(
        <>
          <Link to="/home">Home</Link> <br />
          <Link to="/about">About</Link><br />
          <Link to="/contactus">Contact us</Link><br />
          <Link to="/gallery">Gallery</Link><br />
        </>
    )
}