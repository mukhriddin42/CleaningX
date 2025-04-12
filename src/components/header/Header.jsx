import headerLogo from "../../assets/icons/header-icon.png"
function Header() {
    return (
        <div className="">
            <nav className="w-[1240px] mx-auto px-[20px] py-[20px] flex justify-between items-center">
                <div className="flex gap-[25px] items-center">
                    <a className="text-[#211F54] tracking-wide font-[500]  text-[22px] flex items-center gap-[5px] " href="#"><img src={headerLogo} alt="" />Cleaning X</a>
                    <a className="text-[#211F54] tracking-wide hover:scale-105 duration-300 font-medium" href="#">Home</a>
                    <a className="text-[#211F54] tracking-wide hover:scale-105 duration-300 font-medium" href="#">About</a>
                    <a className="text-[#211F54] tracking-wide hover:scale-105 duration-300 font-medium" href="#">Services</a>
                    <a className="text-[#211F54] tracking-wide hover:scale-105 duration-300 font-medium" href="#">Articles</a>
                    <a className="text-[#211F54] tracking-wide hover:scale-105 duration-300 font-medium" href="#">Contact</a>
                </div>
                <div className="flex gap-[25px] justify-between items-center">
                    <a className="text-[#211F54] font-medium hover:scale-105 duration-300" href="#">Cart(0)</a>
                    <a className="px-[22px] py-[12px] bg-[#0075FF] text-[#fff] rounded-[14px] hover:scale-105 duration-300" href="#">Get free quote</a>
                </div>
            </nav>
        </div>
    )
}

export default Header