import headerLogo from "../../assets/icons/header-icon.png"

function Footer(){
    return (
        <div className="lg:mt-[100px]">
            <div className="xl:w-[1220px] lg:w-[1000px] md:w-[720px] mx-auto px-[20px] md:px-[10px] py-[20px]">
                <table className="lg:block sm:hidden">
                    <tr className=" text-left font-[700] align-top">
                        <th className="xl:text-[28px] lg:text-[24px] ">Quality cleaning for your home</th>
                        <th className="xl:text-[20px] lg:text-[18px] ">Contact us</th>
                        <th className="xl:text-[20px] lg:text-[18px] ">Hours</th>
                        <th className="xl:text-[20px] lg:text-[18px] ">Get a free estimate</th>
                    </tr>
                    <tr className="xl:text-[18px] lg:text-[16px]">
                        <td className="text-[#6E7191] py-[0.3rem]">Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do eiusmo.</td>
                        <td className="text-[#6E7191]">1827 Nickel Road, Los Angeles, CA, 90017, United States</td>
                        <td className="text-[#6E7191]"><p className="font-[700] text-[#000]">Monday to Friday</p>6:00 AM - 9:00 PM</td>
                        <td className="xl:text-[28px] lg:text-[24px] font-[700] text-[#0075FF] ">(414) 567 - 2109</td>
                    </tr>
                    <tr className="text-[18px]">
                        <td></td>
                        <td className="text-[#6E7191]">(414) 567 - 2109</td>
                        <td className="text-[#6E7191]"><p className="font-[700] text-[#000] w-[12rem]">Saturday & Sunday</p>  8:00 AM - 8:00 PM</td>
                        <td className="text-[#6E7191] py-[0.3rem]">Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do eiusmod.</td>
                    </tr>
                    <tr className="text-[18px] ">
                        <td></td>
                        <td className="text-[#6E7191]">contact@cleaning.com</td>
                        <td></td>
                        <td className="py-[0.3rem]"><button className="w-[14rem] text-[#fff] bg-[#0075FF] text-[18px] font-[600] py-[12px] px-[24px] cursor-pointer rounded-[14px] inline-block w-[11em] hover:scale-105 duration-300 mr-[10px]">Request a free quote</button></td>
                    </tr>
                </table>
                <div className="lg:mt-[100px] md:mt-[50px] flex lg:flex-row md:flex-col justify-between lg:items-center lg:gap-0 md:gap-[20px]">
                    <a className="text-[#211F54] tracking-wide font-[500]  text-[22px] flex items-center gap-[5px] " href="#"><img src={headerLogo} alt="" />Cleaning X</a>
                    <p className="text-[18px] text-[#6E7191]">Copyright © Cleaning X | Designed by <span className="underline text-[#0075FF]" >BRIX Templates</span> - Powered by <span className="underline text-[#0075FF]">Webflow</span> - <span className="underline text-[#0075FF]">Licenses</span></p>
                </div>
            </div>
        </div>
    )
}

export default Footer