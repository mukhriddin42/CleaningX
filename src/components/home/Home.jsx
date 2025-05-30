import homeImage from "../../assets/images/IMAGE.png";
import phoneLogo from "../../assets/icons/phone-logo.png";

function Home() {
    return (
        <div className="py-[20px]">
            <div className="xl:w-[1220px] lg:w-[1000px] md:w-[720px] sm:w-[600px] mx-auto px-[20px]  flex items-center gap-[30px] lg:flex-row md:flex-col justify-between">
                <div className=" xl:w-[40%]">
                    <h1 className="text-[#211F54] xl:text-[55px] lg:text-[45px] md:text-[45px] sm:text-[40px] md:w-[25rem]  leading-[60px] font-[700] pb-[25px]">Quality cleaning for your home</h1>
                    <p className="text-[#6E7191] text-[18px] pb-[25px]">Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p>
                    <div className="flex gap-[25px] items-center cursor-pointer ">
                        <a className="text-[#fff] bg-[#0075FF] xl:text-[18px] lg:text-[16px] font-[600] py-[18px] px-[26px] rounded-[14px] inline-block hover:scale-105 duration-300" href="#">Get free quotes</a>
                        <div className="flex items-center gap-[15px] hover:scale-105 duration-300  px-[10px] rounded-[14px] shadow-sm">
                            <img className="w-[65px]" src={phoneLogo} alt="" />
                            <div>
                                <span className="text-[#6E7191]">Call us now</span>
                                <h3 className="text-[18px] text-[#211F54] font-[500]">(414) 567 - 2109</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="xl:w-[600px] lg:w-[450px] lg:block sm:hidden" src={homeImage} alt="Plesos qilayotgan opa rasmi"/>
            </div>
        </div>
    )
}

export default Home