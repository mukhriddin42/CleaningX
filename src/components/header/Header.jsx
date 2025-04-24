import headerLogo from "../../assets/icons/header-icon.png"
function Header() {
    return (
        <div className="">
            <nav className="xl:w-[1220px] lg:w-[1000px] md:w-[720px] mx-auto px-[20px] md:px-[10px] py-[20px] flex justify-between items-center">
                <div className="flex gap-[25px] items-center">
                    <a className="text-[#211F54] tracking-wide font-[500]  text-[22px] flex items-center gap-[5px] " href="#"><img src={headerLogo} alt="" />Cleaning X</a>
                    <a className="text-[#211F54] tracking-wide hover:scale-105 duration-300 font-medium max-lg:hidden" href="#">Home</a>
                    <a className="text-[#211F54] tracking-wide hover:scale-105 duration-300 font-medium max-lg:hidden" href="#">About</a>
                    <a className="text-[#211F54] tracking-wide hover:scale-105 duration-300 font-medium max-lg:hidden" href="#">Services</a>
                    <a className="text-[#211F54] tracking-wide hover:scale-105 duration-300 font-medium max-lg:hidden" href="#">Articles</a>
                    <a className="text-[#211F54] tracking-wide hover:scale-105 duration-300 font-medium max-lg:hidden" href="#">Contact</a>
                </div>
                <div className="flex gap-[25px] justify-between items-center">
                    <a className="text-[#211F54] font-medium hover:scale-105 duration-300" href="#">Cart(0)</a>
                    <a className="px-[22px] py-[12px] bg-[#0075FF] text-[#fff] rounded-[14px] hover:scale-105 duration-300" href="#">Get free quote</a>
                    <p><i class='bx bx-menu'></i></p>
                </div>
            </nav>
        </div>
    )
}

export default Header