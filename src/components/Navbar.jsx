import { Link } from "react-router-dom"

export const Navbar = () =>{
    return(
        <div>
            <ul style={{display:"flex",width:"60%",margin:"20px auto",border:"2px soid black",borderRadius:"20px",padding:"10px", listStyle:"none", justifyContent: "space-between", cursor:"pointer"}}>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
            <li><Link to={"/dashboard"}>Dashboard</Link></li>
            <li><Link to={"/form"}>Add Product</Link></li>
            </ul>
        </div>
    )
}
