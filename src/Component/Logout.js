import { useNavigate } from "react-router-dom";

export default function Logout(){
    const navigate=useNavigate();
    const logout=()=>{
            localStorage.clear();
            navigate("/login");
        
    }
    
    return(
        <>
        
        <div className="container1" style={{marginTop:'10%', marginLeft:'35%'}}>
    
        <p>Logout confirmation?</p>

        </div>
        <div>
        <button style={{backgroundColor: 'white',marginTop:'2%', border: '1px solid #ccc', marginLeft:'45%'}} onClick={logout} >LOGOUT</button>
        </div>
    </>
    )
}