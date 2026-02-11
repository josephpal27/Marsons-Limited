import client1 from '../assets/images/clients/1.png';
import client2 from '../assets/images/clients/2.png';
import client3 from '../assets/images/clients/3.png';
import client4 from '../assets/images/clients/4.png';
import client5 from '../assets/images/clients/5.png';
import client6 from '../assets/images/clients/6.png';

let clientData = [
    {
        id: 1,
        image: client1,
    },
    {
        id: 2,
        image: client2,
    },
    {
        id: 3,
        image: client3,
    },
    {
        id: 4,
        image: client4,
    },
    {
        id: 5,
        image: client5,
    },
    {
        id: 6,
        image: client6,
    },
]

const OurClients = () => {
    return (
        <>
            <section className="
                px-[7%]
                py-[1rem]
            ">
                {/* Head */}
                <div className="
                    flex
                    flex-col
                    items-center
                ">
                    <h5 className="
                        text-[3.5rem]
                        font-[700] leading-[1.1] text-center
                    ">
                        OUR <br /> <span className="text-[#e9202a]">CLIENTS</span>
                    </h5>
                    <p className="
                        text-[1.1rem] 
                        text-[#000] font-[500] text-center
                        mt-[1rem]
                        w-[50%]
                    ">
                        Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

                 {/* Row */}
                 <div className="
                    mt-[2rem]
                    py-[2rem]
                    bg-[#fff]
                    flex
                    justify-between
                    items-center
                    flex-wrap
                 ">
                    {
                        clientData.map((item, index) => {
                            return(
                                <div key={index} className="
                                    w-[10%]
                                ">
                                    <img src={item.image} alt={`Client ${item.id}`} loading="lazy" className="
                                        w-full
                                    " />
                                </div>
                            )
                        })
                    }
                 </div>
            </section>
        </>
    )
}

export default OurClients
