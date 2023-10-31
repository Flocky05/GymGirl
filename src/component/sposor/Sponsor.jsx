import img1 from "../../assets/SponsorForbes.png"
import img2 from "../../assets/SponsorFortune.png"
import img3 from "../../assets/SponsorRedBull.png"

const Sponsor = () => {
    return (
        <div>
            <h2 className="text-center text-3xl font-bold p-4">Some <span className="text-pink-500">SponsorShip</span> with Us</h2>
            <div className="grid grid-cols-3 justify-items-center p-20 bg-pink-200">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
            </div>
        </div>
    );
};

export default Sponsor;