import mainImage1 from "../../assets/images/articles-image-1.png";
import mainImage2 from "../../assets/images/article-image-2.png";

function Articles() {
    return (
        <div className="py-[50px]">
            <div className="xl:w-[1220px] lg:w-[1000px] md:w-[720px] sm:w-[600px] mx-auto px-[20px] md:px-[10px] justify-between">
                <div className="flex lg:items-center justify-between w-[100%] lg:flex-row sm:flex-col sm:items-start lg:gap-[0px] sm:gap-[25px]">
                    <h1 className="text-[44px] font-[500] text-[#211F54] text-center">Articles & resources</h1>
                    <div>
                        <a className="text-[#fff] bg-[#0075FF] text-[18px] font-[600] py-[18px] px-[26px] rounded-[14px] inline-block hover:scale-105 duration-300 mr-[10px]" href="">Get a free quote</a>
                        <a className="text-[#211F54] bg-[#fff] text-[18px] font-[600] py-[18px] px-[26px] rounded-[14px] inline-block hover:scale-105 duration-300 ml-[10px] shadow-sm" href="">Browse articles</a>
                    </div>
                </div>
                <div className="py-[50px] flex gap-[40px] lg:flex-row sm:flex-col ">
                    <div className="flex flex-col items-center">
                        <img className="lg:w-[600px] sm:w-[520px]" src={mainImage1} alt="Plesos rasmi" data-aos="fade-up" />
                        <div className="border-1 lg:w-[80%] sm:w-[60%] mx-auto p-[30px] rounded-[24px] bg-[#fff] -translate-y-[40px]" data-aos="fade-up">
                            <h2 className="text-[24px] font-[500] text-[#211F54] leading-[34px]">8 best vacuum cleaners to clean any mess for your home in 2022</h2>
                            <p className="text-[18px] leading-[30px] text-[#6E7191] pt-[15px]">Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
                            <div className="flex items-center justify-between pt-[15px]">
                                <p className="text-[18px] font-[500] text-[#211F54]">Jan 28, 2022</p>
                                <span className="w-[30px] h-[30px] bg-[#0075FF]"></span>
                            </div>
                        </div>
                    </div>
                    <div  className="flex flex-col items-center">
                        <img className="lg:w-[600px] sm:w-[520px]" src={mainImage2} alt="Kutubxona supurayotgan opa rasmi" data-aos="fade-up" />
                        <div className="border-1 lg:w-[80%] sm:w-[60%] mx-auto p-[30px] rounded-[24px] bg-[#fff] -translate-y-[40px]" data-aos="fade-up">
                            <h2 className="text-[24px] font-[500] text-[#211F54] leading-[34px]">How to properly disinfect your phone and other electronics</h2>
                            <p className="text-[18px] leading-[30px] text-[#6E7191] pt-[15px]">Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
                            <div className="flex items-center justify-between pt-[15px]">
                                <p className="text-[18px] font-[500] text-[#211F54]">Jan 28, 2022</p>
                                <span className="w-[30px] h-[30px] bg-[#0075FF]"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Articles