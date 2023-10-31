import { Link } from "react-router-dom";
import img from "../../assets/Logo.png"

const Navbar = () => {
    return (
        <div>
            <div className="flex justify-between">
                <img src={img} alt="" />
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/">Benefits</Link>
                    <Link to="/">Our Class</Link>
                    <Link to="/">Contact us</Link>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Navbar;