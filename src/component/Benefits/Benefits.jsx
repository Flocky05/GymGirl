import { Link } from "react-router-dom";
import img1 from "../../assets/study-48.png"
import MoreBeniftits from "../MoreBenifits/MoreBeniftits";

const Benefits = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-red-950 p-10 uppercase">More then just gym</h2>
            <p className="px-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sapiente quae laboriosam excepturi perspiciatis, quasi cum fugit velit deleniti at.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-10">
                <div className="p-10 px-5 border-2 rounded-md bg-gray-100">
                    <img className="p-4 rounded-full border-2 mx-auto bg-red-100" src={img1} alt="" />
                    <div className="text-center">
                         <h2 className="text-xl font-bold">Facalties of Department</h2>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla amet quas id illo veniam nemo quaerat pariatur earum neque, provident quidem non culpa. Nam aut aliquam hic cupiditate ex in.</p>
                         <Link className="text-red-600" to="/">Learn More</Link>
                    </div>
                </div>
                <div className="p-10 px-5 border-2 rounded-md bg-gray-100">
                    <img className="p-4 rounded-full border-2 mx-auto bg-red-100" src={img1} alt="" />
                    <div className="text-center">
                         <h2 className="text-xl font-bold">Facalties of Department</h2>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla amet quas id illo veniam nemo quaerat pariatur earum neque, provident quidem non culpa. Nam aut aliquam hic cupiditate ex in.</p>
                         <Link className="text-red-600" to="/">Learn More</Link>
                    </div>
                </div>
                <div className="p-10 px-5 border-2 rounded-md bg-gray-100">
                    <img className="p-4 rounded-full border-2 mx-auto bg-red-100" src={img1} alt="" />
                    <div className="text-center">
                         <h2 className="text-xl font-bold">Facalties of Department</h2>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla amet quas id illo veniam nemo quaerat pariatur earum neque, provident quidem non culpa. Nam aut aliquam hic cupiditate ex in.</p>
                         <Link className="text-red-600" to="/">Learn More</Link>
                    </div>
                </div>
            </div>
            <MoreBeniftits></MoreBeniftits>
        </div>
    );
};

export default Benefits;