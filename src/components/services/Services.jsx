import serviceImage1 from "../../assets/images/services-image-1.png"
import serviceImage2 from "../../assets/images/services-image-2.png"
import serviceImage3 from "../../assets/images/services-image-3.png"

function Services() {
    return (
        <div className="pt-[100px]">
            <div className="w-[1240px] mx-auto px-[20px]">
                <div className="flex justify-between items-center">
                    <h1 className="text-[44px] font-[500] text-[#211F54]">Our Services</h1>
                    <p className="text-[20px] text-[#6E7191] cursor-pointer hover:text-[#0075FF] duration-300">Explore services</p>
                </div>
                <div className="flex items-center gap-[20px] py-[100px]">
                    <div className="flex flex-col items-center gap-[15px]">
                        <img src={serviceImage1} alt="House cleaning" />
                        <h3 className="text-[24px] text-[#211F54] font-[700] text-center">House cleaning</h3>
                        <p className="text-[18px] text-[#6E7191] text-center">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
                    </div>
                    <div className="flex flex-col items-center gap-[15px]">
                        <img src={serviceImage2} alt="Office cleaning" />
                        <h3 className="text-[24px] text-[#211F54] font-[700] text-center">Office cleaning</h3>
                        <p className="text-[18px] text-[#6E7191] text-center">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
                    </div>
                    <div className="flex flex-col items-center gap-[15px]">
                        <img src={serviceImage3} alt="INdustrial cleaning" />
                        <h3 className="text-[24px] text-[#211F54] font-[700] text-center">Industrial cleaning</h3>
                        <p className="text-[18px] text-[#6E7191] text-center">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services