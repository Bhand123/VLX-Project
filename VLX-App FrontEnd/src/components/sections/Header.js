import {
  BrowserRouter ,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar} from 'react-bootstrap' 

function Header(){
  return(
    <BrowserRouter>
          
           <div>
             <LinkContainer to="/">
                    <Navbar.Brand>VLX App</Navbar.Brand>
             </LinkContainer>
           </div>
            
           
   
            
   

   </BrowserRouter>
  )
}
export default Header