import img from "../../assets/ContactUsPageGraphic.png"
import img2 from "../../assets/EvolveText.png"

const Contact = () => {
    return (
        <div className="p-20">
            <h2 className="text-3xl font-bold uppercase py-4"> <span className="text-pink-500">Join now </span> to get in shape</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis doloremque modi, voluptate aut quis quisquam tempora incidunt laudantium obcaecati repellendus voluptatibus tempore esse quas eveniet unde recusandae. Consequatur, inventore laudantium?</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center mt-20">
                <form action="">
                    <input type="text" placeholder="Name" className="bg-red-200 py-2 rounded-md w-3/5 p-2 mt-4"/>
                    <input type="text" placeholder="Email" className="bg-red-200 py-2 rounded-md w-3/5 my-3 p-2"/>
                    <textarea className="w-3/5 py-3 rounded-lg my-2 px-4 hover:shadow-lg hover:shadow-gray-400 duration-700 ease-in-out bg-red-200" name="message" id="" cols="30" rows="5" placeholder="Message"></textarea>
                    <br />
                    <button className="bg-yellow-400 px-6 py-2 rounded-md">Submit</button>
                </form>
                <div className="relative">
                    <img src={img} alt="" />
                    <img  className="absolute -mt-8 -ml-8 -z-10 w-max" src={img2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Contact;