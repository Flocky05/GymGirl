import { Link } from "react-router-dom";
import img from "../../assets/Logo.png"

const Navbar = () => {
    return (
        <div className="flex justify-between items-center px-8 p-4 hover:bg-red-200">
            <div className="grid grid-cols-2 gap-20">
                <img src={img} alt="" />
                <div className="grid grid-cols-4">
                    <Link to="/">Home</Link>
                    <Link to="/benefits">Benefits</Link>
                    <Link to="/our_class">Our Class</Link>
                    <Link to="/contact_us">Contact us</Link>
                </div>
            </div>
            <div className="flex gap-4 items-center justify-center">
                <Link to="/sign_in">Sign in</Link>
                <Link className="bg-yellow-400 px-7 py-2 rounded-md mt-3 inline-block" to="/new_member">Become a Mamber</Link>
            </div>
        </div>
    );
};

export default Navbar;