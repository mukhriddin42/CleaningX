import serviceImage1 from "../../assets/images/services-image-1.png"
import serviceImage2 from "../../assets/images/services-image-2.png"
import serviceImage3 from "../../assets/images/services-image-3.png"

function Services() {
    return (
        <div className="pt-[100px]">
            <div className="xl:w-[1240px] lg:w-[1000px] md:w-[720px] sm:w-[600px] mx-auto px-[20px] md:px-[10px]">
                <div className="flex justify-between md:items-center md:flex-row sm:flex-col">
                    <h1 className="text-[44px] font-[500] text-[#211F54]">Our Services</h1>
                    <p className="text-[20px] text-[#6E7191] cursor-pointer hover:text-[#0075FF] duration-300">Explore services</p>
                </div>
                <div className="flex items-end lg:gap-[20px] md:gap-[2rem] lg:py-[100px] md:py-[50px] md:flex-row sm:flex-col md:gap-0 sm:gap-[20px]">
                    <div className="flex flex-col items-center gap-[15px]" data-aos="fade-up">
                        <img className="lg:w-[220px] sm:w-[180px]" src={serviceImage1} alt="House cleaning" />
                        <h3 className="text-[24px] text-[#211F54] font-[700] text-center">House cleaning</h3>
                        <p className="lg:text-[18px] md:text-[16px] text-[#6E7191] text-center md:w-[100%] sm:w-[60%] ">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
                    </div>
                    <div className="flex flex-col items-center gap-[15px]" data-aos="fade-up">
                        <img className="lg:w-[230px] sm:w-[185px]" src={serviceImage2} alt="Office cleaning" />
                        <h3 className="text-[24px] text-[#211F54] font-[700] text-center">Office cleaning</h3>
                        <p className="lg:text-[18px] md:text-[16px] text-[#6E7191] text-center md:w-[100%] sm:w-[60%]">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
                    </div>
                    <div className="flex flex-col items-center gap-[15px]" data-aos="fade-up">
                        <img className="lg:w-[250px] sm:w-[205px]" src={serviceImage3} alt="INdustrial cleaning" />
                        <h3 className="text-[24px] text-[#211F54] font-[700] text-center">Industrial cleaning</h3>
                        <p className="lg:text-[18px] md:text-[16px] text-[#6E7191] text-center md:w-[100%] sm:w-[60%]">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services