import phoneImage from "../../assets/icons/phone-logo.png";
import mainImage from "../../assets/images/sanitization-image.png"

function Sanitization() {
    return (
        <div className="py-[100px]">
            <div className="w-[1220px] mx-auto px-[20px] pt-[10px] bg-[#211F54] rounded-[20px] flex items-center gap-[60px] ">
                <div className="w-[40%] h-[600px] overflow-hidden ">
                    <img className="w-[100%]" src={mainImage} alt="" />
                </div>
                <div className="w-[40%]">
                    <p className="text-[16px] font-[500] text-[#fff] uppercase tracking-[1.6px] leading-[16px]">Covid-19 sanitization</p>
                    <h1 className="text-[48px] font-[500] text-[#fff] leading-[58px] pt-[20px] ">We follow guidelines to keep you safe from the COVID-19 virus</h1>
                    <p className="text-[21px] font-[400] text-[#fff] leading-[30px] pt-[20px] ">Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.</p>
                    <div className="flex gap-[25px] items-center cursor-pointer pt-[20px] ">
                        <a className="text-[#fff] bg-[#0075FF] text-[18px] font-[600] py-[18px] px-[26px] rounded-[14px] inline-block hover:scale-105 duration-300" href="#">Get free quotes</a>
                        <div className="flex items-center gap-[15px] hover:scale-105 duration-300  px-[10px] rounded-[14px] shadow-sm">
                            <img className="w-[65px]" src={phoneImage} alt="" />
                            <div>
                                <span className="text-[#fff] text-[16px] leading-[18px] tracking-[1.2px] ">Call us now</span>
                                <h3 className="text-[18px] text-[#fff] font-[500]">(414) 567 - 2109</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sanitization