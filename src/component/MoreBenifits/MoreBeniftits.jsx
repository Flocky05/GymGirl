import img1 from "../../assets/BenefitsPageGraphic.png"
import img2 from "../../assets/AbstractWaves.png"
import img3 from "../../assets/Sparkles.png"

const MoreBeniftits = () => {
    return (
        <div className="grid grid-cols-2 p-10 items-center">
            <div>
                <img src={img1} alt="" />
            </div>
            <div className="relative px-10">
                <img className="absolute -mt-16 -ml-32" src={img2} alt="" />
                <h2 className="text-red-950 text-3xl font-bold uppercase">Milions of Happy members getting <span className="text-red-600">fit</span></h2>
                <p className="py-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, officia tenetur? Aut nam provident quasi, voluptatibus totam ut vel atque!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, doloribus.sit amet consectetur adipisicing elit. Voluptatum, officia tenetur? Aut nam provident quasi, voluptatibus totam ut vel atque</p>
                <button className="bg-yellow-400 px-7 py-2 rounded-md mt-5">Join Now</button>
                <img className="absolute ml-96 -mt-10" src={img3} alt="" />
            </div>
        </div>
    );
};

export default MoreBeniftits;