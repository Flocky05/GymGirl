import img1 from "../../assets/HomePageText.png"
import img2 from "../../assets/HomePageGraphic.png"
 import img3 from "../../assets/EvolveText.png"
import { Link } from "react-router-dom";
import Sponsor from "../sposor/Sponsor";
import Benefits from "../Benefits/Benefits";

const Home = () => {
    return (
        <div>
            <div className="lg:flex justify-around items-center p-16 ">
                <div className="relative">
                    <img src={img1} alt="" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non consequatur laborum tempore nemo sequi eveniet exercitationem saepe nesciunt quam aut!</p>
                    <div className="flex gap-3 items-center mt-4">
                        <Link className="bg-yellow-400 px-7 py-2 rounded-md text-white" to="/">Join Us</Link>
                        <Link  to="/">Learn More</Link>
                    </div>
                    <img className="absolute -mt-80 -z-10 -ml-10" src={img3} alt="" />
                </div>
                <div>
                    <img className="p-5" src={img2} alt="" />
                </div>
            </div>
            <Sponsor></Sponsor>
            <Benefits></Benefits>
        </div>
    );
};

export default Home;